import assert from 'node:assert/strict';
import { coolingAt, coolingInputs } from '../src/learn/visual3d/coolingModel';

const cooling = { initial: 160, surrounding: 25, rate: 0.12, time: 8 };
assert.equal(coolingAt({ ...cooling, time: 0 }), 160);
assert.ok(Math.abs(coolingAt(cooling) - 76.689) < 0.01);
assert.ok(coolingAt({ ...cooling, time: 30 }) < coolingAt(cooling));
const warming = { initial: 5, surrounding: 30, rate: 0.1, time: 10 };
assert.ok(coolingAt(warming) > warming.initial && coolingAt(warming) < warming.surrounding);
assert.equal(coolingAt({ ...warming, initial: 30 }), 30);
assert.deepEqual(coolingInputs({ T0: 0, Tm: 0, kMag: 0, timeMin: 0 }), { initial: 0, surrounding: 0, rate: 0, time: 0 });
console.log('Cooling model checks passed.');
