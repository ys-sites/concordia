import React, { useState, useMemo } from 'react';
import { CourseWithDocs } from '../data/coursesData';
import { CourseDocument, CourseId } from '../types';
import { 
  FileText, 
  Search, 
  Filter, 
  ExternalLink, 
  Eye, 
  Download, 
  Sparkles, 
  Brain, 
  ArrowLeft,
  BookOpen,
  CheckCircle,
  FolderOpen
} from 'lucide-react';
import { audio } from '../utils/audio';

interface CourseWorkspaceProps {
  course: CourseWithDocs;
  onBack: () => void;
  onStartQuiz: (courseId: CourseId) => void;
  onViewPdf: (doc: CourseDocument) => void;
}

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

  // Group and filter documents
  const filteredDocuments = useMemo(() => {
    return course.documents.filter(doc => {
      // Category match
      if (selectedCategory !== 'ALL' && doc.categoryId !== selectedCategory) {
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
        const matchesCategory = doc.categoryTitle.toLowerCase().includes(q);
        const matchesTags = doc.tags.some(t => t.toLowerCase().includes(q));
        return matchesTitle || matchesCategory || matchesTags;
      }
      return true;
    });
  }, [course, selectedCategory, searchQuery, highYieldOnly, masterGuidesOnly]);

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

        {/* Category Tabs */}
        <div className="category-tabs-scroll">
          <button
            className={`cat-tab ${selectedCategory === 'ALL' ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setSelectedCategory('ALL');
            }}
          >
            <span>All Materials</span>
            <span className="count-tag">{course.documents.length}</span>
          </button>

          {course.categories.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`cat-tab ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  audio.playClick();
                  setSelectedCategory(cat.id);
                }}
              >
                <FolderOpen size={14} />
                <span>{cat.title}</span>
                <span className="count-tag">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="search-filter-bar">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search documents, lectures, topics, or formulas..."
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
            <span>High-Yield Only</span>
          </button>

          <button 
            className={`filter-chip ${masterGuidesOnly ? 'active' : ''}`}
            onClick={() => {
              audio.playClick();
              setMasterGuidesOnly(!masterGuidesOnly);
            }}
          >
            <BookOpen size={14} />
            <span>Master Guides Only</span>
          </button>
        </div>
      </div>

      {/* Documents Count Summary */}
      <div className="results-summary">
        Showing <strong>{filteredDocuments.length}</strong> of <strong>{course.documents.length}</strong> documents
        {selectedCategory !== 'ALL' && ` in "${course.categories.find(c => c.id === selectedCategory)?.title || selectedCategory}"`}
      </div>

      {/* Document Cards Grid */}
      {filteredDocuments.length === 0 ? (
        <div className="empty-results-box">
          <FileText size={40} className="empty-icon" />
          <h3>No documents found</h3>
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
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="documents-grid">
          {filteredDocuments.map(doc => {
            const pdfApiUrl = `/api/pdf?path=${encodeURIComponent(doc.relativePath)}`;
            
            return (
              <div key={doc.id} className="doc-card">
                <div className="doc-card-header">
                  <div className="category-pill">{doc.categoryTitle}</div>
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
  );
};
