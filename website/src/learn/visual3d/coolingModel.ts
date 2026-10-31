/** Newton's cooling model: temperatures in °C, time in minutes, rate in min⁻¹. */
export interface CoolingInputs { initial: number; surrounding: number; rate: number; time: number }

export function coolingAt({ initial, surrounding, rate, time }: CoolingInputs): number {
  return surrounding + (initial - surrounding) * Math.exp(-rate * time);
}

export function coolingInputs(values: Record<string, number>): CoolingInputs {
  return { initial: values.T0 ?? 160, surrounding: values.Tm ?? 25, rate: values.kMag ?? 0.12, time: values.timeMin ?? 8 };
}
