import { equivalentNumber, normOutput, parseIndices } from '../src/utils/answerGrading';

const checks: [string, boolean][] = [
  ['scientific notation', equivalentNumber('2.07e-9', 2.07e-9, 'N')],
  ['unicode exponent', equivalentNumber('2.07 × 10⁻⁹ N', 2.07e-9, 'N')],
  ['LaTeX notation', equivalentNumber('$F_A = 2.07\\times10^{-9}\\,\\text{N}$', 2.07e-9, 'N')],
  ['SI prefix conversion', equivalentNumber('2.07 nN', 2.07e-9, 'N')],
  ['pressure conversion', equivalentNumber('207000 MPa', 207, 'GPa')],
  ['fraction', equivalentNumber('1/4', 0.25, undefined)],
  ['thousands separator', equivalentNumber('2,500', 2500, undefined)],
  ['incompatible unit rejected', !equivalentNumber('2.07 nm', 2.07e-9, 'N')],
  ['indices normalization', JSON.stringify(parseIndices('[1 −1 0]')) === JSON.stringify([1, -1, 0])],
  ['output normalization', normOutput('Hello\\nWorld') === normOutput(' hello\nworld ')]
];

const failed = checks.filter(([, passed]) => !passed).map(([name]) => name);
if (failed.length) {
  console.error(`Answer-input validation failed: ${failed.join(', ')}`);
  process.exit(1);
}

console.log(`OK: ${checks.length} equivalent answer forms validated`);
