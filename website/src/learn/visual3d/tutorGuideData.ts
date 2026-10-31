import type { Visual3DTopicSpec } from './catalog';
import {
  circuitAt,
  circuitInputs,
  coolingAt,
  coolingInputs,
  massSpringAt,
  massSpringInputs,
  mixingTankAt,
  mixingTankInputs,
} from './coolingModel';

export interface TutorModelPart {
  partName: string;
  visualCue: string;
  realMeaning: string;
  symbolAndUnit: string;
}

export interface TutorGuidedStep {
  stepNum: number;
  title: string;
  whatToChange: string;
  whatToObserve: string;
  whyItChanges: string;
  applyValues: Record<string, number>;
}

export interface TutorWorkedCalculation {
  problemStatement: string;
  liveSummary: string;
  steps: {
    label: string;
    detail: string;
    mathTex?: string;
  }[];
  conclusion: string;
}

export interface TutorPlayConfig {
  controlKey: string;
  min: number;
  max: number;
  durationSec: number;
  unitLabel: string;
}

export interface TopicTutorGuide {
  plainIntro: string;
  whyItMatters: string;
  liveReadoutBadge: string;
  modelParts: TutorModelPart[];
  guidedSteps: TutorGuidedStep[];
  workedCalculation: TutorWorkedCalculation;
  playConfig: TutorPlayConfig;
}

/** Clean any raw underscore notation into readable mathematical notation */
export function cleanNotation(raw: string): string {
  return raw
    .replace(/R_in/g, 'Rᵢₙ')
    .replace(/R_out/g, 'Rₒᵤₜ')
    .replace(/T_m/g, 'Tₘ')
    .replace(/T_0/g, 'T₀')
    .replace(/V_0/g, 'V₀')
    .replace(/V_c/g, 'V_cell')
    .replace(/A_0/g, 'A₀')
    .replace(/F_0/g, 'F₀')
    .replace(/E_0/g, 'E₀')
    .replace(/r_i/g, 'rᵢ')
    .replace(/r_o/g, 'rₒ')
    .replace(/c_i/g, 'cᵢ')
    .replace(/N_cols/g, 'N_columns')
    .replace(/\$|\^/g, '');
}

export function getTutorGuideForTopic(
  spec: Visual3DTopicSpec,
  values: Record<string, number>,
): TopicTutorGuide {
  // ── 35. NEWTON'S LAW OF COOLING (Dedicated Deep Tutor Specification) ──────────
  if (spec.id === '3d:newton-cooling') {
    const cool = coolingInputs(values);
    const currentTemp = coolingAt(cool);
    const diff0 = cool.initial - cool.surrounding;
    const remFrac = Math.exp(-cool.rate * cool.time);
    const rateNow = -cool.rate * (currentTemp - cool.surrounding);
    const directionText =
      cool.initial > cool.surrounding
        ? 'cooling down because it started hotter than its surroundings (heat flows out of the object)'
        : cool.initial < cool.surrounding
          ? 'warming up because it started colder than its surroundings (heat flows into the object)'
          : 'in thermal equilibrium because its starting temperature already equals the surrounding temperature';

    return {
      plainIntro:
        'You are looking at a metal cylinder placed inside a chamber of surrounding air or liquid. The 3D object is cooling or warming toward the temperature of its surroundings.',
      whyItMatters:
        'Engineers use Newton’s Law of Cooling to predict how fast quenched steel parts, electronic chips, or heated pipes reach safe operating temperatures. The curve falls when the object starts hotter than its surroundings (heat flows out) and rises when it starts colder (heat flows in).',
      liveReadoutBadge: `At ${cool.time.toFixed(1)} min: Object ${currentTemp.toFixed(1)} °C · Surroundings ${cool.surrounding.toFixed(1)} °C`,
      modelParts: [
        {
          partName: 'Inner Glowing Cylinder (The Object)',
          visualCue: 'Solid central cylinder (glows red when hot, blue when cool)',
          realMeaning: 'The physical part whose temperature changes over time as it exchanges heat with the room.',
          symbolAndUnit: 'Object temperature T(t) in °C (starts at T₀ in °C)',
        },
        {
          partName: 'Translucent Outer Box (The Surroundings)',
          visualCue: 'Light-blue chamber surrounding the cylinder',
          realMeaning: 'The large ambient room or cooling bath whose temperature stays constant and acts as the target asymptote.',
          symbolAndUnit: 'Surrounding temperature Tₘ in °C',
        },
        {
          partName: 'Heat Transfer Rate (Cooling Constant)',
          visualCue: 'Controls how steeply the curve bends toward the dashed line',
          realMeaning: 'Depends on surface area, material conductivity, and whether air or water is flowing past the object.',
          symbolAndUnit: 'Cooling rate constant k in min⁻¹',
        },
        {
          partName: 'Selected Time Marker',
          visualCue: 'Red dot on the temperature graph & badge above the 3D cylinder',
          realMeaning: 'Marks the exact elapsed time since the object was placed in the chamber.',
          symbolAndUnit: 'Elapsed time t in minutes (min)',
        },
      ],
      guidedSteps: [
        {
          stepNum: 1,
          title: 'Watch a hot metal billet cool toward room temperature',
          whatToChange: 'Set Initial Object Temperature to 160 °C, Surrounding Temperature to 25 °C, and scrub Time from 0 to 20 minutes (or click ▶ Play).',
          whatToObserve: 'The cylinder shifts from bright red-orange toward cool blue while the red dot slides down the curve toward the green dashed line (25 °C).',
          whyItChanges: 'Because the object starts hotter than the room (T > Tₘ), the temperature difference (T − Tₘ) is positive, so dT/dt = −k(T − Tₘ) is negative. Cooling is fastest at the beginning when the temperature gap is largest.',
          applyValues: { T0: 160, Tm: 25, kMag: 0.12, timeMin: 8 },
        },
        {
          stepNum: 2,
          title: 'Flip the curve: Watch a cold object warm up',
          whatToChange: 'Set Initial Object Temperature to 5 °C inside a warm 30 °C room.',
          whatToObserve: 'Now the curve starts below the dashed line and rises upward toward 30 °C!',
          whyItChanges: 'Because the object starts colder than its surroundings (T₀ = 5 °C < Tₘ = 30 °C), heat flows from the room into the object, making dT/dt positive until T reaches 30 °C.',
          applyValues: { T0: 5, Tm: 30, kMag: 0.12, timeMin: 10 },
        },
        {
          stepNum: 3,
          title: 'Compare air cooling vs. rapid water quenching',
          whatToChange: 'Increase the Cooling Rate Constant from 0.12 min⁻¹ to 0.25 min⁻¹ at t = 5 minutes.',
          whatToObserve: 'The curve plunges much more steeply and reaches the surrounding temperature in less than half the time.',
          whyItChanges: 'A larger rate constant k means faster heat transfer per degree of temperature difference, shrinking the exponential factor e^(−kt) much more rapidly.',
          applyValues: { T0: 180, Tm: 10, kMag: 0.25, timeMin: 5 },
        },
      ],
      workedCalculation: {
        problemStatement: `Find the object's temperature at t = ${cool.time.toFixed(1)} min when it starts at T₀ = ${cool.initial} °C in surroundings at Tₘ = ${cool.surrounding} °C with cooling rate k = ${cool.rate} min⁻¹.`,
        liveSummary: `At t = ${cool.time.toFixed(1)} min → T(${cool.time.toFixed(1)}) = ${currentTemp.toFixed(1)} °C (changing at ${rateNow.toFixed(2)} °C/min)`,
        steps: [
          {
            label: 'Step 1: Find the initial temperature difference (T₀ − Tₘ)',
            detail: `Subtract the surrounding temperature (${cool.surrounding} °C) from the starting object temperature (${cool.initial} °C):`,
            mathTex: `T_0 - T_m = ${cool.initial} - ${cool.surrounding} = ${diff0.toFixed(1)}\\text{ }^\\circ\\text{C}`,
          },
          {
            label: 'Step 2: Calculate the remaining exponential fraction e^(−k·t)',
            detail: `Multiply the cooling rate (${cool.rate} min⁻¹) by the elapsed time (${cool.time.toFixed(1)} min) and evaluate the exponential:`,
            mathTex: `e^{-k t} = e^{-${cool.rate} \\times ${cool.time.toFixed(1)}} = e^{-${(cool.rate * cool.time).toFixed(3)}} \\approx ${remFrac.toFixed(4)}`,
          },
          {
            label: 'Step 3: Add the remaining temperature gap to the surrounding temperature',
            detail: `Multiply the initial gap (${diff0.toFixed(1)} °C) by ${remFrac.toFixed(4)} and add Tₘ = ${cool.surrounding} °C:`,
            mathTex: `T(${cool.time.toFixed(1)}) = ${cool.surrounding} + (${diff0.toFixed(1)})(${remFrac.toFixed(4)}) = ${cool.surrounding} + ${(diff0 * remFrac).toFixed(2)} = ${currentTemp.toFixed(1)}\\text{ }^\\circ\\text{C}`,
          },
        ],
        conclusion: `At ${cool.time.toFixed(1)} minutes, the object is at ${currentTemp.toFixed(1)} °C and continues approaching the surrounding temperature of ${cool.surrounding} °C.`,
      },
      playConfig: {
        controlKey: 'timeMin',
        min: 0,
        max: 30,
        durationSec: 8,
        unitLabel: 'min',
      },
    };
  }

  // ── 34. MIXING TANK PROBLEMS (Dedicated Deep Tutor Specification) ─────────────
  if (spec.id === '3d:mixing-tank') {
    const inp = mixingTankInputs(values);
    const st = mixingTankAt(inp);
    const dV = inp.inflowRate - inp.outflowRate;
    const volumeTrend =
      Math.abs(dV) < 1e-6
        ? 'Constant liquid volume (inflow rate equals outflow rate: 100 L)'
        : dV > 0
          ? `Tank is filling (+${dV.toFixed(1)} L/min): volume is now ${st.volume.toFixed(0)} L`
          : `Tank is draining (${dV.toFixed(1)} L/min): volume is now ${st.volume.toFixed(0)} L`;

    return {
      plainIntro:
        'You are looking at a stirred chemical mixing tank where salt water (brine) pours in through the top green pipe, mixes instantly with the tank liquid, and flows out through the bottom red pipe.',
      whyItMatters:
        'Chemical, environmental, and industrial engineers use mixing tank differential equations to track pollutant dilution in lakes, drug concentration in the bloodstream, and reactant blending in chemical reactors.',
      liveReadoutBadge: `At ${inp.time.toFixed(1)} min: Salt ${st.saltMass.toFixed(1)} kg · Volume ${st.volume.toFixed(0)} L · Conc. ${st.concentration.toFixed(2)} kg/L`,
      modelParts: [
        {
          partName: 'Top Green Pipe (Brine Inflow)',
          visualCue: 'Green pipe at top-left pouring liquid into the tank',
          realMeaning: 'Brings fresh brine into the tank. Multiplying flow rate by concentration gives the mass of salt entering each minute.',
          symbolAndUnit: `Inflow rate rᵢ = ${inp.inflowRate} L/min · Concentration cᵢ = ${inp.inflowConcentration.toFixed(2)} kg/L → Salt in = ${st.saltInRate.toFixed(2)} kg/min`,
        },
        {
          partName: 'Blue Liquid Cylinder (Well-Mixed Tank Volume)',
          visualCue: 'Blue water column inside the glass cylinder (darker blue = saltier)',
          realMeaning: 'Holds the current liquid volume V(t) and dissolved salt mass A(t). The water level rises if inflow exceeds outflow.',
          symbolAndUnit: `Volume V(t) = ${st.volume.toFixed(0)} L · Dissolved salt A(t) = ${st.saltMass.toFixed(1)} kg`,
        },
        {
          partName: 'Spinning Black Impeller (Instant Mixing)',
          visualCue: 'Rotating paddle shaft at the center of the tank',
          realMeaning: 'Represents the "well-mixed tank" assumption: concentration is uniform everywhere inside the tank at any instant.',
          symbolAndUnit: `Tank concentration C(t) = A(t) / V(t) = ${st.concentration.toFixed(3)} kg/L`,
        },
        {
          partName: 'Bottom Red Pipe (Mixed Outflow)',
          visualCue: 'Red drain pipe at bottom-right',
          realMeaning: 'Carries mixed liquid out of the tank at the current internal concentration A(t)/V(t).',
          symbolAndUnit: `Outflow rate rₒ = ${inp.outflowRate} L/min → Salt out = rₒ · A(t)/V(t) = ${st.saltOutRate.toFixed(2)} kg/min`,
        },
      ],
      guidedSteps: [
        {
          stepNum: 1,
          title: 'Constant Volume Equilibrium (Inflow = Outflow)',
          whatToChange: 'Keep Inflow rate = 6 L/min and Outflow rate = 6 L/min with Inflow concentration = 0.80 kg/L, then press ▶ Play.',
          whatToObserve: 'The water level stays fixed at 100 L while the blue liquid darkens and the red dot on the graph climbs smoothly toward the green dashed line at 80 kg.',
          whyItChanges: 'When rᵢ = rₒ = 6 L/min, volume stays at 100 L. Eventually the tank concentration matches the incoming 0.80 kg/L brine, so 100 L × 0.80 kg/L = 80 kg of salt.',
          applyValues: { ci: 0.8, ri: 6, ro: 6, A0: 10, timeMin: 12 },
        },
        {
          stepNum: 2,
          title: 'Pure Water Flush (Washing Salt Out of the Tank)',
          whatToChange: 'Set Inflow concentration to 0 kg/L (pure fresh water) starting from 80 kg of initial salt.',
          whatToObserve: 'The blue water turns pale cyan and the salt curve decays exponentially toward 0 kg.',
          whyItChanges: 'With cᵢ = 0, no new salt enters (Salt in = 0 kg/min), while salt keeps leaving through the bottom drain at rate (6/100)A(t), flushing the tank clean.',
          applyValues: { ci: 0, ri: 6, ro: 6, A0: 80, timeMin: 15 },
        },
        {
          stepNum: 3,
          title: 'Filling Tank (Inflow Faster Than Outflow)',
          whatToChange: 'Set Inflow rate to 9 L/min and Outflow rate to 5 L/min with Inflow concentration = 0.60 kg/L.',
          whatToObserve: 'Watch the 3D water level physically rise inside the glass cylinder as volume grows by +4 L every minute (V(t) = 100 + 4t)!',
          whyItChanges: 'Because more liquid enters (9 L/min) than leaves (5 L/min), the denominator V(t) = 100 + 4t increases over time, so total salt mass A(t) keeps growing as the tank fills.',
          applyValues: { ci: 0.6, ri: 9, ro: 5, A0: 15, timeMin: 20 },
        },
      ],
      workedCalculation: {
        problemStatement: `A 100 L tank starts with A(0) = ${inp.initialSalt} kg of salt. Brine with concentration cᵢ = ${inp.inflowConcentration.toFixed(2)} kg/L enters at rᵢ = ${inp.inflowRate} L/min, and well-mixed solution leaves at rₒ = ${inp.outflowRate} L/min. Find the salt mass A(t) at t = ${inp.time.toFixed(1)} min.`,
        liveSummary: `${volumeTrend} · Net salt change dA/dt = ${st.netRate >= 0 ? '+' : ''}${st.netRate.toFixed(2)} kg/min`,
        steps: [
          {
            label: 'Step 1: Find the salt inflow rate (Salt in = rᵢ × cᵢ)',
            detail: `Multiply the incoming flow rate (${inp.inflowRate} L/min) by the incoming brine concentration (${inp.inflowConcentration.toFixed(2)} kg/L):`,
            mathTex: `R_{\\text{in}} = r_i \\cdot c_i = ${inp.inflowRate}\\text{ L/min} \\times ${inp.inflowConcentration.toFixed(2)}\\text{ kg/L} = ${st.saltInRate.toFixed(2)}\\text{ kg/min}`,
          },
          {
            label: 'Step 2: Write the liquid volume V(t) and salt outflow rate (Salt out)',
            detail: `At time t = ${inp.time.toFixed(1)} min, the liquid volume in the tank is V(t) = 100 + (${inp.inflowRate} − ${inp.outflowRate})t = ${st.volume.toFixed(1)} L:`,
            mathTex: `V(t) = 100 + (${dV})t \\implies R_{\\text{out}} = r_o \\cdot \\frac{A(t)}{V(t)} = ${inp.outflowRate} \\cdot \\frac{A(t)}{100 ${dV >= 0 ? '+' : '-'} ${Math.abs(dV)}t}`,
          },
          {
            label: 'Step 3: Solve the linear differential equation dA/dt = Salt in − Salt out at t = ' + inp.time.toFixed(1) + ' min',
            detail:
              Math.abs(dV) < 1e-6
                ? `For constant volume (V = 100 L), the steady-state salt mass is cᵢ·V₀ = ${(inp.inflowConcentration * 100).toFixed(1)} kg, and A(t) = ${(inp.inflowConcentration * 100).toFixed(1)} + (${inp.initialSalt} − ${(inp.inflowConcentration * 100).toFixed(1)})e^(−${(inp.inflowRate / 100).toFixed(3)} × ${inp.time.toFixed(1)}):`
                : `For variable volume V(t) = 100 + ${dV}t, integrating factor V(t)^(${inp.outflowRate}/${dV}) gives A(t) = cᵢ·V(t) + (A₀ − cᵢ·V₀)(V(t)/V₀)^(−rₒ/(rᵢ−rₒ)):`,
            mathTex: `A(${inp.time.toFixed(1)}) = ${st.saltMass.toFixed(2)}\\text{ kg}, \\qquad C(${inp.time.toFixed(1)}) = \\frac{${st.saltMass.toFixed(2)}}{${st.volume.toFixed(1)}} = ${st.concentration.toFixed(3)}\\text{ kg/L}`,
          },
        ],
        conclusion: `At t = ${inp.time.toFixed(1)} min, the tank holds ${st.volume.toFixed(0)} L of solution containing ${st.saltMass.toFixed(1)} kg of dissolved salt (concentration ${st.concentration.toFixed(3)} kg/L).`,
      },
      playConfig: {
        controlKey: 'timeMin',
        min: 0,
        max: 50,
        durationSec: 10,
        unitLabel: 'min',
      },
    };
  }

  // ── 36. MASS–SPRING SYSTEMS ───────────────────────────────────────────────────
  if (spec.id === '3d:mass-spring') {
    const inp = massSpringInputs(values);
    const st = massSpringAt(inp);
    return {
      plainIntro:
        'You are looking at a mass block suspended from a ceiling support by an elastic spring and a hydraulic damper. As time moves forward, the block oscillates or settles toward its equilibrium rest position.',
      whyItMatters:
        'Mechanical and aerospace engineers use this exact second-order ODE (mx\'\' + cx\' + kx = F(t)) to design car suspension shock absorbers, aircraft landing gear, and earthquake-resistant buildings.',
      liveReadoutBadge: `At ${inp.time.toFixed(1)} s: Position x = ${st.displacement.toFixed(2)} m · ${st.regime}`,
      modelParts: [
        {
          partName: 'Red Suspended Block (Inertia Mass)',
          visualCue: 'Red rectangular block moving up and down',
          realMeaning: 'Stores kinetic energy; heavier mass resists rapid acceleration and lowers natural frequency.',
          symbolAndUnit: `Mass m = ${inp.mass.toFixed(1)} kg`,
        },
        {
          partName: 'Blue Coil Rod (Elastic Spring)',
          visualCue: 'Left vertical blue strut connecting beam to block',
          realMeaning: 'Pulls the block back toward equilibrium with force proportional to displacement (Hooke’s Law).',
          symbolAndUnit: `Spring stiffness k = ${inp.stiffness} N/m`,
        },
        {
          partName: 'Grey Dashpot Rod (Viscous Damper)',
          visualCue: 'Right vertical grey strut alongside the spring',
          realMeaning: 'Absorbs energy and slows motion with force proportional to velocity.',
          symbolAndUnit: `Damping coefficient c = ${inp.damping.toFixed(2)} N·s/m`,
        },
      ],
      guidedSteps: [
        {
          stepNum: 1,
          title: 'Underdamped Oscillation (Bouncing Shock Absorber)',
          whatToChange: 'Set Mass = 1 kg, Stiffness = 9 N/m, and Damping = 1.0 N·s/m, then press ▶ Play.',
          whatToObserve: 'The block bounces above and below equilibrium while its peak height shrinks inside an exponential envelope.',
          whyItChanges: 'Because c² − 4mk = 1 − 36 = −35 < 0, the characteristic roots are complex conjugates, producing decaying cosine waves.',
          applyValues: { m: 1, c: 1.0, k: 9, F0: 0, timeSec: 2.5 },
        },
        {
          stepNum: 2,
          title: 'Critical Damping (Fastest Return Without Overshoot)',
          whatToChange: 'Increase Damping to c = 6.0 N·s/m.',
          whatToObserve: 'The block glides smoothly back to the dashed equilibrium line without ever crossing or bouncing past it!',
          whyItChanges: 'At c = √(4mk) = √36 = 6, the discriminant Δ = c² − 4mk equals 0, the exact boundary between oscillation and sluggish overdamping.',
          applyValues: { m: 1, c: 6.0, k: 9, F0: 0, timeSec: 1.5 },
        },
        {
          stepNum: 3,
          title: 'Driven Resonance (Growing Vibrations)',
          whatToChange: 'Set Damping c = 0 and Driving Force F₀ = 4 N at the natural frequency.',
          whatToObserve: 'The oscillation swings wider and wider with every cycle!',
          whyItChanges: 'When an undamped system is pushed at its own natural frequency ω₀ = √(k/m) = 3 rad/s, energy builds up linearly over time (t·sin(ω₀t)).',
          applyValues: { m: 1, c: 0, k: 9, F0: 4, timeSec: 4.0 },
        },
      ],
      workedCalculation: {
        problemStatement: `Classify the motion and natural frequency for m = ${inp.mass} kg, c = ${inp.damping} N·s/m, and k = ${inp.stiffness} N/m, and evaluate x(t) at t = ${inp.time.toFixed(1)} s.`,
        liveSummary: `Regime: ${st.regime} · Discriminant Δ = ${st.discriminant.toFixed(2)} · ω₀ = ${st.naturalFreq.toFixed(2)} rad/s`,
        steps: [
          {
            label: 'Step 1: Compute the undamped natural frequency ω₀ = √(k / m)',
            detail: `Divide stiffness k = ${inp.stiffness} N/m by mass m = ${inp.mass} kg and take the square root:`,
            mathTex: `\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{${inp.stiffness}}{${inp.mass}}} = ${st.naturalFreq.toFixed(2)}\\text{ rad/s}`,
          },
          {
            label: 'Step 2: Compute the characteristic discriminant Δ = c² − 4mk',
            detail: `Compare c² = ${(inp.damping * inp.damping).toFixed(2)} against 4mk = ${(4 * inp.mass * inp.stiffness).toFixed(2)}:`,
            mathTex: `\\Delta = c^2 - 4mk = (${inp.damping})^2 - 4(${inp.mass})(${inp.stiffness}) = ${st.discriminant.toFixed(2)}`,
          },
          {
            label: 'Step 3: Evaluate displacement x(t) at the selected time',
            detail: `At t = ${inp.time.toFixed(1)} s, the block's displacement from equilibrium is:`,
            mathTex: `x(${inp.time.toFixed(1)}) = ${st.displacement.toFixed(3)}\\text{ m}`,
          },
        ],
        conclusion: `Because Δ = ${st.discriminant.toFixed(2)}, the system is ${st.regime.toLowerCase()} and sits at x = ${st.displacement.toFixed(2)} m at t = ${inp.time.toFixed(1)} s.`,
      },
      playConfig: {
        controlKey: 'timeSec',
        min: 0,
        max: 10,
        durationSec: 8,
        unitLabel: 's',
      },
    };
  }

  // ── 37. LR / RC CIRCUITS ──────────────────────────────────────────────────────
  if (spec.id === '3d:lr-rc-circuit') {
    const inp = circuitInputs(values);
    const st = circuitAt(inp);
    return {
      plainIntro:
        'You are looking at a first-order electrical circuit containing a green DC voltage source, an amber resistor, and an energy-storage element (either a blue inductor coil or parallel capacitor plates).',
      whyItMatters:
        'Every power supply, sensor filter, and timing chip relies on LR and RC transients. The time constant τ tells you how fast the circuit reaches 63.2% of its final steady state.',
      liveReadoutBadge: `At ${inp.time.toFixed(1)} s: ${st.quantityName} = ${st.value.toFixed(2)} ${st.unit} (${(st.fraction * 100).toFixed(1)}%)`,
      modelParts: [
        {
          partName: 'Green Cylinder (DC Voltage Source)',
          visualCue: 'Green cylinder on the left wire rail',
          realMeaning: 'Provides the driving electromotive force that pushes current around the loop.',
          symbolAndUnit: `Source voltage E₀ = ${inp.voltage} V`,
        },
        {
          partName: 'Amber Cylinder (Resistor)',
          visualCue: 'Horizontal amber component along the back rail',
          realMeaning: 'Limits maximum current and dissipates electrical energy as heat.',
          symbolAndUnit: 'Resistance R in Ohms (Ω)',
        },
        {
          partName: 'Right Storage Element (Inductor or Capacitor)',
          visualCue: inp.mode === 0 ? 'Blue magnetic torus coil (Inductor L)' : 'Parallel red/blue plates (Capacitor C)',
          realMeaning: inp.mode === 0 ? 'Opposes sudden changes in current by storing magnetic field energy.' : 'Accumulates or releases electric charge across its plates.',
          symbolAndUnit: `Time constant τ = ${inp.tau.toFixed(2)} s (τ = L/R or τ = R·C)`,
        },
      ],
      guidedSteps: [
        {
          stepNum: 1,
          title: 'Watch the circuit reach 63.2% at exactly one time constant (t = τ)',
          whatToChange: 'Set Time Constant τ = 1.5 s and Time t = 1.5 s in LR Energizing mode.',
          whatToObserve: 'The red dot on the curve sits at exactly 63.2% of the green dashed steady-state line.',
          whyItChanges: 'At t = τ, the exponential factor is 1 − e^(−1) = 1 − 0.3679 = 0.6321 (63.2%) regardless of voltage or resistance!',
          applyValues: { circuitMode: 0, tau: 1.5, E0: 12, timeSec: 1.5 },
        },
        {
          stepNum: 2,
          title: 'Switch to RC Capacitor Discharging',
          whatToChange: 'Set Circuit Mode to 2 (RC Discharging) and press ▶ Play.',
          whatToObserve: 'The curve starts at 100% charge and decays exponentially toward the 0 V baseline.',
          whyItChanges: 'With the battery removed, stored capacitor charge drains through the resistor following q(t) = q₀·e^(−t/τ).',
          applyValues: { circuitMode: 2, tau: 1.5, E0: 12, timeSec: 2.0 },
        },
      ],
      workedCalculation: {
        problemStatement: `For a circuit with source voltage E₀ = ${inp.voltage} V and time constant τ = ${inp.tau} s, calculate the ${st.quantityName.toLowerCase()} at t = ${inp.time.toFixed(1)} s.`,
        liveSummary: `At t = ${inp.time.toFixed(1)} s (${(inp.time / inp.tau).toFixed(2)} τ) → ${st.value.toFixed(2)} ${st.unit}`,
        steps: [
          {
            label: 'Step 1: Find how many time constants have elapsed (t / τ)',
            detail: `Divide elapsed time t = ${inp.time.toFixed(1)} s by τ = ${inp.tau} s:`,
            mathTex: `\\frac{t}{\\tau} = \\frac{${inp.time.toFixed(1)}}{${inp.tau}} = ${(inp.time / inp.tau).toFixed(3)}`,
          },
          {
            label: 'Step 2: Evaluate the transient response factor',
            detail: inp.mode === 2 ? 'For discharging, evaluate e^(−t/τ):' : 'For charging/energizing, evaluate 1 − e^(−t/τ):',
            mathTex: inp.mode === 2
              ? `e^{-t/\\tau} = e^{-${(inp.time / inp.tau).toFixed(3)}} = ${st.fraction.toFixed(4)}`
              : `1 - e^{-t/\\tau} = 1 - e^{-${(inp.time / inp.tau).toFixed(3)}} = ${st.fraction.toFixed(4)}`,
          },
          {
            label: 'Step 3: Multiply by the maximum scale value',
            detail: `Multiply by ${inp.mode === 0 ? 'E₀/R = ' + (inp.voltage / 4).toFixed(2) + ' A' : 'E₀ = ' + inp.voltage + ' V'}:`,
            mathTex: `\\text{Value}(${inp.time.toFixed(1)}) = ${st.value.toFixed(2)}\\text{ ${st.unit}}`,
          },
        ],
        conclusion: `At t = ${inp.time.toFixed(1)} s, the circuit is at ${(st.fraction * 100).toFixed(1)}% of its full scale (${st.value.toFixed(2)} ${st.unit}).`,
      },
      playConfig: {
        controlKey: 'timeSec',
        min: 0,
        max: 8,
        durationSec: 7,
        unitLabel: 's',
      },
    };
  }

  // ── GENERAL TUTOR GENERATOR FOR ALL REMAINING TOPICS (1–33, 38–41) ────────────
  const firstCtrl = spec.controls[0] ?? { key: 'x', label: 'Parameter', min: 0, max: 1, step: 0.1, defaultValue: 0 };
  const primaryVal = values[firstCtrl.key] ?? firstCtrl.defaultValue;

  const modelParts: TutorModelPart[] = spec.controls.map((c) => {
    const curVal = values[c.key] ?? c.defaultValue;
    const formattedVal = Number.isInteger(c.step) ? String(curVal) : curVal.toFixed(2);
    return {
      partName: cleanNotation(c.label.replace(/\s*\(.*?\)\s*/g, '')),
      visualCue: `Interactive slider (${c.min} to ${c.max}${c.unit ? ' ' + c.unit : ''})`,
      realMeaning: `Controls ${cleanNotation(c.label)} in the 3D physical model and updates all linked readouts live.`,
      symbolAndUnit: `Current value: ${formattedVal}${c.unit ? ' ' + c.unit : ''}`,
    };
  });

  const guidedSteps: TutorGuidedStep[] =
    spec.presets.length > 0
      ? spec.presets.map((p, idx) => ({
          stepNum: idx + 1,
          title: cleanNotation(p.label),
          whatToChange: `Click "Try this step" below to load the "${cleanNotation(p.label)}" configuration.`,
          whatToObserve: `Watch the 3D geometry update and observe: ${cleanNotation(p.note)}.`,
          whyItChanges: `This preset demonstrates how changing ${cleanNotation(firstCtrl.label)} alters the physical arrangement and mathematical outcome: ${cleanNotation(p.note)}.`,
          applyValues: p.values,
        }))
      : [
          {
            stepNum: 1,
            title: `Explore ${spec.title}`,
            whatToChange: `Adjust ${cleanNotation(firstCtrl.label)} or press ▶ Play to sweep through the range.`,
            whatToObserve: 'Watch the 3D structure and numerical badge respond in real time.',
            whyItChanges: cleanNotation(spec.check.why),
            applyValues: { [firstCtrl.key]: firstCtrl.defaultValue },
          },
        ];

  const liveSummary = spec.controls
    .map((c) => {
      const v = values[c.key] ?? c.defaultValue;
      return `${cleanNotation(c.label.split('(')[0].trim())}: ${Number.isInteger(c.step) ? v : v.toFixed(2)}${c.unit ? ' ' + c.unit : ''}`;
    })
    .join(' · ');

  return {
    plainIntro: cleanNotation(spec.summary),
    whyItMatters: `This 3D visual model connects the physical geometry of ${spec.title.toLowerCase()} directly to its governing engineering principles so you can see what each variable does before solving exam problems.`,
    liveReadoutBadge: liveSummary || spec.subtitle,
    modelParts,
    guidedSteps,
    workedCalculation: {
      problemStatement: cleanNotation(spec.check.q),
      liveSummary: `Current model state: ${liveSummary}`,
      steps: [
        {
          label: 'Step 1: Identify the governing relationship',
          detail: `For ${spec.title}, the core mathematical relationship is:`,
          mathTex: spec.formula,
        },
        {
          label: 'Step 2: Connect the 3D geometry to the numbers',
          detail: cleanNotation(spec.check.why),
        },
        {
          label: 'Step 3: Verify the result on the 3D model',
          detail: `With ${cleanNotation(firstCtrl.label)} set to ${Number.isInteger(firstCtrl.step) ? primaryVal : primaryVal.toFixed(2)}, the 3D scene confirms: ${cleanNotation(spec.check.options[spec.check.correct])}.`,
        },
      ],
      conclusion: cleanNotation(spec.check.why),
    },
    playConfig: {
      controlKey: firstCtrl.key,
      min: firstCtrl.min,
      max: firstCtrl.max,
      durationSec: 6,
      unitLabel: firstCtrl.unit ?? '',
    },
  };
}

