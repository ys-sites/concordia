import React, { useState, useMemo } from 'react';
import { CourseWithDocs } from '../data/coursesData';
import { CourseDocument, CourseId } from '../types';
import { 
  FileText, 
  Search, 
  ExternalLink, 
  Eye, 
  Download, 
  Sparkles, 
  Brain, 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  Folder, 
  FolderOpen, 
  ChevronRight, 
  ChevronDown, 
  FolderTree, 
  LayoutGrid, 
  ListTree
} from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';

interface CourseWorkspaceProps {
  course: CourseWithDocs;
  onBack: () => void;
  onStartQuiz: (courseId: CourseId) => void;
  onViewPdf: (doc: CourseDocument) => void;
}

// Helper to extract top-level local directory category
export const getRootCategory = (relativePath: string): string => {
  const parts = relativePath.split('/');
  return parts.length > 1 ? parts[1] : '00 - Course Overview & Study Guide';
};

// Helper to extract nested sub-directory (if any)
export const getSubDirectory = (relativePath: string): string => {
  const parts = relativePath.split('/');
  if (parts.length > 3) {
    return parts.slice(2, parts.length - 1).join(' / ');
  }
  return '';
};

export const CourseWorkspace: React.FC<CourseWorkspaceProps> = ({
  course,
  onBack,
  onStartQuiz,
  onViewPdf
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highYieldOnly, setHighYieldOnly] = useState<boolean>(false);
  const [masterGuidesOnly, setMasterGuidesOnly] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'tree' | 'grid'>('tree');

  // Extract all distinct root categories matching the local filesystem
  const rootCategories = useMemo(() => {
    const catsSet = new Set<string>();
    course.documents.forEach(doc => {
      catsSet.add(getRootCategory(doc.relativePath));
    });
    return Array.from(catsSet).sort((a, b) => 
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );
  }, [course]);

  // Track expanded/collapsed state for each category folder (default all open)
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    course.documents.forEach(doc => {
      initial[getRootCategory(doc.relativePath)] = true;
    });
    return initial;
  });

  const toggleFolder = (categoryName: string) => {
    audio.playClick();
    setOpenFolders(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const expandAll = () => {
    audio.playClick();
    const updated: Record<string, boolean> = {};
    rootCategories.forEach(cat => {
      updated[cat] = true;
    });
    setOpenFolders(updated);
  };

  const collapseAll = () => {
    audio.playClick();
    const updated: Record<string, boolean> = {};
    rootCategories.forEach(cat => {
      updated[cat] = false;
    });
    setOpenFolders(updated);
  };

  // Filter documents based on search and toggles
  const filteredDocuments = useMemo(() => {
    return course.documents.filter(doc => {
      const rootCat = getRootCategory(doc.relativePath);

      // Category filter (if not ALL)
      if (selectedCategory !== 'ALL' && rootCat !== selectedCategory) {
        return false;
      }
      // High-yield filter
      if (highYieldOnly && !doc.isHighYield) {
        return false;
      }
      // Master guides filter
      if (masterGuidesOnly && !doc.isMasterGuide) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(q);
        const matchesCat = rootCat.toLowerCase().includes(q) || doc.categoryTitle.toLowerCase().includes(q);
        const matchesFilename = doc.filename.toLowerCase().includes(q);
        const matchesTags = doc.tags.some(t => t.toLowerCase().includes(q));
        return matchesTitle || matchesCat || matchesFilename || matchesTags;
      }
      return true;
    });
  }, [course, selectedCategory, searchQuery, highYieldOnly, masterGuidesOnly]);

  // Group filtered documents by root category
  const groupedCategories = useMemo(() => {
    const groups: { category: string; docs: CourseDocument[]; totalInCourse: number }[] = [];
    
    rootCategories.forEach(cat => {
      // If a category filter is active and doesn't match this category, skip
      if (selectedCategory !== 'ALL' && selectedCategory !== cat) {
        return;
      }

      const totalInCat = course.documents.filter(d => getRootCategory(d.relativePath) === cat).length;
      const docsInCat = filteredDocuments.filter(d => getRootCategory(d.relativePath) === cat);

      // If search/filters are active, only show category if it has matches
      const isFiltering = searchQuery.trim() !== '' || highYieldOnly || masterGuidesOnly;
      if (isFiltering && docsInCat.length === 0) {
        return;
      }

      groups.push({
        category: cat,
        docs: docsInCat,
        totalInCourse: totalInCat
      });
    });

    return groups;
  }, [rootCategories, course, filteredDocuments, selectedCategory, searchQuery, highYieldOnly, masterGuidesOnly]);

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '';
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
    return `${Math.round(bytes / 1024)} KB`;
  };

  return (
    <div className="workspace-container">
      {/* Workspace Header */}
      <div className="workspace-header">
        <button 
          className="back-btn"
          onClick={() => {
            audio.playClick();
            onBack();
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Courses</span>
        </button>

        <div className="workspace-title-row">
          <div>
            <div className="course-badge" style={{ backgroundColor: course.accentHex }}>
              {course.code}
            </div>
            <h1 className="course-main-title">{course.name}</h1>
            <p className="course-sub-description">{course.description}</p>
          </div>

          <div className="workspace-header-actions">
            <button
              className="workspace-quiz-btn"
              onClick={() => {
                audio.playClick();
                onStartQuiz(course.id);
              }}
            >
              <Brain size={18} />
              <span>Launch 20-Q Practice Drill</span>
            </button>
          </div>
        </div>

        {/* Directory Folder Breadcrumb / Quick Category Selector */}
        <div className="category-tabs-scroll">
          <button
            className={`cat-tab ${selectedCategory === 'ALL' ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setSelectedCategory('ALL');
            }}
          >
            <FolderTree size={14} />
            <span>All Categories</span>
            <span className="count-tag">{course.documents.length}</span>
          </button>

          {rootCategories.map(cat => {
            const isSelected = selectedCategory === cat;
            const count = course.documents.filter(d => getRootCategory(d.relativePath) === cat).length;
            return (
              <button
                key={cat}
                className={`cat-tab ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setSelectedCategory(cat);
                  // Ensure this folder is opened when clicked
                  setOpenFolders(prev => ({ ...prev, [cat]: true }));
                }}
              >
                <Folder size={14} />
                <span>{cat}</span>
                <span className="count-tag">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter & View Toolbar */}
      <div className="search-filter-bar">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search within folders, lectures, topics, or formulas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        <div className="filter-toggles">
          <button 
            className={`filter-chip ${highYieldOnly ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setHighYieldOnly(!highYieldOnly);
            }}
          >
            <Sparkles size={14} />
            <span>High-Yield</span>
          </button>

          <button 
            className={`filter-chip ${masterGuidesOnly ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setMasterGuidesOnly(!masterGuidesOnly);
            }}
          >
            <BookOpen size={14} />
            <span>Master Guides</span>
          </button>

          {/* View Mode Toggle (Tree Explorer vs Card Grid) */}
          <div className="view-mode-pill">
            <button
              className={`view-btn ${viewMode === 'tree' ? 'active' : ''}`}
              title="Directory Tree Explorer (Similar to local folders)"
              onClick={() => {
                audio.playClick();
                setViewMode('tree');
              }}
            >
              <ListTree size={16} />
              <span>Tree View</span>
            </button>
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              title="Card Grid View"
              onClick={() => {
                audio.playClick();
                setViewMode('grid');
              }}
            >
              <LayoutGrid size={16} />
              <span>Grid View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Directory Status & Global Folder Toggles */}
      <div className="directory-controls-bar">
        <div className="results-summary">
          Organized by local category folders: <strong>{groupedCategories.length}</strong> categories • <strong>{filteredDocuments.length}</strong> total documents
        </div>

        <div className="folder-actions-group">
          <button className="folder-action-link" onClick={expandAll}>
            <FolderOpen size={14} />
            <span>Expand All Folders</span>
          </button>
          <span className="divider">•</span>
          <button className="folder-action-link" onClick={collapseAll}>
            <Folder size={14} />
            <span>Collapse All</span>
          </button>
        </div>
      </div>

      {/* Empty State */}
      {groupedCategories.length === 0 ? (
        <div className="empty-results-box">
          <FileText size={40} className="empty-icon" />
          <h3>No matching documents in this category</h3>
          <p>Try clearing your search query or relaxing your filters.</p>
          <button 
            className="reset-filters-btn"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
              setHighYieldOnly(false);
              setMasterGuidesOnly(false);
            }}
          >
            Reset Filters & Show All Folders
          </button>
        </div>
      ) : (
        /* CATEGORY FOLDERS LIST (LOCAL FILESYSTEM ACCORDION) */
        <div className="categories-accordion-container">
          {groupedCategories.map(({ category, docs, totalInCourse }) => {
            const isOpen = !!openFolders[category];

            return (
              <div 
                key={category} 
                className={`category-folder-section ${isOpen ? 'is-open' : 'is-collapsed'}`}
              >
                {/* Folder Header (Matches Local Directory Screenshot: > 📁 Category Name) */}
                <div 
                  className="folder-header-row"
                  onClick={() => toggleFolder(category)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFolder(category);
                    }
                  }}
                >
                  <div className="folder-header-left">
                    <span className="folder-chevron">
                      {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </span>

                    <span className="folder-icon-wrapper">
                      {isOpen ? (
                        <FolderOpen size={18} className="folder-icon open" />
                      ) : (
                        <Folder size={18} className="folder-icon" />
                      )}
                    </span>

                    <span className="folder-name-title">
                      {category}
                    </span>

                    <span className="folder-count-badge">
                      {docs.length} {docs.length === 1 ? 'file' : 'files'}
                      {docs.length !== totalInCourse && ` (of ${totalInCourse})`}
                    </span>
                  </div>

                  <div className="folder-header-right">
                    <span className="folder-toggle-hint">
                      {isOpen ? 'Collapse' : 'Expand'}
                    </span>
                  </div>
                </div>

                {/* Folder Body (Documents grouped inside this category) */}
                {isOpen && (
                  <div className="folder-contents-panel">
                    {viewMode === 'tree' ? (
                      /* DIRECTORY TREE LIST VIEW (VS Code style indented file rows) */
                      <div className="tree-files-list">
                        {docs.map((doc, idx) => {
                          const subDir = getSubDirectory(doc.relativePath);
                          const pdfApiUrl = getPdfUrl(doc.relativePath);
                          const isLast = idx === docs.length - 1;

                          return (
                            <div key={doc.id} className="tree-file-row">
                              {/* Tree guide line */}
                              <div className="tree-guide-marker">
                                <span className="tree-branch-symbol">{isLast ? '└──' : '├──'}</span>
                              </div>

                              <div className="tree-file-icon">
                                <FileText size={16} className="pdf-icon" />
                              </div>

                              <div className="tree-file-info">
                                <div className="tree-file-primary">
                                  <span 
                                    className="tree-file-title" 
                                    onClick={() => {
                                      audio.playClick();
                                      onViewPdf(doc);
                                    }}
                                  >
                                    {doc.title}
                                  </span>

                                  {subDir && (
                                    <span className="tree-subdir-badge">
                                      📁 {subDir}
                                    </span>
                                  )}

                                  {doc.isHighYield && (
                                    <span className="doc-tag tag-high-yield">
                                      <Sparkles size={11} /> High Yield
                                    </span>
                                  )}
                                  {doc.isMasterGuide && (
                                    <span className="doc-tag tag-master">
                                      <CheckCircle size={11} /> Master Guide
                                    </span>
                                  )}
                                </div>

                                <div className="tree-file-subtext">
                                  <span className="tree-filename">{doc.filename}</span>
                                  {doc.fileSizeBytes && (
                                    <span className="tree-filesize">• {formatFileSize(doc.fileSizeBytes)}</span>
                                  )}
                                  <span className="tree-summary-inline">• {doc.summary}</span>
                                </div>
                              </div>

                              {/* Quick Action Buttons */}
                              <div className="tree-file-actions">
                                <button 
                                  className="tree-action-btn primary"
                                  onClick={() => {
                                    audio.playClick();
                                    onViewPdf(doc);
                                  }}
                                  title="View document in embedded reader"
                                >
                                  <Eye size={14} />
                                  <span>View</span>
                                </button>

                                <a 
                                  href={pdfApiUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="tree-action-btn secondary"
                                  title="Open in new browser tab"
                                >
                                  <ExternalLink size={14} />
                                  <span>Tab</span>
                                </a>

                                <a 
                                  href={pdfApiUrl}
                                  download={doc.filename}
                                  className="tree-action-btn secondary"
                                  title="Download PDF"
                                >
                                  <Download size={14} />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* CARD GRID VIEW (Organized within category) */
                      <div className="documents-grid in-folder">
                        {docs.map(doc => {
                          const subDir = getSubDirectory(doc.relativePath);
                          const pdfApiUrl = getPdfUrl(doc.relativePath);

                          return (
                            <div key={doc.id} className="doc-card">
                              <div className="doc-card-header">
                                <div className="category-pill">
                                  {subDir ? `📁 ${subDir}` : doc.categoryTitle}
                                </div>
                                <div className="size-indicator">{formatFileSize(doc.fileSizeBytes)}</div>
                              </div>

                              <h3 className="doc-title" title={doc.title}>
                                {doc.title}
                              </h3>

                              <p className="doc-summary">{doc.summary}</p>

                              <div className="doc-tags-row">
                                {doc.isHighYield && (
                                  <span className="doc-tag tag-high-yield">
                                    <Sparkles size={11} /> High Yield
                                  </span>
                                )}
                                {doc.isMasterGuide && (
                                  <span className="doc-tag tag-master">
                                    <CheckCircle size={11} /> Master Guide
                                  </span>
                                )}
                              </div>

                              {/* Document Actions */}
                              <div className="doc-card-actions">
                                <button 
                                  className="doc-view-btn primary"
                                  onClick={() => {
                                    audio.playClick();
                                    onViewPdf(doc);
                                  }}
                                >
                                  <Eye size={15} />
                                  <span>View Document</span>
                                </button>

                                <a 
                                  href={pdfApiUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="doc-icon-btn"
                                  title="Open PDF directly in new tab"
                                >
                                  <ExternalLink size={15} />
                                </a>

                                <a 
                                  href={pdfApiUrl}
                                  download={doc.filename}
                                  className="doc-icon-btn"
                                  title="Download PDF"
                                >
                                  <Download size={15} />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

