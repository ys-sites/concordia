import React, { useState, useMemo, useEffect } from 'react';
import { CourseWithDocs } from '../data/coursesData';
import { CourseDocument, CourseId } from '../types';
import {
  FileText,
  Search,
  ExternalLink,
  Eye,
  Brain,
  ArrowLeft,
  Folder,
  ChevronRight,
  Home,
  BookOpen,
  Library,
  Zap,
  Calculator,
  ClipboardList,
  Cpu,
  Target,
  Compass,
  Code,
  GraduationCap,
  Layers,
  Archive,
  FolderOpen
} from 'lucide-react';
import { audio } from '../utils/audio';
import { getPdfUrl } from '../utils/pdfUrl';
import {
  buildFolderTree,
  compareDocs,
  displayTitle,
  findFolder,
  FolderNode,
  splitFolderName
} from '../utils/docOrganization';

interface CourseWorkspaceProps {
  course: CourseWithDocs;
  onBack: () => void;
  onStartQuiz: (courseId: CourseId) => void;
  onViewPdf: (doc: CourseDocument) => void;
}

const folderIcon = (name: string, size = 22) => {
  const n = name.toLowerCase();
  if (/archive|alternative/.test(n)) return <Archive size={size} />;
  if (/overview|syllabus|outline/.test(n)) return <Compass size={size} />;
  if (/lecture/.test(n)) return <BookOpen size={size} />;
  if (/topic guide|guides/.test(n)) return <Library size={size} />;
  if (/review sheet|rapid/.test(n)) return <Zap size={size} />;
  if (/problem|worked|practice/.test(n)) return <Calculator size={size} />;
  if (/assignment/.test(n)) return <ClipboardList size={size} />;
  if (/arduino|lab/.test(n)) return <Cpu size={size} />;
  if (/quiz|exam|midterm/.test(n)) return <Target size={size} />;
  if (/software|flowchart|code/.test(n)) return <Code size={size} />;
  if (/mini course|lesson/.test(n)) return <GraduationCap size={size} />;
  if (/summary|chapter|calculus/.test(n)) return <Layers size={size} />;
  return <Folder size={size} />;
};

const formatFileSize = (bytes?: number) => {
  if (!bytes) return '';
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
};

const folderMeta = (node: FolderNode) => {
  const parts: string[] = [];
  if (node.folders.length) parts.push(`${node.folders.length} ${node.folders.length === 1 ? 'folder' : 'folders'}`);
  parts.push(`${node.totalDocs} ${node.totalDocs === 1 ? 'file' : 'files'}`);
  return parts.join(' · ');
};

export const CourseWorkspace: React.FC<CourseWorkspaceProps> = ({
  course,
  onBack,
  onStartQuiz,
  onViewPdf
}) => {
  const [path, setPath] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tree = useMemo(() => buildFolderTree(course.documents), [course]);
  const current = findFolder(tree, path) ?? tree;

  // Start at the course root whenever the course changes
  useEffect(() => {
    setPath([]);
    setSearchQuery('');
  }, [course.id]);

  const openPath = (next: string[]) => {
    audio.playClick();
    setPath(next);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return course.documents
      .filter((doc) =>
        [displayTitle(doc), doc.title, doc.filename, doc.relativePath].some((s) => s.toLowerCase().includes(q))
      )
      .sort((a, b) => a.relativePath.localeCompare(b.relativePath, undefined, { numeric: true }) || compareDocs(a, b));
  }, [course, searchQuery]);

  const isSearching = searchQuery.trim() !== '';

  const renderFolderTile = (node: FolderNode) => {
    const { index, name } = splitFolderName(node.name);
    return (
      <button key={node.name} className="fx-folder-tile" onClick={() => openPath(node.path)}>
        <span className="fx-folder-icon">{folderIcon(node.name)}</span>
        <span className="fx-folder-text">
          {index && <span className="fx-folder-index">{index}</span>}
          <span className="fx-folder-name">{name}</span>
          <span className="fx-folder-meta">{folderMeta(node)}</span>
        </span>
        <ChevronRight size={18} className="fx-folder-chevron" />
      </button>
    );
  };

  const renderFileRow = (doc: CourseDocument, number: number, showLocation = false) => {
    const url = getPdfUrl(doc.relativePath);
    const location = doc.relativePath.split('/').slice(1, -1).map((f) => splitFolderName(f).name);
    return (
      <li key={doc.id} className="fx-file-row">
        <span className="fx-file-number">{number}</span>
        <FileText size={18} className="fx-file-icon" />
        <button
          className="fx-file-main"
          onClick={() => {
            audio.playClick();
            onViewPdf(doc);
          }}
        >
          <span className="fx-file-title">{displayTitle(doc)}</span>
          <span className="fx-file-meta">
            {showLocation && location.length > 0 && <span className="fx-file-location">{location.join(' › ')}</span>}
            <span>PDF{doc.fileSizeBytes ? ` · ${formatFileSize(doc.fileSizeBytes)}` : ''}</span>
          </span>
        </button>
        <div className="fx-file-actions">
          <button
            className="fx-btn fx-btn-primary"
            onClick={() => {
              audio.playClick();
              onViewPdf(doc);
            }}
          >
            <Eye size={14} />
            <span>View</span>
          </button>
          <a className="fx-btn fx-btn-icon" href={url} target="_blank" rel="noopener noreferrer" title="Open in new tab" aria-label="Open in new tab">
            <ExternalLink size={14} />
          </a>
        </div>
      </li>
    );
  };

  const currentLabel = splitFolderName(current.name);

  return (
    <div className="workspace-container" style={{ '--accent': course.accentHex } as React.CSSProperties}>
      {/* Course header */}
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
              <span>Start a Practice Drill</span>
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb + search */}
      <div className="fx-toolbar">
        <nav className="fx-breadcrumb" aria-label="Folder path">
          <button className={`fx-crumb ${path.length === 0 ? 'current' : ''}`} onClick={() => openPath([])}>
            <Home size={14} />
            <span>{course.code}</span>
          </button>
          {path.map((seg, i) => (
            <React.Fragment key={seg}>
              <ChevronRight size={14} className="fx-crumb-sep" />
              <button
                className={`fx-crumb ${i === path.length - 1 ? 'current' : ''}`}
                onClick={() => openPath(path.slice(0, i + 1))}
              >
                {splitFolderName(seg).name}
              </button>
            </React.Fragment>
          ))}
        </nav>

        <div className="search-box fx-search">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder={`Search all ${course.documents.length} files in ${course.code}…`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
              ×
            </button>
          )}
        </div>
      </div>

      {isSearching ? (
        <section className="fx-panel">
          <header className="fx-panel-header">
            <Search size={18} />
            <h2>
              {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for “{searchQuery.trim()}”
            </h2>
          </header>
          {searchResults.length === 0 ? (
            <p className="fx-empty">No files match. Try a lecture number, chapter, or topic.</p>
          ) : (
            <ol className="fx-file-list">{searchResults.map((doc, i) => renderFileRow(doc, i + 1, true))}</ol>
          )}
        </section>
      ) : path.length === 0 ? (
        <section>
          <h2 className="fx-section-title">Course folders</h2>
          <div className="fx-folder-grid">{tree.folders.map(renderFolderTile)}</div>
          {tree.docs.length > 0 && (
            <section className="fx-panel">
              <ol className="fx-file-list">{tree.docs.map((doc, i) => renderFileRow(doc, i + 1))}</ol>
            </section>
          )}
        </section>
      ) : (
        <section className="fx-panel">
          <header className="fx-panel-header">
            <span className="fx-panel-icon">{folderIcon(current.name, 20)}</span>
            <div className="fx-panel-heading">
              {currentLabel.index && <span className="fx-folder-index">{currentLabel.index}</span>}
              <h2>{currentLabel.name}</h2>
            </div>
            <span className="fx-panel-meta">{folderMeta(current)}</span>
          </header>

          {current.folders.length > 0 && (
            <div className="fx-folder-grid fx-subfolders">{current.folders.map(renderFolderTile)}</div>
          )}

          {current.docs.length > 0 ? (
            <ol className="fx-file-list">{current.docs.map((doc, i) => renderFileRow(doc, i + 1))}</ol>
          ) : (
            current.folders.length === 0 && (
              <p className="fx-empty">
                <FolderOpen size={16} /> This folder is empty.
              </p>
            )
          )}
        </section>
      )}
    </div>
  );
};
