import React from 'react';
import { coolingAt, coolingInputs } from './coolingModel';

export const CoolingGraph: React.FC<{ values: Record<string, number> }> = ({ values }) => {
  const input = coolingInputs(values);
  const current = coolingAt(input);
  const low = Math.min(0, input.initial, input.surrounding) - 10;
  const high = Math.max(180, input.initial, input.surrounding) + 15;
  const y = (temperature: number) => 118 - ((temperature - low) / (high - low)) * 88;
  const x = (time: number) => 46 + (time / 30) * 234;

  const path = Array.from({ length: 61 }, (_, i) => {
    const time = i / 2;
    return `${i === 0 ? 'M' : 'L'} ${x(time).toFixed(2)} ${y(coolingAt({ ...input, time })).toFixed(2)}`;
  }).join(' ');

  const asymY = y(input.surrounding);
  const dotX = x(input.time);
  const dotY = y(current);

  const trendExplanation =
    input.initial > input.surrounding
      ? `Because the object starts hotter (${input.initial} °C) than its surroundings (${input.surrounding} °C), heat flows out of the object and the curve falls toward the dashed line.`
      : input.initial < input.surrounding
        ? `Because the object starts colder (${input.initial} °C) than its surroundings (${input.surrounding} °C), heat flows into the object and the curve rises toward the dashed line.`
        : `Because the object starts at the exact surrounding temperature (${input.surrounding} °C), no net heat flows and the curve stays flat.`;

  return (
    <section className="lx-cooling-graph" aria-labelledby="cooling-graph-title">
      <div className="lx-cooling-graph-head">
        <h3 id="cooling-graph-title">Object temperature over time</h3>
        <span className="lx-cooling-badge">
          At {input.time.toFixed(1)} min: <strong>{current.toFixed(1)} °C</strong>
        </span>
      </div>
      <p className="lx-cooling-why">{trendExplanation}</p>
      <svg
        viewBox="0 0 300 142"
        role="img"
        aria-label={`Object temperature over time. At ${input.time.toFixed(1)} minutes, object temperature is ${current.toFixed(1)} degrees Celsius and surrounding temperature is ${input.surrounding.toFixed(1)} degrees Celsius.`}
      >
        {/* Axes */}
        <line x1="46" y1="118" x2="284" y2="118" stroke="#64748b" strokeWidth="1.3" />
        <line x1="46" y1="22" x2="46" y2="118" stroke="#64748b" strokeWidth="1.3" />

        {/* Dashed Surrounding Temperature Line */}
        <line
          x1="46"
          y1={asymY}
          x2="284"
          y2={asymY}
          stroke="#15803d"
          strokeWidth="1.6"
          strokeDasharray="5 3"
        />
        <text
          x="280"
          y={Math.max(30, asymY - 5)}
          textAnchor="end"
          fontSize="8.5"
          fontWeight="600"
          fill="#15803d"
        >
          Surrounding temperature ({input.surrounding} °C)
        </text>

        {/* Temperature Curve */}
        <path d={path} fill="none" stroke="#be123c" strokeWidth="2.5" />

        {/* Vertical guide line to selected time */}
        <line
          x1={dotX}
          y1={dotY}
          x2={dotX}
          y2="118"
          stroke="#be123c"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.6"
        />

        {/* Selected Time Point on Curve */}
        <circle cx={dotX} cy={dotY} r="5" fill="#be123c" stroke="#ffffff" strokeWidth="1.8" />
        <text
          x={Math.min(245, Math.max(52, dotX + 6))}
          y={Math.max(32, dotY - 7)}
          fontSize="8.5"
          fontWeight="700"
          fill="#be123c"
        >
          ({input.time.toFixed(1)} min, {current.toFixed(1)} °C)
        </text>

        {/* Plain-Language Axis Labels */}
        <text x="46" y="14" fontSize="9.5" fontWeight="600" fill="#334155">
          Object temperature (°C)
        </text>
        <text x="165" y="135" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#334155">
          Time (minutes)
        </text>
        <text x="46" y="132" fontSize="8" fill="#64748b">0</text>
        <text x="280" y="132" textAnchor="end" fontSize="8" fill="#64748b">30 min</text>
      </svg>
      <div className="lx-cooling-legend">
        <span>
          <i className="lx-dot-red" aria-hidden /> Object at {input.time.toFixed(1)} min: <strong>{current.toFixed(1)} °C</strong>
        </span>
        <span>
          <i className="lx-line-green" aria-hidden /> Surrounding temperature: <strong>{input.surrounding.toFixed(1)} °C</strong>
        </span>
      </div>
    </section>
  );
};
