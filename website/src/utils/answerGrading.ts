const NUMBER = '[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?';

type Unit = { dimension: string; factor: number };

const UNITS: Record<string, Unit> = {
  m: { dimension: 'length', factor: 1 }, cm: { dimension: 'length', factor: 1e-2 }, mm: { dimension: 'length', factor: 1e-3 },
  um: { dimension: 'length', factor: 1e-6 }, nm: { dimension: 'length', factor: 1e-9 }, pm: { dimension: 'length', factor: 1e-12 }, km: { dimension: 'length', factor: 1e3 },
  n: { dimension: 'force', factor: 1 }, kn: { dimension: 'force', factor: 1e3 }, mn: { dimension: 'force', factor: 1e-3 },
  un: { dimension: 'force', factor: 1e-6 }, nn: { dimension: 'force', factor: 1e-9 },
  pa: { dimension: 'pressure', factor: 1 }, kpa: { dimension: 'pressure', factor: 1e3 }, mpa: { dimension: 'pressure', factor: 1e6 }, gpa: { dimension: 'pressure', factor: 1e9 },
  j: { dimension: 'energy', factor: 1 }, kj: { dimension: 'energy', factor: 1e3 }, mj: { dimension: 'energy', factor: 1e-3 },
  ev: { dimension: 'energy', factor: 1.602176634e-19 }, mev: { dimension: 'energy', factor: 1.602176634e-22 },
  g: { dimension: 'mass', factor: 1e-3 }, kg: { dimension: 'mass', factor: 1 }, mg: { dimension: 'mass', factor: 1e-6 },
  s: { dimension: 'time', factor: 1 }, ms: { dimension: 'time', factor: 1e-3 }, us: { dimension: 'time', factor: 1e-6 }, ns: { dimension: 'time', factor: 1e-9 },
  min: { dimension: 'time', factor: 60 }, h: { dimension: 'time', factor: 3600 },
  rad: { dimension: 'angle', factor: 1 }, deg: { dimension: 'angle', factor: Math.PI / 180 }, '°': { dimension: 'angle', factor: Math.PI / 180 },
  '%': { dimension: 'percent', factor: 1 }, 'at%': { dimension: 'percent', factor: 1 },
  'kg/m3': { dimension: 'density', factor: 1 }, 'g/cm3': { dimension: 'density', factor: 1000 },
};

const normalUnit = (raw: string) => raw
  .normalize('NFKC')
  .replace(/\\(?:mathrm|text|operatorname)\{([^}]*)\}/g, '$1')
  .replace(/\\,/g, '')
  .replace(/[\s·⋅*]/g, '')
  .replace(/[μµ]/g, 'u')
  .replace(/²/g, '2')
  .replace(/³/g, '3')
  .replace(/\^/g, '')
  .replace(/degrees?\b/gi, 'deg')
  .replace(/seconds?\b/gi, 's')
  .replace(/hours?\b/gi, 'h')
  .replace(/mins?\b/gi, 'min')
  .replace(/newtons?\b/gi, 'N')
  .replace(/pascals?\b/gi, 'Pa')
  .replace(/electronvolts?\b/gi, 'eV')
  .replace(/joules?\b/gi, 'J')
  .replace(/[(){}]/g, '')
  .toLowerCase();

const cleanNumberInput = (raw: string) => raw
  .normalize('NFKC')
  .replace(/[−–—]/g, '-')
  .replace(/\\(?:times|cdot)/g, '×')
  .replace(/\\(?:mathrm|text|operatorname)\{([^}]*)\}/g, '$1')
  .replace(/\\(?:left|right|,|!| )/g, '')
  .replace(/[$]/g, '')
  .replace(/[{}]/g, '')
  .replace(/[,](?=\d{3}\b)/g, '')
  .trim();

const convertScientificNotation = (input: string) => input
  .replace(new RegExp(`(${NUMBER})\\s*(?:[xX×*])\\s*10(?:\\^)?\\s*\\(?\\s*([+-]?\\d+)\\s*\\)?`, 'g'), '$1e$2')
  .replace(/e[−–—]/g, 'e-');

export const parseUserNumber = (raw: string, expectedUnit?: string): number => {
  let input = convertScientificNotation(cleanNumberInput(raw));
  input = input.replace(/^\s*(?:answer|value|result)\s*(?:is)?\s*[:=]?\s*/i, '');
  input = input.replace(/^\s*[A-Za-z][A-Za-z0-9_{}\\\s]*=\s*/, '');
  input = input.replace(/^[≈~=]\s*/, '');

  const match = input.match(new RegExp(`^(${NUMBER})(?:\\s*/\\s*(${NUMBER}))?\\s*(.*?)\\s*$`, 'i'));
  if (!match) return NaN;

  const numerator = Number(match[1]);
  const denominator = match[2] ? Number(match[2]) : 1;
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) return NaN;

  const enteredUnit = normalUnit(match[3] ?? '');
  const expected = normalUnit(expectedUnit ?? '');
  const value = numerator / denominator;
  if (!enteredUnit || !expected || enteredUnit === expected) return value;

  const from = UNITS[enteredUnit];
  const to = UNITS[expected];
  return from && to && from.dimension === to.dimension ? value * from.factor / to.factor : NaN;
};

export const equivalentNumber = (raw: string, expected: number, unit: string | undefined, tolerance = 0.02) => {
  const value = parseUserNumber(raw, unit);
  if (!Number.isFinite(value)) return false;
  return expected === 0 ? Math.abs(value) < 1e-9 : Math.abs(value - expected) <= Math.abs(expected) * tolerance;
};

export const parseIndices = (raw: string): number[] => {
  const input = raw.normalize('NFKC').replace(/[−–—]/g, '-').replace(/[\[\]()<>\{}]/g, ' ').replace(/(\d)\u0304/g, '-$1').trim();
  if (/[\s,]/.test(input)) return input.split(/[\s,]+/).filter(Boolean).map(Number);
  const values: number[] = [];
  let negative = false;
  for (const character of input) {
    if (character === '-') negative = true;
    else if (/\d/.test(character)) {
      values.push(negative ? -Number(character) : Number(character));
      negative = false;
    }
  }
  return values;
};

export const normOutput = (raw: string) => raw
  .normalize('NFKC')
  .replace(/\r/g, '')
  .replace(/\\n/g, '\n')
  .replace(/[“”]/g, '"')
  .replace(/[‘’]/g, "'")
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();
