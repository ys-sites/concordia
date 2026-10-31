import React from 'react';
import { coolingAt, coolingInputs } from './coolingModel';

export const CoolingGraph: React.FC<{ values: Record<string, number> }> = ({ values }) => {
  const input = coolingInputs(values);
  const current = coolingAt(input);
  const low = Math.min(input.initial, input.surrounding) - 10;
  const high = Math.max(input.initial, input.surrounding) + 10;
  const y = (temperature: number) => 100 - ((temperature - low) / (high - low)) * 70;
  const x = (time: number) => 42 + (time / 30) * 238;
  const path = Array.from({ length: 61 }, (_, i) => {
    const time = i / 2;
    return `${i === 0 ? 'M' : 'L'} ${x(time).toFixed(2)} ${y(coolingAt({ ...input, time })).toFixed(2)}`;
  }).join(' ');
  const trend = input.initial > input.surrounding ? 'cools down' : input.initial < input.surrounding ? 'warms up' : 'stays at the surrounding temperature';
  return (
    <section className="lx-cooling-graph" aria-labelledby="cooling-graph-title">
      <h3 id="cooling-graph-title">What the graph shows</h3>
      <p>The dot is the object in the 3D view at the selected time. The dashed line is the surrounding temperature; the object {trend} toward it.</p>
      <svg viewBox="0 0 310 130" role="img" aria-label={`Object temperature over time. At ${input.time} minutes it is ${current.toFixed(1)} degrees Celsius; surrounding temperature is ${input.surrounding} degrees Celsius.`}>
        <line x1="42" y1="100" x2="280" y2="100" stroke="#64748b" />
        <line x1="42" y1="25" x2="42" y2="100" stroke="#64748b" />
        <line x1="42" y1={y(input.surrounding)} x2="280" y2={y(input.surrounding)} stroke="#15803d" strokeDasharray="4 3" />
        <path d={path} fill="none" stroke="#be123c" strokeWidth="2.5" />
        <circle cx={x(input.time)} cy={y(current)} r="4" fill="#be123c" stroke="white" strokeWidth="1.5" />
        <text x="42" y="16" fontSize="9" fill="#334155">Object temperature (°C)</text>
        <text x="190" y="120" fontSize="9" fill="#334155">Time (minutes)</text>
      </svg>
      <p><strong>At {input.time.toFixed(1)} min:</strong> object {current.toFixed(1)} °C · surrounding {input.surrounding.toFixed(1)} °C</p>
      <p className="lx-meta">Dashed line: surrounding temperature.</p>
    </section>
  );
};
