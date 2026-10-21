export interface SimulatorStep {
  stepIndex: number;
  lineNumber: number; // 1-based index in the code snippet
  lineContent: string;
  variables: Record<string, string | number | boolean>;
  changedVars?: string[]; // variable names that changed on this step
  arrays?: Record<string, (string | number)[]>;
  activeArrayIndices?: Record<string, number>; // arrayName -> active index
  conditionEval?: {
    expression: string;
    evaluatedTo: string;
    result: boolean | string;
  };
  consoleOutput: string[]; // accumulated console output lines
  newOutput?: string; // newly printed text on this step
  explanation: string; // 1-2 sentence beginner-friendly explanation
  iterationLabel?: string; // e.g. "Iteration 1", "Pass 3", "Initialization"
  trapWarning?: string; // highlights classic exam traps (e.g. integer division, garbage memory)
}

export interface SimulatorTrace {
  id: string;
  title: string;
  courseId?: string;
  code: string;
  steps: SimulatorStep[];
  correctOptionIndex?: number;
  options?: string[];
  whyWrong?: Record<string, string | undefined> | Partial<Record<string, string>>;
  coreConcept?: string;
  commonTrap?: string;
}
