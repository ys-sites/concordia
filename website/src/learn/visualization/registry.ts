// Visualization registry — typed, validated templates for 3D lessons.
//
// An AI (or a future lesson author) never ships arbitrary model code to the
// browser. It picks a template from this registry and fills in its typed
// parameters; the parameters are validated here before anything renders.
// `parameters` is a discriminated union per type — there is no unrestricted
// Record<string, unknown> in production.
import type { CellKind } from './crystalMath';
import { CELL_KINDS } from './crystalMath';

export type VisualizationType =
  | 'unit-cell'
  | 'crystal-direction'
  | 'miller-plane'
  | 'atomic-density'
  | 'diffraction'
  | 'dislocation'
  | 'tensile-specimen'
  | 'factory-layout'
  | 'physical-simulation';

export interface TeachingStep {
  /** Observe → Identify → Manipulate → Calculate → Practice. */
  phase: 'observe' | 'identify' | 'manipulate' | 'calculate' | 'practice';
  title: string;
  body: string;
  /** Formula in KaTeX-ish $…$ text, shown with the step. */
  formula?: string;
  /** What the scene must show at this step: camera, highlights, visibility. */
  scene?: {
    camera?: 'iso' | 'front' | 'top' | 'side';
    highlight?: string[];
    explode?: number;
    replicate?: [number, number, number];
    showLabels?: boolean;
    showSharing?: boolean;
  };
}

interface BaseSpec {
  id: string;
  courseId: string;
  lessonId: string;
  questionId?: string;
  teachingSteps: TeachingStep[];
}

export interface UnitCellSpec extends BaseSpec {
  type: 'unit-cell';
  parameters: {
    cell: CellKind;
    replicate?: [number, number, number];
    explode?: number;
    showSharing?: boolean;
  };
}

export interface CrystalDirectionSpec extends BaseSpec {
  type: 'crystal-direction';
  parameters: {
    start: [number, number, number];
    end: [number, number, number];
    family?: boolean;
  };
}

export interface MillerPlaneSpec extends BaseSpec {
  type: 'miller-plane';
  parameters: {
    h: number;
    k: number;
    l: number;
    /** Plane offset d in hx + ky + lz = d (1 = the standard position). */
    d?: number;
    cell?: CellKind;
  };
}

/** Milestone 2+ templates: parameters are declared now so the registry shape
    is stable, but no renderer is wired to them in Milestone 1. */
export interface AtomicDensitySpec extends BaseSpec {
  type: 'atomic-density';
  parameters: { cell: CellKind; direction?: [number, number, number]; plane?: [number, number, number] };
}
export interface DiffractionSpec extends BaseSpec {
  type: 'diffraction';
  parameters: { plane: [number, number, number]; wavelengthNm: number };
}
export interface DislocationSpec extends BaseSpec {
  type: 'dislocation';
  parameters: { kind: 'edge' | 'screw'; burgers: [number, number, number] };
}
export interface TensileSpecimenSpec extends BaseSpec {
  type: 'tensile-specimen';
  parameters: { point: 'elastic' | 'yield' | 'uts' | 'fracture' };
}
export interface FactoryLayoutSpec extends BaseSpec {
  type: 'factory-layout';
  parameters: { layout: 'product' | 'process' | 'cellular' | 'fixed' | 'hybrid' };
}
export interface PhysicalSimulationSpec extends BaseSpec {
  type: 'physical-simulation';
  parameters: { system: 'mixing-tank' | 'cooling' | 'spring-mass'; params: { [key: string]: number } };
}

export type VisualizationSpec =
  | UnitCellSpec
  | CrystalDirectionSpec
  | MillerPlaneSpec
  | AtomicDensitySpec
  | DiffractionSpec
  | DislocationSpec
  | TensileSpecimenSpec
  | FactoryLayoutSpec
  | PhysicalSimulationSpec;

const isInt = (n: unknown): n is number => typeof n === 'number' && Number.isInteger(n);
const isFrac = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n);

/** Validate a spec before it renders. Returns error strings; empty = valid. */
export const validateSpec = (spec: VisualizationSpec): string[] => {
  const errs: string[] = [];
  if (!spec.id) errs.push('spec.id is required');
  if (!spec.courseId) errs.push('spec.courseId is required');
  if (!spec.lessonId) errs.push('spec.lessonId is required');
  if (!spec.teachingSteps.length) errs.push('at least one teaching step is required');
  for (const s of spec.teachingSteps)
    if (!['observe', 'identify', 'manipulate', 'calculate', 'practice'].includes(s.phase)) errs.push(`unknown phase "${s.phase}" in step "${s.title}"`);
  switch (spec.type) {
    case 'unit-cell': {
      if (!CELL_KINDS.includes(spec.parameters.cell)) errs.push(`unknown cell "${String(spec.parameters.cell)}"`);
      const r = spec.parameters.replicate;
      if (r && (!isInt(r[0]) || !isInt(r[1]) || !isInt(r[2]) || r.some((x) => x < 1 || x > 3))) errs.push('replicate must be integers 1–3 per axis');
      break;
    }
    case 'crystal-direction': {
      const { start, end } = spec.parameters;
      if (![...start, ...end].every(isFrac)) errs.push('direction start/end must be finite numbers');
      if (start.every((v, i) => v === end[i])) errs.push('direction start and end must differ');
      break;
    }
    case 'miller-plane': {
      const { h, k, l } = spec.parameters;
      if (![h, k, l].every(isInt)) errs.push('Miller indices must be integers');
      if (h === 0 && k === 0 && l === 0) errs.push('(000) is not a plane');
      if ([h, k, l].some((x) => Math.abs(x) > 6)) errs.push('Miller indices are limited to |h|,|k|,|l| ≤ 6');
      break;
    }
    case 'diffraction':
      if (!(spec.parameters.wavelengthNm > 0)) errs.push('wavelength must be positive');
      break;
    default:
      break;
  }
  return errs;
};

/** The templates Milestone 1 actually renders. Everything else is registered
    but intentionally unrendered until its milestone. */
export const RENDERED_TYPES: VisualizationType[] = ['unit-cell'];

export const UNIT_CELLS_SPEC: UnitCellSpec = {
  id: 'crystal-lab:unit-cells',
  courseId: 'MIAE221',
  lessonId: 'unit-cells',
  type: 'unit-cell',
  parameters: { cell: 'bcc', replicate: [1, 1, 1], explode: 0, showSharing: false },
  teachingSteps: [],
};
