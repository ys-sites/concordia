// Hash routes of the learning site. Old links (folders, drills, results, the password pages) are redirected to
// the closest new page, so links shared before the redesign keep working.
import { useEffect, useState } from 'react';
import type { CourseId } from '../types';
import { isCourseId } from './courses';

export type CourseTab = 'overview' | 'videos' | 'exam' | 'resources';

export type Route =
  | { name: 'home' }
  | { name: 'course'; course: CourseId; tab: CourseTab; doc?: string; folder?: string }
  | { name: 'learn'; course: CourseId; lesson: string; step?: string }
  | { name: 'my-learning' }
  | { name: 'search'; q: string }
  | { name: 'bank'; course?: CourseId };

// old drill sections → the lesson that now holds those questions
const LEGACY_SECTIONS: Partial<Record<CourseId, Record<string, string>>> = {
  ENGR213: {
    classification: 'classify', 'autonomous-phase': 'direction-fields', separable: 'separable', linear: 'linear', exact: 'exact',
    homogeneous: 'homogeneous', bernoulli: 'bernoulli', 'sub-linear': 'reduction', 'substitutions-mix': 'which-method',
    applications: 'modelling', 'nonlinear-models': 'logistic', complex: 'complex-arithmetic', past: 'bank-past', 'past-final': 'bank-past-final', midterm: 'mock-midterm'
  },
  INDU211: {
    'ch1-2': 'engineering-profession', ch3: 'bom-processes', ch4: 'location', ch5: 'routing', ch7: 'forecasting', ch14: 'linear-programming',
    ch15: 'queuing', ch8: 'quality', 'ch6-11': 'work-design', ch17: 'cpm-pert', 'past-mid': 'bank-past-mid', 'past-final': 'bank-past-final', midterm: 'mock-midterm'
  },
  MIAE215: { intro: 'build-process', types: 'data-types', expr: 'operators', control: 'if-else', flowcharts: 'flowcharts', arrays: 'arrays-1d', past: 'bank-past', midterm: 'mock-midterm' },
  MIAE221: {
    intro: 'materials-intro', bonding: 'bonding', crystal: 'unit-cells', densities: 'linear-planar-density', defects: 'point-defects', mechanical: 'tensile',
    strengthening: 'strengthening', phase: 'phase-diagrams', past: 'bank-past', 'past-final': 'bank-past-final', 'midterm-drill': 'bank-midterm-drill', midterm: 'mock-midterm'
  }
};

export function parseRoute(hash: string): Route {
  const clean = hash.replace(/^#\/?/, '');
  const [pathPart, query = ''] = clean.split('?');
  const parts = pathPart.split('/').filter(Boolean).map(decodeURIComponent);
  const params = new URLSearchParams(query);
  const course = parts[1]?.toUpperCase();

  switch (parts[0]) {
    case undefined:
      return { name: 'home' };
    case 'course': {
      if (!isCourseId(course)) return { name: 'home' };
      // old folder links ("?folder=01 - Teacher Lecture Notes/…") open that folder in Resources
      const folder = params.get('folder')?.split('/')[0];
      const tab = (['overview', 'videos', 'exam', 'resources'].includes(parts[2])
        ? parts[2]
        : /midterm|practice|gate/i.test(folder ?? '')
          ? 'exam'
          : folder
            ? 'resources'
            : 'overview') as CourseTab;
      return {
        name: 'course',
        course,
        tab,
        ...(params.get('doc') ? { doc: params.get('doc')! } : {}),
        ...(tab === 'resources' && folder ? { folder } : {})
      };
    }
    case 'learn':
      if (!isCourseId(course) || !parts[2]) return isCourseId(course) ? { name: 'course', course, tab: 'overview' } : { name: 'home' };
      return { name: 'learn', course, lesson: parts[2], ...(parts[3] ? { step: parts[3] } : {}) };
    case 'my-learning':
    case 'results':
      return { name: 'my-learning' };
    case 'search':
      return { name: 'search', q: params.get('q') ?? '' };
    case 'bank':
      return isCourseId(course) ? { name: 'bank', course } : { name: 'bank' };
    case 'quiz': {
      if (!isCourseId(course)) return { name: 'home' };
      const lesson = LEGACY_SECTIONS[course]?.[parts[2]];
      return lesson ? { name: 'learn', course, lesson } : { name: 'course', course, tab: 'exam' };
    }
    case 'filtered':
    case 'filtered-document':
      return { name: 'course', course: 'MIAE221', tab: 'exam' };
    default:
      return { name: 'home' };
  }
}

export function formatRoute(r: Route): string {
  switch (r.name) {
    case 'home':
      return '#/';
    case 'course':
      return `#/course/${r.course}${r.tab !== 'overview' ? '/' + r.tab : ''}${r.folder ? '?folder=' + encodeURIComponent(r.folder) : r.doc ? '?doc=' + encodeURIComponent(r.doc) : ''}`;
    case 'learn':
      return `#/learn/${r.course}/${encodeURIComponent(r.lesson)}${r.step ? '/' + encodeURIComponent(r.step) : ''}`;
    case 'my-learning':
      return '#/my-learning';
    case 'search':
      return `#/search${r.q ? '?q=' + encodeURIComponent(r.q) : ''}`;
    case 'bank':
      return `#/bank${r.course ? '/' + r.course : ''}`;
  }
}

export const href = (r: Route) => formatRoute(r);

export function navigate(r: Route, opts: { replace?: boolean } = {}) {
  const h = formatRoute(r);
  if (window.location.hash === h) return;
  if (opts.replace) window.history.replaceState(null, '', h);
  else window.history.pushState(null, '', h);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));
  useEffect(() => {
    const on = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener('hashchange', on);
    window.addEventListener('popstate', on);
    return () => {
      window.removeEventListener('hashchange', on);
      window.removeEventListener('popstate', on);
    };
  }, []);
  return route;
}
