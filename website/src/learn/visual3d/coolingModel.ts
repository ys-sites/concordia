/**
 * Verified mathematical models shared identically between the 3D scenes,
 * compact 2D graphs, live numerical readouts, and step-by-step calculation panels.
 */

/** 1. Newton's Law of Cooling: temperatures in °C, time in minutes, rate in min⁻¹. */
export interface CoolingInputs {
  initial: number;
  surrounding: number;
  rate: number;
  time: number;
}

export function coolingAt({ initial, surrounding, rate, time }: CoolingInputs): number {
  return surrounding + (initial - surrounding) * Math.exp(-rate * time);
}

export function coolingInputs(values: Record<string, number>): CoolingInputs {
  return {
    initial: values.T0 ?? 160,
    surrounding: values.Tm ?? 25,
    rate: values.kMag ?? 0.12,
    time: values.timeMin ?? 8,
  };
}

/** 2. Mixing Tank ODE Model: volume in L, salt mass in kg, rates in L/min, concentration in kg/L, time in minutes. */
export interface MixingTankInputs {
  initialVolume: number;
  initialSalt: number;
  inflowConcentration: number;
  inflowRate: number;
  outflowRate: number;
  time: number;
  A0: number;
  ci: number;
  ri: number;
  ro: number;
  t: number;
}

export interface MixingTankState {
  volume: number;
  saltMass: number;
  saltKg: number;
  concentration: number;
  saltInRate: number;
  rateIn: number;
  saltOutRate: number;
  rateOut: number;
  netRate: number;
  equilibriumSalt: number | null;
  equilibriumKg: number;
}

export function mixingTankInputs(values: Record<string, number>): MixingTankInputs {
  const A0 = values.A0 ?? 10;
  const ci = values.ci ?? 0.8;
  const ri = values.ri ?? 6;
  const ro = values.ro ?? 6;
  const t = values.timeMin ?? 12;
  return {
    initialVolume: 100,
    initialSalt: A0,
    A0,
    inflowConcentration: ci,
    ci,
    inflowRate: ri,
    ri,
    outflowRate: ro,
    ro,
    time: t,
    t,
  };
}

export function mixingTankAt(input: MixingTankInputs): MixingTankState {
  const V0 = input.initialVolume ?? 100;
  const A0 = input.A0 ?? input.initialSalt ?? 10;
  const ci = input.ci ?? input.inflowConcentration ?? 0.8;
  const ri = input.ri ?? input.inflowRate ?? 6;
  const ro = input.ro ?? input.outflowRate ?? 6;
  const t = input.t ?? input.time ?? 0;
  const dV = ri - ro;

  let volume = V0;
  let saltMass = A0;

  if (Math.abs(dV) < 1e-6) {
    const eq = ci * V0;
    saltMass = eq + (A0 - eq) * Math.exp(-(ro / V0) * t);
  } else {
    volume = Math.max(10, V0 + dV * t);
    const exponent = -ro / dV;
    const term1 = ((ci * ri) / (ro + dV)) * volume;
    const term2 = (A0 - (ci * ri * V0) / (ro + dV)) * Math.pow(volume / V0, exponent);
    saltMass = Math.max(0, term1 + term2);
  }

  const concentration = volume > 0 ? saltMass / volume : 0;
  const saltInRate = ri * ci;
  const saltOutRate = ro * concentration;
  const netRate = saltInRate - saltOutRate;
  const eqVal = ci * V0;

  return {
    volume,
    saltMass,
    saltKg: saltMass,
    concentration,
    saltInRate,
    rateIn: saltInRate,
    saltOutRate,
    rateOut: saltOutRate,
    netRate,
    equilibriumSalt: Math.abs(dV) < 1e-6 ? eqVal : null,
    equilibriumKg: eqVal,
  };
}

/** 3. Mass–Spring–Damper Model: m x'' + c x' + k x = F0 cos(w0 t) with x(0) = 1 m, x'(0) = 0. */
export interface MassSpringInputs {
  mass: number;
  damping: number;
  stiffness: number;
  drivingForce: number;
  time: number;
  t: number;
}

export function massSpringInputs(values: Record<string, number>): MassSpringInputs {
  const t = values.timeSec ?? 2.5;
  return {
    mass: values.m ?? 1,
    damping: values.c ?? 0.8,
    stiffness: values.k ?? 9,
    drivingForce: values.F0 ?? 0,
    time: t,
    t,
  };
}

export function massSpringAt(input: MassSpringInputs): {
  displacement: number;
  x: number;
  naturalFreq: number;
  discriminant: number;
  regime: 'Underdamped' | 'Critically damped' | 'Overdamped' | 'Driven resonance';
} {
  const { mass: m, damping: c, stiffness: k, drivingForce: F0 } = input;
  const t = input.t ?? input.time ?? 0;
  const w0 = Math.sqrt(k / m);
  const disc = c * c - 4 * m * k;
  const zeta = c / (2 * Math.sqrt(m * k));

  let disp = 0;
  let regime: 'Underdamped' | 'Critically damped' | 'Overdamped' | 'Driven resonance' = 'Underdamped';

  if (F0 > 0 && c < 0.25) {
    const raw = Math.cos(w0 * t) + (F0 / (2 * m * w0)) * t * Math.sin(w0 * t);
    disp = Math.max(-1.8, Math.min(1.8, raw * 0.45));
    regime = 'Driven resonance';
  } else if (Math.abs(zeta - 1) < 0.03) {
    disp = (1 + w0 * t) * Math.exp(-w0 * t);
    regime = 'Critically damped';
  } else if (zeta < 1) {
    const wd = w0 * Math.sqrt(1 - zeta * zeta);
    const alpha = c / (2 * m);
    disp = Math.exp(-alpha * t) * (Math.cos(wd * t) + (alpha / wd) * Math.sin(wd * t));
    regime = 'Underdamped';
  } else {
    const r1 = (-c + Math.sqrt(disc)) / (2 * m);
    const r2 = (-c - Math.sqrt(disc)) / (2 * m);
    const c1 = -r2 / (r1 - r2);
    const c2 = r1 / (r1 - r2);
    disp = c1 * Math.exp(r1 * t) + c2 * Math.exp(r2 * t);
    regime = 'Overdamped';
  }

  return {
    displacement: disp,
    x: disp,
    naturalFreq: w0,
    discriminant: disc,
    regime,
  };
}

/** 4. First-Order LR / RC Circuit Transient Model */
export interface CircuitInputs {
  mode: number;
  tau: number;
  voltage: number;
  time: number;
  t: number;
}

export function circuitInputs(values: Record<string, number>): CircuitInputs {
  const t = values.timeSec ?? 2.0;
  return {
    mode: Math.round(values.circuitMode ?? 0),
    tau: values.tau ?? 1.5,
    voltage: values.E0 ?? 12,
    time: t,
    t,
  };
}

export function circuitAt(input: CircuitInputs): {
  fraction: number;
  value: number;
  steadyState: number;
  unit: string;
  quantityName: string;
  label: string;
} {
  const { mode, tau, voltage } = input;
  const time = input.t ?? input.time ?? 0;
  const fraction = mode === 2 ? Math.exp(-time / tau) : 1 - Math.exp(-time / tau);
  const maxVal = mode === 0 ? voltage / 4 : voltage;
  const steadyState = mode === 2 ? 0 : maxVal;
  const unit = mode === 0 ? 'A' : 'V';
  const quantityName = mode === 0 ? 'Inductor current' : 'Capacitor voltage';
  const label = `${quantityName} (${unit})`;

  return {
    fraction,
    value: maxVal * fraction,
    steadyState,
    unit,
    quantityName,
    label,
  };
}
