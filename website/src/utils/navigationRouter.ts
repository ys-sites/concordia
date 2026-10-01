import { CourseId } from '../types';

export interface RouteState {
  viewMode: 'HERO' | 'WORKSPACE' | 'QUIZ' | 'RESULTS' | 'QUESTION_BANK';
  courseId: CourseId | null;
  folderPath: string[];
  docPath: string | null;
  quizTarget: { courseId: CourseId; sectionId: string } | null;
}

export function parseHash(hash: string): RouteState {
  const clean = hash.replace(/^#\/?/, '');
  if (!clean) {
    return { viewMode: 'HERO', courseId: null, folderPath: [], docPath: null, quizTarget: null };
  }

  // Question bank: #/bank or #/bank/:courseId
  if (clean.startsWith('bank')) {
    const courseMatch = clean.match(/^bank\/([A-Za-z0-9]+)/);
    return {
      viewMode: 'QUESTION_BANK',
      courseId: (courseMatch ? courseMatch[1].toUpperCase() : null) as CourseId | null,
      folderPath: [],
      docPath: null,
      quizTarget: null
    };
  }

  // Quiz active drill: #/quiz/:courseId/:sectionId
  const quizMatch = clean.match(/^quiz\/([A-Za-z0-9]+)\/([A-Za-z0-9\-_]+)/);
  if (quizMatch) {
    const cid = quizMatch[1].toUpperCase() as CourseId;
    return {
      viewMode: 'QUIZ',
      courseId: cid,
      folderPath: [],
      docPath: null,
      quizTarget: { courseId: cid, sectionId: quizMatch[2] }
    };
  }

  // Quiz results: #/results/:courseId/:sectionId
  const resultsMatch = clean.match(/^results\/([A-Za-z0-9]+)\/([A-Za-z0-9\-_]+)/);
  if (resultsMatch) {
    const cid = resultsMatch[1].toUpperCase() as CourseId;
    return {
      viewMode: 'RESULTS',
      courseId: cid,
      folderPath: [],
      docPath: null,
      quizTarget: { courseId: cid, sectionId: resultsMatch[2] }
    };
  }

  // Course workspace: #/course/:courseId?...
  const courseMatch = clean.match(/^course\/([A-Za-z0-9]+)(\?(.*))?/);
  if (courseMatch) {
    const courseId = courseMatch[1].toUpperCase() as CourseId;
    const queryStr = courseMatch[3] || '';
    const params = new URLSearchParams(queryStr);
    const folderRaw = params.get('folder');
    const folderPath = folderRaw ? folderRaw.split('/').filter(Boolean) : [];
    const docPath = params.get('doc') || null;
    return {
      viewMode: 'WORKSPACE',
      courseId,
      folderPath,
      docPath,
      quizTarget: null
    };
  }

  return { viewMode: 'HERO', courseId: null, folderPath: [], docPath: null, quizTarget: null };
}

export function formatHash(state: RouteState): string {
  switch (state.viewMode) {
    case 'HERO':
      return '#/';
    case 'QUESTION_BANK':
      return state.courseId ? `#/bank/${state.courseId}` : '#/bank';
    case 'QUIZ':
      return state.quizTarget ? `#/quiz/${state.quizTarget.courseId}/${state.quizTarget.sectionId}` : '#/';
    case 'RESULTS':
      return state.quizTarget ? `#/results/${state.quizTarget.courseId}/${state.quizTarget.sectionId}` : '#/';
    case 'WORKSPACE': {
      if (!state.courseId) return '#/';
      const params = new URLSearchParams();
      if (state.folderPath && state.folderPath.length > 0) {
        params.set('folder', state.folderPath.join('/'));
      }
      if (state.docPath) {
        params.set('doc', state.docPath);
      }
      const qs = params.toString();
      return qs ? `#/course/${state.courseId}?${qs}` : `#/course/${state.courseId}`;
    }
  }
}
