import { PracticeQuestion } from '../types';

export interface CompanionDrillQuestion extends PracticeQuestion {
  methodId: 'separable' | 'linear_if' | 'exact' | 'non_exact' | 'bernoulli' | 'homogeneous' | 'linear_arg' | 'applications' | 'complex_numbers' | 'second_order' | 'formulas';
}

export const ENGR213_MIDTERM_DRILL_BANKS: Record<string, CompanionDrillQuestion[]> = {
  "separable": [
    {
      "id": "sep_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #1",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{6x}{y}, \\quad y(0) = -2$.",
      "options": [
        "$y(x) = -\\sqrt{6x^2 + 4}$",
        "$y(x) = \\sqrt{6x^2 + 4}$",
        "$y(x) = -\\sqrt{3x^2 + 4}$",
        "$y(x) = -\\sqrt{6x + 4}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 6x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 6x\\,dx \\implies \\frac{y^2}{2} = 3x^2 + C_1 \\implies y^2 = 6x^2 + C$.",
          "Step 3: Apply $y(0) = -2$: $(-2)^2 = 0 + C \\implies C = 4$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{6x^2 + 4}$. Since $y(0) = -2 < 0$, choose the negative root: $y(x) = -\\sqrt{6x^2 + 4}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 1"
      }
    },
    {
      "id": "sep_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #2",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{8x}{y}, \\quad y(0) = -3$.",
      "options": [
        "$y(x) = -\\sqrt{4x^2 + 9}$",
        "$y(x) = \\sqrt{8x^2 + 9}$",
        "$y(x) = -\\sqrt{8x^2 + 9}$",
        "$y(x) = -\\sqrt{8x + 9}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 8x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 8x\\,dx \\implies \\frac{y^2}{2} = 4x^2 + C_1 \\implies y^2 = 8x^2 + C$.",
          "Step 3: Apply $y(0) = -3$: $(-3)^2 = 0 + C \\implies C = 9$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{8x^2 + 9}$. Since $y(0) = -3 < 0$, choose the negative root: $y(x) = -\\sqrt{8x^2 + 9}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 2"
      }
    },
    {
      "id": "sep_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #3",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{10x}{y}, \\quad y(0) = -4$.",
      "options": [
        "$y(x) = -\\sqrt{10x + 16}$",
        "$y(x) = \\sqrt{10x^2 + 16}$",
        "$y(x) = -\\sqrt{5x^2 + 16}$",
        "$y(x) = -\\sqrt{10x^2 + 16}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 10x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 10x\\,dx \\implies \\frac{y^2}{2} = 5x^2 + C_1 \\implies y^2 = 10x^2 + C$.",
          "Step 3: Apply $y(0) = -4$: $(-4)^2 = 0 + C \\implies C = 16$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{10x^2 + 16}$. Since $y(0) = -4 < 0$, choose the negative root: $y(x) = -\\sqrt{10x^2 + 16}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 3"
      }
    },
    {
      "id": "sep_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #4",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{12x}{y}, \\quad y(0) = -5$.",
      "options": [
        "$y(x) = -\\sqrt{6x^2 + 25}$",
        "$y(x) = \\sqrt{12x^2 + 25}$",
        "$y(x) = -\\sqrt{12x^2 + 25}$",
        "$y(x) = -\\sqrt{12x + 25}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 12x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 12x\\,dx \\implies \\frac{y^2}{2} = 6x^2 + C_1 \\implies y^2 = 12x^2 + C$.",
          "Step 3: Apply $y(0) = -5$: $(-5)^2 = 0 + C \\implies C = 25$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{12x^2 + 25}$. Since $y(0) = -5 < 0$, choose the negative root: $y(x) = -\\sqrt{12x^2 + 25}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 4"
      }
    },
    {
      "id": "sep_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #5",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{14x}{y}, \\quad y(0) = -1$.",
      "options": [
        "$y(x) = -\\sqrt{14x + 1}$",
        "$y(x) = \\sqrt{14x^2 + 1}$",
        "$y(x) = -\\sqrt{7x^2 + 1}$",
        "$y(x) = -\\sqrt{14x^2 + 1}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 14x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 14x\\,dx \\implies \\frac{y^2}{2} = 7x^2 + C_1 \\implies y^2 = 14x^2 + C$.",
          "Step 3: Apply $y(0) = -1$: $(-1)^2 = 0 + C \\implies C = 1$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{14x^2 + 1}$. Since $y(0) = -1 < 0$, choose the negative root: $y(x) = -\\sqrt{14x^2 + 1}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 5"
      }
    },
    {
      "id": "sep_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #6",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{16x}{y}, \\quad y(0) = -2$.",
      "options": [
        "$y(x) = -\\sqrt{8x^2 + 4}$",
        "$y(x) = \\sqrt{16x^2 + 4}$",
        "$y(x) = -\\sqrt{16x^2 + 4}$",
        "$y(x) = -\\sqrt{16x + 4}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 16x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 16x\\,dx \\implies \\frac{y^2}{2} = 8x^2 + C_1 \\implies y^2 = 16x^2 + C$.",
          "Step 3: Apply $y(0) = -2$: $(-2)^2 = 0 + C \\implies C = 4$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{16x^2 + 4}$. Since $y(0) = -2 < 0$, choose the negative root: $y(x) = -\\sqrt{16x^2 + 4}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 6"
      }
    },
    {
      "id": "sep_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #7",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{4x}{y}, \\quad y(0) = -3$.",
      "options": [
        "$y(x) = -\\sqrt{4x + 9}$",
        "$y(x) = \\sqrt{4x^2 + 9}$",
        "$y(x) = -\\sqrt{2x^2 + 9}$",
        "$y(x) = -\\sqrt{4x^2 + 9}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 4x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 4x\\,dx \\implies \\frac{y^2}{2} = 2x^2 + C_1 \\implies y^2 = 4x^2 + C$.",
          "Step 3: Apply $y(0) = -3$: $(-3)^2 = 0 + C \\implies C = 9$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{4x^2 + 9}$. Since $y(0) = -3 < 0$, choose the negative root: $y(x) = -\\sqrt{4x^2 + 9}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 7"
      }
    },
    {
      "id": "sep_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #8",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{6x}{y}, \\quad y(0) = -4$.",
      "options": [
        "$y(x) = -\\sqrt{6x + 16}$",
        "$y(x) = \\sqrt{6x^2 + 16}$",
        "$y(x) = -\\sqrt{3x^2 + 16}$",
        "$y(x) = -\\sqrt{6x^2 + 16}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 6x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 6x\\,dx \\implies \\frac{y^2}{2} = 3x^2 + C_1 \\implies y^2 = 6x^2 + C$.",
          "Step 3: Apply $y(0) = -4$: $(-4)^2 = 0 + C \\implies C = 16$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{6x^2 + 16}$. Since $y(0) = -4 < 0$, choose the negative root: $y(x) = -\\sqrt{6x^2 + 16}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 8"
      }
    },
    {
      "id": "sep_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #9",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{8x}{y}, \\quad y(0) = -5$.",
      "options": [
        "$y(x) = -\\sqrt{8x + 25}$",
        "$y(x) = \\sqrt{8x^2 + 25}$",
        "$y(x) = -\\sqrt{4x^2 + 25}$",
        "$y(x) = -\\sqrt{8x^2 + 25}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 8x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 8x\\,dx \\implies \\frac{y^2}{2} = 4x^2 + C_1 \\implies y^2 = 8x^2 + C$.",
          "Step 3: Apply $y(0) = -5$: $(-5)^2 = 0 + C \\implies C = 25$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{8x^2 + 25}$. Since $y(0) = -5 < 0$, choose the negative root: $y(x) = -\\sqrt{8x^2 + 25}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 9"
      }
    },
    {
      "id": "sep_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable IVP \u00b7 Negative Branch #10",
      "difficulty": "Midterm Level",
      "question": "Solve the separable initial value problem: $\\frac{dy}{dx} = \\frac{10x}{y}, \\quad y(0) = -1$.",
      "options": [
        "$y(x) = -\\sqrt{5x^2 + 1}$",
        "$y(x) = \\sqrt{10x^2 + 1}$",
        "$y(x) = -\\sqrt{10x^2 + 1}$",
        "$y(x) = -\\sqrt{10x + 1}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "When solving $y^2 = f(x)$, always select the sign that matches the initial condition $y(x_0)$.",
        "stepByStep": [
          "Step 1: Separate variables: $y\\,dy = 10x\\,dx$.",
          "Step 2: Integrate both sides: $\\int y\\,dy = \\int 10x\\,dx \\implies \\frac{y^2}{2} = 5x^2 + C_1 \\implies y^2 = 10x^2 + C$.",
          "Step 3: Apply $y(0) = -1$: $(-1)^2 = 0 + C \\implies C = 1$.",
          "Step 4: Take the square root: $y = \\pm\\sqrt{10x^2 + 1}$. Since $y(0) = -1 < 0$, choose the negative root: $y(x) = -\\sqrt{10x^2 + 1}$."
        ],
        "commonTrap": "Forgetting to choose the negative root! When y(0) is negative, the solution MUST be the negative square root branch.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Example 10"
      }
    },
    {
      "id": "sep_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #11",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 6x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\ln(6x^2 + 1)$",
        "$y(x) = e^{6x^2 / 2}$",
        "$y(x) = \\ln\\left(\\frac{6}{2}x^2 + 1\\right)$",
        "$y(x) = \\frac{6}{2}x^2$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 6x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 6x\\,dx \\implies e^y = \\frac{6}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{6}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 1"
      }
    },
    {
      "id": "sep_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #12",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 7x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\ln(7x^2 + 1)$",
        "$y(x) = e^{7x^2 / 2}$",
        "$y(x) = \\ln\\left(\\frac{7}{2}x^2 + 1\\right)$",
        "$y(x) = \\frac{7}{2}x^2$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 7x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 7x\\,dx \\implies e^y = \\frac{7}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{7}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 2"
      }
    },
    {
      "id": "sep_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #13",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 8x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\frac{8}{2}x^2$",
        "$y(x) = e^{8x^2 / 2}$",
        "$y(x) = \\ln(8x^2 + 1)$",
        "$y(x) = \\ln\\left(\\frac{8}{2}x^2 + 1\\right)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 8x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 8x\\,dx \\implies e^y = \\frac{8}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{8}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 3"
      }
    },
    {
      "id": "sep_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #14",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 2x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\ln(2x^2 + 1)$",
        "$y(x) = e^{2x^2 / 2}$",
        "$y(x) = \\ln\\left(\\frac{2}{2}x^2 + 1\\right)$",
        "$y(x) = \\frac{2}{2}x^2$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 2x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 2x\\,dx \\implies e^y = \\frac{2}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{2}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 4"
      }
    },
    {
      "id": "sep_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #15",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 3x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\frac{3}{2}x^2$",
        "$y(x) = e^{3x^2 / 2}$",
        "$y(x) = \\ln(3x^2 + 1)$",
        "$y(x) = \\ln\\left(\\frac{3}{2}x^2 + 1\\right)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 3x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 3x\\,dx \\implies e^y = \\frac{3}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{3}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 5"
      }
    },
    {
      "id": "sep_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #16",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 4x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\frac{4}{2}x^2$",
        "$y(x) = e^{4x^2 / 2}$",
        "$y(x) = \\ln(4x^2 + 1)$",
        "$y(x) = \\ln\\left(\\frac{4}{2}x^2 + 1\\right)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 4x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 4x\\,dx \\implies e^y = \\frac{4}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{4}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 6"
      }
    },
    {
      "id": "sep_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #17",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 5x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\frac{5}{2}x^2$",
        "$y(x) = e^{5x^2 / 2}$",
        "$y(x) = \\ln(5x^2 + 1)$",
        "$y(x) = \\ln\\left(\\frac{5}{2}x^2 + 1\\right)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 5x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 5x\\,dx \\implies e^y = \\frac{5}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{5}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 7"
      }
    },
    {
      "id": "sep_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #18",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 6x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = e^{6x^2 / 2}$",
        "$y(x) = \\ln\\left(\\frac{6}{2}x^2 + 1\\right)$",
        "$y(x) = \\ln(6x^2 + 1)$",
        "$y(x) = \\frac{6}{2}x^2$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 6x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 6x\\,dx \\implies e^y = \\frac{6}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{6}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 8"
      }
    },
    {
      "id": "sep_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #19",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 7x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\ln(7x^2 + 1)$",
        "$y(x) = e^{7x^2 / 2}$",
        "$y(x) = \\ln\\left(\\frac{7}{2}x^2 + 1\\right)$",
        "$y(x) = \\frac{7}{2}x^2$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 7x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 7x\\,dx \\implies e^y = \\frac{7}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{7}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 9"
      }
    },
    {
      "id": "sep_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Exponential ODE #20",
      "difficulty": "Midterm Level",
      "question": "Solve the initial value problem: $\\frac{dy}{dx} = 8x e^{-y}, \\quad y(0) = 0$.",
      "options": [
        "$y(x) = \\ln\\left(\\frac{8}{2}x^2 + 1\\right)$",
        "$y(x) = e^{8x^2 / 2}$",
        "$y(x) = \\ln(8x^2 + 1)$",
        "$y(x) = \\frac{8}{2}x^2$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Exponentials in denominators become positive exponentials in the numerator: $1/e^{-y} = e^y$.",
        "stepByStep": [
          "Step 1: Separate variables: $e^y\\,dy = 8x\\,dx$.",
          "Step 2: Integrate both sides: $\\int e^y\\,dy = \\int 8x\\,dx \\implies e^y = \\frac{8}{2}x^2 + C$.",
          "Step 3: Apply $y(0) = 0$: $e^0 = 0 + C \\implies C = 1$.",
          "Step 4: Take natural log: $y(x) = \\ln\\left(\\frac{8}{2}x^2 + 1\\right)$."
        ],
        "commonTrap": "Multiplying by e^{-y} on the LHS instead of dividing by e^{-y} (which is e^y dy).",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Exponential Variant 10"
      }
    },
    {
      "id": "sep_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #21",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 2(1 + y^2)$.",
      "options": [
        "$y(x) = \\frac{1}{2x + C}$",
        "$y(x) = \\arctan(2x + C)$",
        "$y(x) = \\tan(2x + C)$",
        "$y(x) = \\sin(2x + C)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 2\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 2\\,dx \\implies \\arctan(y) = 2x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(2x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 1"
      }
    },
    {
      "id": "sep_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #22",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 3(1 + y^2)$.",
      "options": [
        "$y(x) = \\arctan(3x + C)$",
        "$y(x) = \\tan(3x + C)$",
        "$y(x) = \\frac{1}{3x + C}$",
        "$y(x) = \\sin(3x + C)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 3\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 3\\,dx \\implies \\arctan(y) = 3x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(3x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 2"
      }
    },
    {
      "id": "sep_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #23",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 4(1 + y^2)$.",
      "options": [
        "$y(x) = \\frac{1}{4x + C}$",
        "$y(x) = \\arctan(4x + C)$",
        "$y(x) = \\tan(4x + C)$",
        "$y(x) = \\sin(4x + C)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 4\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 4\\,dx \\implies \\arctan(y) = 4x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(4x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 3"
      }
    },
    {
      "id": "sep_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #24",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 5(1 + y^2)$.",
      "options": [
        "$y(x) = \\sin(5x + C)$",
        "$y(x) = \\arctan(5x + C)$",
        "$y(x) = \\frac{1}{5x + C}$",
        "$y(x) = \\tan(5x + C)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 5\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 5\\,dx \\implies \\arctan(y) = 5x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(5x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 4"
      }
    },
    {
      "id": "sep_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #25",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 6(1 + y^2)$.",
      "options": [
        "$y(x) = \\tan(6x + C)$",
        "$y(x) = \\arctan(6x + C)$",
        "$y(x) = \\frac{1}{6x + C}$",
        "$y(x) = \\sin(6x + C)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 6\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 6\\,dx \\implies \\arctan(y) = 6x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(6x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 5"
      }
    },
    {
      "id": "sep_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #26",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 7(1 + y^2)$.",
      "options": [
        "$y(x) = \\tan(7x + C)$",
        "$y(x) = \\arctan(7x + C)$",
        "$y(x) = \\frac{1}{7x + C}$",
        "$y(x) = \\sin(7x + C)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 7\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 7\\,dx \\implies \\arctan(y) = 7x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(7x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 6"
      }
    },
    {
      "id": "sep_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #27",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 8(1 + y^2)$.",
      "options": [
        "$y(x) = \\sin(8x + C)$",
        "$y(x) = \\arctan(8x + C)$",
        "$y(x) = \\frac{1}{8x + C}$",
        "$y(x) = \\tan(8x + C)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 8\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 8\\,dx \\implies \\arctan(y) = 8x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(8x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 7"
      }
    },
    {
      "id": "sep_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #28",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 2(1 + y^2)$.",
      "options": [
        "$y(x) = \\frac{1}{2x + C}$",
        "$y(x) = \\arctan(2x + C)$",
        "$y(x) = \\tan(2x + C)$",
        "$y(x) = \\sin(2x + C)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 2\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 2\\,dx \\implies \\arctan(y) = 2x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(2x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 8"
      }
    },
    {
      "id": "sep_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #29",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 3(1 + y^2)$.",
      "options": [
        "$y(x) = \\tan(3x + C)$",
        "$y(x) = \\arctan(3x + C)$",
        "$y(x) = \\frac{1}{3x + C}$",
        "$y(x) = \\sin(3x + C)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 3\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 3\\,dx \\implies \\arctan(y) = 3x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(3x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 9"
      }
    },
    {
      "id": "sep_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Separable Arctan Form #30",
      "difficulty": "Midterm Level",
      "question": "Find the general solution of $\\frac{dy}{dx} = 4(1 + y^2)$.",
      "options": [
        "$y(x) = \\arctan(4x + C)$",
        "$y(x) = \\tan(4x + C)$",
        "$y(x) = \\frac{1}{4x + C}$",
        "$y(x) = \\sin(4x + C)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The integral of $1/(1+y^2)$ is $\\arctan(y)$. Isolating $y$ requires taking $\\tan(\\dots)$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{1 + y^2} = 4\\,dx$.",
          "Step 2: Integrate both sides: $\\int \\frac{dy}{1 + y^2} = \\int 4\\,dx \\implies \\arctan(y) = 4x + C$.",
          "Step 3: Invert arctan: $y(x) = \\tan(4x + C)$."
        ],
        "commonTrap": "Writing y = arctan(kx + C) instead of taking the tangent of both sides to isolate y.",
        "reference": "Lecture 2 \u2014 Separable Equations \u00b7 Trig Form 10"
      }
    },
    {
      "id": "sep_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #31",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 2$, what is the maximal interval of existence?",
      "options": [
        "$[-2, 2]$",
        "$(-\\infty, \\infty)$",
        "$(\\frac{1}{2}, \\infty)$",
        "$(-\\infty, \\frac{1}{2})$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 2$: $-\\frac{1}{2} = C \\implies C = -\\frac{1}{2}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{2} - x} = \\frac{2}{1 - 2x}$.",
          "Step 4: The solution blows up at $x = 1/2$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/2)$, the maximal interval is $(-\\infty, 1/2)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 1"
      }
    },
    {
      "id": "sep_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #32",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 3$, what is the maximal interval of existence?",
      "options": [
        "$(\\frac{1}{3}, \\infty)$",
        "$(-\\infty, \\infty)$",
        "$(-\\infty, \\frac{1}{3})$",
        "$[-3, 3]$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 3$: $-\\frac{1}{3} = C \\implies C = -\\frac{1}{3}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{3} - x} = \\frac{3}{1 - 3x}$.",
          "Step 4: The solution blows up at $x = 1/3$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/3)$, the maximal interval is $(-\\infty, 1/3)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 2"
      }
    },
    {
      "id": "sep_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #33",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 4$, what is the maximal interval of existence?",
      "options": [
        "$(\\frac{1}{4}, \\infty)$",
        "$(-\\infty, \\infty)$",
        "$(-\\infty, \\frac{1}{4})$",
        "$[-4, 4]$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 4$: $-\\frac{1}{4} = C \\implies C = -\\frac{1}{4}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{4} - x} = \\frac{4}{1 - 4x}$.",
          "Step 4: The solution blows up at $x = 1/4$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/4)$, the maximal interval is $(-\\infty, 1/4)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 3"
      }
    },
    {
      "id": "sep_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #34",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 5$, what is the maximal interval of existence?",
      "options": [
        "$(-\\infty, \\infty)$",
        "$(-\\infty, \\frac{1}{5})$",
        "$(\\frac{1}{5}, \\infty)$",
        "$[-5, 5]$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 5$: $-\\frac{1}{5} = C \\implies C = -\\frac{1}{5}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{5} - x} = \\frac{5}{1 - 5x}$.",
          "Step 4: The solution blows up at $x = 1/5$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/5)$, the maximal interval is $(-\\infty, 1/5)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 4"
      }
    },
    {
      "id": "sep_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #35",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 1$, what is the maximal interval of existence?",
      "options": [
        "$(-\\infty, \\frac{1}{1})$",
        "$(-\\infty, \\infty)$",
        "$(\\frac{1}{1}, \\infty)$",
        "$[-1, 1]$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 1$: $-\\frac{1}{1} = C \\implies C = -\\frac{1}{1}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{1} - x} = \\frac{1}{1 - 1x}$.",
          "Step 4: The solution blows up at $x = 1/1$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/1)$, the maximal interval is $(-\\infty, 1/1)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 5"
      }
    },
    {
      "id": "sep_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #36",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 2$, what is the maximal interval of existence?",
      "options": [
        "$(-\\infty, \\frac{1}{2})$",
        "$(-\\infty, \\infty)$",
        "$(\\frac{1}{2}, \\infty)$",
        "$[-2, 2]$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 2$: $-\\frac{1}{2} = C \\implies C = -\\frac{1}{2}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{2} - x} = \\frac{2}{1 - 2x}$.",
          "Step 4: The solution blows up at $x = 1/2$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/2)$, the maximal interval is $(-\\infty, 1/2)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 6"
      }
    },
    {
      "id": "sep_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #37",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 3$, what is the maximal interval of existence?",
      "options": [
        "$[-3, 3]$",
        "$(-\\infty, \\infty)$",
        "$(\\frac{1}{3}, \\infty)$",
        "$(-\\infty, \\frac{1}{3})$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 3$: $-\\frac{1}{3} = C \\implies C = -\\frac{1}{3}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{3} - x} = \\frac{3}{1 - 3x}$.",
          "Step 4: The solution blows up at $x = 1/3$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/3)$, the maximal interval is $(-\\infty, 1/3)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 7"
      }
    },
    {
      "id": "sep_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #38",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 4$, what is the maximal interval of existence?",
      "options": [
        "$[-4, 4]$",
        "$(-\\infty, \\infty)$",
        "$(\\frac{1}{4}, \\infty)$",
        "$(-\\infty, \\frac{1}{4})$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 4$: $-\\frac{1}{4} = C \\implies C = -\\frac{1}{4}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{4} - x} = \\frac{4}{1 - 4x}$.",
          "Step 4: The solution blows up at $x = 1/4$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/4)$, the maximal interval is $(-\\infty, 1/4)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 8"
      }
    },
    {
      "id": "sep_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #39",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 5$, what is the maximal interval of existence?",
      "options": [
        "$[-5, 5]$",
        "$(-\\infty, \\infty)$",
        "$(\\frac{1}{5}, \\infty)$",
        "$(-\\infty, \\frac{1}{5})$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 5$: $-\\frac{1}{5} = C \\implies C = -\\frac{1}{5}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{5} - x} = \\frac{5}{1 - 5x}$.",
          "Step 4: The solution blows up at $x = 1/5$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/5)$, the maximal interval is $(-\\infty, 1/5)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 9"
      }
    },
    {
      "id": "sep_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Maximal Interval of Existence #40",
      "difficulty": "Midterm Level",
      "question": "For the initial value problem $\\frac{dy}{dx} = y^2, \\quad y(0) = 1$, what is the maximal interval of existence?",
      "options": [
        "$(\\frac{1}{1}, \\infty)$",
        "$(-\\infty, \\infty)$",
        "$(-\\infty, \\frac{1}{1})$",
        "$[-1, 1]$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The maximal interval of existence must be an open interval containing the initial point $x_0$.",
        "stepByStep": [
          "Step 1: Separate variables: $\\frac{dy}{y^2} = dx \\implies -\\frac{1}{y} = x + C$.",
          "Step 2: Apply $y(0) = 1$: $-\\frac{1}{1} = C \\implies C = -\\frac{1}{1}$.",
          "Step 3: Solve for $y$: $y(x) = \\frac{1}{\\frac{1}{1} - x} = \\frac{1}{1 - 1x}$.",
          "Step 4: The solution blows up at $x = 1/1$. Since the initial point $x_0 = 0$ is in $(-\\infty, 1/1)$, the maximal interval is $(-\\infty, 1/1)$."
        ],
        "commonTrap": "Thinking solutions to ODEs always exist for all real x. Nonlinear ODEs often blow up in finite time!",
        "reference": "Lecture 2 \u2014 Interval of Definition \u00b7 Question 10"
      }
    },
    {
      "id": "sep_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #41",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 8)(y + 2)$?",
      "options": [
        "$y = 8$ and $y = -2$",
        "$y = 8$ only",
        "$y = 0$",
        "No singular solutions exist"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 8)(y + 2) = 0$.",
          "Step 3: Solve for $y$: $y = 8$ and $y = -2$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 1"
      }
    },
    {
      "id": "sep_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #42",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 2)(y + 3)$?",
      "options": [
        "$y = 0$",
        "$y = 2$ only",
        "$y = 2$ and $y = -3$",
        "No singular solutions exist"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 2)(y + 3) = 0$.",
          "Step 3: Solve for $y$: $y = 2$ and $y = -3$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 2"
      }
    },
    {
      "id": "sep_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #43",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 3)(y + 4)$?",
      "options": [
        "$y = 3$ and $y = -4$",
        "$y = 3$ only",
        "$y = 0$",
        "No singular solutions exist"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 3)(y + 4) = 0$.",
          "Step 3: Solve for $y$: $y = 3$ and $y = -4$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 3"
      }
    },
    {
      "id": "sep_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #44",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 4)(y + 5)$?",
      "options": [
        "No singular solutions exist",
        "$y = 4$ only",
        "$y = 0$",
        "$y = 4$ and $y = -5$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 4)(y + 5) = 0$.",
          "Step 3: Solve for $y$: $y = 4$ and $y = -5$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 4"
      }
    },
    {
      "id": "sep_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #45",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 5)(y + 1)$?",
      "options": [
        "$y = 5$ only",
        "$y = 5$ and $y = -1$",
        "$y = 0$",
        "No singular solutions exist"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 5)(y + 1) = 0$.",
          "Step 3: Solve for $y$: $y = 5$ and $y = -1$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 5"
      }
    },
    {
      "id": "sep_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #46",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 6)(y + 2)$?",
      "options": [
        "No singular solutions exist",
        "$y = 6$ only",
        "$y = 0$",
        "$y = 6$ and $y = -2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 6)(y + 2) = 0$.",
          "Step 3: Solve for $y$: $y = 6$ and $y = -2$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 6"
      }
    },
    {
      "id": "sep_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #47",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 7)(y + 3)$?",
      "options": [
        "$y = 0$",
        "$y = 7$ only",
        "$y = 7$ and $y = -3$",
        "No singular solutions exist"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 7)(y + 3) = 0$.",
          "Step 3: Solve for $y$: $y = 7$ and $y = -3$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 7"
      }
    },
    {
      "id": "sep_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #48",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 8)(y + 4)$?",
      "options": [
        "$y = 8$ only",
        "$y = 8$ and $y = -4$",
        "$y = 0$",
        "No singular solutions exist"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 8)(y + 4) = 0$.",
          "Step 3: Solve for $y$: $y = 8$ and $y = -4$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 8"
      }
    },
    {
      "id": "sep_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #49",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 2)(y + 5)$?",
      "options": [
        "$y = 0$",
        "$y = 2$ only",
        "$y = 2$ and $y = -5$",
        "No singular solutions exist"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 2)(y + 5) = 0$.",
          "Step 3: Solve for $y$: $y = 2$ and $y = -5$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 9"
      }
    },
    {
      "id": "sep_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "separable",
      "topic": "Equilibrium / Lost Solutions #50",
      "difficulty": "Midterm Level",
      "question": "Which constant functions are equilibrium (singular) solutions to $\\frac{dy}{dx} = (y - 3)(y + 1)$?",
      "options": [
        "No singular solutions exist",
        "$y = 3$ only",
        "$y = 0$",
        "$y = 3$ and $y = -1$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Any root of the RHS of $y' = f(y)$ is a constant equilibrium solution.",
        "stepByStep": [
          "Step 1: Equilibrium solutions occur where $\\frac{dy}{dx} = 0$.",
          "Step 2: Set $(y - 3)(y + 1) = 0$.",
          "Step 3: Solve for $y$: $y = 3$ and $y = -1$. Both satisfy the ODE identically with $dy/dx = 0$."
        ],
        "commonTrap": "Dividing by (y-k)(y+c) without checking that setting the denominator to zero yields valid solutions.",
        "reference": "Lecture 2 \u2014 Autonomous Critical Points \u00b7 Question 10"
      }
    }
  ],
  "linear_if": [
    {
      "id": "lin_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #1",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{3}{x}y = x^2$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{1}{x^3}$",
        "$\\mu(x) = x^3$",
        "$\\mu(x) = -x^3$",
        "$\\mu(x) = e^{-3x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{3}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{3}{x}\\,dx = -3\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-3\\ln(x) = \\ln(x^{-3})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-3})} = x^{-3} = \\frac{1}{x^3}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #1"
      }
    },
    {
      "id": "lin_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #2",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{4}{x}y = x^3$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{-4x}$",
        "$\\mu(x) = x^4$",
        "$\\mu(x) = -x^4$",
        "$\\mu(x) = \\frac{1}{x^4}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{4}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{4}{x}\\,dx = -4\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-4\\ln(x) = \\ln(x^{-4})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-4})} = x^{-4} = \\frac{1}{x^4}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #2"
      }
    },
    {
      "id": "lin_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #3",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{5}{x}y = x^4$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{-5x}$",
        "$\\mu(x) = x^5$",
        "$\\mu(x) = -x^5$",
        "$\\mu(x) = \\frac{1}{x^5}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{5}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{5}{x}\\,dx = -5\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-5\\ln(x) = \\ln(x^{-5})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-5})} = x^{-5} = \\frac{1}{x^5}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #3"
      }
    },
    {
      "id": "lin_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #4",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{6}{x}y = x^1$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{1}{x^6}$",
        "$\\mu(x) = x^6$",
        "$\\mu(x) = -x^6$",
        "$\\mu(x) = e^{-6x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{6}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{6}{x}\\,dx = -6\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-6\\ln(x) = \\ln(x^{-6})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-6})} = x^{-6} = \\frac{1}{x^6}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #4"
      }
    },
    {
      "id": "lin_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #5",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{7}{x}y = x^2$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{1}{x^7}$",
        "$\\mu(x) = x^7$",
        "$\\mu(x) = -x^7$",
        "$\\mu(x) = e^{-7x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{7}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{7}{x}\\,dx = -7\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-7\\ln(x) = \\ln(x^{-7})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-7})} = x^{-7} = \\frac{1}{x^7}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #5"
      }
    },
    {
      "id": "lin_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #6",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{2}{x}y = x^3$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{1}{x^2}$",
        "$\\mu(x) = x^2$",
        "$\\mu(x) = -x^2$",
        "$\\mu(x) = e^{-2x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{2}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{2}{x}\\,dx = -2\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-2\\ln(x) = \\ln(x^{-2})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-2})} = x^{-2} = \\frac{1}{x^2}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #6"
      }
    },
    {
      "id": "lin_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #7",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{3}{x}y = x^4$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = x^3$",
        "$\\mu(x) = \\frac{1}{x^3}$",
        "$\\mu(x) = -x^3$",
        "$\\mu(x) = e^{-3x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{3}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{3}{x}\\,dx = -3\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-3\\ln(x) = \\ln(x^{-3})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-3})} = x^{-3} = \\frac{1}{x^3}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #7"
      }
    },
    {
      "id": "lin_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #8",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{4}{x}y = x^1$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{1}{x^4}$",
        "$\\mu(x) = x^4$",
        "$\\mu(x) = -x^4$",
        "$\\mu(x) = e^{-4x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{4}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{4}{x}\\,dx = -4\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-4\\ln(x) = \\ln(x^{-4})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-4})} = x^{-4} = \\frac{1}{x^4}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #8"
      }
    },
    {
      "id": "lin_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #9",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{5}{x}y = x^2$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{1}{x^5}$",
        "$\\mu(x) = x^5$",
        "$\\mu(x) = -x^5$",
        "$\\mu(x) = e^{-5x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{5}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{5}{x}\\,dx = -5\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-5\\ln(x) = \\ln(x^{-5})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-5})} = x^{-5} = \\frac{1}{x^5}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #9"
      }
    },
    {
      "id": "lin_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #10",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{6}{x}y = x^3$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = x^6$",
        "$\\mu(x) = \\frac{1}{x^6}$",
        "$\\mu(x) = -x^6$",
        "$\\mu(x) = e^{-6x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{6}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{6}{x}\\,dx = -6\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-6\\ln(x) = \\ln(x^{-6})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-6})} = x^{-6} = \\frac{1}{x^6}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #10"
      }
    },
    {
      "id": "lin_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #11",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{7}{x}y = x^4$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{1}{x^7}$",
        "$\\mu(x) = x^7$",
        "$\\mu(x) = -x^7$",
        "$\\mu(x) = e^{-7x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{7}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{7}{x}\\,dx = -7\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-7\\ln(x) = \\ln(x^{-7})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-7})} = x^{-7} = \\frac{1}{x^7}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #11"
      }
    },
    {
      "id": "lin_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #12",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{2}{x}y = x^1$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = x^2$",
        "$\\mu(x) = \\frac{1}{x^2}$",
        "$\\mu(x) = -x^2$",
        "$\\mu(x) = e^{-2x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{2}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{2}{x}\\,dx = -2\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-2\\ln(x) = \\ln(x^{-2})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-2})} = x^{-2} = \\frac{1}{x^2}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #12"
      }
    },
    {
      "id": "lin_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #13",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{3}{x}y = x^2$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = -x^3$",
        "$\\mu(x) = x^3$",
        "$\\mu(x) = \\frac{1}{x^3}$",
        "$\\mu(x) = e^{-3x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{3}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{3}{x}\\,dx = -3\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-3\\ln(x) = \\ln(x^{-3})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-3})} = x^{-3} = \\frac{1}{x^3}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #13"
      }
    },
    {
      "id": "lin_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #14",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{4}{x}y = x^3$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = x^4$",
        "$\\mu(x) = \\frac{1}{x^4}$",
        "$\\mu(x) = -x^4$",
        "$\\mu(x) = e^{-4x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{4}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{4}{x}\\,dx = -4\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-4\\ln(x) = \\ln(x^{-4})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-4})} = x^{-4} = \\frac{1}{x^4}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #14"
      }
    },
    {
      "id": "lin_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Negative Sign Integrating Factor #15",
      "difficulty": "Midterm Level",
      "question": "For the linear ODE $y' - \\frac{5}{x}y = x^4$ ($x > 0$), what is the correct integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = -x^5$",
        "$\\mu(x) = x^5$",
        "$\\mu(x) = \\frac{1}{x^5}$",
        "$\\mu(x) = e^{-5x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Always lift the negative multiplier inside the log: $-k\\ln(x) = \\ln(x^{-k}) \\implies \\mu = 1/x^k$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = -\\frac{5}{x}$ (including the negative sign!).",
          "Step 2: Integrate $P(x)$: $\\int P(x)\\,dx = \\int -\\frac{5}{x}\\,dx = -5\\ln(x)$.",
          "Step 3: Absorb the negative sign into the exponent: $-5\\ln(x) = \\ln(x^{-5})$.",
          "Step 4: Compute $\\mu(x) = e^{\\ln(x^{-5})} = x^{-5} = \\frac{1}{x^5}$."
        ],
        "commonTrap": "Dropping the negative sign in P(x) = -k/x. e^{-k ln x} is 1/x^k, NEVER x^k or -x^k!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Integrating Factor #15"
      }
    },
    {
      "id": "lin_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #16",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 6y = x^1$?",
      "options": [
        "$y' + \\frac{6}{x}y = x^{0}$",
        "$y' + 6y = x^1$",
        "$y' + \\frac{6}{x}y = x^1$",
        "$y' + \\frac{x}{6}y = x^{0}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{6y}{x} = \\frac{x^1}{x}$.",
          "Step 3: Simplify: $y' + \\frac{6}{x}y = x^{0}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #1"
      }
    },
    {
      "id": "lin_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #17",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 7y = x^2$?",
      "options": [
        "$y' + \\frac{7}{x}y = x^2$",
        "$y' + 7y = x^2$",
        "$y' + \\frac{7}{x}y = x^{1}$",
        "$y' + \\frac{x}{7}y = x^{1}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{7y}{x} = \\frac{x^2}{x}$.",
          "Step 3: Simplify: $y' + \\frac{7}{x}y = x^{1}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #2"
      }
    },
    {
      "id": "lin_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #18",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 2y = x^3$?",
      "options": [
        "$y' + 2y = x^3$",
        "$y' + \\frac{2}{x}y = x^{2}$",
        "$y' + \\frac{2}{x}y = x^3$",
        "$y' + \\frac{x}{2}y = x^{2}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{2y}{x} = \\frac{x^3}{x}$.",
          "Step 3: Simplify: $y' + \\frac{2}{x}y = x^{2}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #3"
      }
    },
    {
      "id": "lin_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #19",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 3y = x^4$?",
      "options": [
        "$y' + \\frac{3}{x}y = x^{3}$",
        "$y' + 3y = x^4$",
        "$y' + \\frac{3}{x}y = x^4$",
        "$y' + \\frac{x}{3}y = x^{3}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{3y}{x} = \\frac{x^4}{x}$.",
          "Step 3: Simplify: $y' + \\frac{3}{x}y = x^{3}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #4"
      }
    },
    {
      "id": "lin_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #20",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 4y = x^1$?",
      "options": [
        "$y' + \\frac{x}{4}y = x^{0}$",
        "$y' + 4y = x^1$",
        "$y' + \\frac{4}{x}y = x^1$",
        "$y' + \\frac{4}{x}y = x^{0}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{4y}{x} = \\frac{x^1}{x}$.",
          "Step 3: Simplify: $y' + \\frac{4}{x}y = x^{0}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #5"
      }
    },
    {
      "id": "lin_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #21",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 5y = x^2$?",
      "options": [
        "$y' + \\frac{x}{5}y = x^{1}$",
        "$y' + 5y = x^2$",
        "$y' + \\frac{5}{x}y = x^2$",
        "$y' + \\frac{5}{x}y = x^{1}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{5y}{x} = \\frac{x^2}{x}$.",
          "Step 3: Simplify: $y' + \\frac{5}{x}y = x^{1}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #6"
      }
    },
    {
      "id": "lin_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #22",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 6y = x^3$?",
      "options": [
        "$y' + \\frac{6}{x}y = x^3$",
        "$y' + 6y = x^3$",
        "$y' + \\frac{6}{x}y = x^{2}$",
        "$y' + \\frac{x}{6}y = x^{2}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{6y}{x} = \\frac{x^3}{x}$.",
          "Step 3: Simplify: $y' + \\frac{6}{x}y = x^{2}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #7"
      }
    },
    {
      "id": "lin_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #23",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 7y = x^4$?",
      "options": [
        "$y' + \\frac{7}{x}y = x^{3}$",
        "$y' + 7y = x^4$",
        "$y' + \\frac{7}{x}y = x^4$",
        "$y' + \\frac{x}{7}y = x^{3}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{7y}{x} = \\frac{x^4}{x}$.",
          "Step 3: Simplify: $y' + \\frac{7}{x}y = x^{3}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #8"
      }
    },
    {
      "id": "lin_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #24",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 2y = x^1$?",
      "options": [
        "$y' + 2y = x^1$",
        "$y' + \\frac{2}{x}y = x^{0}$",
        "$y' + \\frac{2}{x}y = x^1$",
        "$y' + \\frac{x}{2}y = x^{0}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{2y}{x} = \\frac{x^1}{x}$.",
          "Step 3: Simplify: $y' + \\frac{2}{x}y = x^{0}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #9"
      }
    },
    {
      "id": "lin_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #25",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 3y = x^2$?",
      "options": [
        "$y' + \\frac{x}{3}y = x^{1}$",
        "$y' + 3y = x^2$",
        "$y' + \\frac{3}{x}y = x^2$",
        "$y' + \\frac{3}{x}y = x^{1}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{3y}{x} = \\frac{x^2}{x}$.",
          "Step 3: Simplify: $y' + \\frac{3}{x}y = x^{1}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #10"
      }
    },
    {
      "id": "lin_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #26",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 4y = x^3$?",
      "options": [
        "$y' + \\frac{x}{4}y = x^{2}$",
        "$y' + 4y = x^3$",
        "$y' + \\frac{4}{x}y = x^3$",
        "$y' + \\frac{4}{x}y = x^{2}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{4y}{x} = \\frac{x^3}{x}$.",
          "Step 3: Simplify: $y' + \\frac{4}{x}y = x^{2}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #11"
      }
    },
    {
      "id": "lin_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #27",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 5y = x^4$?",
      "options": [
        "$y' + \\frac{x}{5}y = x^{3}$",
        "$y' + 5y = x^4$",
        "$y' + \\frac{5}{x}y = x^4$",
        "$y' + \\frac{5}{x}y = x^{3}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{5y}{x} = \\frac{x^4}{x}$.",
          "Step 3: Simplify: $y' + \\frac{5}{x}y = x^{3}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #12"
      }
    },
    {
      "id": "lin_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #28",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 6y = x^1$?",
      "options": [
        "$y' + 6y = x^1$",
        "$y' + \\frac{6}{x}y = x^{0}$",
        "$y' + \\frac{6}{x}y = x^1$",
        "$y' + \\frac{x}{6}y = x^{0}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{6y}{x} = \\frac{x^1}{x}$.",
          "Step 3: Simplify: $y' + \\frac{6}{x}y = x^{0}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #13"
      }
    },
    {
      "id": "lin_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #29",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 7y = x^2$?",
      "options": [
        "$y' + \\frac{7}{x}y = x^{1}$",
        "$y' + 7y = x^2$",
        "$y' + \\frac{7}{x}y = x^2$",
        "$y' + \\frac{x}{7}y = x^{1}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{7y}{x} = \\frac{x^2}{x}$.",
          "Step 3: Simplify: $y' + \\frac{7}{x}y = x^{1}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #14"
      }
    },
    {
      "id": "lin_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Linear Normalization First Step #30",
      "difficulty": "Midterm Level",
      "question": "What is the required standard form before finding the integrating factor for $x y' + 2y = x^3$?",
      "options": [
        "$y' + \\frac{x}{2}y = x^{2}$",
        "$y' + 2y = x^3$",
        "$y' + \\frac{2}{x}y = x^3$",
        "$y' + \\frac{2}{x}y = x^{2}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The integrating factor formula $\\mu = e^{\\int P}$ is ONLY valid after dividing by the coefficient of $y'$.",
        "stepByStep": [
          "Step 1: The standard linear form requires the coefficient of $y'$ to be 1: $y' + P(x)y = Q(x)$.",
          "Step 2: Divide every term by the leading coefficient $x$: $\\frac{x y'}{x} + \\frac{2y}{x} = \\frac{x^3}{x}$.",
          "Step 3: Simplify: $y' + \\frac{2}{x}y = x^{2}$."
        ],
        "commonTrap": "Attempting to read P(x) = k directly without dividing through by x first!",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Normalization Rule #15"
      }
    },
    {
      "id": "lin_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #31",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^3(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\sec(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sin(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #1"
      }
    },
    {
      "id": "lin_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #32",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^4(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\sin(x)$",
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sec(x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #2"
      }
    },
    {
      "id": "lin_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #33",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^5(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\sec(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sin(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #3"
      }
    },
    {
      "id": "lin_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #34",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^6(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\sec(x)$",
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sin(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #4"
      }
    },
    {
      "id": "lin_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #35",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^7(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\sec(x)$",
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sin(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #5"
      }
    },
    {
      "id": "lin_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #36",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^2(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\sec(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sin(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #6"
      }
    },
    {
      "id": "lin_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #37",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^3(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\sec(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sin(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #7"
      }
    },
    {
      "id": "lin_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #38",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^4(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\sin(x)$",
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sec(x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #8"
      }
    },
    {
      "id": "lin_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #39",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^5(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\sec(x)$",
        "$\\mu(x) = \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #9"
      }
    },
    {
      "id": "lin_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Trig Integrating Factor #40",
      "difficulty": "Midterm Level",
      "question": "What is the integrating factor $\\mu(x)$ for $y' + \\tan(x)y = \\cos^6(x)$ on $(-\\pi/2, \\pi/2)$?",
      "options": [
        "$\\mu(x) = \\sin(x)$",
        "$\\mu(x) = \\cos(x)$",
        "$\\mu(x) = \\ln|\\sec x|$",
        "$\\mu(x) = \\sec(x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "$\\int \\tan x dx = \\ln|\\sec x|$, so $\\mu(x) = \\sec(x)$.",
        "stepByStep": [
          "Step 1: Identify $P(x) = \\tan(x)$.",
          "Step 2: Compute $\\int P(x)\\,dx = \\int \\tan(x)\\,dx = \\ln|\\sec(x)|$.",
          "Step 3: Compute $\\mu(x) = e^{\\ln|\\sec(x)|} = \\sec(x)$."
        ],
        "commonTrap": "Confusing the integral of tan(x) with -ln|cos(x)| and making a sign error: e^{-ln|cos x|} = 1/cos x = sec x.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Trig Factor #10"
      }
    },
    {
      "id": "lin_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #41",
      "difficulty": "Midterm Level",
      "question": "For $y' + 7y = 2$, after multiplying by $\\mu(x) = e^{7x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[e^{7x} y] = 2e^{7x}$",
        "$\\frac{d}{dx}[e^{-7x} y] = 2$",
        "$\\frac{d}{dx}[y] = 2e^{7x}$",
        "$\\frac{d}{dx}[7 e^{7x} y] = 2e^{7x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{7x} y' + 7e^{7x} y = 2e^{7x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{7x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #1"
      }
    },
    {
      "id": "lin_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #42",
      "difficulty": "Midterm Level",
      "question": "For $y' + 2y = 3$, after multiplying by $\\mu(x) = e^{2x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[y] = 3e^{2x}$",
        "$\\frac{d}{dx}[e^{-2x} y] = 3$",
        "$\\frac{d}{dx}[e^{2x} y] = 3e^{2x}$",
        "$\\frac{d}{dx}[2 e^{2x} y] = 3e^{2x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{2x} y' + 2e^{2x} y = 3e^{2x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{2x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #2"
      }
    },
    {
      "id": "lin_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #43",
      "difficulty": "Midterm Level",
      "question": "For $y' + 3y = 4$, after multiplying by $\\mu(x) = e^{3x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[y] = 4e^{3x}$",
        "$\\frac{d}{dx}[e^{-3x} y] = 4$",
        "$\\frac{d}{dx}[e^{3x} y] = 4e^{3x}$",
        "$\\frac{d}{dx}[3 e^{3x} y] = 4e^{3x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{3x} y' + 3e^{3x} y = 4e^{3x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{3x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #3"
      }
    },
    {
      "id": "lin_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #44",
      "difficulty": "Midterm Level",
      "question": "For $y' + 4y = 1$, after multiplying by $\\mu(x) = e^{4x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[y] = 1e^{4x}$",
        "$\\frac{d}{dx}[e^{-4x} y] = 1$",
        "$\\frac{d}{dx}[e^{4x} y] = 1e^{4x}$",
        "$\\frac{d}{dx}[4 e^{4x} y] = 1e^{4x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{4x} y' + 4e^{4x} y = 1e^{4x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{4x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #4"
      }
    },
    {
      "id": "lin_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #45",
      "difficulty": "Midterm Level",
      "question": "For $y' + 5y = 2$, after multiplying by $\\mu(x) = e^{5x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[e^{-5x} y] = 2$",
        "$\\frac{d}{dx}[e^{5x} y] = 2e^{5x}$",
        "$\\frac{d}{dx}[y] = 2e^{5x}$",
        "$\\frac{d}{dx}[5 e^{5x} y] = 2e^{5x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{5x} y' + 5e^{5x} y = 2e^{5x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{5x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #5"
      }
    },
    {
      "id": "lin_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #46",
      "difficulty": "Midterm Level",
      "question": "For $y' + 6y = 3$, after multiplying by $\\mu(x) = e^{6x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[6 e^{6x} y] = 3e^{6x}$",
        "$\\frac{d}{dx}[e^{-6x} y] = 3$",
        "$\\frac{d}{dx}[y] = 3e^{6x}$",
        "$\\frac{d}{dx}[e^{6x} y] = 3e^{6x}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{6x} y' + 6e^{6x} y = 3e^{6x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{6x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #6"
      }
    },
    {
      "id": "lin_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #47",
      "difficulty": "Midterm Level",
      "question": "For $y' + 7y = 4$, after multiplying by $\\mu(x) = e^{7x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[e^{7x} y] = 4e^{7x}$",
        "$\\frac{d}{dx}[e^{-7x} y] = 4$",
        "$\\frac{d}{dx}[y] = 4e^{7x}$",
        "$\\frac{d}{dx}[7 e^{7x} y] = 4e^{7x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{7x} y' + 7e^{7x} y = 4e^{7x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{7x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #7"
      }
    },
    {
      "id": "lin_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #48",
      "difficulty": "Midterm Level",
      "question": "For $y' + 2y = 1$, after multiplying by $\\mu(x) = e^{2x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[y] = 1e^{2x}$",
        "$\\frac{d}{dx}[e^{-2x} y] = 1$",
        "$\\frac{d}{dx}[e^{2x} y] = 1e^{2x}$",
        "$\\frac{d}{dx}[2 e^{2x} y] = 1e^{2x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{2x} y' + 2e^{2x} y = 1e^{2x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{2x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #8"
      }
    },
    {
      "id": "lin_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #49",
      "difficulty": "Midterm Level",
      "question": "For $y' + 3y = 2$, after multiplying by $\\mu(x) = e^{3x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[y] = 2e^{3x}$",
        "$\\frac{d}{dx}[e^{-3x} y] = 2$",
        "$\\frac{d}{dx}[e^{3x} y] = 2e^{3x}$",
        "$\\frac{d}{dx}[3 e^{3x} y] = 2e^{3x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{3x} y' + 3e^{3x} y = 2e^{3x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{3x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #9"
      }
    },
    {
      "id": "lin_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_if",
      "topic": "Reverse Product Rule Collapse #50",
      "difficulty": "Midterm Level",
      "question": "For $y' + 4y = 3$, after multiplying by $\\mu(x) = e^{4x}$, how does the LHS collapse?",
      "options": [
        "$\\frac{d}{dx}[e^{4x} y] = 3e^{4x}$",
        "$\\frac{d}{dx}[e^{-4x} y] = 3$",
        "$\\frac{d}{dx}[y] = 3e^{4x}$",
        "$\\frac{d}{dx}[4 e^{4x} y] = 3e^{4x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "By construction, $\\mu y' + P\\mu y = \\frac{d}{dx}[\\mu y]$.",
        "stepByStep": [
          "Step 1: Multiplying gives $e^{4x} y' + 4e^{4x} y = 3e^{4x}$.",
          "Step 2: Recognize the reverse product rule: $\\mu y' + \\mu' y = \\frac{d}{dx}[\\mu y]$.",
          "Step 3: LHS collapses to $\\frac{d}{dx}[e^{4x} y]$."
        ],
        "commonTrap": "Writing d/dx[e^{-kx} y] or forgetting that the derivative applies to the product mu * y.",
        "reference": "Lecture 3 \u2014 Linear ODEs \u00b7 Product Rule Collapse #10"
      }
    }
  ],
  "exact": [
    {
      "id": "ex_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #1",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(3x^2 + 2y)dx + (k x + 2y^2)dy = 0$ exact?",
      "options": [
        "$k = -2$",
        "$k = 4$",
        "$k = 2$",
        "$k = 1$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 3x^2 + 2y$ and $N(x, y) = k x + 2y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[3x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 2y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #1"
      }
    },
    {
      "id": "ex_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #2",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(4x^2 + 2y)dx + (k x + 3y^2)dy = 0$ exact?",
      "options": [
        "$k = 4$",
        "$k = 2$",
        "$k = -2$",
        "$k = 1$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 4x^2 + 2y$ and $N(x, y) = k x + 3y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[4x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 3y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #2"
      }
    },
    {
      "id": "ex_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #3",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(5x^2 + 2y)dx + (k x + 4y^2)dy = 0$ exact?",
      "options": [
        "$k = 1$",
        "$k = 4$",
        "$k = -2$",
        "$k = 2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 5x^2 + 2y$ and $N(x, y) = k x + 4y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[5x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 4y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #3"
      }
    },
    {
      "id": "ex_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #4",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(6x^2 + 2y)dx + (k x + 1y^2)dy = 0$ exact?",
      "options": [
        "$k = 4$",
        "$k = 2$",
        "$k = -2$",
        "$k = 1$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 6x^2 + 2y$ and $N(x, y) = k x + 1y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[6x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 1y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #4"
      }
    },
    {
      "id": "ex_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #5",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(2x^2 + 2y)dx + (k x + 2y^2)dy = 0$ exact?",
      "options": [
        "$k = -2$",
        "$k = 4$",
        "$k = 2$",
        "$k = 1$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 2x^2 + 2y$ and $N(x, y) = k x + 2y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[2x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 2y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #5"
      }
    },
    {
      "id": "ex_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #6",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(3x^2 + 2y)dx + (k x + 3y^2)dy = 0$ exact?",
      "options": [
        "$k = 1$",
        "$k = 4$",
        "$k = -2$",
        "$k = 2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 3x^2 + 2y$ and $N(x, y) = k x + 3y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[3x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 3y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #6"
      }
    },
    {
      "id": "ex_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #7",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(4x^2 + 2y)dx + (k x + 4y^2)dy = 0$ exact?",
      "options": [
        "$k = 2$",
        "$k = 4$",
        "$k = -2$",
        "$k = 1$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 4x^2 + 2y$ and $N(x, y) = k x + 4y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[4x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 4y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #7"
      }
    },
    {
      "id": "ex_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #8",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(5x^2 + 2y)dx + (k x + 1y^2)dy = 0$ exact?",
      "options": [
        "$k = -2$",
        "$k = 4$",
        "$k = 2$",
        "$k = 1$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 5x^2 + 2y$ and $N(x, y) = k x + 1y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[5x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 1y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #8"
      }
    },
    {
      "id": "ex_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #9",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(6x^2 + 2y)dx + (k x + 2y^2)dy = 0$ exact?",
      "options": [
        "$k = 1$",
        "$k = 4$",
        "$k = -2$",
        "$k = 2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 6x^2 + 2y$ and $N(x, y) = k x + 2y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[6x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 2y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #9"
      }
    },
    {
      "id": "ex_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #10",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(2x^2 + 2y)dx + (k x + 3y^2)dy = 0$ exact?",
      "options": [
        "$k = -2$",
        "$k = 4$",
        "$k = 2$",
        "$k = 1$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 2x^2 + 2y$ and $N(x, y) = k x + 3y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[2x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 3y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #10"
      }
    },
    {
      "id": "ex_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #11",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(3x^2 + 2y)dx + (k x + 4y^2)dy = 0$ exact?",
      "options": [
        "$k = 2$",
        "$k = 4$",
        "$k = -2$",
        "$k = 1$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 3x^2 + 2y$ and $N(x, y) = k x + 4y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[3x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 4y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #11"
      }
    },
    {
      "id": "ex_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #12",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(4x^2 + 2y)dx + (k x + 1y^2)dy = 0$ exact?",
      "options": [
        "$k = -2$",
        "$k = 4$",
        "$k = 2$",
        "$k = 1$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 4x^2 + 2y$ and $N(x, y) = k x + 1y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[4x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 1y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #12"
      }
    },
    {
      "id": "ex_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #13",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(5x^2 + 2y)dx + (k x + 2y^2)dy = 0$ exact?",
      "options": [
        "$k = -2$",
        "$k = 4$",
        "$k = 2$",
        "$k = 1$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 5x^2 + 2y$ and $N(x, y) = k x + 2y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[5x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 2y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #13"
      }
    },
    {
      "id": "ex_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #14",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(6x^2 + 2y)dx + (k x + 3y^2)dy = 0$ exact?",
      "options": [
        "$k = 2$",
        "$k = 4$",
        "$k = -2$",
        "$k = 1$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 6x^2 + 2y$ and $N(x, y) = k x + 3y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[6x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 3y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #14"
      }
    },
    {
      "id": "ex_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #15",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(2x^2 + 2y)dx + (k x + 4y^2)dy = 0$ exact?",
      "options": [
        "$k = 2$",
        "$k = 4$",
        "$k = -2$",
        "$k = 1$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 2x^2 + 2y$ and $N(x, y) = k x + 4y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[2x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 4y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #15"
      }
    },
    {
      "id": "ex_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #16",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(3x^2 + 2y)dx + (k x + 1y^2)dy = 0$ exact?",
      "options": [
        "$k = 1$",
        "$k = 4$",
        "$k = -2$",
        "$k = 2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 3x^2 + 2y$ and $N(x, y) = k x + 1y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[3x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 1y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #16"
      }
    },
    {
      "id": "ex_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #17",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(4x^2 + 2y)dx + (k x + 2y^2)dy = 0$ exact?",
      "options": [
        "$k = 1$",
        "$k = 4$",
        "$k = -2$",
        "$k = 2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 4x^2 + 2y$ and $N(x, y) = k x + 2y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[4x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 2y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #17"
      }
    },
    {
      "id": "ex_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #18",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(5x^2 + 2y)dx + (k x + 3y^2)dy = 0$ exact?",
      "options": [
        "$k = 1$",
        "$k = 4$",
        "$k = -2$",
        "$k = 2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 5x^2 + 2y$ and $N(x, y) = k x + 3y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[5x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 3y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #18"
      }
    },
    {
      "id": "ex_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #19",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(6x^2 + 2y)dx + (k x + 4y^2)dy = 0$ exact?",
      "options": [
        "$k = 1$",
        "$k = 4$",
        "$k = -2$",
        "$k = 2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 6x^2 + 2y$ and $N(x, y) = k x + 4y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[6x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 4y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #19"
      }
    },
    {
      "id": "ex_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exactness Parameter Condition #20",
      "difficulty": "Midterm Level",
      "question": "For what value of $k$ is the differential equation $(2x^2 + 2y)dx + (k x + 1y^2)dy = 0$ exact?",
      "options": [
        "$k = 1$",
        "$k = 4$",
        "$k = -2$",
        "$k = 2$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Euler's exactness criterion: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
        "stepByStep": [
          "Step 1: Identify $M(x, y) = 2x^2 + 2y$ and $N(x, y) = k x + 1y^2$.",
          "Step 2: Compute $\\frac{\\partial M}{\\partial y} = \\frac{\\partial}{\\partial y}[2x^2 + 2y] = 2$.",
          "Step 3: Compute $\\frac{\\partial N}{\\partial x} = \\frac{\\partial}{\\partial x}[k x + 1y^2] = k$.",
          "Step 4: Exactness requires $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies 2 = k$, so $k = 2$."
        ],
        "commonTrap": "Differentiating M with respect to x instead of y, or N with respect to y instead of x.",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Condition Test #20"
      }
    },
    {
      "id": "ex_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #21",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(6x y)dx + (3x^2 + 2y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 3x^2 y + \\frac{2}{3}y^3 = C$",
        "$\\Psi(x, y) = 23x y + 2y^2 = C$",
        "$\\Psi(x, y) = 3x y^2 + \\frac{2}{2}y^2 = C$",
        "$\\Psi(x, y) = 3x^3 + 2y^3 = C$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 23x$ and $N_x = 23x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 6x y\\,dx = 3x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 3x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $3x^2 + g'(y) = 3x^2 + 2y^2 \\implies g'(y) = 2y^2 \\implies g(y) = \\frac{2}{3}y^3$.",
          "Step 5: General solution: $3x^2 y + \\frac{2}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #1"
      }
    },
    {
      "id": "ex_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #22",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(8x y)dx + (4x^2 + 3y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 4x^3 + 3y^3 = C$",
        "$\\Psi(x, y) = 24x y + 3y^2 = C$",
        "$\\Psi(x, y) = 4x y^2 + \\frac{3}{2}y^2 = C$",
        "$\\Psi(x, y) = 4x^2 y + \\frac{3}{3}y^3 = C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 24x$ and $N_x = 24x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 8x y\\,dx = 4x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 4x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $4x^2 + g'(y) = 4x^2 + 3y^2 \\implies g'(y) = 3y^2 \\implies g(y) = \\frac{3}{3}y^3$.",
          "Step 5: General solution: $4x^2 y + \\frac{3}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #2"
      }
    },
    {
      "id": "ex_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #23",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(10x y)dx + (5x^2 + 4y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 25x y + 4y^2 = C$",
        "$\\Psi(x, y) = 5x^2 y + \\frac{4}{3}y^3 = C$",
        "$\\Psi(x, y) = 5x y^2 + \\frac{4}{2}y^2 = C$",
        "$\\Psi(x, y) = 5x^3 + 4y^3 = C$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 25x$ and $N_x = 25x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 10x y\\,dx = 5x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 5x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $5x^2 + g'(y) = 5x^2 + 4y^2 \\implies g'(y) = 4y^2 \\implies g(y) = \\frac{4}{3}y^3$.",
          "Step 5: General solution: $5x^2 y + \\frac{4}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #3"
      }
    },
    {
      "id": "ex_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #24",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(12x y)dx + (6x^2 + 1y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 6x y^2 + \\frac{1}{2}y^2 = C$",
        "$\\Psi(x, y) = 26x y + 1y^2 = C$",
        "$\\Psi(x, y) = 6x^2 y + \\frac{1}{3}y^3 = C$",
        "$\\Psi(x, y) = 6x^3 + 1y^3 = C$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 26x$ and $N_x = 26x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 12x y\\,dx = 6x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 6x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $6x^2 + g'(y) = 6x^2 + 1y^2 \\implies g'(y) = 1y^2 \\implies g(y) = \\frac{1}{3}y^3$.",
          "Step 5: General solution: $6x^2 y + \\frac{1}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #4"
      }
    },
    {
      "id": "ex_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #25",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(4x y)dx + (2x^2 + 2y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 2x y^2 + \\frac{2}{2}y^2 = C$",
        "$\\Psi(x, y) = 22x y + 2y^2 = C$",
        "$\\Psi(x, y) = 2x^2 y + \\frac{2}{3}y^3 = C$",
        "$\\Psi(x, y) = 2x^3 + 2y^3 = C$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 22x$ and $N_x = 22x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 4x y\\,dx = 2x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 2x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $2x^2 + g'(y) = 2x^2 + 2y^2 \\implies g'(y) = 2y^2 \\implies g(y) = \\frac{2}{3}y^3$.",
          "Step 5: General solution: $2x^2 y + \\frac{2}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #5"
      }
    },
    {
      "id": "ex_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #26",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(6x y)dx + (3x^2 + 3y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 3x y^2 + \\frac{3}{2}y^2 = C$",
        "$\\Psi(x, y) = 23x y + 3y^2 = C$",
        "$\\Psi(x, y) = 3x^2 y + \\frac{3}{3}y^3 = C$",
        "$\\Psi(x, y) = 3x^3 + 3y^3 = C$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 23x$ and $N_x = 23x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 6x y\\,dx = 3x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 3x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $3x^2 + g'(y) = 3x^2 + 3y^2 \\implies g'(y) = 3y^2 \\implies g(y) = \\frac{3}{3}y^3$.",
          "Step 5: General solution: $3x^2 y + \\frac{3}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #6"
      }
    },
    {
      "id": "ex_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #27",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(8x y)dx + (4x^2 + 4y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 4x^2 y + \\frac{4}{3}y^3 = C$",
        "$\\Psi(x, y) = 24x y + 4y^2 = C$",
        "$\\Psi(x, y) = 4x y^2 + \\frac{4}{2}y^2 = C$",
        "$\\Psi(x, y) = 4x^3 + 4y^3 = C$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 24x$ and $N_x = 24x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 8x y\\,dx = 4x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 4x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $4x^2 + g'(y) = 4x^2 + 4y^2 \\implies g'(y) = 4y^2 \\implies g(y) = \\frac{4}{3}y^3$.",
          "Step 5: General solution: $4x^2 y + \\frac{4}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #7"
      }
    },
    {
      "id": "ex_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #28",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(10x y)dx + (5x^2 + 1y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 25x y + 1y^2 = C$",
        "$\\Psi(x, y) = 5x^2 y + \\frac{1}{3}y^3 = C$",
        "$\\Psi(x, y) = 5x y^2 + \\frac{1}{2}y^2 = C$",
        "$\\Psi(x, y) = 5x^3 + 1y^3 = C$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 25x$ and $N_x = 25x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 10x y\\,dx = 5x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 5x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $5x^2 + g'(y) = 5x^2 + 1y^2 \\implies g'(y) = 1y^2 \\implies g(y) = \\frac{1}{3}y^3$.",
          "Step 5: General solution: $5x^2 y + \\frac{1}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #8"
      }
    },
    {
      "id": "ex_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #29",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(12x y)dx + (6x^2 + 2y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 6x^3 + 2y^3 = C$",
        "$\\Psi(x, y) = 26x y + 2y^2 = C$",
        "$\\Psi(x, y) = 6x y^2 + \\frac{2}{2}y^2 = C$",
        "$\\Psi(x, y) = 6x^2 y + \\frac{2}{3}y^3 = C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 26x$ and $N_x = 26x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 12x y\\,dx = 6x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 6x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $6x^2 + g'(y) = 6x^2 + 2y^2 \\implies g'(y) = 2y^2 \\implies g(y) = \\frac{2}{3}y^3$.",
          "Step 5: General solution: $6x^2 y + \\frac{2}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #9"
      }
    },
    {
      "id": "ex_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #30",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(4x y)dx + (2x^2 + 3y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 2x^3 + 3y^3 = C$",
        "$\\Psi(x, y) = 22x y + 3y^2 = C$",
        "$\\Psi(x, y) = 2x y^2 + \\frac{3}{2}y^2 = C$",
        "$\\Psi(x, y) = 2x^2 y + \\frac{3}{3}y^3 = C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 22x$ and $N_x = 22x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 4x y\\,dx = 2x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 2x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $2x^2 + g'(y) = 2x^2 + 3y^2 \\implies g'(y) = 3y^2 \\implies g(y) = \\frac{3}{3}y^3$.",
          "Step 5: General solution: $2x^2 y + \\frac{3}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #10"
      }
    },
    {
      "id": "ex_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #31",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(6x y)dx + (3x^2 + 4y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 3x^3 + 4y^3 = C$",
        "$\\Psi(x, y) = 23x y + 4y^2 = C$",
        "$\\Psi(x, y) = 3x y^2 + \\frac{4}{2}y^2 = C$",
        "$\\Psi(x, y) = 3x^2 y + \\frac{4}{3}y^3 = C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 23x$ and $N_x = 23x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 6x y\\,dx = 3x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 3x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $3x^2 + g'(y) = 3x^2 + 4y^2 \\implies g'(y) = 4y^2 \\implies g(y) = \\frac{4}{3}y^3$.",
          "Step 5: General solution: $3x^2 y + \\frac{4}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #11"
      }
    },
    {
      "id": "ex_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #32",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(8x y)dx + (4x^2 + 1y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 4x^3 + 1y^3 = C$",
        "$\\Psi(x, y) = 24x y + 1y^2 = C$",
        "$\\Psi(x, y) = 4x y^2 + \\frac{1}{2}y^2 = C$",
        "$\\Psi(x, y) = 4x^2 y + \\frac{1}{3}y^3 = C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 24x$ and $N_x = 24x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 8x y\\,dx = 4x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 4x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $4x^2 + g'(y) = 4x^2 + 1y^2 \\implies g'(y) = 1y^2 \\implies g(y) = \\frac{1}{3}y^3$.",
          "Step 5: General solution: $4x^2 y + \\frac{1}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #12"
      }
    },
    {
      "id": "ex_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #33",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(10x y)dx + (5x^2 + 2y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 5x^3 + 2y^3 = C$",
        "$\\Psi(x, y) = 25x y + 2y^2 = C$",
        "$\\Psi(x, y) = 5x y^2 + \\frac{2}{2}y^2 = C$",
        "$\\Psi(x, y) = 5x^2 y + \\frac{2}{3}y^3 = C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 25x$ and $N_x = 25x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 10x y\\,dx = 5x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 5x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $5x^2 + g'(y) = 5x^2 + 2y^2 \\implies g'(y) = 2y^2 \\implies g(y) = \\frac{2}{3}y^3$.",
          "Step 5: General solution: $5x^2 y + \\frac{2}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #13"
      }
    },
    {
      "id": "ex_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #34",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(12x y)dx + (6x^2 + 3y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 6x^3 + 3y^3 = C$",
        "$\\Psi(x, y) = 26x y + 3y^2 = C$",
        "$\\Psi(x, y) = 6x y^2 + \\frac{3}{2}y^2 = C$",
        "$\\Psi(x, y) = 6x^2 y + \\frac{3}{3}y^3 = C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 26x$ and $N_x = 26x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 12x y\\,dx = 6x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 6x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $6x^2 + g'(y) = 6x^2 + 3y^2 \\implies g'(y) = 3y^2 \\implies g(y) = \\frac{3}{3}y^3$.",
          "Step 5: General solution: $6x^2 y + \\frac{3}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #14"
      }
    },
    {
      "id": "ex_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Potential Function Derivation #35",
      "difficulty": "Midterm Level",
      "question": "Find the potential function $\\Psi(x, y) = C$ for $(4x y)dx + (2x^2 + 4y^2)dy = 0$.",
      "options": [
        "$\\Psi(x, y) = 22x y + 4y^2 = C$",
        "$\\Psi(x, y) = 2x^2 y + \\frac{4}{3}y^3 = C$",
        "$\\Psi(x, y) = 2x y^2 + \\frac{4}{2}y^2 = C$",
        "$\\Psi(x, y) = 2x^3 + 4y^3 = C$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Integrate $M$ with respect to $x$ while treating $y$ as a constant, then add $g(y)$.",
        "stepByStep": [
          "Step 1: Verify exactness: $M_y = 22x$ and $N_x = 22x$. Exact!",
          "Step 2: Integrate $M$ with respect to $x$: $\\Psi(x, y) = \\int 4x y\\,dx = 2x^2 y + g(y)$.",
          "Step 3: Differentiate $\\Psi$ with respect to $y$: $\\frac{\\partial \\Psi}{\\partial y} = 2x^2 + g'(y)$.",
          "Step 4: Equate to $N$: $2x^2 + g'(y) = 2x^2 + 4y^2 \\implies g'(y) = 4y^2 \\implies g(y) = \\frac{4}{3}y^3$.",
          "Step 5: General solution: $2x^2 y + \\frac{4}{3}y^3 = C$."
        ],
        "commonTrap": "Writing a constant of integration C(x) when integrating with respect to x instead of an arbitrary function g(y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 Potential Function #15"
      }
    },
    {
      "id": "ex_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #36",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 1$.",
      "options": [
        "$x^2 + xy + y^2 = 4$",
        "$x^2 + 2xy + y^2 = 1$",
        "$x^2 + 2xy + y^2 = 4$",
        "$2x + 2y = 2$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 1$: $1^2 + 2(1)(1) + 1^2 = (1 + 1)^2 = 4$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 4$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #1"
      }
    },
    {
      "id": "ex_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #37",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 2$.",
      "options": [
        "$2x + 2y = 3$",
        "$x^2 + 2xy + y^2 = 2$",
        "$x^2 + xy + y^2 = 9$",
        "$x^2 + 2xy + y^2 = 9$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 2$: $1^2 + 2(1)(2) + 2^2 = (1 + 2)^2 = 9$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 9$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #2"
      }
    },
    {
      "id": "ex_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #38",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 3$.",
      "options": [
        "$x^2 + 2xy + y^2 = 3$",
        "$x^2 + 2xy + y^2 = 16$",
        "$x^2 + xy + y^2 = 16$",
        "$2x + 2y = 4$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 3$: $1^2 + 2(1)(3) + 3^2 = (1 + 3)^2 = 16$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 16$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #3"
      }
    },
    {
      "id": "ex_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #39",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 4$.",
      "options": [
        "$x^2 + 2xy + y^2 = 25$",
        "$x^2 + 2xy + y^2 = 4$",
        "$x^2 + xy + y^2 = 25$",
        "$2x + 2y = 5$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 4$: $1^2 + 2(1)(4) + 4^2 = (1 + 4)^2 = 25$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 25$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #4"
      }
    },
    {
      "id": "ex_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #40",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 1$.",
      "options": [
        "$x^2 + 2xy + y^2 = 4$",
        "$x^2 + 2xy + y^2 = 1$",
        "$x^2 + xy + y^2 = 4$",
        "$2x + 2y = 2$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 1$: $1^2 + 2(1)(1) + 1^2 = (1 + 1)^2 = 4$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 4$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #5"
      }
    },
    {
      "id": "ex_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #41",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 2$.",
      "options": [
        "$x^2 + xy + y^2 = 9$",
        "$x^2 + 2xy + y^2 = 2$",
        "$x^2 + 2xy + y^2 = 9$",
        "$2x + 2y = 3$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 2$: $1^2 + 2(1)(2) + 2^2 = (1 + 2)^2 = 9$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 9$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #6"
      }
    },
    {
      "id": "ex_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #42",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 3$.",
      "options": [
        "$x^2 + xy + y^2 = 16$",
        "$x^2 + 2xy + y^2 = 3$",
        "$x^2 + 2xy + y^2 = 16$",
        "$2x + 2y = 4$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 3$: $1^2 + 2(1)(3) + 3^2 = (1 + 3)^2 = 16$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 16$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #7"
      }
    },
    {
      "id": "ex_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #43",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 4$.",
      "options": [
        "$2x + 2y = 5$",
        "$x^2 + 2xy + y^2 = 4$",
        "$x^2 + xy + y^2 = 25$",
        "$x^2 + 2xy + y^2 = 25$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 4$: $1^2 + 2(1)(4) + 4^2 = (1 + 4)^2 = 25$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 25$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #8"
      }
    },
    {
      "id": "ex_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #44",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 1$.",
      "options": [
        "$x^2 + xy + y^2 = 4$",
        "$x^2 + 2xy + y^2 = 1$",
        "$x^2 + 2xy + y^2 = 4$",
        "$2x + 2y = 2$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 1$: $1^2 + 2(1)(1) + 1^2 = (1 + 1)^2 = 4$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 4$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #9"
      }
    },
    {
      "id": "ex_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #45",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 2$.",
      "options": [
        "$2x + 2y = 3$",
        "$x^2 + 2xy + y^2 = 2$",
        "$x^2 + xy + y^2 = 9$",
        "$x^2 + 2xy + y^2 = 9$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 2$: $1^2 + 2(1)(2) + 2^2 = (1 + 2)^2 = 9$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 9$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #10"
      }
    },
    {
      "id": "ex_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #46",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 3$.",
      "options": [
        "$x^2 + 2xy + y^2 = 16$",
        "$x^2 + 2xy + y^2 = 3$",
        "$x^2 + xy + y^2 = 16$",
        "$2x + 2y = 4$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 3$: $1^2 + 2(1)(3) + 3^2 = (1 + 3)^2 = 16$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 16$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #11"
      }
    },
    {
      "id": "ex_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #47",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 4$.",
      "options": [
        "$x^2 + xy + y^2 = 25$",
        "$x^2 + 2xy + y^2 = 4$",
        "$x^2 + 2xy + y^2 = 25$",
        "$2x + 2y = 5$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 4$: $1^2 + 2(1)(4) + 4^2 = (1 + 4)^2 = 25$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 25$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #12"
      }
    },
    {
      "id": "ex_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #48",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 1$.",
      "options": [
        "$x^2 + 2xy + y^2 = 4$",
        "$x^2 + 2xy + y^2 = 1$",
        "$x^2 + xy + y^2 = 4$",
        "$2x + 2y = 2$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 1$: $1^2 + 2(1)(1) + 1^2 = (1 + 1)^2 = 4$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 4$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #13"
      }
    },
    {
      "id": "ex_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #49",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 2$.",
      "options": [
        "$x^2 + 2xy + y^2 = 9$",
        "$x^2 + 2xy + y^2 = 2$",
        "$x^2 + xy + y^2 = 9$",
        "$2x + 2y = 3$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 2$: $1^2 + 2(1)(2) + 2^2 = (1 + 2)^2 = 9$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 9$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #14"
      }
    },
    {
      "id": "ex_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "exact",
      "topic": "Exact Initial Value Problem #50",
      "difficulty": "Midterm Level",
      "question": "Solve the exact IVP: $(2x + 2y)dx + (2x + 2y)dy = 0, \\quad y(1) = 3$.",
      "options": [
        "$x^2 + xy + y^2 = 16$",
        "$x^2 + 2xy + y^2 = 3$",
        "$x^2 + 2xy + y^2 = 16$",
        "$2x + 2y = 4$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Evaluate $\\Psi(x_0, y_0) = C$ to determine the constant of integration.",
        "stepByStep": [
          "Step 1: Check exactness: $M_y = 2 = N_x$. Exact!",
          "Step 2: Integrate $M$: $\\Psi = x^2 + 2xy + g(y)$.",
          "Step 3: $\\frac{\\partial \\Psi}{\\partial y} = 2x + g'(y) = 2x + 2y \\implies g'(y) = 2y \\implies g(y) = y^2$.",
          "Step 4: Solution is $x^2 + 2xy + y^2 = C$. Apply $y(1) = 3$: $1^2 + 2(1)(3) + 3^2 = (1 + 3)^2 = 16$.",
          "Step 5: Result: $x^2 + 2xy + y^2 = 16$."
        ],
        "commonTrap": "Forgetting to evaluate the initial condition across all terms of Psi(x, y).",
        "reference": "Lecture 4 \u2014 Exact Equations \u00b7 IVP #15"
      }
    }
  ],
  "non_exact": [
    {
      "id": "nex_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #1",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #1"
      }
    },
    {
      "id": "nex_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #2",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{M_y - N_x}{N}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #2"
      }
    },
    {
      "id": "nex_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #3",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #3"
      }
    },
    {
      "id": "nex_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #4",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #4"
      }
    },
    {
      "id": "nex_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #5",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #5"
      }
    },
    {
      "id": "nex_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #6",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #6"
      }
    },
    {
      "id": "nex_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #7",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #7"
      }
    },
    {
      "id": "nex_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #8",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #8"
      }
    },
    {
      "id": "nex_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #9",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #9"
      }
    },
    {
      "id": "nex_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #10",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #10"
      }
    },
    {
      "id": "nex_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #11",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #11"
      }
    },
    {
      "id": "nex_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #12",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #12"
      }
    },
    {
      "id": "nex_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #13",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #13"
      }
    },
    {
      "id": "nex_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #14",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #14"
      }
    },
    {
      "id": "nex_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #15",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #15"
      }
    },
    {
      "id": "nex_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #16",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #16"
      }
    },
    {
      "id": "nex_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #17",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{M_y - N_x}{N}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #17"
      }
    },
    {
      "id": "nex_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #18",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #18"
      }
    },
    {
      "id": "nex_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #19",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{M_y - N_x}{N}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #19"
      }
    },
    {
      "id": "nex_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #20",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #20"
      }
    },
    {
      "id": "nex_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #21",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #21"
      }
    },
    {
      "id": "nex_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #22",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #22"
      }
    },
    {
      "id": "nex_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #23",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = \\frac{M_y - N_x}{N}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #23"
      }
    },
    {
      "id": "nex_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #24",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #24"
      }
    },
    {
      "id": "nex_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in x Derivation #25",
      "difficulty": "Midterm Level",
      "question": "When $(M_y - N_x)/N = f(x)$ depends only on $x$, what is the special integrating factor $\\mu(x)$?",
      "options": [
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{M} dx}$",
        "$\\mu(x) = e^{\\int \\frac{N_x - M_y}{N} dx}$",
        "$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$",
        "$\\mu(x) = \\frac{M_y - N_x}{N}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{M_y - N_x}{N} = f(x)$, then $\\mu(x) = \\exp(\\int f(x)dx)$.",
        "stepByStep": [
          "Step 1: Multiply $M dx + N dy = 0$ by $\\mu(x)$ to get $(\\mu M)dx + (\\mu N)dy = 0$.",
          "Step 2: Enforce exactness: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu M_y = \\mu' N + \\mu N_x$.",
          "Step 3: Rearrange: $\\mu' N = \\mu(M_y - N_x) \\implies \\frac{\\mu'}{\\mu} = \\frac{M_y - N_x}{N} = f(x)$.",
          "Step 4: Integrate: $\\ln\\mu = \\int f(x)dx \\implies \\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$."
        ],
        "commonTrap": "Inverting the order of subtraction (using Nx - My instead of My - Nx).",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula #25"
      }
    },
    {
      "id": "nex_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #26",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #1"
      }
    },
    {
      "id": "nex_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #27",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = \\frac{N_x - M_y}{M}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #2"
      }
    },
    {
      "id": "nex_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #28",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = \\frac{N_x - M_y}{M}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #3"
      }
    },
    {
      "id": "nex_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #29",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #4"
      }
    },
    {
      "id": "nex_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #30",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #5"
      }
    },
    {
      "id": "nex_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #31",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #6"
      }
    },
    {
      "id": "nex_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #32",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #7"
      }
    },
    {
      "id": "nex_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #33",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #8"
      }
    },
    {
      "id": "nex_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #34",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #9"
      }
    },
    {
      "id": "nex_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #35",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #10"
      }
    },
    {
      "id": "nex_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #36",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #11"
      }
    },
    {
      "id": "nex_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #37",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #12"
      }
    },
    {
      "id": "nex_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #38",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #13"
      }
    },
    {
      "id": "nex_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #39",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = \\frac{N_x - M_y}{M}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #14"
      }
    },
    {
      "id": "nex_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #40",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #15"
      }
    },
    {
      "id": "nex_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #41",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #16"
      }
    },
    {
      "id": "nex_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #42",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #17"
      }
    },
    {
      "id": "nex_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #43",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #18"
      }
    },
    {
      "id": "nex_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #44",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #19"
      }
    },
    {
      "id": "nex_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #45",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = \\frac{N_x - M_y}{M}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #20"
      }
    },
    {
      "id": "nex_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #46",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #21"
      }
    },
    {
      "id": "nex_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #47",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #22"
      }
    },
    {
      "id": "nex_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #48",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = \\frac{N_x - M_y}{M}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #23"
      }
    },
    {
      "id": "nex_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #49",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = \\frac{N_x - M_y}{M}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #24"
      }
    },
    {
      "id": "nex_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "non_exact",
      "topic": "Integrating Factor in y Derivation #50",
      "difficulty": "Midterm Level",
      "question": "When $(N_x - M_y)/M = g(y)$ depends only on $y$, what is the special integrating factor $\\mu(y)$?",
      "options": [
        "$\\mu(y) = \\frac{N_x - M_y}{M}$",
        "$\\mu(y) = e^{\\int \\frac{M_y - N_x}{M} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{N} dy}$",
        "$\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "If $\\frac{N_x - M_y}{M} = g(y)$, then $\\mu(y) = \\exp(\\int g(y)dy)$.",
        "stepByStep": [
          "Step 1: Enforce exactness with $\\mu(y)$: $\\frac{\\partial}{\\partial y}[\\mu M] = \\frac{\\partial}{\\partial x}[\\mu N] \\implies \\mu' M + \\mu M_y = \\mu N_x$.",
          "Step 2: Rearrange: $\\mu' M = \\mu(N_x - M_y) \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$.",
          "Step 3: Integrate: $\\mu(y) = e^{\\int \\frac{N_x - M_y}{M} dy}$."
        ],
        "commonTrap": "Using My - Nx in the numerator for mu(y). Notice the negative sign flips it to Nx - My!",
        "reference": "Lecture 4 \u2014 Non-Exact Integrating Factors \u00b7 Formula in y #25"
      }
    }
  ],
  "bernoulli": [
    {
      "id": "bern_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #1",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{3}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{3}$",
        "$u = y^{1 - 3} = y^{-2}$",
        "$u = y^{2}$",
        "$u = y^{-3}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 3$.",
          "Step 2: Divide entire equation by $y^{3}$: $y^{-3}y' + P(x)y^{1 - 3} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-2}$.",
          "Step 4: Differentiate: $u' = (1 - 3)y^{-3}y' = (-2)y^{-3}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^2. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #1"
      }
    },
    {
      "id": "bern_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #2",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{4}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{4}$",
        "$u = y^{1 - 4} = y^{-3}$",
        "$u = y^{3}$",
        "$u = y^{-4}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 4$.",
          "Step 2: Divide entire equation by $y^{4}$: $y^{-4}y' + P(x)y^{1 - 4} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-3}$.",
          "Step 4: Differentiate: $u' = (1 - 4)y^{-4}y' = (-3)y^{-4}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^3. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #2"
      }
    },
    {
      "id": "bern_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #3",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{5}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 5} = y^{-4}$",
        "$u = y^{5}$",
        "$u = y^{4}$",
        "$u = y^{-5}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 5$.",
          "Step 2: Divide entire equation by $y^{5}$: $y^{-5}y' + P(x)y^{1 - 5} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-4}$.",
          "Step 4: Differentiate: $u' = (1 - 5)y^{-5}y' = (-4)y^{-5}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^4. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #3"
      }
    },
    {
      "id": "bern_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #4",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{6}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{-6}$",
        "$u = y^{6}$",
        "$u = y^{5}$",
        "$u = y^{1 - 6} = y^{-5}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 6$.",
          "Step 2: Divide entire equation by $y^{6}$: $y^{-6}y' + P(x)y^{1 - 6} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-5}$.",
          "Step 4: Differentiate: $u' = (1 - 6)y^{-6}y' = (-5)y^{-6}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^5. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #4"
      }
    },
    {
      "id": "bern_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #5",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{2}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1}$",
        "$u = y^{2}$",
        "$u = y^{1 - 2} = y^{-1}$",
        "$u = y^{-2}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 2$.",
          "Step 2: Divide entire equation by $y^{2}$: $y^{-2}y' + P(x)y^{1 - 2} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-1}$.",
          "Step 4: Differentiate: $u' = (1 - 2)y^{-2}y' = (-1)y^{-2}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^1. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #5"
      }
    },
    {
      "id": "bern_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #6",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{3}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{2}$",
        "$u = y^{3}$",
        "$u = y^{1 - 3} = y^{-2}$",
        "$u = y^{-3}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 3$.",
          "Step 2: Divide entire equation by $y^{3}$: $y^{-3}y' + P(x)y^{1 - 3} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-2}$.",
          "Step 4: Differentiate: $u' = (1 - 3)y^{-3}y' = (-2)y^{-3}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^2. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #6"
      }
    },
    {
      "id": "bern_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #7",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{4}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{3}$",
        "$u = y^{4}$",
        "$u = y^{1 - 4} = y^{-3}$",
        "$u = y^{-4}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 4$.",
          "Step 2: Divide entire equation by $y^{4}$: $y^{-4}y' + P(x)y^{1 - 4} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-3}$.",
          "Step 4: Differentiate: $u' = (1 - 4)y^{-4}y' = (-3)y^{-4}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^3. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #7"
      }
    },
    {
      "id": "bern_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #8",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{5}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{-5}$",
        "$u = y^{5}$",
        "$u = y^{4}$",
        "$u = y^{1 - 5} = y^{-4}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 5$.",
          "Step 2: Divide entire equation by $y^{5}$: $y^{-5}y' + P(x)y^{1 - 5} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-4}$.",
          "Step 4: Differentiate: $u' = (1 - 5)y^{-5}y' = (-4)y^{-5}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^4. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #8"
      }
    },
    {
      "id": "bern_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #9",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{6}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 6} = y^{-5}$",
        "$u = y^{6}$",
        "$u = y^{5}$",
        "$u = y^{-6}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 6$.",
          "Step 2: Divide entire equation by $y^{6}$: $y^{-6}y' + P(x)y^{1 - 6} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-5}$.",
          "Step 4: Differentiate: $u' = (1 - 6)y^{-6}y' = (-5)y^{-6}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^5. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #9"
      }
    },
    {
      "id": "bern_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #10",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{2}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 2} = y^{-1}$",
        "$u = y^{2}$",
        "$u = y^{1}$",
        "$u = y^{-2}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 2$.",
          "Step 2: Divide entire equation by $y^{2}$: $y^{-2}y' + P(x)y^{1 - 2} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-1}$.",
          "Step 4: Differentiate: $u' = (1 - 2)y^{-2}y' = (-1)y^{-2}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^1. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #10"
      }
    },
    {
      "id": "bern_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #11",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{3}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 3} = y^{-2}$",
        "$u = y^{3}$",
        "$u = y^{2}$",
        "$u = y^{-3}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 3$.",
          "Step 2: Divide entire equation by $y^{3}$: $y^{-3}y' + P(x)y^{1 - 3} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-2}$.",
          "Step 4: Differentiate: $u' = (1 - 3)y^{-3}y' = (-2)y^{-3}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^2. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #11"
      }
    },
    {
      "id": "bern_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #12",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{4}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{3}$",
        "$u = y^{4}$",
        "$u = y^{1 - 4} = y^{-3}$",
        "$u = y^{-4}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 4$.",
          "Step 2: Divide entire equation by $y^{4}$: $y^{-4}y' + P(x)y^{1 - 4} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-3}$.",
          "Step 4: Differentiate: $u' = (1 - 4)y^{-4}y' = (-3)y^{-4}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^3. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #12"
      }
    },
    {
      "id": "bern_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #13",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{5}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 5} = y^{-4}$",
        "$u = y^{5}$",
        "$u = y^{4}$",
        "$u = y^{-5}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 5$.",
          "Step 2: Divide entire equation by $y^{5}$: $y^{-5}y' + P(x)y^{1 - 5} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-4}$.",
          "Step 4: Differentiate: $u' = (1 - 5)y^{-5}y' = (-4)y^{-5}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^4. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #13"
      }
    },
    {
      "id": "bern_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #14",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{6}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{6}$",
        "$u = y^{1 - 6} = y^{-5}$",
        "$u = y^{5}$",
        "$u = y^{-6}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 6$.",
          "Step 2: Divide entire equation by $y^{6}$: $y^{-6}y' + P(x)y^{1 - 6} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-5}$.",
          "Step 4: Differentiate: $u' = (1 - 6)y^{-6}y' = (-5)y^{-6}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^5. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #14"
      }
    },
    {
      "id": "bern_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #15",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{2}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 2} = y^{-1}$",
        "$u = y^{2}$",
        "$u = y^{1}$",
        "$u = y^{-2}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 2$.",
          "Step 2: Divide entire equation by $y^{2}$: $y^{-2}y' + P(x)y^{1 - 2} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-1}$.",
          "Step 4: Differentiate: $u' = (1 - 2)y^{-2}y' = (-1)y^{-2}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^1. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #15"
      }
    },
    {
      "id": "bern_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #16",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{3}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{3}$",
        "$u = y^{1 - 3} = y^{-2}$",
        "$u = y^{2}$",
        "$u = y^{-3}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 3$.",
          "Step 2: Divide entire equation by $y^{3}$: $y^{-3}y' + P(x)y^{1 - 3} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-2}$.",
          "Step 4: Differentiate: $u' = (1 - 3)y^{-3}y' = (-2)y^{-3}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^2. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #16"
      }
    },
    {
      "id": "bern_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #17",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{4}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{3}$",
        "$u = y^{4}$",
        "$u = y^{1 - 4} = y^{-3}$",
        "$u = y^{-4}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 4$.",
          "Step 2: Divide entire equation by $y^{4}$: $y^{-4}y' + P(x)y^{1 - 4} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-3}$.",
          "Step 4: Differentiate: $u' = (1 - 4)y^{-4}y' = (-3)y^{-4}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^3. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #17"
      }
    },
    {
      "id": "bern_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #18",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{5}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{5}$",
        "$u = y^{1 - 5} = y^{-4}$",
        "$u = y^{4}$",
        "$u = y^{-5}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 5$.",
          "Step 2: Divide entire equation by $y^{5}$: $y^{-5}y' + P(x)y^{1 - 5} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-4}$.",
          "Step 4: Differentiate: $u' = (1 - 5)y^{-5}y' = (-4)y^{-5}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^4. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #18"
      }
    },
    {
      "id": "bern_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #19",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{6}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{6}$",
        "$u = y^{1 - 6} = y^{-5}$",
        "$u = y^{5}$",
        "$u = y^{-6}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 6$.",
          "Step 2: Divide entire equation by $y^{6}$: $y^{-6}y' + P(x)y^{1 - 6} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-5}$.",
          "Step 4: Differentiate: $u' = (1 - 6)y^{-6}y' = (-5)y^{-6}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^5. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #19"
      }
    },
    {
      "id": "bern_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #20",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{2}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 2} = y^{-1}$",
        "$u = y^{2}$",
        "$u = y^{1}$",
        "$u = y^{-2}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 2$.",
          "Step 2: Divide entire equation by $y^{2}$: $y^{-2}y' + P(x)y^{1 - 2} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-1}$.",
          "Step 4: Differentiate: $u' = (1 - 2)y^{-2}y' = (-1)y^{-2}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^1. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #20"
      }
    },
    {
      "id": "bern_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #21",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{3}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 3} = y^{-2}$",
        "$u = y^{3}$",
        "$u = y^{2}$",
        "$u = y^{-3}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 3$.",
          "Step 2: Divide entire equation by $y^{3}$: $y^{-3}y' + P(x)y^{1 - 3} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-2}$.",
          "Step 4: Differentiate: $u' = (1 - 3)y^{-3}y' = (-2)y^{-3}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^2. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #21"
      }
    },
    {
      "id": "bern_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #22",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{4}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 4} = y^{-3}$",
        "$u = y^{4}$",
        "$u = y^{3}$",
        "$u = y^{-4}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 4$.",
          "Step 2: Divide entire equation by $y^{4}$: $y^{-4}y' + P(x)y^{1 - 4} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-3}$.",
          "Step 4: Differentiate: $u' = (1 - 4)y^{-4}y' = (-3)y^{-4}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^3. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #22"
      }
    },
    {
      "id": "bern_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #23",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{5}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1 - 5} = y^{-4}$",
        "$u = y^{5}$",
        "$u = y^{4}$",
        "$u = y^{-5}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 5$.",
          "Step 2: Divide entire equation by $y^{5}$: $y^{-5}y' + P(x)y^{1 - 5} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-4}$.",
          "Step 4: Differentiate: $u' = (1 - 5)y^{-5}y' = (-4)y^{-5}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^4. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #23"
      }
    },
    {
      "id": "bern_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #24",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{6}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{6}$",
        "$u = y^{1 - 6} = y^{-5}$",
        "$u = y^{5}$",
        "$u = y^{-6}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 6$.",
          "Step 2: Divide entire equation by $y^{6}$: $y^{-6}y' + P(x)y^{1 - 6} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-5}$.",
          "Step 4: Differentiate: $u' = (1 - 6)y^{-6}y' = (-5)y^{-6}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^5. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #24"
      }
    },
    {
      "id": "bern_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Bernoulli Substitution Power #25",
      "difficulty": "Midterm Level",
      "question": "For the Bernoulli differential equation $y' + P(x)y = Q(x)y^{2}$, what is the mandatory substitution to linearize it?",
      "options": [
        "$u = y^{1}$",
        "$u = y^{2}$",
        "$u = y^{1 - 2} = y^{-1}$",
        "$u = y^{-2}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The canonical Bernoulli substitution is $u = y^{1-n}$.",
        "stepByStep": [
          "Step 1: Standard Bernoulli form: $y' + P(x)y = Q(x)y^n$ with power $n = 2$.",
          "Step 2: Divide entire equation by $y^{2}$: $y^{-2}y' + P(x)y^{1 - 2} = Q(x)$.",
          "Step 3: Let $u = y^{1 - n} = y^{-1}$.",
          "Step 4: Differentiate: $u' = (1 - 2)y^{-2}y' = (-1)y^{-2}y'$."
        ],
        "commonTrap": "Choosing u = y^n or u = y^1. The substitution is ALWAYS u = y^{1-n}.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Substitution Rule #25"
      }
    },
    {
      "id": "bern_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #26",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 3}$ into $y' + P(x)y = Q(x)y^{3}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-2)P(x)u = (-2)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (3)P(x)u = (3)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-2)$: $(-2)y^{-3}y' + (-2)P(x)y^{1-3} = (-2)Q(x)$.",
          "Step 2: Since $u' = (-2)y^{-3}y'$ and $u = y^{1-3}$, substitute:",
          "Step 3: Result: $u' + (-2)P(x)u = (-2)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -2.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #1"
      }
    },
    {
      "id": "bern_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #27",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 4}$ into $y' + P(x)y = Q(x)y^{4}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-3)P(x)u = (-3)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (4)P(x)u = (4)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-3)$: $(-3)y^{-4}y' + (-3)P(x)y^{1-4} = (-3)Q(x)$.",
          "Step 2: Since $u' = (-3)y^{-4}y'$ and $u = y^{1-4}$, substitute:",
          "Step 3: Result: $u' + (-3)P(x)u = (-3)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -3.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #2"
      }
    },
    {
      "id": "bern_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #28",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 5}$ into $y' + P(x)y = Q(x)y^{5}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' - P(x)u = Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' + (-4)P(x)u = (-4)Q(x)$",
        "$u' + (5)P(x)u = (5)Q(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-4)$: $(-4)y^{-5}y' + (-4)P(x)y^{1-5} = (-4)Q(x)$.",
          "Step 2: Since $u' = (-4)y^{-5}y'$ and $u = y^{1-5}$, substitute:",
          "Step 3: Result: $u' + (-4)P(x)u = (-4)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -4.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #3"
      }
    },
    {
      "id": "bern_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #29",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 6}$ into $y' + P(x)y = Q(x)y^{6}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-5)P(x)u = (-5)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (6)P(x)u = (6)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-5)$: $(-5)y^{-6}y' + (-5)P(x)y^{1-6} = (-5)Q(x)$.",
          "Step 2: Since $u' = (-5)y^{-6}y'$ and $u = y^{1-6}$, substitute:",
          "Step 3: Result: $u' + (-5)P(x)u = (-5)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -5.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #4"
      }
    },
    {
      "id": "bern_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #30",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 2}$ into $y' + P(x)y = Q(x)y^{2}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-1)P(x)u = (-1)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (2)P(x)u = (2)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-1)$: $(-1)y^{-2}y' + (-1)P(x)y^{1-2} = (-1)Q(x)$.",
          "Step 2: Since $u' = (-1)y^{-2}y'$ and $u = y^{1-2}$, substitute:",
          "Step 3: Result: $u' + (-1)P(x)u = (-1)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -1.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #5"
      }
    },
    {
      "id": "bern_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #31",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 3}$ into $y' + P(x)y = Q(x)y^{3}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (3)P(x)u = (3)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (-2)P(x)u = (-2)Q(x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-2)$: $(-2)y^{-3}y' + (-2)P(x)y^{1-3} = (-2)Q(x)$.",
          "Step 2: Since $u' = (-2)y^{-3}y'$ and $u = y^{1-3}$, substitute:",
          "Step 3: Result: $u' + (-2)P(x)u = (-2)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -2.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #6"
      }
    },
    {
      "id": "bern_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #32",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 4}$ into $y' + P(x)y = Q(x)y^{4}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (-3)P(x)u = (-3)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (4)P(x)u = (4)Q(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-3)$: $(-3)y^{-4}y' + (-3)P(x)y^{1-4} = (-3)Q(x)$.",
          "Step 2: Since $u' = (-3)y^{-4}y'$ and $u = y^{1-4}$, substitute:",
          "Step 3: Result: $u' + (-3)P(x)u = (-3)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -3.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #7"
      }
    },
    {
      "id": "bern_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #33",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 5}$ into $y' + P(x)y = Q(x)y^{5}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (-4)P(x)u = (-4)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (5)P(x)u = (5)Q(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-4)$: $(-4)y^{-5}y' + (-4)P(x)y^{1-5} = (-4)Q(x)$.",
          "Step 2: Since $u' = (-4)y^{-5}y'$ and $u = y^{1-5}$, substitute:",
          "Step 3: Result: $u' + (-4)P(x)u = (-4)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -4.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #8"
      }
    },
    {
      "id": "bern_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #34",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 6}$ into $y' + P(x)y = Q(x)y^{6}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (6)P(x)u = (6)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (-5)P(x)u = (-5)Q(x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-5)$: $(-5)y^{-6}y' + (-5)P(x)y^{1-6} = (-5)Q(x)$.",
          "Step 2: Since $u' = (-5)y^{-6}y'$ and $u = y^{1-6}$, substitute:",
          "Step 3: Result: $u' + (-5)P(x)u = (-5)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -5.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #9"
      }
    },
    {
      "id": "bern_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #35",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 2}$ into $y' + P(x)y = Q(x)y^{2}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' - P(x)u = Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' + (-1)P(x)u = (-1)Q(x)$",
        "$u' + (2)P(x)u = (2)Q(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-1)$: $(-1)y^{-2}y' + (-1)P(x)y^{1-2} = (-1)Q(x)$.",
          "Step 2: Since $u' = (-1)y^{-2}y'$ and $u = y^{1-2}$, substitute:",
          "Step 3: Result: $u' + (-1)P(x)u = (-1)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -1.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #10"
      }
    },
    {
      "id": "bern_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #36",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 3}$ into $y' + P(x)y = Q(x)y^{3}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (3)P(x)u = (3)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (-2)P(x)u = (-2)Q(x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-2)$: $(-2)y^{-3}y' + (-2)P(x)y^{1-3} = (-2)Q(x)$.",
          "Step 2: Since $u' = (-2)y^{-3}y'$ and $u = y^{1-3}$, substitute:",
          "Step 3: Result: $u' + (-2)P(x)u = (-2)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -2.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #11"
      }
    },
    {
      "id": "bern_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #37",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 4}$ into $y' + P(x)y = Q(x)y^{4}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-3)P(x)u = (-3)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (4)P(x)u = (4)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-3)$: $(-3)y^{-4}y' + (-3)P(x)y^{1-4} = (-3)Q(x)$.",
          "Step 2: Since $u' = (-3)y^{-4}y'$ and $u = y^{1-4}$, substitute:",
          "Step 3: Result: $u' + (-3)P(x)u = (-3)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -3.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #12"
      }
    },
    {
      "id": "bern_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #38",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 5}$ into $y' + P(x)y = Q(x)y^{5}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (-4)P(x)u = (-4)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (5)P(x)u = (5)Q(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-4)$: $(-4)y^{-5}y' + (-4)P(x)y^{1-5} = (-4)Q(x)$.",
          "Step 2: Since $u' = (-4)y^{-5}y'$ and $u = y^{1-5}$, substitute:",
          "Step 3: Result: $u' + (-4)P(x)u = (-4)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -4.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #13"
      }
    },
    {
      "id": "bern_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #39",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 6}$ into $y' + P(x)y = Q(x)y^{6}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (-5)P(x)u = (-5)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (6)P(x)u = (6)Q(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-5)$: $(-5)y^{-6}y' + (-5)P(x)y^{1-6} = (-5)Q(x)$.",
          "Step 2: Since $u' = (-5)y^{-6}y'$ and $u = y^{1-6}$, substitute:",
          "Step 3: Result: $u' + (-5)P(x)u = (-5)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -5.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #14"
      }
    },
    {
      "id": "bern_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #40",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 2}$ into $y' + P(x)y = Q(x)y^{2}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (-1)P(x)u = (-1)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (2)P(x)u = (2)Q(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-1)$: $(-1)y^{-2}y' + (-1)P(x)y^{1-2} = (-1)Q(x)$.",
          "Step 2: Since $u' = (-1)y^{-2}y'$ and $u = y^{1-2}$, substitute:",
          "Step 3: Result: $u' + (-1)P(x)u = (-1)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -1.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #15"
      }
    },
    {
      "id": "bern_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #41",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 3}$ into $y' + P(x)y = Q(x)y^{3}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-2)P(x)u = (-2)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (3)P(x)u = (3)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-2)$: $(-2)y^{-3}y' + (-2)P(x)y^{1-3} = (-2)Q(x)$.",
          "Step 2: Since $u' = (-2)y^{-3}y'$ and $u = y^{1-3}$, substitute:",
          "Step 3: Result: $u' + (-2)P(x)u = (-2)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -2.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #16"
      }
    },
    {
      "id": "bern_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #42",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 4}$ into $y' + P(x)y = Q(x)y^{4}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' - P(x)u = Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' + (-3)P(x)u = (-3)Q(x)$",
        "$u' + (4)P(x)u = (4)Q(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-3)$: $(-3)y^{-4}y' + (-3)P(x)y^{1-4} = (-3)Q(x)$.",
          "Step 2: Since $u' = (-3)y^{-4}y'$ and $u = y^{1-4}$, substitute:",
          "Step 3: Result: $u' + (-3)P(x)u = (-3)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -3.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #17"
      }
    },
    {
      "id": "bern_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #43",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 5}$ into $y' + P(x)y = Q(x)y^{5}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' - P(x)u = Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' + (-4)P(x)u = (-4)Q(x)$",
        "$u' + (5)P(x)u = (5)Q(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-4)$: $(-4)y^{-5}y' + (-4)P(x)y^{1-5} = (-4)Q(x)$.",
          "Step 2: Since $u' = (-4)y^{-5}y'$ and $u = y^{1-5}$, substitute:",
          "Step 3: Result: $u' + (-4)P(x)u = (-4)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -4.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #18"
      }
    },
    {
      "id": "bern_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #44",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 6}$ into $y' + P(x)y = Q(x)y^{6}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (6)P(x)u = (6)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (-5)P(x)u = (-5)Q(x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-5)$: $(-5)y^{-6}y' + (-5)P(x)y^{1-6} = (-5)Q(x)$.",
          "Step 2: Since $u' = (-5)y^{-6}y'$ and $u = y^{1-6}$, substitute:",
          "Step 3: Result: $u' + (-5)P(x)u = (-5)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -5.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #19"
      }
    },
    {
      "id": "bern_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #45",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 2}$ into $y' + P(x)y = Q(x)y^{2}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (2)P(x)u = (2)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (-1)P(x)u = (-1)Q(x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-1)$: $(-1)y^{-2}y' + (-1)P(x)y^{1-2} = (-1)Q(x)$.",
          "Step 2: Since $u' = (-1)y^{-2}y'$ and $u = y^{1-2}$, substitute:",
          "Step 3: Result: $u' + (-1)P(x)u = (-1)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -1.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #20"
      }
    },
    {
      "id": "bern_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #46",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 3}$ into $y' + P(x)y = Q(x)y^{3}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (-2)P(x)u = (-2)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (3)P(x)u = (3)Q(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-2)$: $(-2)y^{-3}y' + (-2)P(x)y^{1-3} = (-2)Q(x)$.",
          "Step 2: Since $u' = (-2)y^{-3}y'$ and $u = y^{1-3}$, substitute:",
          "Step 3: Result: $u' + (-2)P(x)u = (-2)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -2.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #21"
      }
    },
    {
      "id": "bern_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #47",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 4}$ into $y' + P(x)y = Q(x)y^{4}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-3)P(x)u = (-3)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (4)P(x)u = (4)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-3)$: $(-3)y^{-4}y' + (-3)P(x)y^{1-4} = (-3)Q(x)$.",
          "Step 2: Since $u' = (-3)y^{-4}y'$ and $u = y^{1-4}$, substitute:",
          "Step 3: Result: $u' + (-3)P(x)u = (-3)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -3.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #22"
      }
    },
    {
      "id": "bern_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #48",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 5}$ into $y' + P(x)y = Q(x)y^{5}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-4)P(x)u = (-4)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (5)P(x)u = (5)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-4)$: $(-4)y^{-5}y' + (-4)P(x)y^{1-5} = (-4)Q(x)$.",
          "Step 2: Since $u' = (-4)y^{-5}y'$ and $u = y^{1-5}$, substitute:",
          "Step 3: Result: $u' + (-4)P(x)u = (-4)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -4.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #23"
      }
    },
    {
      "id": "bern_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #49",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 6}$ into $y' + P(x)y = Q(x)y^{6}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + (-5)P(x)u = (-5)Q(x)$",
        "$u' + P(x)u = Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (6)P(x)u = (6)Q(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-5)$: $(-5)y^{-6}y' + (-5)P(x)y^{1-6} = (-5)Q(x)$.",
          "Step 2: Since $u' = (-5)y^{-6}y'$ and $u = y^{1-6}$, substitute:",
          "Step 3: Result: $u' + (-5)P(x)u = (-5)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -5.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #24"
      }
    },
    {
      "id": "bern_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "bernoulli",
      "topic": "Transformed Linear Form #50",
      "difficulty": "Midterm Level",
      "question": "After substituting $u = y^{1 - 2}$ into $y' + P(x)y = Q(x)y^{2}$, what is the resulting linear ODE in $u$?",
      "options": [
        "$u' + P(x)u = Q(x)$",
        "$u' + (-1)P(x)u = (-1)Q(x)$",
        "$u' - P(x)u = Q(x)$",
        "$u' + (2)P(x)u = (2)Q(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "The linear equation in $u$ has coefficients multiplied by $(1-n)$.",
        "stepByStep": [
          "Step 1: Multiply divided equation by $(1 - n) = (-1)$: $(-1)y^{-2}y' + (-1)P(x)y^{1-2} = (-1)Q(x)$.",
          "Step 2: Since $u' = (-1)y^{-2}y'$ and $u = y^{1-2}$, substitute:",
          "Step 3: Result: $u' + (-1)P(x)u = (-1)Q(x)$."
        ],
        "commonTrap": "Forgetting to multiply both P(x) and Q(x) by (1 - n) = -1.",
        "reference": "Lecture 5 \u2014 Bernoulli Equations \u00b7 Transformed ODE #25"
      }
    }
  ],
  "homogeneous": [
    {
      "id": "hom_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #1",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #1"
      }
    },
    {
      "id": "hom_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #2",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^3 + y^3)dx - x y^2\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 0",
        "Homogeneous of degree 4",
        "Not homogeneous",
        "Homogeneous of degree 3"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 3.",
          "Step 3: $M(tx, ty) = t^3 M(x, y)$ and $N(tx, ty) = t^3 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 3."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #2"
      }
    },
    {
      "id": "hom_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #3",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x - y)dx + (x + y)dy = 0$.",
      "options": [
        "Homogeneous of degree 1",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 1.",
          "Step 3: $M(tx, ty) = t^1 M(x, y)$ and $N(tx, ty) = t^1 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 1."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #3"
      }
    },
    {
      "id": "hom_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #4",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Not homogeneous",
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #4"
      }
    },
    {
      "id": "hom_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #5",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^3 + y^3)dx - x y^2\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 4",
        "Homogeneous of degree 3",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 3.",
          "Step 3: $M(tx, ty) = t^3 M(x, y)$ and $N(tx, ty) = t^3 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 3."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #5"
      }
    },
    {
      "id": "hom_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #6",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x - y)dx + (x + y)dy = 0$.",
      "options": [
        "Homogeneous of degree 1",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 1.",
          "Step 3: $M(tx, ty) = t^1 M(x, y)$ and $N(tx, ty) = t^1 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 1."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #6"
      }
    },
    {
      "id": "hom_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #7",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #7"
      }
    },
    {
      "id": "hom_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #8",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^3 + y^3)dx - x y^2\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 4",
        "Homogeneous of degree 3",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 3.",
          "Step 3: $M(tx, ty) = t^3 M(x, y)$ and $N(tx, ty) = t^3 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 3."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #8"
      }
    },
    {
      "id": "hom_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #9",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x - y)dx + (x + y)dy = 0$.",
      "options": [
        "Homogeneous of degree 1",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 1.",
          "Step 3: $M(tx, ty) = t^1 M(x, y)$ and $N(tx, ty) = t^1 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 1."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #9"
      }
    },
    {
      "id": "hom_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #10",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Not homogeneous",
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #10"
      }
    },
    {
      "id": "hom_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #11",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^3 + y^3)dx - x y^2\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 0",
        "Homogeneous of degree 4",
        "Not homogeneous",
        "Homogeneous of degree 3"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 3.",
          "Step 3: $M(tx, ty) = t^3 M(x, y)$ and $N(tx, ty) = t^3 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 3."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #11"
      }
    },
    {
      "id": "hom_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #12",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x - y)dx + (x + y)dy = 0$.",
      "options": [
        "Homogeneous of degree 2",
        "Homogeneous of degree 1",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 1.",
          "Step 3: $M(tx, ty) = t^1 M(x, y)$ and $N(tx, ty) = t^1 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 1."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #12"
      }
    },
    {
      "id": "hom_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #13",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #13"
      }
    },
    {
      "id": "hom_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #14",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^3 + y^3)dx - x y^2\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 4",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 3.",
          "Step 3: $M(tx, ty) = t^3 M(x, y)$ and $N(tx, ty) = t^3 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 3."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #14"
      }
    },
    {
      "id": "hom_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #15",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x - y)dx + (x + y)dy = 0$.",
      "options": [
        "Homogeneous of degree 0",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 1"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 1.",
          "Step 3: $M(tx, ty) = t^1 M(x, y)$ and $N(tx, ty) = t^1 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 1."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #15"
      }
    },
    {
      "id": "hom_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #16",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #16"
      }
    },
    {
      "id": "hom_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #17",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^3 + y^3)dx - x y^2\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 0",
        "Homogeneous of degree 4",
        "Not homogeneous",
        "Homogeneous of degree 3"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 3.",
          "Step 3: $M(tx, ty) = t^3 M(x, y)$ and $N(tx, ty) = t^3 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 3."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #17"
      }
    },
    {
      "id": "hom_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #18",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x - y)dx + (x + y)dy = 0$.",
      "options": [
        "Homogeneous of degree 0",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 1"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 1.",
          "Step 3: $M(tx, ty) = t^1 M(x, y)$ and $N(tx, ty) = t^1 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 1."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #18"
      }
    },
    {
      "id": "hom_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #19",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #19"
      }
    },
    {
      "id": "hom_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #20",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^3 + y^3)dx - x y^2\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 4",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 3.",
          "Step 3: $M(tx, ty) = t^3 M(x, y)$ and $N(tx, ty) = t^3 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 3."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #20"
      }
    },
    {
      "id": "hom_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #21",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x - y)dx + (x + y)dy = 0$.",
      "options": [
        "Homogeneous of degree 0",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 1"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 1.",
          "Step 3: $M(tx, ty) = t^1 M(x, y)$ and $N(tx, ty) = t^1 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 1."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #21"
      }
    },
    {
      "id": "hom_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #22",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #22"
      }
    },
    {
      "id": "hom_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #23",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^3 + y^3)dx - x y^2\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 0",
        "Homogeneous of degree 4",
        "Not homogeneous",
        "Homogeneous of degree 3"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 3.",
          "Step 3: $M(tx, ty) = t^3 M(x, y)$ and $N(tx, ty) = t^3 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 3."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #23"
      }
    },
    {
      "id": "hom_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #24",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x - y)dx + (x + y)dy = 0$.",
      "options": [
        "Not homogeneous",
        "Homogeneous of degree 2",
        "Homogeneous of degree 1",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 1.",
          "Step 3: $M(tx, ty) = t^1 M(x, y)$ and $N(tx, ty) = t^1 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 1."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #24"
      }
    },
    {
      "id": "hom_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Homogeneous Degree Audit #25",
      "difficulty": "Midterm Level",
      "question": "Classify the homogeneity of the differential equation: $(x^2 + y^2)dx - 2xy\\,dy = 0$.",
      "options": [
        "Homogeneous of degree 3",
        "Homogeneous of degree 2",
        "Not homogeneous",
        "Homogeneous of degree 0"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "A first-order DE in differential form is homogeneous if $M$ and $N$ have the same degree $k$.",
        "stepByStep": [
          "Step 1: Test $M(tx, ty)$ and $N(tx, ty)$.",
          "Step 2: Every monomial in both $M$ and $N$ has power sum equal to 2.",
          "Step 3: $M(tx, ty) = t^2 M(x, y)$ and $N(tx, ty) = t^2 N(x, y)$.",
          "Step 4: Therefore, it is homogeneous of degree 2."
        ],
        "commonTrap": "Thinking a function is homogeneous if M and N have different degrees. They MUST match!",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Degree Test #25"
      }
    },
    {
      "id": "hom_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #26",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #1"
      }
    },
    {
      "id": "hom_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #27",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #2"
      }
    },
    {
      "id": "hom_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #28",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #3"
      }
    },
    {
      "id": "hom_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #29",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #4"
      }
    },
    {
      "id": "hom_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #30",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #5"
      }
    },
    {
      "id": "hom_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #31",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #6"
      }
    },
    {
      "id": "hom_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #32",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #7"
      }
    },
    {
      "id": "hom_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #33",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #8"
      }
    },
    {
      "id": "hom_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #34",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #9"
      }
    },
    {
      "id": "hom_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #35",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #10"
      }
    },
    {
      "id": "hom_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #36",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #11"
      }
    },
    {
      "id": "hom_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #37",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,du + x\\,dx$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,dx + x\\,du$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #12"
      }
    },
    {
      "id": "hom_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #38",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #13"
      }
    },
    {
      "id": "hom_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #39",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #14"
      }
    },
    {
      "id": "hom_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #40",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #15"
      }
    },
    {
      "id": "hom_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #41",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #16"
      }
    },
    {
      "id": "hom_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #42",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #17"
      }
    },
    {
      "id": "hom_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #43",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #18"
      }
    },
    {
      "id": "hom_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #44",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #19"
      }
    },
    {
      "id": "hom_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #45",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #20"
      }
    },
    {
      "id": "hom_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #46",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = x\\,du$",
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #21"
      }
    },
    {
      "id": "hom_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #47",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #22"
      }
    },
    {
      "id": "hom_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #48",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx + x\\,du$",
        "$dy = u\\,dx$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #23"
      }
    },
    {
      "id": "hom_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #49",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #24"
      }
    },
    {
      "id": "hom_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "homogeneous",
      "topic": "Product Rule Differential dy #50",
      "difficulty": "Midterm Level",
      "question": "When applying the substitution $y = ux$ to a homogeneous equation, what is the product-rule differential $dy$?",
      "options": [
        "$dy = u\\,dx$",
        "$dy = u\\,dx + x\\,du$",
        "$dy = x\\,du$",
        "$dy = u\\,du + x\\,dx$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$y = ux \\implies dy = u dx + x du$.",
        "stepByStep": [
          "Step 1: Since $y(x) = u(x) \\cdot x$, differentiate with respect to $x$ using the product rule:",
          "Step 2: $\\frac{dy}{dx} = \\frac{du}{dx} x + u \\frac{dx}{dx} = x \\frac{du}{dx} + u$.",
          "Step 3: Multiply by $dx$: $dy = u\\,dx + x\\,du$."
        ],
        "commonTrap": "Forgetting the second term x du! Writing dy = u dx destroys the equation.",
        "reference": "Lecture 5 \u2014 Homogeneous Equations \u00b7 Differential #25"
      }
    }
  ],
  "linear_arg": [
    {
      "id": "larg_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #1",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (2x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = y / x$",
        "$u = 2x$",
        "$u = 2y$",
        "$u = 2x + 2y + 1$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 2, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 2x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 2}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 2}{2} = u^2 \\implies u' = 2 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #1"
      }
    },
    {
      "id": "larg_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #2",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (3x + 3y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 3y$",
        "$u = 3x$",
        "$u = 3x + 3y + 1$",
        "$u = y / x$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 3, B = 3, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 3x + 3y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 3}{3}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 3}{3} = u^2 \\implies u' = 3 + 3u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #2"
      }
    },
    {
      "id": "larg_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #3",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (4x + 1y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 4x + 1y + 1$",
        "$u = 4x$",
        "$u = 1y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 4, B = 1, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 4x + 1y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 4}{1}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 4}{1} = u^2 \\implies u' = 4 + 1u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #3"
      }
    },
    {
      "id": "larg_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #4",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (1x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 1x + 2y + 1$",
        "$u = 1x$",
        "$u = 2y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 1, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 1x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 1}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 1}{2} = u^2 \\implies u' = 1 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #4"
      }
    },
    {
      "id": "larg_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #5",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (2x + 3y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 2x + 3y + 1$",
        "$u = 2x$",
        "$u = 3y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 2, B = 3, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 2x + 3y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 2}{3}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 2}{3} = u^2 \\implies u' = 2 + 3u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #5"
      }
    },
    {
      "id": "larg_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #6",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (3x + 1y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 3x + 1y + 1$",
        "$u = 3x$",
        "$u = 1y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 3, B = 1, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 3x + 1y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 3}{1}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 3}{1} = u^2 \\implies u' = 3 + 1u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #6"
      }
    },
    {
      "id": "larg_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #7",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (4x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 4x$",
        "$u = 4x + 2y + 1$",
        "$u = 2y$",
        "$u = y / x$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 4, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 4x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 4}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 4}{2} = u^2 \\implies u' = 4 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #7"
      }
    },
    {
      "id": "larg_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #8",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (1x + 3y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 1x + 3y + 1$",
        "$u = 1x$",
        "$u = 3y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 1, B = 3, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 1x + 3y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 1}{3}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 1}{3} = u^2 \\implies u' = 1 + 3u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #8"
      }
    },
    {
      "id": "larg_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #9",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (2x + 1y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 2x + 1y + 1$",
        "$u = 2x$",
        "$u = 1y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 2, B = 1, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 2x + 1y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 2}{1}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 2}{1} = u^2 \\implies u' = 2 + 1u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #9"
      }
    },
    {
      "id": "larg_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #10",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (3x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = y / x$",
        "$u = 3x$",
        "$u = 2y$",
        "$u = 3x + 2y + 1$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 3, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 3x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 3}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 3}{2} = u^2 \\implies u' = 3 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #10"
      }
    },
    {
      "id": "larg_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #11",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (4x + 3y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 4x + 3y + 1$",
        "$u = 4x$",
        "$u = 3y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 4, B = 3, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 4x + 3y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 4}{3}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 4}{3} = u^2 \\implies u' = 4 + 3u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #11"
      }
    },
    {
      "id": "larg_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #12",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (1x + 1y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 1y$",
        "$u = 1x$",
        "$u = 1x + 1y + 1$",
        "$u = y / x$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 1, B = 1, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 1x + 1y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 1}{1}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 1}{1} = u^2 \\implies u' = 1 + 1u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #12"
      }
    },
    {
      "id": "larg_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #13",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (2x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 2y$",
        "$u = 2x$",
        "$u = 2x + 2y + 1$",
        "$u = y / x$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 2, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 2x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 2}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 2}{2} = u^2 \\implies u' = 2 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #13"
      }
    },
    {
      "id": "larg_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #14",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (3x + 3y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 3x + 3y + 1$",
        "$u = 3x$",
        "$u = 3y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 3, B = 3, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 3x + 3y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 3}{3}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 3}{3} = u^2 \\implies u' = 3 + 3u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #14"
      }
    },
    {
      "id": "larg_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #15",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (4x + 1y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = y / x$",
        "$u = 4x$",
        "$u = 1y$",
        "$u = 4x + 1y + 1$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 4, B = 1, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 4x + 1y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 4}{1}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 4}{1} = u^2 \\implies u' = 4 + 1u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #15"
      }
    },
    {
      "id": "larg_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #16",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (1x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = y / x$",
        "$u = 1x$",
        "$u = 2y$",
        "$u = 1x + 2y + 1$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 1, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 1x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 1}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 1}{2} = u^2 \\implies u' = 1 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #16"
      }
    },
    {
      "id": "larg_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #17",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (2x + 3y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 3y$",
        "$u = 2x$",
        "$u = 2x + 3y + 1$",
        "$u = y / x$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 2, B = 3, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 2x + 3y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 2}{3}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 2}{3} = u^2 \\implies u' = 2 + 3u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #17"
      }
    },
    {
      "id": "larg_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #18",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (3x + 1y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 3x + 1y + 1$",
        "$u = 3x$",
        "$u = 1y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 3, B = 1, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 3x + 1y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 3}{1}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 3}{1} = u^2 \\implies u' = 3 + 1u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #18"
      }
    },
    {
      "id": "larg_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #19",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (4x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 4x + 2y + 1$",
        "$u = 4x$",
        "$u = 2y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 4, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 4x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 4}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 4}{2} = u^2 \\implies u' = 4 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #19"
      }
    },
    {
      "id": "larg_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #20",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (1x + 3y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 1x + 3y + 1$",
        "$u = 1x$",
        "$u = 3y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 1, B = 3, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 1x + 3y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 1}{3}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 1}{3} = u^2 \\implies u' = 1 + 3u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #20"
      }
    },
    {
      "id": "larg_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #21",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (2x + 1y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = y / x$",
        "$u = 2x$",
        "$u = 1y$",
        "$u = 2x + 1y + 1$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 2, B = 1, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 2x + 1y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 2}{1}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 2}{1} = u^2 \\implies u' = 2 + 1u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #21"
      }
    },
    {
      "id": "larg_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #22",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (3x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 3x$",
        "$u = 3x + 2y + 1$",
        "$u = 2y$",
        "$u = y / x$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 3, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 3x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 3}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 3}{2} = u^2 \\implies u' = 3 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #22"
      }
    },
    {
      "id": "larg_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #23",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (4x + 3y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 3y$",
        "$u = 4x$",
        "$u = 4x + 3y + 1$",
        "$u = y / x$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 4, B = 3, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 4x + 3y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 4}{3}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 4}{3} = u^2 \\implies u' = 4 + 3u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #23"
      }
    },
    {
      "id": "larg_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #24",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (1x + 1y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 1x + 1y + 1$",
        "$u = 1x$",
        "$u = 1y$",
        "$u = y / x$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 1, B = 1, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 1x + 1y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 1}{1}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 1}{1} = u^2 \\implies u' = 1 + 1u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #24"
      }
    },
    {
      "id": "larg_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Linear Argument Reduction #25",
      "difficulty": "Midterm Level",
      "question": "To solve $y' = (2x + 2y + 1)^2$, what substitution reduces the ODE to separable form?",
      "options": [
        "$u = 2x$",
        "$u = 2x + 2y + 1$",
        "$u = 2y$",
        "$u = y / x$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Any ODE of form $y' = f(Ax + By + C)$ reduces to separable via $u = Ax + By + C$.",
        "stepByStep": [
          "Step 1: Recognize the linear argument form $y' = f(Ax + By + C)$ with $A = 2, B = 2, C = 1$.",
          "Step 2: Let $u = Ax + By + C = 2x + 2y + 1$.",
          "Step 3: Differentiate: $u' = A + B y' \\implies y' = \\frac{u' - A}{B} = \\frac{u' - 2}{2}$.",
          "Step 4: Substitute into the ODE: $\\frac{u' - 2}{2} = u^2 \\implies u' = 2 + 2u^2$, which is separable!"
        ],
        "commonTrap": "Attempting to expand the square and solve as a multivariable equation.",
        "reference": "Lecture 5 \u2014 Reduction to Separable \u00b7 Linear Argument #25"
      }
    },
    {
      "id": "larg_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #26",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 3}{u + 3} = -e^{-6x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 3\\coth(3x)$",
        "$u(x) = 3\\tanh(3x)$",
        "$u(x) = \\tan(3x)$",
        "$u(x) = 3e^{-6x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 3 = -e^{-6x}(u + 3)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-6x}) = 3(1 - e^{-6x})$.",
          "Step 3: Solve for $u$: $u(x) = 3\\frac{1 - e^{-6x}}{1 + e^{-6x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 3x$.",
          "Step 5: Conclude: $u(x) = 3\\tanh(3x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #1"
      }
    },
    {
      "id": "larg_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #27",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 4}{u + 4} = -e^{-8x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 4e^{-8x}$",
        "$u(x) = 4\\coth(4x)$",
        "$u(x) = \\tan(4x)$",
        "$u(x) = 4\\tanh(4x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 4 = -e^{-8x}(u + 4)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-8x}) = 4(1 - e^{-8x})$.",
          "Step 3: Solve for $u$: $u(x) = 4\\frac{1 - e^{-8x}}{1 + e^{-8x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 4x$.",
          "Step 5: Conclude: $u(x) = 4\\tanh(4x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #2"
      }
    },
    {
      "id": "larg_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #28",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 1}{u + 1} = -e^{-2x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = \\tan(1x)$",
        "$u(x) = 1\\coth(1x)$",
        "$u(x) = 1\\tanh(1x)$",
        "$u(x) = 1e^{-2x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 1 = -e^{-2x}(u + 1)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-2x}) = 1(1 - e^{-2x})$.",
          "Step 3: Solve for $u$: $u(x) = 1\\frac{1 - e^{-2x}}{1 + e^{-2x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 1x$.",
          "Step 5: Conclude: $u(x) = 1\\tanh(1x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #3"
      }
    },
    {
      "id": "larg_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #29",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 2}{u + 2} = -e^{-4x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 2\\tanh(2x)$",
        "$u(x) = 2\\coth(2x)$",
        "$u(x) = \\tan(2x)$",
        "$u(x) = 2e^{-4x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 2 = -e^{-4x}(u + 2)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-4x}) = 2(1 - e^{-4x})$.",
          "Step 3: Solve for $u$: $u(x) = 2\\frac{1 - e^{-4x}}{1 + e^{-4x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 2x$.",
          "Step 5: Conclude: $u(x) = 2\\tanh(2x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #4"
      }
    },
    {
      "id": "larg_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #30",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 3}{u + 3} = -e^{-6x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 3e^{-6x}$",
        "$u(x) = 3\\coth(3x)$",
        "$u(x) = \\tan(3x)$",
        "$u(x) = 3\\tanh(3x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 3 = -e^{-6x}(u + 3)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-6x}) = 3(1 - e^{-6x})$.",
          "Step 3: Solve for $u$: $u(x) = 3\\frac{1 - e^{-6x}}{1 + e^{-6x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 3x$.",
          "Step 5: Conclude: $u(x) = 3\\tanh(3x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #5"
      }
    },
    {
      "id": "larg_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #31",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 4}{u + 4} = -e^{-8x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 4e^{-8x}$",
        "$u(x) = 4\\coth(4x)$",
        "$u(x) = \\tan(4x)$",
        "$u(x) = 4\\tanh(4x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 4 = -e^{-8x}(u + 4)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-8x}) = 4(1 - e^{-8x})$.",
          "Step 3: Solve for $u$: $u(x) = 4\\frac{1 - e^{-8x}}{1 + e^{-8x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 4x$.",
          "Step 5: Conclude: $u(x) = 4\\tanh(4x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #6"
      }
    },
    {
      "id": "larg_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #32",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 1}{u + 1} = -e^{-2x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 1\\coth(1x)$",
        "$u(x) = 1\\tanh(1x)$",
        "$u(x) = \\tan(1x)$",
        "$u(x) = 1e^{-2x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 1 = -e^{-2x}(u + 1)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-2x}) = 1(1 - e^{-2x})$.",
          "Step 3: Solve for $u$: $u(x) = 1\\frac{1 - e^{-2x}}{1 + e^{-2x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 1x$.",
          "Step 5: Conclude: $u(x) = 1\\tanh(1x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #7"
      }
    },
    {
      "id": "larg_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #33",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 2}{u + 2} = -e^{-4x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 2\\tanh(2x)$",
        "$u(x) = 2\\coth(2x)$",
        "$u(x) = \\tan(2x)$",
        "$u(x) = 2e^{-4x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 2 = -e^{-4x}(u + 2)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-4x}) = 2(1 - e^{-4x})$.",
          "Step 3: Solve for $u$: $u(x) = 2\\frac{1 - e^{-4x}}{1 + e^{-4x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 2x$.",
          "Step 5: Conclude: $u(x) = 2\\tanh(2x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #8"
      }
    },
    {
      "id": "larg_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #34",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 3}{u + 3} = -e^{-6x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 3\\tanh(3x)$",
        "$u(x) = 3\\coth(3x)$",
        "$u(x) = \\tan(3x)$",
        "$u(x) = 3e^{-6x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 3 = -e^{-6x}(u + 3)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-6x}) = 3(1 - e^{-6x})$.",
          "Step 3: Solve for $u$: $u(x) = 3\\frac{1 - e^{-6x}}{1 + e^{-6x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 3x$.",
          "Step 5: Conclude: $u(x) = 3\\tanh(3x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #9"
      }
    },
    {
      "id": "larg_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #35",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 4}{u + 4} = -e^{-8x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 4\\coth(4x)$",
        "$u(x) = 4\\tanh(4x)$",
        "$u(x) = \\tan(4x)$",
        "$u(x) = 4e^{-8x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 4 = -e^{-8x}(u + 4)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-8x}) = 4(1 - e^{-8x})$.",
          "Step 3: Solve for $u$: $u(x) = 4\\frac{1 - e^{-8x}}{1 + e^{-8x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 4x$.",
          "Step 5: Conclude: $u(x) = 4\\tanh(4x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #10"
      }
    },
    {
      "id": "larg_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #36",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 1}{u + 1} = -e^{-2x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 1e^{-2x}$",
        "$u(x) = 1\\coth(1x)$",
        "$u(x) = \\tan(1x)$",
        "$u(x) = 1\\tanh(1x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 1 = -e^{-2x}(u + 1)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-2x}) = 1(1 - e^{-2x})$.",
          "Step 3: Solve for $u$: $u(x) = 1\\frac{1 - e^{-2x}}{1 + e^{-2x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 1x$.",
          "Step 5: Conclude: $u(x) = 1\\tanh(1x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #11"
      }
    },
    {
      "id": "larg_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #37",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 2}{u + 2} = -e^{-4x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 2e^{-4x}$",
        "$u(x) = 2\\coth(2x)$",
        "$u(x) = \\tan(2x)$",
        "$u(x) = 2\\tanh(2x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 2 = -e^{-4x}(u + 2)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-4x}) = 2(1 - e^{-4x})$.",
          "Step 3: Solve for $u$: $u(x) = 2\\frac{1 - e^{-4x}}{1 + e^{-4x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 2x$.",
          "Step 5: Conclude: $u(x) = 2\\tanh(2x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #12"
      }
    },
    {
      "id": "larg_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #38",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 3}{u + 3} = -e^{-6x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 3\\coth(3x)$",
        "$u(x) = 3\\tanh(3x)$",
        "$u(x) = \\tan(3x)$",
        "$u(x) = 3e^{-6x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 3 = -e^{-6x}(u + 3)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-6x}) = 3(1 - e^{-6x})$.",
          "Step 3: Solve for $u$: $u(x) = 3\\frac{1 - e^{-6x}}{1 + e^{-6x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 3x$.",
          "Step 5: Conclude: $u(x) = 3\\tanh(3x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #13"
      }
    },
    {
      "id": "larg_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #39",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 4}{u + 4} = -e^{-8x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 4e^{-8x}$",
        "$u(x) = 4\\coth(4x)$",
        "$u(x) = \\tan(4x)$",
        "$u(x) = 4\\tanh(4x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 4 = -e^{-8x}(u + 4)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-8x}) = 4(1 - e^{-8x})$.",
          "Step 3: Solve for $u$: $u(x) = 4\\frac{1 - e^{-8x}}{1 + e^{-8x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 4x$.",
          "Step 5: Conclude: $u(x) = 4\\tanh(4x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #14"
      }
    },
    {
      "id": "larg_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #40",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 1}{u + 1} = -e^{-2x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 1\\tanh(1x)$",
        "$u(x) = 1\\coth(1x)$",
        "$u(x) = \\tan(1x)$",
        "$u(x) = 1e^{-2x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 1 = -e^{-2x}(u + 1)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-2x}) = 1(1 - e^{-2x})$.",
          "Step 3: Solve for $u$: $u(x) = 1\\frac{1 - e^{-2x}}{1 + e^{-2x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 1x$.",
          "Step 5: Conclude: $u(x) = 1\\tanh(1x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #15"
      }
    },
    {
      "id": "larg_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #41",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 2}{u + 2} = -e^{-4x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = \\tan(2x)$",
        "$u(x) = 2\\coth(2x)$",
        "$u(x) = 2\\tanh(2x)$",
        "$u(x) = 2e^{-4x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 2 = -e^{-4x}(u + 2)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-4x}) = 2(1 - e^{-4x})$.",
          "Step 3: Solve for $u$: $u(x) = 2\\frac{1 - e^{-4x}}{1 + e^{-4x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 2x$.",
          "Step 5: Conclude: $u(x) = 2\\tanh(2x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #16"
      }
    },
    {
      "id": "larg_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #42",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 3}{u + 3} = -e^{-6x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 3\\coth(3x)$",
        "$u(x) = 3\\tanh(3x)$",
        "$u(x) = \\tan(3x)$",
        "$u(x) = 3e^{-6x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 3 = -e^{-6x}(u + 3)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-6x}) = 3(1 - e^{-6x})$.",
          "Step 3: Solve for $u$: $u(x) = 3\\frac{1 - e^{-6x}}{1 + e^{-6x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 3x$.",
          "Step 5: Conclude: $u(x) = 3\\tanh(3x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #17"
      }
    },
    {
      "id": "larg_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #43",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 4}{u + 4} = -e^{-8x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 4\\tanh(4x)$",
        "$u(x) = 4\\coth(4x)$",
        "$u(x) = \\tan(4x)$",
        "$u(x) = 4e^{-8x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 4 = -e^{-8x}(u + 4)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-8x}) = 4(1 - e^{-8x})$.",
          "Step 3: Solve for $u$: $u(x) = 4\\frac{1 - e^{-8x}}{1 + e^{-8x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 4x$.",
          "Step 5: Conclude: $u(x) = 4\\tanh(4x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #18"
      }
    },
    {
      "id": "larg_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #44",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 1}{u + 1} = -e^{-2x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 1\\tanh(1x)$",
        "$u(x) = 1\\coth(1x)$",
        "$u(x) = \\tan(1x)$",
        "$u(x) = 1e^{-2x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 1 = -e^{-2x}(u + 1)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-2x}) = 1(1 - e^{-2x})$.",
          "Step 3: Solve for $u$: $u(x) = 1\\frac{1 - e^{-2x}}{1 + e^{-2x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 1x$.",
          "Step 5: Conclude: $u(x) = 1\\tanh(1x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #19"
      }
    },
    {
      "id": "larg_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #45",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 2}{u + 2} = -e^{-4x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 2e^{-4x}$",
        "$u(x) = 2\\coth(2x)$",
        "$u(x) = \\tan(2x)$",
        "$u(x) = 2\\tanh(2x)$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 2 = -e^{-4x}(u + 2)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-4x}) = 2(1 - e^{-4x})$.",
          "Step 3: Solve for $u$: $u(x) = 2\\frac{1 - e^{-4x}}{1 + e^{-4x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 2x$.",
          "Step 5: Conclude: $u(x) = 2\\tanh(2x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #20"
      }
    },
    {
      "id": "larg_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #46",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 3}{u + 3} = -e^{-6x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 3\\tanh(3x)$",
        "$u(x) = 3\\coth(3x)$",
        "$u(x) = \\tan(3x)$",
        "$u(x) = 3e^{-6x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 3 = -e^{-6x}(u + 3)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-6x}) = 3(1 - e^{-6x})$.",
          "Step 3: Solve for $u$: $u(x) = 3\\frac{1 - e^{-6x}}{1 + e^{-6x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 3x$.",
          "Step 5: Conclude: $u(x) = 3\\tanh(3x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #21"
      }
    },
    {
      "id": "larg_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #47",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 4}{u + 4} = -e^{-8x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = \\tan(4x)$",
        "$u(x) = 4\\coth(4x)$",
        "$u(x) = 4\\tanh(4x)$",
        "$u(x) = 4e^{-8x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 4 = -e^{-8x}(u + 4)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-8x}) = 4(1 - e^{-8x})$.",
          "Step 3: Solve for $u$: $u(x) = 4\\frac{1 - e^{-8x}}{1 + e^{-8x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 4x$.",
          "Step 5: Conclude: $u(x) = 4\\tanh(4x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #22"
      }
    },
    {
      "id": "larg_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #48",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 1}{u + 1} = -e^{-2x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 1\\tanh(1x)$",
        "$u(x) = 1\\coth(1x)$",
        "$u(x) = \\tan(1x)$",
        "$u(x) = 1e^{-2x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 1 = -e^{-2x}(u + 1)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-2x}) = 1(1 - e^{-2x})$.",
          "Step 3: Solve for $u$: $u(x) = 1\\frac{1 - e^{-2x}}{1 + e^{-2x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 1x$.",
          "Step 5: Conclude: $u(x) = 1\\tanh(1x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #23"
      }
    },
    {
      "id": "larg_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #49",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 2}{u + 2} = -e^{-4x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = \\tan(2x)$",
        "$u(x) = 2\\coth(2x)$",
        "$u(x) = 2\\tanh(2x)$",
        "$u(x) = 2e^{-4x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 2 = -e^{-4x}(u + 2)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-4x}) = 2(1 - e^{-4x})$.",
          "Step 3: Solve for $u$: $u(x) = 2\\frac{1 - e^{-4x}}{1 + e^{-4x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 2x$.",
          "Step 5: Conclude: $u(x) = 2\\tanh(2x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #24"
      }
    },
    {
      "id": "larg_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "linear_arg",
      "topic": "Tanh Inversion Shortcut #50",
      "difficulty": "Midterm Level",
      "question": "Simplify the closed-form expression $\\frac{u - 3}{u + 3} = -e^{-6x}$ for $u(x)$ using hyperbolic functions:",
      "options": [
        "$u(x) = 3\\tanh(3x)$",
        "$u(x) = 3\\coth(3x)$",
        "$u(x) = \\tan(3x)$",
        "$u(x) = 3e^{-6x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Ratio $\\frac{u-a}{u+a} = -e^{-2ax}$ collapses directly into $u = a\\tanh(ax)$.",
        "stepByStep": [
          "Step 1: Cross-multiply: $u - 3 = -e^{-6x}(u + 3)$.",
          "Step 2: Collect $u$ terms: $u(1 + e^{-6x}) = 3(1 - e^{-6x})$.",
          "Step 3: Solve for $u$: $u(x) = 3\\frac{1 - e^{-6x}}{1 + e^{-6x}}$.",
          "Step 4: Recognize the definition of $\\tanh(w) = \\frac{1 - e^{-2w}}{1 + e^{-2w}}$ with $w = 3x$.",
          "Step 5: Conclude: $u(x) = 3\\tanh(3x)$."
        ],
        "commonTrap": "Doing partial fraction decompositions and logarithm expansions when the definition of tanh inverts it in 1 line.",
        "reference": "Lecture 5 \u2014 Tutor Hack \u00b7 Hyperbolic Inversion #25"
      }
    }
  ],
  "applications": [
    {
      "id": "app_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #1",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 200 L of brine. Brine containing 2 kg/L of salt flows in at 3 L/min, and the well-stirred mixture flows out at 3 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 6 - \\frac{3}{200}A$",
        "$\\frac{dA}{dt} = 6 - 3A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{200}$",
        "$\\frac{dA}{dt} = 6 - \\frac{A}{200}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 3 \\times 2 = 6$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 3 \\times \\frac{A}{ 200 } = \\frac{3}{200}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 6 - \\frac{3}{200}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #1"
      }
    },
    {
      "id": "app_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #2",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 300 L of brine. Brine containing 3 kg/L of salt flows in at 4 L/min, and the well-stirred mixture flows out at 4 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 12 - 4A$",
        "$\\frac{dA}{dt} = 12 - \\frac{4}{300}A$",
        "$\\frac{dA}{dt} = 3 - \\frac{A}{300}$",
        "$\\frac{dA}{dt} = 12 - \\frac{A}{300}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 4 \\times 3 = 12$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 4 \\times \\frac{A}{ 300 } = \\frac{4}{300}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 12 - \\frac{4}{300}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #2"
      }
    },
    {
      "id": "app_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #3",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 400 L of brine. Brine containing 1 kg/L of salt flows in at 5 L/min, and the well-stirred mixture flows out at 5 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 5 - \\frac{A}{400}$",
        "$\\frac{dA}{dt} = 5 - 5A$",
        "$\\frac{dA}{dt} = 1 - \\frac{A}{400}$",
        "$\\frac{dA}{dt} = 5 - \\frac{5}{400}A$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 5 \\times 1 = 5$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 5 \\times \\frac{A}{ 400 } = \\frac{5}{400}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 5 - \\frac{5}{400}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #3"
      }
    },
    {
      "id": "app_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #4",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 500 L of brine. Brine containing 2 kg/L of salt flows in at 2 L/min, and the well-stirred mixture flows out at 2 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 4 - 2A$",
        "$\\frac{dA}{dt} = 4 - \\frac{2}{500}A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{500}$",
        "$\\frac{dA}{dt} = 4 - \\frac{A}{500}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 2 \\times 2 = 4$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 2 \\times \\frac{A}{ 500 } = \\frac{2}{500}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 4 - \\frac{2}{500}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #4"
      }
    },
    {
      "id": "app_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #5",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 100 L of brine. Brine containing 3 kg/L of salt flows in at 3 L/min, and the well-stirred mixture flows out at 3 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 9 - 3A$",
        "$\\frac{dA}{dt} = 9 - \\frac{3}{100}A$",
        "$\\frac{dA}{dt} = 3 - \\frac{A}{100}$",
        "$\\frac{dA}{dt} = 9 - \\frac{A}{100}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 3 \\times 3 = 9$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 3 \\times \\frac{A}{ 100 } = \\frac{3}{100}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 9 - \\frac{3}{100}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #5"
      }
    },
    {
      "id": "app_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #6",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 200 L of brine. Brine containing 1 kg/L of salt flows in at 4 L/min, and the well-stirred mixture flows out at 4 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 4 - \\frac{A}{200}$",
        "$\\frac{dA}{dt} = 4 - 4A$",
        "$\\frac{dA}{dt} = 1 - \\frac{A}{200}$",
        "$\\frac{dA}{dt} = 4 - \\frac{4}{200}A$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 4 \\times 1 = 4$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 4 \\times \\frac{A}{ 200 } = \\frac{4}{200}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 4 - \\frac{4}{200}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #6"
      }
    },
    {
      "id": "app_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #7",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 300 L of brine. Brine containing 2 kg/L of salt flows in at 5 L/min, and the well-stirred mixture flows out at 5 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 10 - 5A$",
        "$\\frac{dA}{dt} = 10 - \\frac{5}{300}A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{300}$",
        "$\\frac{dA}{dt} = 10 - \\frac{A}{300}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 5 \\times 2 = 10$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 5 \\times \\frac{A}{ 300 } = \\frac{5}{300}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 10 - \\frac{5}{300}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #7"
      }
    },
    {
      "id": "app_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #8",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 400 L of brine. Brine containing 3 kg/L of salt flows in at 2 L/min, and the well-stirred mixture flows out at 2 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 6 - 2A$",
        "$\\frac{dA}{dt} = 6 - \\frac{2}{400}A$",
        "$\\frac{dA}{dt} = 3 - \\frac{A}{400}$",
        "$\\frac{dA}{dt} = 6 - \\frac{A}{400}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 2 \\times 3 = 6$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 2 \\times \\frac{A}{ 400 } = \\frac{2}{400}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 6 - \\frac{2}{400}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #8"
      }
    },
    {
      "id": "app_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #9",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 500 L of brine. Brine containing 1 kg/L of salt flows in at 3 L/min, and the well-stirred mixture flows out at 3 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 3 - \\frac{A}{500}$",
        "$\\frac{dA}{dt} = 3 - 3A$",
        "$\\frac{dA}{dt} = 1 - \\frac{A}{500}$",
        "$\\frac{dA}{dt} = 3 - \\frac{3}{500}A$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 3 \\times 1 = 3$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 3 \\times \\frac{A}{ 500 } = \\frac{3}{500}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 3 - \\frac{3}{500}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #9"
      }
    },
    {
      "id": "app_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #10",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 100 L of brine. Brine containing 2 kg/L of salt flows in at 4 L/min, and the well-stirred mixture flows out at 4 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 8 - 4A$",
        "$\\frac{dA}{dt} = 8 - \\frac{4}{100}A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{100}$",
        "$\\frac{dA}{dt} = 8 - \\frac{A}{100}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 4 \\times 2 = 8$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 4 \\times \\frac{A}{ 100 } = \\frac{4}{100}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 8 - \\frac{4}{100}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #10"
      }
    },
    {
      "id": "app_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #11",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 200 L of brine. Brine containing 3 kg/L of salt flows in at 5 L/min, and the well-stirred mixture flows out at 5 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 3 - \\frac{A}{200}$",
        "$\\frac{dA}{dt} = 15 - 5A$",
        "$\\frac{dA}{dt} = 15 - \\frac{5}{200}A$",
        "$\\frac{dA}{dt} = 15 - \\frac{A}{200}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 5 \\times 3 = 15$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 5 \\times \\frac{A}{ 200 } = \\frac{5}{200}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 15 - \\frac{5}{200}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #11"
      }
    },
    {
      "id": "app_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #12",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 300 L of brine. Brine containing 1 kg/L of salt flows in at 2 L/min, and the well-stirred mixture flows out at 2 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 1 - \\frac{A}{300}$",
        "$\\frac{dA}{dt} = 2 - 2A$",
        "$\\frac{dA}{dt} = 2 - \\frac{2}{300}A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{300}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 2 \\times 1 = 2$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 2 \\times \\frac{A}{ 300 } = \\frac{2}{300}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 2 - \\frac{2}{300}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #12"
      }
    },
    {
      "id": "app_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #13",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 400 L of brine. Brine containing 2 kg/L of salt flows in at 3 L/min, and the well-stirred mixture flows out at 3 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 2 - \\frac{A}{400}$",
        "$\\frac{dA}{dt} = 6 - 3A$",
        "$\\frac{dA}{dt} = 6 - \\frac{3}{400}A$",
        "$\\frac{dA}{dt} = 6 - \\frac{A}{400}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 3 \\times 2 = 6$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 3 \\times \\frac{A}{ 400 } = \\frac{3}{400}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 6 - \\frac{3}{400}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #13"
      }
    },
    {
      "id": "app_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #14",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 500 L of brine. Brine containing 3 kg/L of salt flows in at 4 L/min, and the well-stirred mixture flows out at 4 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 3 - \\frac{A}{500}$",
        "$\\frac{dA}{dt} = 12 - 4A$",
        "$\\frac{dA}{dt} = 12 - \\frac{4}{500}A$",
        "$\\frac{dA}{dt} = 12 - \\frac{A}{500}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 4 \\times 3 = 12$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 4 \\times \\frac{A}{ 500 } = \\frac{4}{500}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 12 - \\frac{4}{500}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #14"
      }
    },
    {
      "id": "app_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #15",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 100 L of brine. Brine containing 1 kg/L of salt flows in at 5 L/min, and the well-stirred mixture flows out at 5 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 5 - \\frac{A}{100}$",
        "$\\frac{dA}{dt} = 5 - 5A$",
        "$\\frac{dA}{dt} = 1 - \\frac{A}{100}$",
        "$\\frac{dA}{dt} = 5 - \\frac{5}{100}A$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 5 \\times 1 = 5$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 5 \\times \\frac{A}{ 100 } = \\frac{5}{100}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 5 - \\frac{5}{100}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #15"
      }
    },
    {
      "id": "app_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #16",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 200 L of brine. Brine containing 2 kg/L of salt flows in at 2 L/min, and the well-stirred mixture flows out at 2 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 4 - 2A$",
        "$\\frac{dA}{dt} = 4 - \\frac{2}{200}A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{200}$",
        "$\\frac{dA}{dt} = 4 - \\frac{A}{200}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 2 \\times 2 = 4$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 2 \\times \\frac{A}{ 200 } = \\frac{2}{200}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 4 - \\frac{2}{200}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #16"
      }
    },
    {
      "id": "app_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #17",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 300 L of brine. Brine containing 3 kg/L of salt flows in at 3 L/min, and the well-stirred mixture flows out at 3 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 9 - 3A$",
        "$\\frac{dA}{dt} = 9 - \\frac{3}{300}A$",
        "$\\frac{dA}{dt} = 3 - \\frac{A}{300}$",
        "$\\frac{dA}{dt} = 9 - \\frac{A}{300}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 3 \\times 3 = 9$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 3 \\times \\frac{A}{ 300 } = \\frac{3}{300}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 9 - \\frac{3}{300}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #17"
      }
    },
    {
      "id": "app_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #18",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 400 L of brine. Brine containing 1 kg/L of salt flows in at 4 L/min, and the well-stirred mixture flows out at 4 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 4 - \\frac{A}{400}$",
        "$\\frac{dA}{dt} = 4 - 4A$",
        "$\\frac{dA}{dt} = 1 - \\frac{A}{400}$",
        "$\\frac{dA}{dt} = 4 - \\frac{4}{400}A$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 4 \\times 1 = 4$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 4 \\times \\frac{A}{ 400 } = \\frac{4}{400}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 4 - \\frac{4}{400}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #18"
      }
    },
    {
      "id": "app_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #19",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 500 L of brine. Brine containing 2 kg/L of salt flows in at 5 L/min, and the well-stirred mixture flows out at 5 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 10 - \\frac{5}{500}A$",
        "$\\frac{dA}{dt} = 10 - 5A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{500}$",
        "$\\frac{dA}{dt} = 10 - \\frac{A}{500}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 5 \\times 2 = 10$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 5 \\times \\frac{A}{ 500 } = \\frac{5}{500}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 10 - \\frac{5}{500}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #19"
      }
    },
    {
      "id": "app_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #20",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 100 L of brine. Brine containing 3 kg/L of salt flows in at 2 L/min, and the well-stirred mixture flows out at 2 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 6 - \\frac{2}{100}A$",
        "$\\frac{dA}{dt} = 6 - 2A$",
        "$\\frac{dA}{dt} = 3 - \\frac{A}{100}$",
        "$\\frac{dA}{dt} = 6 - \\frac{A}{100}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 2 \\times 3 = 6$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 2 \\times \\frac{A}{ 100 } = \\frac{2}{100}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 6 - \\frac{2}{100}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #20"
      }
    },
    {
      "id": "app_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #21",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 200 L of brine. Brine containing 1 kg/L of salt flows in at 3 L/min, and the well-stirred mixture flows out at 3 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 1 - \\frac{A}{200}$",
        "$\\frac{dA}{dt} = 3 - 3A$",
        "$\\frac{dA}{dt} = 3 - \\frac{3}{200}A$",
        "$\\frac{dA}{dt} = 3 - \\frac{A}{200}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 3 \\times 1 = 3$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 3 \\times \\frac{A}{ 200 } = \\frac{3}{200}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 3 - \\frac{3}{200}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #21"
      }
    },
    {
      "id": "app_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #22",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 300 L of brine. Brine containing 2 kg/L of salt flows in at 4 L/min, and the well-stirred mixture flows out at 4 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 8 - \\frac{4}{300}A$",
        "$\\frac{dA}{dt} = 8 - 4A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{300}$",
        "$\\frac{dA}{dt} = 8 - \\frac{A}{300}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 4 \\times 2 = 8$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 4 \\times \\frac{A}{ 300 } = \\frac{4}{300}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 8 - \\frac{4}{300}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #22"
      }
    },
    {
      "id": "app_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #23",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 400 L of brine. Brine containing 3 kg/L of salt flows in at 5 L/min, and the well-stirred mixture flows out at 5 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 15 - \\frac{5}{400}A$",
        "$\\frac{dA}{dt} = 15 - 5A$",
        "$\\frac{dA}{dt} = 3 - \\frac{A}{400}$",
        "$\\frac{dA}{dt} = 15 - \\frac{A}{400}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 5 \\times 3 = 15$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 5 \\times \\frac{A}{ 400 } = \\frac{5}{400}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 15 - \\frac{5}{400}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #23"
      }
    },
    {
      "id": "app_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #24",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 500 L of brine. Brine containing 1 kg/L of salt flows in at 2 L/min, and the well-stirred mixture flows out at 2 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 1 - \\frac{A}{500}$",
        "$\\frac{dA}{dt} = 2 - 2A$",
        "$\\frac{dA}{dt} = 2 - \\frac{2}{500}A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{500}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 2 \\times 1 = 2$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 2 \\times \\frac{A}{ 500 } = \\frac{2}{500}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 2 - \\frac{2}{500}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #24"
      }
    },
    {
      "id": "app_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Constant Volume Mixing Tank #25",
      "difficulty": "Midterm Level",
      "question": "A tank initially contains 100 L of brine. Brine containing 2 kg/L of salt flows in at 3 L/min, and the well-stirred mixture flows out at 3 L/min. What is the differential equation for salt amount $A(t)$?",
      "options": [
        "$\\frac{dA}{dt} = 6 - \\frac{A}{100}$",
        "$\\frac{dA}{dt} = 6 - 3A$",
        "$\\frac{dA}{dt} = 2 - \\frac{A}{100}$",
        "$\\frac{dA}{dt} = 6 - \\frac{3}{100}A$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Mass balance: $\\frac{dA}{dt} = r_{\\text{in}} c_{\\text{in}} - r_{\\text{out}} \\frac{A}{V}$.",
        "stepByStep": [
          "Step 1: General mass balance rate equation: $\\frac{dA}{dt} = R_{\\text{in}} - R_{\\text{out}}$.",
          "Step 2: Inflow rate: $R_{\\text{in}} = r_{\\text{in}} \\times c_{\\text{in}} = 3 \\times 2 = 6$ kg/min.",
          "Step 3: Outflow rate: $R_{\\text{out}} = r_{\\text{out}} \\times \\frac{A(t)}{V(t)} = 3 \\times \\frac{A}{ 100 } = \\frac{3}{100}A$ kg/min.",
          "Step 4: Combine: $\\frac{dA}{dt} = 6 - \\frac{3}{100}A$."
        ],
        "commonTrap": "Omitting the outflow rate rin when computing the concentration ratio.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Mixing Tank #25"
      }
    },
    {
      "id": "app_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #26",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 92\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 92 + 20 e^{-kt}$",
        "$T(t) = 20 + 72 e^{-kt}$",
        "$T(t) = 20 - 72 e^{-kt}$",
        "$T(t) = 92 e^{-kt}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 92$: $92 = 20 + C \\implies C = 72$.",
          "Step 5: Final solution: $T(t) = 20 + 72 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #1"
      }
    },
    {
      "id": "app_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #27",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 94\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 + 74 e^{-kt}$",
        "$T(t) = 94 + 20 e^{-kt}$",
        "$T(t) = 20 - 74 e^{-kt}$",
        "$T(t) = 94 e^{-kt}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 94$: $94 = 20 + C \\implies C = 74$.",
          "Step 5: Final solution: $T(t) = 20 + 74 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #2"
      }
    },
    {
      "id": "app_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #28",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 96\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 96 + 20 e^{-kt}$",
        "$T(t) = 20 + 76 e^{-kt}$",
        "$T(t) = 20 - 76 e^{-kt}$",
        "$T(t) = 96 e^{-kt}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 96$: $96 = 20 + C \\implies C = 76$.",
          "Step 5: Final solution: $T(t) = 20 + 76 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #3"
      }
    },
    {
      "id": "app_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #29",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 98\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 98 + 20 e^{-kt}$",
        "$T(t) = 20 + 78 e^{-kt}$",
        "$T(t) = 20 - 78 e^{-kt}$",
        "$T(t) = 98 e^{-kt}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 98$: $98 = 20 + C \\implies C = 78$.",
          "Step 5: Final solution: $T(t) = 20 + 78 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #4"
      }
    },
    {
      "id": "app_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #30",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 80\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 - 60 e^{-kt}$",
        "$T(t) = 80 + 20 e^{-kt}$",
        "$T(t) = 20 + 60 e^{-kt}$",
        "$T(t) = 80 e^{-kt}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 80$: $80 = 20 + C \\implies C = 60$.",
          "Step 5: Final solution: $T(t) = 20 + 60 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #5"
      }
    },
    {
      "id": "app_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #31",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 82\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 - 62 e^{-kt}$",
        "$T(t) = 82 + 20 e^{-kt}$",
        "$T(t) = 20 + 62 e^{-kt}$",
        "$T(t) = 82 e^{-kt}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 82$: $82 = 20 + C \\implies C = 62$.",
          "Step 5: Final solution: $T(t) = 20 + 62 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #6"
      }
    },
    {
      "id": "app_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #32",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 84\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 + 64 e^{-kt}$",
        "$T(t) = 84 + 20 e^{-kt}$",
        "$T(t) = 20 - 64 e^{-kt}$",
        "$T(t) = 84 e^{-kt}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 84$: $84 = 20 + C \\implies C = 64$.",
          "Step 5: Final solution: $T(t) = 20 + 64 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #7"
      }
    },
    {
      "id": "app_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #33",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 86\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 86 e^{-kt}$",
        "$T(t) = 86 + 20 e^{-kt}$",
        "$T(t) = 20 - 66 e^{-kt}$",
        "$T(t) = 20 + 66 e^{-kt}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 86$: $86 = 20 + C \\implies C = 66$.",
          "Step 5: Final solution: $T(t) = 20 + 66 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #8"
      }
    },
    {
      "id": "app_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #34",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 88\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 88 e^{-kt}$",
        "$T(t) = 88 + 20 e^{-kt}$",
        "$T(t) = 20 - 68 e^{-kt}$",
        "$T(t) = 20 + 68 e^{-kt}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 88$: $88 = 20 + C \\implies C = 68$.",
          "Step 5: Final solution: $T(t) = 20 + 68 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #9"
      }
    },
    {
      "id": "app_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #35",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 90\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 + 70 e^{-kt}$",
        "$T(t) = 90 + 20 e^{-kt}$",
        "$T(t) = 20 - 70 e^{-kt}$",
        "$T(t) = 90 e^{-kt}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 90$: $90 = 20 + C \\implies C = 70$.",
          "Step 5: Final solution: $T(t) = 20 + 70 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #10"
      }
    },
    {
      "id": "app_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #36",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 92\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 92 + 20 e^{-kt}$",
        "$T(t) = 20 + 72 e^{-kt}$",
        "$T(t) = 20 - 72 e^{-kt}$",
        "$T(t) = 92 e^{-kt}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 92$: $92 = 20 + C \\implies C = 72$.",
          "Step 5: Final solution: $T(t) = 20 + 72 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #11"
      }
    },
    {
      "id": "app_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #37",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 94\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 94 e^{-kt}$",
        "$T(t) = 94 + 20 e^{-kt}$",
        "$T(t) = 20 - 74 e^{-kt}$",
        "$T(t) = 20 + 74 e^{-kt}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 94$: $94 = 20 + C \\implies C = 74$.",
          "Step 5: Final solution: $T(t) = 20 + 74 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #12"
      }
    },
    {
      "id": "app_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #38",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 96\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 96 + 20 e^{-kt}$",
        "$T(t) = 20 + 76 e^{-kt}$",
        "$T(t) = 20 - 76 e^{-kt}$",
        "$T(t) = 96 e^{-kt}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 96$: $96 = 20 + C \\implies C = 76$.",
          "Step 5: Final solution: $T(t) = 20 + 76 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #13"
      }
    },
    {
      "id": "app_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #39",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 98\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 - 78 e^{-kt}$",
        "$T(t) = 98 + 20 e^{-kt}$",
        "$T(t) = 20 + 78 e^{-kt}$",
        "$T(t) = 98 e^{-kt}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 98$: $98 = 20 + C \\implies C = 78$.",
          "Step 5: Final solution: $T(t) = 20 + 78 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #14"
      }
    },
    {
      "id": "app_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #40",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 80\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 - 60 e^{-kt}$",
        "$T(t) = 80 + 20 e^{-kt}$",
        "$T(t) = 20 + 60 e^{-kt}$",
        "$T(t) = 80 e^{-kt}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 80$: $80 = 20 + C \\implies C = 60$.",
          "Step 5: Final solution: $T(t) = 20 + 60 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #15"
      }
    },
    {
      "id": "app_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #41",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 82\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 82 e^{-kt}$",
        "$T(t) = 82 + 20 e^{-kt}$",
        "$T(t) = 20 - 62 e^{-kt}$",
        "$T(t) = 20 + 62 e^{-kt}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 82$: $82 = 20 + C \\implies C = 62$.",
          "Step 5: Final solution: $T(t) = 20 + 62 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #16"
      }
    },
    {
      "id": "app_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #42",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 84\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 - 64 e^{-kt}$",
        "$T(t) = 84 + 20 e^{-kt}$",
        "$T(t) = 20 + 64 e^{-kt}$",
        "$T(t) = 84 e^{-kt}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 84$: $84 = 20 + C \\implies C = 64$.",
          "Step 5: Final solution: $T(t) = 20 + 64 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #17"
      }
    },
    {
      "id": "app_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #43",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 86\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 + 66 e^{-kt}$",
        "$T(t) = 86 + 20 e^{-kt}$",
        "$T(t) = 20 - 66 e^{-kt}$",
        "$T(t) = 86 e^{-kt}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 86$: $86 = 20 + C \\implies C = 66$.",
          "Step 5: Final solution: $T(t) = 20 + 66 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #18"
      }
    },
    {
      "id": "app_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #44",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 88\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 88 + 20 e^{-kt}$",
        "$T(t) = 20 + 68 e^{-kt}$",
        "$T(t) = 20 - 68 e^{-kt}$",
        "$T(t) = 88 e^{-kt}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 88$: $88 = 20 + C \\implies C = 68$.",
          "Step 5: Final solution: $T(t) = 20 + 68 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #19"
      }
    },
    {
      "id": "app_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #45",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 90\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 + 70 e^{-kt}$",
        "$T(t) = 90 + 20 e^{-kt}$",
        "$T(t) = 20 - 70 e^{-kt}$",
        "$T(t) = 90 e^{-kt}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 90$: $90 = 20 + C \\implies C = 70$.",
          "Step 5: Final solution: $T(t) = 20 + 70 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #20"
      }
    },
    {
      "id": "app_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #46",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 92\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 - 72 e^{-kt}$",
        "$T(t) = 92 + 20 e^{-kt}$",
        "$T(t) = 20 + 72 e^{-kt}$",
        "$T(t) = 92 e^{-kt}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 92$: $92 = 20 + C \\implies C = 72$.",
          "Step 5: Final solution: $T(t) = 20 + 72 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #21"
      }
    },
    {
      "id": "app_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #47",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 94\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 - 74 e^{-kt}$",
        "$T(t) = 94 + 20 e^{-kt}$",
        "$T(t) = 20 + 74 e^{-kt}$",
        "$T(t) = 94 e^{-kt}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 94$: $94 = 20 + C \\implies C = 74$.",
          "Step 5: Final solution: $T(t) = 20 + 74 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #22"
      }
    },
    {
      "id": "app_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #48",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 96\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 96 + 20 e^{-kt}$",
        "$T(t) = 20 + 76 e^{-kt}$",
        "$T(t) = 20 - 76 e^{-kt}$",
        "$T(t) = 96 e^{-kt}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 96$: $96 = 20 + C \\implies C = 76$.",
          "Step 5: Final solution: $T(t) = 20 + 76 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #23"
      }
    },
    {
      "id": "app_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #49",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 98\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 20 + 78 e^{-kt}$",
        "$T(t) = 98 + 20 e^{-kt}$",
        "$T(t) = 20 - 78 e^{-kt}$",
        "$T(t) = 98 e^{-kt}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 98$: $98 = 20 + C \\implies C = 78$.",
          "Step 5: Final solution: $T(t) = 20 + 78 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #24"
      }
    },
    {
      "id": "app_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "applications",
      "topic": "Newton Cooling Law Solution #50",
      "difficulty": "Midterm Level",
      "question": "A body with initial temperature 80\u00b0C is placed in a medium held at constant temperature 20\u00b0C. According to Newton's Law of Cooling $\\frac{dT}{dt} = -k(T - T_m)$, what is the temperature $T(t)$?",
      "options": [
        "$T(t) = 80 e^{-kt}$",
        "$T(t) = 80 + 20 e^{-kt}$",
        "$T(t) = 20 - 60 e^{-kt}$",
        "$T(t) = 20 + 60 e^{-kt}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Newton's cooling general solution: $T(t) = T_m + (T_0 - T_m)e^{-kt}$.",
        "stepByStep": [
          "Step 1: Differential equation: $\\frac{dT}{dt} = -k(T - 20)$.",
          "Step 2: Separate variables: $\\frac{dT}{T - 20} = -k\\,dt \\implies \\ln|T - 20| = -kt + C_1$.",
          "Step 3: Exponentiate: $T(t) - 20 = C e^{-kt} \\implies T(t) = 20 + C e^{-kt}$.",
          "Step 4: Apply $T(0) = 80$: $80 = 20 + C \\implies C = 60$.",
          "Step 5: Final solution: $T(t) = 20 + 60 e^{-kt}$."
        ],
        "commonTrap": "Writing T(t) = T0 e^{-kt} which falsely assumes ambient temperature is 0.",
        "reference": "Lecture 6 \u2014 Modeling with First-Order ODEs \u00b7 Newton Cooling #25"
      }
    }
  ],
  "complex_numbers": [
      {
          "id": "cpx_01",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Multiplication (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Evaluate the product $z = (3 - 2i)(4 + 5i)$ in standard rectangular form $a + bi$.",
          "options": [
              "$22 + 7i$",
              "$2 + 7i$",
              "$22 - 7i$",
              "$12 - 10i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Use FOIL and substitute $i^2 = -1$: $(a + bi)(c + di) = (ac - bd) + i(ad + bc)$.",
              "stepByStep": [
                  "Step 1: Expand product: $(3)(4) + 3(5i) - 2i(4) - 2i(5i) = 12 + 15i - 8i - 10i^2$.",
                  "Step 2: Replace $i^2 = -1$: $12 + 7i - 10(-1) = 12 + 7i + 10 = 22 + 7i$."
              ],
              "commonTrap": "Writing -10 instead of +10 when simplifying -10i^2.",
              "reference": "Zill \u00a717.1 \u2014 Complex Numbers \u00b7 Arithmetic Operations"
          }
      },
      {
          "id": "cpx_02",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Division via Conjugate (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Simplify the quotient $\\frac{4 + 2i}{1 - i}$ into standard rectangular form $a + bi$.",
          "options": [
              "$1 + 3i$",
              "$3 + 3i$",
              "$-1 + 3i$",
              "$1 - 3i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Multiply numerator and denominator by the complex conjugate of the denominator: $\\bar{z}_2 = 1 + i$.",
              "stepByStep": [
                  "Step 1: Multiply numerator and denominator by $\\bar{z} = 1 + i$: $\\frac{(4 + 2i)(1 + i)}{(1 - i)(1 + i)}$.",
                  "Step 2: Denominator: $(1 - i)(1 + i) = 1^2 - i^2 = 1 - (-1) = 2$.",
                  "Step 3: Numerator: $4(1) + 4(i) + 2i(1) + 2i^2 = 4 + 6i - 2 = 2 + 6i$.",
                  "Step 4: Divide each term: $\\frac{2 + 6i}{2} = 1 + 3i$."
              ],
              "commonTrap": "Dividing only the real part by 2 and forgetting to divide the imaginary part.",
              "reference": "Zill \u00a717.1 \u2014 Complex Numbers \u00b7 Division by Complex Conjugate"
          }
      },
      {
          "id": "cpx_03",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Division (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Express $\\frac{2 + 3i}{3 - 4i}$ in the form $a + bi$.",
          "options": [
              "$-\\frac{6}{25} + \\frac{17}{25}i$",
              "$\\frac{6}{25} + \\frac{17}{25}i$",
              "$-\\frac{6}{7} + \\frac{17}{7}i$",
              "$\\frac{18}{25} + \\frac{1}{25}i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Conjugate multiplication: $\\frac{z_1}{z_2} = \\frac{z_1 \\bar{z}_2}{|z_2|^2}$.",
              "stepByStep": [
                  "Step 1: Denominator conjugate: $3 + 4i$. Denominator is $3^2 + (-4)^2 = 9 + 16 = 25$.",
                  "Step 2: Numerator: $(2 + 3i)(3 + 4i) = 6 + 8i + 9i + 12i^2 = 6 + 17i - 12 = -6 + 17i$.",
                  "Step 3: Quotient: $-\\frac{6}{25} + \\frac{17}{25}i$."
              ],
              "commonTrap": "Computing denominator as 3^2 - 4^2 = -7 instead of 3^2 + 4^2 = 25.",
              "reference": "Zill \u00a717.1 \u2014 Complex Numbers \u00b7 Division"
          }
      },
      {
          "id": "cpx_04",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus Calculation (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus $|z|$ of $z = -5 + 12i$?",
          "options": [
              "$13$",
              "$\\sqrt{119}$",
              "$17$",
              "$7$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Modulus is the Euclidean distance from origin: $|z| = \\sqrt{x^2 + y^2}$.",
              "stepByStep": [
                  "Step 1: Identify real part $x = -5$ and imaginary part $y = 12$.",
                  "Step 2: $|z| = \\sqrt{(-5)^2 + (12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
              ],
              "commonTrap": "Squaring 12i into -144 and getting sqrt(25 - 144) = sqrt(-119). Modulus is based on real components y=12!",
              "reference": "Zill \u00a717.1 \u2014 Modulus and Complex Absolute Value"
          }
      },
      {
          "id": "cpx_05",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Powers of the Imaginary Unit (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $i^{2027}$.",
          "options": [
              "$-i$",
              "$i$",
              "$-1$",
              "$1$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Powers of $i$ cycle modulo 4: $i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1$.",
              "stepByStep": [
                  "Step 1: Divide exponent 2027 by 4: $2027 = 4 \\times 506 + 3$. Remainder is 3.",
                  "Step 2: Therefore $i^{2027} = (i^4)^{506} \\cdot i^3 = 1^{506} \\cdot (-i) = -i$."
              ],
              "commonTrap": "Confusing remainder 3 with remainder 1, yielding +i.",
              "reference": "Zill \u00a717.1 \u2014 Powers of i"
          }
      },
      {
          "id": "cpx_06",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Conjugate Identity (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "If $z = 3 - 4i$, what is the exact numerical value of $z \\bar{z}$?",
          "options": [
              "$25$",
              "$-7$",
              "$25 - 24i$",
              "$7$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The product of any complex number with its conjugate is the square of its modulus: $z \\bar{z} = |z|^2 = x^2 + y^2$.",
              "stepByStep": [
                  "Step 1: Conjugate $\\bar{z} = 3 + 4i$.",
                  "Step 2: $z \\bar{z} = (3 - 4i)(3 + 4i) = 3^2 - (4i)^2 = 9 - (-16) = 25$."
              ],
              "commonTrap": "Writing 9 - 16 = -7 by missing the i^2 = -1 sign flip.",
              "reference": "Zill \u00a717.1 \u2014 Conjugate Properties"
          }
      },
      {
          "id": "cpx_07",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Imaginary Part Definition (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "What is the imaginary part $\\operatorname{Im}(z)$ of $z = \\frac{1}{2 + 3i}$?",
          "options": [
              "$-\\frac{3}{13}$",
              "$\\frac{3}{13}$",
              "$-\\frac{3}{13}i$",
              "$\\frac{2}{13}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The imaginary part of $z = x + iy$ is the real number $y$, NEVER containing the unit $i$.",
              "stepByStep": [
                  "Step 1: Multiply by conjugate: $\\frac{1(2 - 3i)}{(2 + 3i)(2 - 3i)} = \\frac{2 - 3i}{4 + 9} = \\frac{2 - 3i}{13}$.",
                  "Step 2: Real part $\\operatorname{Re}(z) = \\frac{2}{13}$, imaginary part $\\operatorname{Im}(z) = -\\frac{3}{13}$."
              ],
              "commonTrap": "Including the symbol 'i' in the imaginary part: Im(z) is -3/13, NOT -3/13 i.",
              "reference": "Zill \u00a717.1 \u2014 Real and Imaginary Parts"
          }
      },
      {
          "id": "cpx_08",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Equality Matching (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Find the real values of $x$ and $y$ that satisfy $(2x - y) + i(x + 3y) = 5 + 6i$.",
          "options": [
              "$x = 3, \\; y = 1$",
              "$x = 2, \\; y = -1$",
              "$x = 1, \\; y = 3$",
              "$x = 4, \\; y = 3$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Two complex numbers are equal if and only if both real and imaginary parts match independently.",
              "stepByStep": [
                  "Step 1: Real parts: $2x - y = 5 \\implies y = 2x - 5$.",
                  "Step 2: Imaginary parts: $x + 3y = 6$.",
                  "Step 3: Substitute $y$: $x + 3(2x - 5) = 6 \\implies x + 6x - 15 = 6 \\implies 7x = 21 \\implies x = 3$.",
                  "Step 4: Solve $y$: $y = 2(3) - 5 = 1$."
              ],
              "commonTrap": "Equating the sum (2x-y) + (x+3y) = 11 instead of separating real and imaginary systems.",
              "reference": "Zill \u00a717.1 \u2014 Equality of Complex Numbers"
          }
      },
      {
          "id": "cpx_09",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Triangle Inequality Bound (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "If $|z| = 4$, what is the maximum possible value of $|z - 3 + 4i|$ according to the Triangle Inequality?",
          "options": [
              "$9$",
              "$1$",
              "$5$",
              "$7$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "By the Triangle Inequality, $|z_1 + z_2| \\le |z_1| + |z_2|$.",
              "stepByStep": [
                  "Step 1: Rewrite $|z - (3 - 4i)| \\le |z| + |-3 + 4i|$.",
                  "Step 2: Compute $|-3 + 4i| = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = 5$.",
                  "Step 3: Maximum value is $|z| + 5 = 4 + 5 = 9$."
              ],
              "commonTrap": "Subtracting 5 from 4 to get -1, or confusing maximum with minimum bound (|4 - 5| = 1).",
              "reference": "Zill \u00a717.1 \u2014 Triangle Inequality (Theorem 17.1.1)"
          }
      },
      {
          "id": "cpx_10",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus of Product (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Without expanding, what is the exact modulus of $z = (1 + 2i)(3 - 4i)$?",
          "options": [
              "$5\\sqrt{5}$",
              "$25$",
              "$\\sqrt{65}$",
              "$15$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The modulus of a product is the product of the moduli: $|z_1 z_2| = |z_1| \\cdot |z_2|$.",
              "stepByStep": [
                  "Step 1: Compute $|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$.",
                  "Step 2: Compute $|3 - 4i| = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.",
                  "Step 3: Multiply: $|z| = 5\\sqrt{5}$."
              ],
              "commonTrap": "Wasting 3 minutes expanding the product before taking the modulus.",
              "reference": "Zill \u00a717.1 \u2014 Modulus Properties"
          }
      },
      {
          "id": "cpx_11",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus of Quotient (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus of $w = \\frac{2 - i}{1 + 2i}$?",
          "options": [
              "$1$",
              "$\\sqrt{5}$",
              "$\\frac{5}{3}$",
              "$\\frac{1}{\\sqrt{5}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The modulus of a quotient is the quotient of moduli: $|z_1/z_2| = |z_1|/|z_2|$.",
              "stepByStep": [
                  "Step 1: $|2 - i| = \\sqrt{2^2 + (-1)^2} = \\sqrt{5}$.",
                  "Step 2: $|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$.",
                  "Step 3: $|w| = \\frac{\\sqrt{5}}{\\sqrt{5}} = 1$."
              ],
              "commonTrap": "Doing long conjugate division when only the modulus magnitude was requested.",
              "reference": "Zill \u00a717.1 \u2014 Modulus of Quotients"
          }
      },
      {
          "id": "cpx_12",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Conjugate of Quotient (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Which identity correctly represents the conjugate of a quotient $\\overline{\\left(\\frac{z_1}{z_2}\\right)}$?",
          "options": [
              "$\\frac{\\bar{z}_1}{\\bar{z}_2}$",
              "$\\frac{z_1}{\\bar{z}_2}$",
              "$-\\frac{\\bar{z}_1}{\\bar{z}_2}$",
              "$\\frac{\\bar{z}_1}{z_2}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Conjugation distributes over division: $\\overline{z_1 / z_2} = \\bar{z}_1 / \\bar{z}_2$.",
              "stepByStep": [
                  "Step 1: The conjugate of a ratio is the ratio of individual conjugates."
              ],
              "commonTrap": "Applying a negative sign to the entire fraction.",
              "reference": "Zill \u00a717.1 \u2014 Conjugate Algebraic Rules"
          }
      },
      {
          "id": "cpx_13",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Pure Imaginary Numbers (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "For what real value of $k$ is $z = (k + 2i)(1 - i)$ a pure imaginary number?",
          "options": [
              "$k = -2$",
              "$k = 2$",
              "$k = 0$",
              "$k = 1$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "A complex number $z = x + iy$ is pure imaginary if its real part $\\operatorname{Re}(z) = 0$.",
              "stepByStep": [
                  "Step 1: Expand $(k + 2i)(1 - i) = k - ki + 2i - 2i^2 = (k + 2) + i(2 - k)$.",
                  "Step 2: Set real part to zero: $k + 2 = 0 \\implies k = -2$."
              ],
              "commonTrap": "Setting the imaginary part 2 - k = 0, which makes it purely REAL instead of pure imaginary.",
              "reference": "Zill \u00a717.1 \u2014 Pure Imaginary Definition"
          }
      },
      {
          "id": "cpx_14",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Pure Real Condition (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "A complex number $z$ satisfies $z = \\bar{z}$ if and only if:",
          "options": [
              "$z$ is purely real",
              "$z$ is purely imaginary",
              "$|z| = 1$",
              "$z = 0$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$x + iy = x - iy \\implies 2iy = 0 \\implies y = 0$. Hence $z = x$ is real.",
              "stepByStep": [
                  "Step 1: Write $z = x + iy$. Then $\\bar{z} = x - iy$.",
                  "Step 2: $x + iy = x - iy \\implies iy = -iy \\implies 2iy = 0 \\implies y = 0$."
              ],
              "commonTrap": "Thinking z must be 0: any real number like 5 satisfies 5 = conjugate(5).",
              "reference": "Zill \u00a717.1 \u2014 Characterization of Real Numbers"
          }
      },
      {
          "id": "cpx_15",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Conjugate Root Theorem (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "If $z_1 = 2 - 3i$ is a root of the real polynomial $P(z) = z^2 - 4z + 13 = 0$, what is the second root $z_2$?",
          "options": [
              "$2 + 3i$",
              "$-2 + 3i$",
              "$-2 - 3i$",
              "$3 - 2i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Polynomials with real coefficients have complex roots that occur in conjugate pairs: $z_2 = \\bar{z}_1$.",
              "stepByStep": [
                  "Step 1: By the Conjugate Root Theorem, if $P(z) = 0$ with real coefficients, $P(\\bar{z}) = 0$.",
                  "Step 2: $\\bar{z}_1 = \\overline{2 - 3i} = 2 + 3i$."
              ],
              "commonTrap": "Negating the real part instead of the imaginary part.",
              "reference": "Zill \u00a717.1 \u2014 Conjugate Roots of Real Polynomials"
          }
      },
      {
          "id": "cpx_16",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Form in Quadrant II (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Express $z = -1 + i\\sqrt{3}$ in polar exponential form $r e^{i\\theta}$ with principal argument $\\theta \\in (-\\pi, \\pi]$.",
          "options": [
              "$z = 2 e^{i\\frac{2\\pi}{3}}$",
              "$z = 2 e^{-i\\frac{\\pi}{3}}$",
              "$z = 4 e^{i\\frac{2\\pi}{3}}$",
              "$z = 2 e^{i\\frac{5\\pi}{6}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$r = \\sqrt{x^2 + y^2}$. In Quadrant II ($x < 0, y > 0$), $\\operatorname{Arg}(z) = \\pi - \\arctan(|y/x|)$.",
              "stepByStep": [
                  "Step 1: Compute modulus: $r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$.",
                  "Step 2: Reference angle $\\theta_0 = \\arctan(\\sqrt{3}/1) = \\frac{\\pi}{3}$.",
                  "Step 3: Since $x = -1 < 0$ and $y = \\sqrt{3} > 0$, $z$ is in Quadrant II: $\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.",
                  "Step 4: Polar form: $z = 2 e^{i\\frac{2\\pi}{3}}$."
              ],
              "commonTrap": "Taking raw arctan(sqrt(3)/-1) = -pi/3 from a calculator, which gives a Quadrant IV angle (error of pi!).",
              "reference": "Zill \u00a717.2 \u2014 Polar Form of Complex Numbers"
          }
      },
      {
          "id": "cpx_17",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Form in Quadrant III (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the polar exponential form $r e^{i\\theta}$ of $z = -2 - 2i$?",
          "options": [
              "$z = 2\\sqrt{2} e^{-i\\frac{3\\pi}{4}}$",
              "$z = 2\\sqrt{2} e^{i\\frac{5\\pi}{4}}$",
              "$z = 4 e^{-i\\frac{3\\pi}{4}}$",
              "$z = 2\\sqrt{2} e^{i\\frac{3\\pi}{4}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Principal argument $\\operatorname{Arg}(z)$ must lie strictly in $(-\\pi, \\pi]$. In Quadrant III, $\\theta = -\\pi + \\arctan(|y/x|)$.",
              "stepByStep": [
                  "Step 1: Modulus: $r = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$.",
                  "Step 2: Reference angle: $\\theta_0 = \\arctan(2/2) = \\frac{\\pi}{4}$.",
                  "Step 3: In Quadrant III ($x < 0, y < 0$), principal argument is $\\theta = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$.",
                  "Step 4: Polar form: $z = 2\\sqrt{2} e^{-i\\frac{3\\pi}{4}}$."
              ],
              "commonTrap": "Using 5pi/4. Although 5pi/4 is coterminal, Concordia professors strictly penalize angles outside (-pi, pi] for principal argument!",
              "reference": "Zill \u00a717.2 \u2014 Principal Argument and Quadrants"
          }
      },
      {
          "id": "cpx_18",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Form in Quadrant IV (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Convert $z = \\sqrt{3} - i$ into polar form $r e^{i\\theta}$.",
          "options": [
              "$z = 2 e^{-i\\frac{\\pi}{6}}$",
              "$z = 2 e^{i\\frac{11\\pi}{6}}$",
              "$z = 2 e^{-i\\frac{\\pi}{3}}$",
              "$z = 4 e^{-i\\frac{\\pi}{6}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "In Quadrant IV ($x > 0, y < 0$), $\\operatorname{Arg}(z) = -\\arctan(|y/x|)$.",
              "stepByStep": [
                  "Step 1: Modulus: $r = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2$.",
                  "Step 2: Reference angle: $\\theta_0 = \\arctan(1/\\sqrt{3}) = \\frac{\\pi}{6}$.",
                  "Step 3: Quadrant IV angle: $\\theta = -\\frac{\\pi}{6}$.",
                  "Step 4: Polar form: $z = 2 e^{-i\\frac{\\pi}{6}}$."
              ],
              "commonTrap": "Using 11pi/6 instead of the principal argument -pi/6.",
              "reference": "Zill \u00a717.2 \u2014 Quadrant IV Polar Conversions"
          }
      },
      {
          "id": "cpx_19",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Pure Imaginary Polar Form (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the exact polar exponential form of $z = -7i$?",
          "options": [
              "$7 e^{-i\\frac{\\pi}{2}}$",
              "$-7 e^{i\\frac{\\pi}{2}}$",
              "$7 e^{i\\frac{3\\pi}{2}}$",
              "$7 e^{i\\pi}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "A negative imaginary number lies on the negative imaginary axis at angle $-\\pi/2$. Modulus is strictly positive ($r = 7$).",
              "stepByStep": [
                  "Step 1: $|-7i| = 7$ (modulus is always non-negative).",
                  "Step 2: The point $(0, -7)$ lies on the negative y-axis: $\\theta = -\\frac{\\pi}{2}$.",
                  "Step 3: $z = 7 e^{-i\\frac{\\pi}{2}}$."
              ],
              "commonTrap": "Writing r = -7: modulus r can NEVER be negative!",
              "reference": "Zill \u00a717.2 \u2014 Axis Values in Polar Form"
          }
      },
      {
          "id": "cpx_20",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Negative Real Number Polar Form (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Express the negative real number $z = -5$ in polar exponential form $r e^{i\\theta}$.",
          "options": [
              "$5 e^{i\\pi}$",
              "$-5 e^{i 0}$",
              "$5 e^{-i\\pi}$",
              "$5 e^{i 2\\pi}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Negative real numbers lie along the negative real axis at angle $\\pi$. Principal argument convention specifies $\\operatorname{Arg}(-a) = \\pi$ (open at $-\\pi$).",
              "stepByStep": [
                  "Step 1: Modulus: $r = |-5| = 5$.",
                  "Step 2: Argument: On the negative real axis, the angle from positive x-axis is $\\pi$ radians.",
                  "Step 3: Polar form: $z = 5 e^{i\\pi}$."
              ],
              "commonTrap": "Using -pi instead of pi (principal argument interval is (-pi, pi], which includes pi but excludes -pi).",
              "reference": "Zill \u00a717.2 \u2014 Negative Real Polar Representation"
          }
      },
      {
          "id": "cpx_21",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Product Multiplication (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "If $z_1 = 3 e^{i\\frac{\\pi}{4}}$ and $z_2 = 2 e^{i\\frac{\\pi}{3}}$, what is $z_1 z_2$ in polar form?",
          "options": [
              "$6 e^{i\\frac{7\\pi}{12}}$",
              "$5 e^{i\\frac{7\\pi}{12}}$",
              "$6 e^{i\\frac{\\pi^2}{12}}$",
              "$6 e^{-i\\frac{\\pi}{12}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "When multiplying in polar form: multiply the moduli and add the arguments ($r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$).",
              "stepByStep": [
                  "Step 1: Modulus: $r = 3 \\times 2 = 6$.",
                  "Step 2: Argument: $\\theta = \\frac{\\pi}{4} + \\frac{\\pi}{3} = \\frac{3\\pi + 4\\pi}{12} = \\frac{7\\pi}{12}$.",
                  "Step 3: Product: $6 e^{i\\frac{7\\pi}{12}}$."
              ],
              "commonTrap": "Multiplying the angles (pi/4 * pi/3) instead of adding them.",
              "reference": "Zill \u00a717.2 \u2014 Polar Multiplication Theorem"
          }
      },
      {
          "id": "cpx_22",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Quotient Division (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "If $z_1 = 8 e^{i\\frac{\\pi}{2}}$ and $z_2 = 2 e^{i\\frac{5\\pi}{6}}$, what is $\\frac{z_1}{z_2}$ with principal argument?",
          "options": [
              "$4 e^{-i\\frac{\\pi}{3}}$",
              "$4 e^{i\\frac{4\\pi}{3}}$",
              "$6 e^{-i\\frac{\\pi}{3}}$",
              "$4 e^{i\\frac{\\pi}{3}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "When dividing in polar form: divide the moduli and subtract the arguments ($z_1/z_2 = (r_1/r_2) e^{i(\\theta_1 - \\theta_2)}$).",
              "stepByStep": [
                  "Step 1: Modulus: $8 / 2 = 4$.",
                  "Step 2: Argument: $\\frac{\\pi}{2} - \\frac{5\\pi}{6} = \\frac{3\\pi - 5\\pi}{6} = -\\frac{2\\pi}{6} = -\\frac{\\pi}{3}$.",
                  "Step 3: Result: $4 e^{-i\\frac{\\pi}{3}}$."
              ],
              "commonTrap": "Subtracting angles in reverse order (5pi/6 - pi/2 = +pi/3).",
              "reference": "Zill \u00a717.2 \u2014 Polar Division Theorem"
          }
      },
      {
          "id": "cpx_23",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Conjugate in Polar Form (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "If $z = r e^{i\\theta}$, what is the complex conjugate $\\bar{z}$ in polar form?",
          "options": [
              "$r e^{-i\\theta}$",
              "$-r e^{i\\theta}$",
              "$r e^{i(\\theta + \\pi)}$",
              "$-r e^{-i\\theta}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Conjugating a complex number negates its imaginary part, which corresponds to reflecting across the real axis (negating the angle $\\theta$).",
              "stepByStep": [
                  "Step 1: $z = r(\\cos\\theta + i\\sin\\theta)$.",
                  "Step 2: $\\bar{z} = r(\\cos\\theta - i\\sin\\theta) = r(\\cos(-\\theta) + i\\sin(-\\theta)) = r e^{-i\\theta}$."
              ],
              "commonTrap": "Placing a minus sign on the radius r.",
              "reference": "Zill \u00a717.2 \u2014 Complex Conjugate in Polar Form"
          }
      },
      {
          "id": "cpx_24",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Euler Identity Trig Evaluation (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Convert $z = 4 e^{i\\frac{5\\pi}{6}}$ to rectangular Cartesian form $a + bi$.",
          "options": [
              "$-2\\sqrt{3} + 2i$",
              "$2\\sqrt{3} - 2i$",
              "$-2 + 2i\\sqrt{3}$",
              "$-2\\sqrt{3} - 2i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$.",
              "stepByStep": [
                  "Step 1: $\\cos(5\\pi/6) = -\\frac{\\sqrt{3}}{2}$ and $\\sin(5\\pi/6) = \\frac{1}{2}$.",
                  "Step 2: Multiply by $r = 4$: $4\\left(-\\frac{\\sqrt{3}}{2} + i\\frac{1}{2}\\right) = -2\\sqrt{3} + 2i$."
              ],
              "commonTrap": "Mixing up cos(5pi/6) and sin(5pi/6) values.",
              "reference": "Zill \u00a717.2 \u2014 Conversion from Polar to Rectangular"
          }
      },
      {
          "id": "cpx_25",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Argand Plane Rotation (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Multiplying any non-zero complex number $z$ by the imaginary unit $i$ corresponds geometrically to:",
          "options": [
              "A counter-clockwise rotation by $90^\\circ$ ($\\pi/2$ rad)",
              "A clockwise rotation by $90^\\circ$",
              "A reflection across the y-axis",
              "A scaling by factor 2"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$i = 1 e^{i\\pi/2}$. Multiplying by $i$ adds $\\pi/2$ to the argument, rotating the vector $90^\\circ$ counter-clockwise.",
              "stepByStep": [
                  "Step 1: $i z = (1 e^{i\\pi/2})(r e^{i\\theta}) = r e^{i(\\theta + \\pi/2)}$.",
                  "Step 2: The radius remains $r$, while the angle advances by $+90^\\circ$ (counter-clockwise)."
              ],
              "commonTrap": "Thinking multiplication by i flips the sign to clockwise.",
              "reference": "Zill \u00a717.2 \u2014 Geometric Interpretation of Complex Multiplication"
          }
      },
      {
          "id": "cpx_26",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Reciprocal in Polar Form (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the reciprocal $\\frac{1}{z}$ of $z = r e^{i\\theta}$?",
          "options": [
              "$\\frac{1}{r} e^{-i\\theta}$",
              "$\\frac{1}{r} e^{i\\theta}$",
              "$-r e^{-i\\theta}$",
              "$\\frac{1}{r^2} e^{i\\theta}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$\\frac{1}{z} = \\frac{1 e^{i0}}{r e^{i\\theta}} = \\frac{1}{r} e^{i(0 - \\theta)} = \\frac{1}{r} e^{-i\\theta}$.",
              "stepByStep": [
                  "Step 1: Divide magnitude: $1/r$.",
                  "Step 2: Subtract angle: $0 - \\theta = -\\theta$."
              ],
              "commonTrap": "Leaving the angle as +theta.",
              "reference": "Zill \u00a717.2 \u2014 Polar Reciprocal Formula"
          }
      },
      {
          "id": "cpx_27",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Principal Argument of Negative Product (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the principal argument $\\operatorname{Arg}(-z)$ if $\\operatorname{Arg}(z) = \\frac{\\pi}{4}$?",
          "options": [
              "$-\\frac{3\\pi}{4}$",
              "$\\frac{5\\pi}{4}$",
              "$-\\frac{\\pi}{4}$",
              "$\\frac{3\\pi}{4}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$-z = (e^{i\\pi})z$. Adding $\\pi$ to $\\pi/4$ gives $5\\pi/4$, which must be reduced to $(-\\pi, \\pi]$ by subtracting $2\\pi$: $5\\pi/4 - 2\\pi = -3\\pi/4$.",
              "stepByStep": [
                  "Step 1: $-z$ is opposite in direction to $z$ (reflected through the origin).",
                  "Step 2: Angle is $\\frac{\\pi}{4} - \\pi = -\\frac{3\\pi}{4}$."
              ],
              "commonTrap": "Answering 5pi/4 without reducing to the principal interval (-pi, pi].",
              "reference": "Zill \u00a717.2 \u2014 Principal Argument Reductions"
          }
      },
      {
          "id": "cpx_28",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Degrees to Radians Law (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "In Concordia ENGR 213 examinations, what unit MUST all complex arguments $\\theta$ be expressed in?",
          "options": [
              "Radians strictly",
              "Degrees or radians interchangeably",
              "Gradians",
              "Degrees only"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Dr. Paradis and Dr. Haghighat explicitly state that all angles in complex exponential form $e^{i\\theta}$ and marking keys must strictly be in radians.",
              "stepByStep": [
                  "Step 1: The exponential function $e^{i\\theta}$ is defined via Taylor series where $\\theta$ is dimensionless (radians). Degrees invalidate the calculus!"
              ],
              "commonTrap": "Leaving answers as e^{i 45^\\circ}. Full marks are deducted if not converted to e^{i\\pi/4}.",
              "reference": "Paradis Notes Module 7 \u2014 Golden Rule on Radians"
          }
      },
      {
          "id": "cpx_29",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus of Exponential (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus of the complex exponential $w = e^{3 + 4i}$?",
          "options": [
              "$e^3$",
              "$5$",
              "$e^5$",
              "$e^4$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$e^{x + iy} = e^x e^{iy}$. Since $|e^{iy}| = |\\cos y + i\\sin y| = 1$, the modulus is $|e^{x + iy}| = e^x$.",
              "stepByStep": [
                  "Step 1: Split exponential: $e^{3 + 4i} = e^3 \\cdot e^{4i}$.",
                  "Step 2: $|e^{4i}| = 1$ because $\\cos^2(4) + \\sin^2(4) = 1$.",
                  "Step 3: Modulus is $e^3$."
              ],
              "commonTrap": "Computing sqrt(3^2 + 4^2) = 5 or e^5. The imaginary part 4 is purely an angle!",
              "reference": "Zill \u00a717.2 \u2014 Modulus of Complex Exponential Function"
          }
      },
      {
          "id": "cpx_30",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Modulus Identity (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus of $e^{i\\theta}$ for any real angle $\\theta$?",
          "options": [
              "$1$",
              "$\\theta$",
              "$\\sqrt{\\theta}$",
              "$e$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$|e^{i\\theta}| = |\\cos\\theta + i\\sin\\theta| = \\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 1$. All points $e^{i\\theta}$ lie on the unit circle.",
              "stepByStep": [
                  "Step 1: By Euler's formula, $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.",
                  "Step 2: Modulus is $\\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 1$."
              ],
              "commonTrap": "Thinking the modulus grows with theta.",
              "reference": "Zill \u00a717.2 \u2014 The Complex Unit Circle"
          }
      },
      {
          "id": "cpx_31",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre High Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Use De Moivre's theorem to compute $(1 + i)^8$.",
          "options": [
              "$16$",
              "$16i$",
              "$-16$",
              "$8 + 8i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Convert to polar form: $1 + i = \\sqrt{2} e^{i\\pi/4}$. Then $(r e^{i\\theta})^n = r^n e^{in\\theta}$.",
              "stepByStep": [
                  "Step 1: Polar form: $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$, $\\theta = \\pi/4$.",
                  "Step 2: Apply power 8: $(\\sqrt{2} e^{i\\pi/4})^8 = (\\sqrt{2})^8 e^{i 8(\\pi/4)}$.",
                  "Step 3: $(\\sqrt{2})^8 = 2^4 = 16$.",
                  "Step 4: Angle is $8(\\pi/4) = 2\\pi$. Since $e^{i 2\\pi} = 1$, the result is $16 \\times 1 = 16$."
              ],
              "commonTrap": "Forgetting to raise sqrt(2) to the 8th power.",
              "reference": "Zill \u00a717.2 \u2014 De Moivre's Theorem for Integer Powers"
          }
      },
      {
          "id": "cpx_32",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre Power with Quadrant II (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Compute $(-\\sqrt{3} + i)^6$ in rectangular form $a + bi$.",
          "options": [
              "$-64$",
              "$64$",
              "$-64i$",
              "$64i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$-\\sqrt{3} + i$ has modulus $2$ and argument $\\frac{5\\pi}{6}$.",
              "stepByStep": [
                  "Step 1: $r = \\sqrt{(-\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2$.",
                  "Step 2: In Quadrant II, $\\theta = \\pi - \\pi/6 = \\frac{5\\pi}{6}$.",
                  "Step 3: $(2 e^{i 5\\pi/6})^6 = 2^6 e^{i 6(5\\pi/6)} = 64 e^{i 5\\pi}$.",
                  "Step 4: $e^{i 5\\pi} = e^{i\\pi} = -1$. Hence $64(-1) = -64$."
              ],
              "commonTrap": "Using theta = -pi/6 (Quadrant IV angle), which gives 64 e^{-i pi} = -64 by luck but loses marks on steps.",
              "reference": "Zill \u00a717.2 \u2014 Powers via Polar Coordinates"
          }
      },
      {
          "id": "cpx_33",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre Fractional Quotient Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $\\left(\\frac{1 + i}{1 - i}\\right)^{10}$.",
          "options": [
              "$-1$",
              "$1$",
              "$i$",
              "$-i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Simplify the interior fraction first: $\\frac{1+i}{1-i} = \\frac{(1+i)^2}{2} = \\frac{2i}{2} = i$.",
              "stepByStep": [
                  "Step 1: Interior simplifies: $\\frac{1 + i}{1 - i} = i$.",
                  "Step 2: $(i)^{10} = (i^4)^2 \\cdot i^2 = 1^2 \\cdot (-1) = -1$."
              ],
              "commonTrap": "Raising numerator and denominator separately to 10th powers without simplifying first.",
              "reference": "Zill \u00a717.2 \u2014 Powers of Complex Fractions"
          }
      },
      {
          "id": "cpx_34",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre 4th Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $(-1 + i\\sqrt{3})^4$ in rectangular form $a + bi$.",
          "options": [
              "$-8 + 8i\\sqrt{3}$",
              "$-8 - 8i\\sqrt{3}$",
              "$16 + 16i\\sqrt{3}$",
              "$-16 + 16i\\sqrt{3}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Polar form: $r = 2, \\theta = 2\\pi/3$. By De Moivre, $(2 e^{i 2\\pi/3})^4 = 16 e^{i 8\\pi/3}$.",
              "stepByStep": [
                  "Step 1: Angle $8\\pi/3 = 2\\pi + 2\\pi/3 \\equiv 2\\pi/3$.",
                  "Step 2: $16 e^{i 2\\pi/3} = 16\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right) = 16\\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) = -8 + 8i\\sqrt{3}$. Wait: let us re-verify options: option 1 has + or -.",
                  "Step 3: Correct value is $-8 + 8i\\sqrt{3}$."
              ],
              "commonTrap": "Angle reduction error: 8pi/3 - 2pi = 2pi/3.",
              "reference": "Zill \u00a717.2 \u2014 De Moivre Calculations"
          }
      },
      {
          "id": "cpx_35",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Negative Exponent via De Moivre (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $(1 - i)^{-4}$.",
          "options": [
              "$-\\frac{1}{4}$",
              "$\\frac{1}{4}$",
              "$-\\frac{1}{4}i$",
              "$\\frac{1}{4}i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$(r e^{i\\theta})^{-n} = r^{-n} e^{-in\\theta}$.",
              "stepByStep": [
                  "Step 1: $1 - i = \\sqrt{2} e^{-i\\pi/4}$.",
                  "Step 2: $(1 - i)^{-4} = (\\sqrt{2})^{-4} e^{-i(-4)(\\pi/4)} = \\frac{1}{4} e^{i\\pi}$.",
                  "Step 3: Since $e^{i\\pi} = -1$, the result is $\\frac{1}{4}(-1) = -\\frac{1}{4}$."
              ],
              "commonTrap": "Forgetting that the negative power flips the angle sign: -(-4)(pi/4) = +pi.",
              "reference": "Zill \u00a717.2 \u2014 Negative Integer Powers"
          }
      },
      {
          "id": "cpx_36",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre Trigonometric Identity (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Using De Moivre's formula $(\\cos\\theta + i\\sin\\theta)^2 = \\cos(2\\theta) + i\\sin(2\\theta)$, what is $\\cos(2\\theta)$ in terms of $\\cos\\theta$ and $\\sin\\theta$?",
          "options": [
              "$\\cos^2\\theta - \\sin^2\\theta$",
              "$\\cos^2\\theta + \\sin^2\\theta$",
              "$2\\cos\\theta\\sin\\theta$",
              "$1 - \\sin\\theta$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Expand $(\\cos\\theta + i\\sin\\theta)^2 = (\\cos^2\\theta - \\sin^2\\theta) + i(2\\cos\\theta\\sin\\theta)$. Equate real parts.",
              "stepByStep": [
                  "Step 1: Real part is $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$.",
                  "Step 2: Imaginary part is $\\sin(2\\theta) = 2\\cos\\theta\\sin\\theta$."
              ],
              "commonTrap": "Confusing real and imaginary parts.",
              "reference": "Zill \u00a717.2 \u2014 Derivation of Trig Identities via De Moivre"
          }
      },
      {
          "id": "cpx_37",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre High Power of i (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is $(1 - i\\sqrt{3})^6$ in exact Cartesian form?",
          "options": [
              "$64$",
              "$-64$",
              "$64i$",
              "$-64i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$1 - i\\sqrt{3} = 2 e^{-i\\pi/3}$. By De Moivre, $(2 e^{-i\\pi/3})^6 = 2^6 e^{-i 2\\pi} = 64(1) = 64$.",
              "stepByStep": [
                  "Step 1: $r = \\sqrt{1 + 3} = 2$. Angle in Quadrant IV is $-\\pi/3$.",
                  "Step 2: Power 6: $2^6 e^{-i 6(\\pi/3)} = 64 e^{-i 2\\pi} = 64(1) = 64$."
              ],
              "commonTrap": "Answering -64 due to sign confusion on 2pi.",
              "reference": "Zill \u00a717.2 \u2014 De Moivre's Powers"
          }
      },
      {
          "id": "cpx_38",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Pure Imaginary Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Compute $(-2i)^5$.",
          "options": [
              "$-32i$",
              "$32i$",
              "$-32$",
              "$32$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$(-2i)^5 = (-2)^5 \\cdot i^5 = -32 \\cdot i = -32i$.",
              "stepByStep": [
                  "Step 1: Factor: $(-2)^5 = -32$.",
                  "Step 2: Power of $i$: $i^5 = i^4 \\cdot i = i$.",
                  "Step 3: Combine: $-32i$."
              ],
              "commonTrap": "Losing the negative sign on (-2)^5.",
              "reference": "Zill \u00a717.2 \u2014 Powers of Imaginary Numbers"
          }
      },
      {
          "id": "cpx_39",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre 12th Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $(1 - i)^{12}$.",
          "options": [
              "$-64$",
              "$64$",
              "$-64i$",
              "$64i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$(1 - i) = \\sqrt{2} e^{-i\\pi/4}$.",
              "stepByStep": [
                  "Step 1: Modulus: $(\\sqrt{2})^{12} = 2^6 = 64$.",
                  "Step 2: Argument: $12 \\times (-\\pi/4) = -3\\pi$.",
                  "Step 3: $e^{-i 3\\pi} = \\cos(-3\\pi) + i\\sin(-3\\pi) = -1 + 0 = -1$.",
                  "Step 4: Result: $64(-1) = -64$."
              ],
              "commonTrap": "Thinking e^{-3i pi} is +1 instead of -1.",
              "reference": "Zill \u00a717.2 \u2014 De Moivre Powers"
          }
      },
      {
          "id": "cpx_40",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus of High Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus of $z = (3 - 4i)^7$?",
          "options": [
              "$5^7$",
              "$25^7$",
              "$7 \\times 5$",
              "$\\sqrt{5^7}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "By De Moivre, $|z^n| = |z|^n$.",
              "stepByStep": [
                  "Step 1: Compute base modulus: $|3 - 4i| = \\sqrt{3^2 + (-4)^2} = 5$.",
                  "Step 2: Raise to power 7: $|z| = 5^7$."
              ],
              "commonTrap": "Multiplying 5 by 7 instead of exponentiating.",
              "reference": "Zill \u00a717.2 \u2014 Modulus of Powers"
          }
      },
      {
          "id": "cpx_41",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Formula for All n-th Roots (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the general formula for all $n$ distinct roots $w_k$ of $z = r e^{i\\theta}$?",
          "options": [
              "$w_k = r^{1/n} e^{i\\frac{\\theta + 2k\\pi}{n}}, \\quad k = 0, 1, \\dots, n-1$",
              "$w_k = r^n e^{i\\frac{\\theta + k\\pi}{n}}, \\quad k = 0, 1, \\dots, n-1$",
              "$w_k = r^{1/n} e^{i\\frac{\\theta + k\\pi}{n}}, \\quad k = 0, 1, \\dots, n$",
              "$w_k = \\frac{r}{n} e^{i(\\theta + 2k\\pi)}, \\quad k = 0, 1, \\dots, n-1$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The $n$ distinct roots of $z = r e^{i\\theta}$ are given by $w_k = r^{1/n}\\left[\\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right)\\right]$ for $k = 0, 1, \\dots, n-1$.",
              "stepByStep": [
                  "Step 1: The radius of each root is $r^{1/n}$.",
                  "Step 2: The angles are spaced by $\\frac{2\\pi}{n}$ radians, running from $k = 0$ to $k = n-1$."
              ],
              "commonTrap": "Using k pi instead of 2k pi in the angular shift.",
              "reference": "Zill \u00a717.2 \u2014 Theorem 17.2.1 (Roots of Complex Numbers)"
          }
      },
      {
          "id": "cpx_42",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Geometric Distribution of Roots (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Geometrically, the $n$ roots of a complex number $z = r e^{i\\theta}$:",
          "options": [
              "Lie on a circle of radius $r^{1/n}$ centered at origin, equally spaced by $\\frac{2\\pi}{n}$ radians",
              "Lie on a straight line passing through the origin",
              "Lie on an ellipse with foci at $\\pm r$",
              "Lie on a circle of radius $r$ centered at origin"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "All $n$ roots share identical modulus $r^{1/n}$ and form vertices of a regular $n$-gon inscribed in a circle of radius $r^{1/n}$.",
              "stepByStep": [
                  "Step 1: $|w_k| = r^{1/n}$ for all $k$, so they lie on a circle centered at origin.",
                  "Step 2: The angular difference between consecutive roots is $\\frac{\\theta + 2(k+1)\\pi}{n} - \\frac{\\theta + 2k\\pi}{n} = \\frac{2\\pi}{n}$."
              ],
              "commonTrap": "Thinking the circle has radius r instead of r^{1/n}.",
              "reference": "Zill \u00a717.2 \u2014 Geometry of Complex Roots"
          }
      },
      {
          "id": "cpx_43",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Cube Roots of Pure Imaginary (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the principal cube root ($k = 0$) of $z = -8i$?",
          "options": [
              "$\\sqrt{3} - i$",
              "$-\\sqrt{3} - i$",
              "$2i$",
              "$\\sqrt{3} + i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Write $-8i = 8 e^{-i\\pi/2}$. The principal cube root ($k=0$) is $8^{1/3} e^{i(-\\pi/2)/3} = 2 e^{-i\\pi/6}$.",
              "stepByStep": [
                  "Step 1: Modulus is 8, so $r^{1/3} = 2$.",
                  "Step 2: Principal argument of $-8i$ is $\\theta = -\\pi/2$.",
                  "Step 3: For $k = 0$: angle is $\\frac{-\\pi/2}{3} = -\\frac{\\pi}{6}$.",
                  "Step 4: Cartesian: $2\\left(\\cos\\left(-\\frac{\\pi}{6}\\right) + i\\sin\\left(-\\frac{\\pi}{6}\\right)\\right) = 2\\left(\\frac{\\sqrt{3}}{2} - i\\frac{1}{2}\\right) = \\sqrt{3} - i$."
              ],
              "commonTrap": "Using theta = 3pi/2 instead of principal argument -pi/2, shifting the root indexing.",
              "reference": "Zill \u00a717.2 \u2014 Roots of Pure Imaginary Numbers"
          }
      },
      {
          "id": "cpx_44",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "All Cube Roots of -8i (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Which of the following is ONE of the three cube roots of $z = -8i$?",
          "options": [
              "$2i$",
              "$-2i$",
              "$2$",
              "$-2$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The 3 cube roots of $-8i = 8 e^{-i\\pi/2}$ correspond to $k = 0, 1, 2$.",
              "stepByStep": [
                  "Step 1: For $k = 1$: angle is $\\frac{-\\pi/2 + 2\\pi}{3} = \\frac{3\\pi/2}{3} = \\frac{\\pi}{2}$.",
                  "Step 2: $w_1 = 2 e^{i\\pi/2} = 2i$.",
                  "Step 3: Verification: $(2i)^3 = 8 i^3 = -8i$. Matches perfectly!"
              ],
              "commonTrap": "Guessing -2i without checking: (-2i)^3 = -8(-i) = +8i (wrong sign!).",
              "reference": "Zill \u00a717.2 \u2014 Cube Roots Example"
          }
      },
      {
          "id": "cpx_45",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Cube Roots of Negative Real Number (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What are all three cube roots of $z = -27$?",
          "options": [
              "$w_0 = \\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}, \\quad w_1 = -3, \\quad w_2 = \\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}$",
              "$w_0 = 3, \\quad w_1 = -3, \\quad w_2 = 3i$",
              "$w_0 = 3i, \\quad w_1 = -3i, \\quad w_2 = -3$",
              "$w_0 = -\\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}, \\quad w_1 = 3, \\quad w_2 = -\\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$-27 = 27 e^{i\\pi}$. The radius is $27^{1/3} = 3$. The angles are $\\frac{\\pi + 2k\\pi}{3}$ for $k = 0, 1, 2$.",
              "stepByStep": [
                  "Step 1: $k = 0$: angle is $\\pi/3 \\implies 3(\\cos(\\pi/3) + i\\sin(\\pi/3)) = \\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}$.",
                  "Step 2: $k = 1$: angle is $3\\pi/3 = \\pi \\implies 3(\\cos\\pi + i\\sin\\pi) = -3$.",
                  "Step 3: $k = 2$: angle is $5\\pi/3 \\equiv -\\pi/3 \\implies \\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}$."
              ],
              "commonTrap": "Believing -3 is the ONLY cube root of -27. There are ALWAYS exactly 3 roots in the complex plane!",
              "reference": "Zill \u00a717.2 \u2014 Cube Roots of Negative Reals"
          }
      },
      {
          "id": "cpx_46",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Fourth Roots of Unity (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What are the four roots of the equation $w^4 = 1$?",
          "options": [
              "$1, \\; -1, \\; i, \\; -i$",
              "$1, \\; -1, \\; 1+i, \\; 1-i$",
              "$i, \\; -i, \\; 2i, \\; -2i$",
              "$\\pm \\frac{\\sqrt{2}}{2} \\pm i\\frac{\\sqrt{2}}{2}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$1 = 1 e^{i 0}$. The angles are $\\frac{2k\\pi}{4} = \\frac{k\\pi}{2}$ for $k = 0, 1, 2, 3$, giving $1, i, -1, -i$.",
              "stepByStep": [
                  "Step 1: $k = 0 \\implies e^0 = 1$.",
                  "Step 2: $k = 1 \\implies e^{i\\pi/2} = i$.",
                  "Step 3: $k = 2 \\implies e^{i\\pi} = -1$.",
                  "Step 4: $k = 3 \\implies e^{i 3\\pi/2} = -i$."
              ],
              "commonTrap": "Listing only 1 and -1, omitting the two complex roots.",
              "reference": "Zill \u00a717.2 \u2014 Roots of Unity"
          }
      },
      {
          "id": "cpx_47",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Square Roots of the Imaginary Unit (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Find the two square roots of $z = i$.",
          "options": [
              "$\\pm \\left(\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}\\right)$",
              "$\\pm (1 + i)$",
              "$\\pm i$",
              "$\\pm \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$i = 1 e^{i\\pi/2}$. Square roots have radius $1^{1/2} = 1$ and angles $\\frac{\\pi/2 + 2k\\pi}{2} = \\frac{\\pi}{4} + k\\pi$.",
              "stepByStep": [
                  "Step 1: $k = 0 \\implies e^{i\\pi/4} = \\cos(\\pi/4) + i\\sin(\\pi/4) = \\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}$.",
                  "Step 2: $k = 1 \\implies e^{i 5\\pi/4} = -\\left(\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}\\right)$."
              ],
              "commonTrap": "Writing sqrt(i) = i.",
              "reference": "Zill \u00a717.2 \u2014 Square Roots of Complex Numbers"
          }
      },
      {
          "id": "cpx_48",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Fourth Roots of -16 (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the radius $R$ of the circle on which all four roots of $w^4 = -16$ lie?",
          "options": [
              "$2$",
              "$4$",
              "$16$",
              "$\\sqrt{2}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "All $n$-th roots of $z$ lie on a circle of radius $R = |z|^{1/n}$.",
              "stepByStep": [
                  "Step 1: $|-16| = 16$.",
                  "Step 2: The radius of the 4th roots is $R = 16^{1/4} = 2$."
              ],
              "commonTrap": "Taking the square root (4) instead of the 4th root (2).",
              "reference": "Zill \u00a717.2 \u2014 Radius of Root Circles"
          }
      },
      {
          "id": "cpx_49",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Angular Separation Between Roots (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the angular separation $\\Delta\\theta$ between consecutive 5th roots of any non-zero complex number?",
          "options": [
              "$\\frac{2\\pi}{5}$ radians ($72^\\circ$)",
              "$\\frac{\\pi}{5}$ radians ($36^\\circ$)",
              "$\\frac{\\pi}{10}$ radians",
              "$\\frac{4\\pi}{5}$ radians"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Consecutive $n$-th roots are separated by $\\Delta\\theta = \\frac{2\\pi}{n}$. For $n = 5$, $\\Delta\\theta = \\frac{2\\pi}{5} = 72^\\circ$.",
              "stepByStep": [
                  "Step 1: A full revolution of $2\\pi$ radians is divided equally among the $n = 5$ roots.",
                  "Step 2: $\\Delta\\theta = \\frac{2\\pi}{5}$."
              ],
              "commonTrap": "Dividing pi by 5 instead of 2pi by 5.",
              "reference": "Zill \u00a717.2 \u2014 Angular Spacing of Roots"
          }
      },
      {
          "id": "cpx_50",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Sum of All n-th Roots of Unity (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "For any integer $n \\ge 2$, what is the sum of all $n$ distinct $n$-th roots of unity $1 + w_1 + w_2 + \\dots + w_{n-1}$?",
          "options": [
              "$0$",
              "$1$",
              "$n$",
              "$-1$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "By geometric series or symmetry of the regular $n$-gon centered at the origin, the centroid and sum of all roots is $\\sum_{k=0}^{n-1} w_k = 0$.",
              "stepByStep": [
                  "Step 1: The roots are $w_k = \\omega^k$ where $\\omega = e^{i 2\\pi/n} \\ne 1$.",
                  "Step 2: Sum is a finite geometric series: $\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega}$.",
                  "Step 3: Since $\\omega^n = (e^{i 2\\pi/n})^n = e^{i 2\\pi} = 1$, the numerator is $1 - 1 = 0$."
              ],
              "commonTrap": "Thinking the sum equals 1 because w_0 = 1.",
              "reference": "Zill \u00a717.2 \u2014 Sum of Roots of Unity Identity"
          }
      }
  ],
  "second_order": [
      {
          "id": "cpx_01",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Multiplication (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Evaluate the product $z = (3 - 2i)(4 + 5i)$ in standard rectangular form $a + bi$.",
          "options": [
              "$22 + 7i$",
              "$2 + 7i$",
              "$22 - 7i$",
              "$12 - 10i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Use FOIL and substitute $i^2 = -1$: $(a + bi)(c + di) = (ac - bd) + i(ad + bc)$.",
              "stepByStep": [
                  "Step 1: Expand product: $(3)(4) + 3(5i) - 2i(4) - 2i(5i) = 12 + 15i - 8i - 10i^2$.",
                  "Step 2: Replace $i^2 = -1$: $12 + 7i - 10(-1) = 12 + 7i + 10 = 22 + 7i$."
              ],
              "commonTrap": "Writing -10 instead of +10 when simplifying -10i^2.",
              "reference": "Zill \u00a717.1 \u2014 Complex Numbers \u00b7 Arithmetic Operations"
          }
      },
      {
          "id": "cpx_02",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Division via Conjugate (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Simplify the quotient $\\frac{4 + 2i}{1 - i}$ into standard rectangular form $a + bi$.",
          "options": [
              "$1 + 3i$",
              "$3 + 3i$",
              "$-1 + 3i$",
              "$1 - 3i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Multiply numerator and denominator by the complex conjugate of the denominator: $\\bar{z}_2 = 1 + i$.",
              "stepByStep": [
                  "Step 1: Multiply numerator and denominator by $\\bar{z} = 1 + i$: $\\frac{(4 + 2i)(1 + i)}{(1 - i)(1 + i)}$.",
                  "Step 2: Denominator: $(1 - i)(1 + i) = 1^2 - i^2 = 1 - (-1) = 2$.",
                  "Step 3: Numerator: $4(1) + 4(i) + 2i(1) + 2i^2 = 4 + 6i - 2 = 2 + 6i$.",
                  "Step 4: Divide each term: $\\frac{2 + 6i}{2} = 1 + 3i$."
              ],
              "commonTrap": "Dividing only the real part by 2 and forgetting to divide the imaginary part.",
              "reference": "Zill \u00a717.1 \u2014 Complex Numbers \u00b7 Division by Complex Conjugate"
          }
      },
      {
          "id": "cpx_03",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Division (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Express $\\frac{2 + 3i}{3 - 4i}$ in the form $a + bi$.",
          "options": [
              "$-\\frac{6}{25} + \\frac{17}{25}i$",
              "$\\frac{6}{25} + \\frac{17}{25}i$",
              "$-\\frac{6}{7} + \\frac{17}{7}i$",
              "$\\frac{18}{25} + \\frac{1}{25}i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Conjugate multiplication: $\\frac{z_1}{z_2} = \\frac{z_1 \\bar{z}_2}{|z_2|^2}$.",
              "stepByStep": [
                  "Step 1: Denominator conjugate: $3 + 4i$. Denominator is $3^2 + (-4)^2 = 9 + 16 = 25$.",
                  "Step 2: Numerator: $(2 + 3i)(3 + 4i) = 6 + 8i + 9i + 12i^2 = 6 + 17i - 12 = -6 + 17i$.",
                  "Step 3: Quotient: $-\\frac{6}{25} + \\frac{17}{25}i$."
              ],
              "commonTrap": "Computing denominator as 3^2 - 4^2 = -7 instead of 3^2 + 4^2 = 25.",
              "reference": "Zill \u00a717.1 \u2014 Complex Numbers \u00b7 Division"
          }
      },
      {
          "id": "cpx_04",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus Calculation (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus $|z|$ of $z = -5 + 12i$?",
          "options": [
              "$13$",
              "$\\sqrt{119}$",
              "$17$",
              "$7$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Modulus is the Euclidean distance from origin: $|z| = \\sqrt{x^2 + y^2}$.",
              "stepByStep": [
                  "Step 1: Identify real part $x = -5$ and imaginary part $y = 12$.",
                  "Step 2: $|z| = \\sqrt{(-5)^2 + (12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
              ],
              "commonTrap": "Squaring 12i into -144 and getting sqrt(25 - 144) = sqrt(-119). Modulus is based on real components y=12!",
              "reference": "Zill \u00a717.1 \u2014 Modulus and Complex Absolute Value"
          }
      },
      {
          "id": "cpx_05",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Powers of the Imaginary Unit (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $i^{2027}$.",
          "options": [
              "$-i$",
              "$i$",
              "$-1$",
              "$1$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Powers of $i$ cycle modulo 4: $i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1$.",
              "stepByStep": [
                  "Step 1: Divide exponent 2027 by 4: $2027 = 4 \\times 506 + 3$. Remainder is 3.",
                  "Step 2: Therefore $i^{2027} = (i^4)^{506} \\cdot i^3 = 1^{506} \\cdot (-i) = -i$."
              ],
              "commonTrap": "Confusing remainder 3 with remainder 1, yielding +i.",
              "reference": "Zill \u00a717.1 \u2014 Powers of i"
          }
      },
      {
          "id": "cpx_06",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Conjugate Identity (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "If $z = 3 - 4i$, what is the exact numerical value of $z \\bar{z}$?",
          "options": [
              "$25$",
              "$-7$",
              "$25 - 24i$",
              "$7$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The product of any complex number with its conjugate is the square of its modulus: $z \\bar{z} = |z|^2 = x^2 + y^2$.",
              "stepByStep": [
                  "Step 1: Conjugate $\\bar{z} = 3 + 4i$.",
                  "Step 2: $z \\bar{z} = (3 - 4i)(3 + 4i) = 3^2 - (4i)^2 = 9 - (-16) = 25$."
              ],
              "commonTrap": "Writing 9 - 16 = -7 by missing the i^2 = -1 sign flip.",
              "reference": "Zill \u00a717.1 \u2014 Conjugate Properties"
          }
      },
      {
          "id": "cpx_07",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Imaginary Part Definition (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "What is the imaginary part $\\operatorname{Im}(z)$ of $z = \\frac{1}{2 + 3i}$?",
          "options": [
              "$-\\frac{3}{13}$",
              "$\\frac{3}{13}$",
              "$-\\frac{3}{13}i$",
              "$\\frac{2}{13}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The imaginary part of $z = x + iy$ is the real number $y$, NEVER containing the unit $i$.",
              "stepByStep": [
                  "Step 1: Multiply by conjugate: $\\frac{1(2 - 3i)}{(2 + 3i)(2 - 3i)} = \\frac{2 - 3i}{4 + 9} = \\frac{2 - 3i}{13}$.",
                  "Step 2: Real part $\\operatorname{Re}(z) = \\frac{2}{13}$, imaginary part $\\operatorname{Im}(z) = -\\frac{3}{13}$."
              ],
              "commonTrap": "Including the symbol 'i' in the imaginary part: Im(z) is -3/13, NOT -3/13 i.",
              "reference": "Zill \u00a717.1 \u2014 Real and Imaginary Parts"
          }
      },
      {
          "id": "cpx_08",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Equality Matching (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Find the real values of $x$ and $y$ that satisfy $(2x - y) + i(x + 3y) = 5 + 6i$.",
          "options": [
              "$x = 3, \\; y = 1$",
              "$x = 2, \\; y = -1$",
              "$x = 1, \\; y = 3$",
              "$x = 4, \\; y = 3$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Two complex numbers are equal if and only if both real and imaginary parts match independently.",
              "stepByStep": [
                  "Step 1: Real parts: $2x - y = 5 \\implies y = 2x - 5$.",
                  "Step 2: Imaginary parts: $x + 3y = 6$.",
                  "Step 3: Substitute $y$: $x + 3(2x - 5) = 6 \\implies x + 6x - 15 = 6 \\implies 7x = 21 \\implies x = 3$.",
                  "Step 4: Solve $y$: $y = 2(3) - 5 = 1$."
              ],
              "commonTrap": "Equating the sum (2x-y) + (x+3y) = 11 instead of separating real and imaginary systems.",
              "reference": "Zill \u00a717.1 \u2014 Equality of Complex Numbers"
          }
      },
      {
          "id": "cpx_09",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Triangle Inequality Bound (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "If $|z| = 4$, what is the maximum possible value of $|z - 3 + 4i|$ according to the Triangle Inequality?",
          "options": [
              "$9$",
              "$1$",
              "$5$",
              "$7$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "By the Triangle Inequality, $|z_1 + z_2| \\le |z_1| + |z_2|$.",
              "stepByStep": [
                  "Step 1: Rewrite $|z - (3 - 4i)| \\le |z| + |-3 + 4i|$.",
                  "Step 2: Compute $|-3 + 4i| = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = 5$.",
                  "Step 3: Maximum value is $|z| + 5 = 4 + 5 = 9$."
              ],
              "commonTrap": "Subtracting 5 from 4 to get -1, or confusing maximum with minimum bound (|4 - 5| = 1).",
              "reference": "Zill \u00a717.1 \u2014 Triangle Inequality (Theorem 17.1.1)"
          }
      },
      {
          "id": "cpx_10",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus of Product (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Without expanding, what is the exact modulus of $z = (1 + 2i)(3 - 4i)$?",
          "options": [
              "$5\\sqrt{5}$",
              "$25$",
              "$\\sqrt{65}$",
              "$15$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The modulus of a product is the product of the moduli: $|z_1 z_2| = |z_1| \\cdot |z_2|$.",
              "stepByStep": [
                  "Step 1: Compute $|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$.",
                  "Step 2: Compute $|3 - 4i| = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.",
                  "Step 3: Multiply: $|z| = 5\\sqrt{5}$."
              ],
              "commonTrap": "Wasting 3 minutes expanding the product before taking the modulus.",
              "reference": "Zill \u00a717.1 \u2014 Modulus Properties"
          }
      },
      {
          "id": "cpx_11",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus of Quotient (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus of $w = \\frac{2 - i}{1 + 2i}$?",
          "options": [
              "$1$",
              "$\\sqrt{5}$",
              "$\\frac{5}{3}$",
              "$\\frac{1}{\\sqrt{5}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The modulus of a quotient is the quotient of moduli: $|z_1/z_2| = |z_1|/|z_2|$.",
              "stepByStep": [
                  "Step 1: $|2 - i| = \\sqrt{2^2 + (-1)^2} = \\sqrt{5}$.",
                  "Step 2: $|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$.",
                  "Step 3: $|w| = \\frac{\\sqrt{5}}{\\sqrt{5}} = 1$."
              ],
              "commonTrap": "Doing long conjugate division when only the modulus magnitude was requested.",
              "reference": "Zill \u00a717.1 \u2014 Modulus of Quotients"
          }
      },
      {
          "id": "cpx_12",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Conjugate of Quotient (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "Which identity correctly represents the conjugate of a quotient $\\overline{\\left(\\frac{z_1}{z_2}\\right)}$?",
          "options": [
              "$\\frac{\\bar{z}_1}{\\bar{z}_2}$",
              "$\\frac{z_1}{\\bar{z}_2}$",
              "$-\\frac{\\bar{z}_1}{\\bar{z}_2}$",
              "$\\frac{\\bar{z}_1}{z_2}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Conjugation distributes over division: $\\overline{z_1 / z_2} = \\bar{z}_1 / \\bar{z}_2$.",
              "stepByStep": [
                  "Step 1: The conjugate of a ratio is the ratio of individual conjugates."
              ],
              "commonTrap": "Applying a negative sign to the entire fraction.",
              "reference": "Zill \u00a717.1 \u2014 Conjugate Algebraic Rules"
          }
      },
      {
          "id": "cpx_13",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Pure Imaginary Numbers (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "For what real value of $k$ is $z = (k + 2i)(1 - i)$ a pure imaginary number?",
          "options": [
              "$k = -2$",
              "$k = 2$",
              "$k = 0$",
              "$k = 1$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "A complex number $z = x + iy$ is pure imaginary if its real part $\\operatorname{Re}(z) = 0$.",
              "stepByStep": [
                  "Step 1: Expand $(k + 2i)(1 - i) = k - ki + 2i - 2i^2 = (k + 2) + i(2 - k)$.",
                  "Step 2: Set real part to zero: $k + 2 = 0 \\implies k = -2$."
              ],
              "commonTrap": "Setting the imaginary part 2 - k = 0, which makes it purely REAL instead of pure imaginary.",
              "reference": "Zill \u00a717.1 \u2014 Pure Imaginary Definition"
          }
      },
      {
          "id": "cpx_14",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Pure Real Condition (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "A complex number $z$ satisfies $z = \\bar{z}$ if and only if:",
          "options": [
              "$z$ is purely real",
              "$z$ is purely imaginary",
              "$|z| = 1$",
              "$z = 0$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$x + iy = x - iy \\implies 2iy = 0 \\implies y = 0$. Hence $z = x$ is real.",
              "stepByStep": [
                  "Step 1: Write $z = x + iy$. Then $\\bar{z} = x - iy$.",
                  "Step 2: $x + iy = x - iy \\implies iy = -iy \\implies 2iy = 0 \\implies y = 0$."
              ],
              "commonTrap": "Thinking z must be 0: any real number like 5 satisfies 5 = conjugate(5).",
              "reference": "Zill \u00a717.1 \u2014 Characterization of Real Numbers"
          }
      },
      {
          "id": "cpx_15",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Conjugate Root Theorem (Sec 17.1)",
          "difficulty": "Midterm Level",
          "question": "If $z_1 = 2 - 3i$ is a root of the real polynomial $P(z) = z^2 - 4z + 13 = 0$, what is the second root $z_2$?",
          "options": [
              "$2 + 3i$",
              "$-2 + 3i$",
              "$-2 - 3i$",
              "$3 - 2i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Polynomials with real coefficients have complex roots that occur in conjugate pairs: $z_2 = \\bar{z}_1$.",
              "stepByStep": [
                  "Step 1: By the Conjugate Root Theorem, if $P(z) = 0$ with real coefficients, $P(\\bar{z}) = 0$.",
                  "Step 2: $\\bar{z}_1 = \\overline{2 - 3i} = 2 + 3i$."
              ],
              "commonTrap": "Negating the real part instead of the imaginary part.",
              "reference": "Zill \u00a717.1 \u2014 Conjugate Roots of Real Polynomials"
          }
      },
      {
          "id": "cpx_16",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Form in Quadrant II (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Express $z = -1 + i\\sqrt{3}$ in polar exponential form $r e^{i\\theta}$ with principal argument $\\theta \\in (-\\pi, \\pi]$.",
          "options": [
              "$z = 2 e^{i\\frac{2\\pi}{3}}$",
              "$z = 2 e^{-i\\frac{\\pi}{3}}$",
              "$z = 4 e^{i\\frac{2\\pi}{3}}$",
              "$z = 2 e^{i\\frac{5\\pi}{6}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$r = \\sqrt{x^2 + y^2}$. In Quadrant II ($x < 0, y > 0$), $\\operatorname{Arg}(z) = \\pi - \\arctan(|y/x|)$.",
              "stepByStep": [
                  "Step 1: Compute modulus: $r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$.",
                  "Step 2: Reference angle $\\theta_0 = \\arctan(\\sqrt{3}/1) = \\frac{\\pi}{3}$.",
                  "Step 3: Since $x = -1 < 0$ and $y = \\sqrt{3} > 0$, $z$ is in Quadrant II: $\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.",
                  "Step 4: Polar form: $z = 2 e^{i\\frac{2\\pi}{3}}$."
              ],
              "commonTrap": "Taking raw arctan(sqrt(3)/-1) = -pi/3 from a calculator, which gives a Quadrant IV angle (error of pi!).",
              "reference": "Zill \u00a717.2 \u2014 Polar Form of Complex Numbers"
          }
      },
      {
          "id": "cpx_17",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Form in Quadrant III (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the polar exponential form $r e^{i\\theta}$ of $z = -2 - 2i$?",
          "options": [
              "$z = 2\\sqrt{2} e^{-i\\frac{3\\pi}{4}}$",
              "$z = 2\\sqrt{2} e^{i\\frac{5\\pi}{4}}$",
              "$z = 4 e^{-i\\frac{3\\pi}{4}}$",
              "$z = 2\\sqrt{2} e^{i\\frac{3\\pi}{4}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Principal argument $\\operatorname{Arg}(z)$ must lie strictly in $(-\\pi, \\pi]$. In Quadrant III, $\\theta = -\\pi + \\arctan(|y/x|)$.",
              "stepByStep": [
                  "Step 1: Modulus: $r = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$.",
                  "Step 2: Reference angle: $\\theta_0 = \\arctan(2/2) = \\frac{\\pi}{4}$.",
                  "Step 3: In Quadrant III ($x < 0, y < 0$), principal argument is $\\theta = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$.",
                  "Step 4: Polar form: $z = 2\\sqrt{2} e^{-i\\frac{3\\pi}{4}}$."
              ],
              "commonTrap": "Using 5pi/4. Although 5pi/4 is coterminal, Concordia professors strictly penalize angles outside (-pi, pi] for principal argument!",
              "reference": "Zill \u00a717.2 \u2014 Principal Argument and Quadrants"
          }
      },
      {
          "id": "cpx_18",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Form in Quadrant IV (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Convert $z = \\sqrt{3} - i$ into polar form $r e^{i\\theta}$.",
          "options": [
              "$z = 2 e^{-i\\frac{\\pi}{6}}$",
              "$z = 2 e^{i\\frac{11\\pi}{6}}$",
              "$z = 2 e^{-i\\frac{\\pi}{3}}$",
              "$z = 4 e^{-i\\frac{\\pi}{6}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "In Quadrant IV ($x > 0, y < 0$), $\\operatorname{Arg}(z) = -\\arctan(|y/x|)$.",
              "stepByStep": [
                  "Step 1: Modulus: $r = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2$.",
                  "Step 2: Reference angle: $\\theta_0 = \\arctan(1/\\sqrt{3}) = \\frac{\\pi}{6}$.",
                  "Step 3: Quadrant IV angle: $\\theta = -\\frac{\\pi}{6}$.",
                  "Step 4: Polar form: $z = 2 e^{-i\\frac{\\pi}{6}}$."
              ],
              "commonTrap": "Using 11pi/6 instead of the principal argument -pi/6.",
              "reference": "Zill \u00a717.2 \u2014 Quadrant IV Polar Conversions"
          }
      },
      {
          "id": "cpx_19",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Pure Imaginary Polar Form (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the exact polar exponential form of $z = -7i$?",
          "options": [
              "$7 e^{-i\\frac{\\pi}{2}}$",
              "$-7 e^{i\\frac{\\pi}{2}}$",
              "$7 e^{i\\frac{3\\pi}{2}}$",
              "$7 e^{i\\pi}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "A negative imaginary number lies on the negative imaginary axis at angle $-\\pi/2$. Modulus is strictly positive ($r = 7$).",
              "stepByStep": [
                  "Step 1: $|-7i| = 7$ (modulus is always non-negative).",
                  "Step 2: The point $(0, -7)$ lies on the negative y-axis: $\\theta = -\\frac{\\pi}{2}$.",
                  "Step 3: $z = 7 e^{-i\\frac{\\pi}{2}}$."
              ],
              "commonTrap": "Writing r = -7: modulus r can NEVER be negative!",
              "reference": "Zill \u00a717.2 \u2014 Axis Values in Polar Form"
          }
      },
      {
          "id": "cpx_20",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Negative Real Number Polar Form (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Express the negative real number $z = -5$ in polar exponential form $r e^{i\\theta}$.",
          "options": [
              "$5 e^{i\\pi}$",
              "$-5 e^{i 0}$",
              "$5 e^{-i\\pi}$",
              "$5 e^{i 2\\pi}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Negative real numbers lie along the negative real axis at angle $\\pi$. Principal argument convention specifies $\\operatorname{Arg}(-a) = \\pi$ (open at $-\\pi$).",
              "stepByStep": [
                  "Step 1: Modulus: $r = |-5| = 5$.",
                  "Step 2: Argument: On the negative real axis, the angle from positive x-axis is $\\pi$ radians.",
                  "Step 3: Polar form: $z = 5 e^{i\\pi}$."
              ],
              "commonTrap": "Using -pi instead of pi (principal argument interval is (-pi, pi], which includes pi but excludes -pi).",
              "reference": "Zill \u00a717.2 \u2014 Negative Real Polar Representation"
          }
      },
      {
          "id": "cpx_21",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Product Multiplication (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "If $z_1 = 3 e^{i\\frac{\\pi}{4}}$ and $z_2 = 2 e^{i\\frac{\\pi}{3}}$, what is $z_1 z_2$ in polar form?",
          "options": [
              "$6 e^{i\\frac{7\\pi}{12}}$",
              "$5 e^{i\\frac{7\\pi}{12}}$",
              "$6 e^{i\\frac{\\pi^2}{12}}$",
              "$6 e^{-i\\frac{\\pi}{12}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "When multiplying in polar form: multiply the moduli and add the arguments ($r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$).",
              "stepByStep": [
                  "Step 1: Modulus: $r = 3 \\times 2 = 6$.",
                  "Step 2: Argument: $\\theta = \\frac{\\pi}{4} + \\frac{\\pi}{3} = \\frac{3\\pi + 4\\pi}{12} = \\frac{7\\pi}{12}$.",
                  "Step 3: Product: $6 e^{i\\frac{7\\pi}{12}}$."
              ],
              "commonTrap": "Multiplying the angles (pi/4 * pi/3) instead of adding them.",
              "reference": "Zill \u00a717.2 \u2014 Polar Multiplication Theorem"
          }
      },
      {
          "id": "cpx_22",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Polar Quotient Division (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "If $z_1 = 8 e^{i\\frac{\\pi}{2}}$ and $z_2 = 2 e^{i\\frac{5\\pi}{6}}$, what is $\\frac{z_1}{z_2}$ with principal argument?",
          "options": [
              "$4 e^{-i\\frac{\\pi}{3}}$",
              "$4 e^{i\\frac{4\\pi}{3}}$",
              "$6 e^{-i\\frac{\\pi}{3}}$",
              "$4 e^{i\\frac{\\pi}{3}}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "When dividing in polar form: divide the moduli and subtract the arguments ($z_1/z_2 = (r_1/r_2) e^{i(\\theta_1 - \\theta_2)}$).",
              "stepByStep": [
                  "Step 1: Modulus: $8 / 2 = 4$.",
                  "Step 2: Argument: $\\frac{\\pi}{2} - \\frac{5\\pi}{6} = \\frac{3\\pi - 5\\pi}{6} = -\\frac{2\\pi}{6} = -\\frac{\\pi}{3}$.",
                  "Step 3: Result: $4 e^{-i\\frac{\\pi}{3}}$."
              ],
              "commonTrap": "Subtracting angles in reverse order (5pi/6 - pi/2 = +pi/3).",
              "reference": "Zill \u00a717.2 \u2014 Polar Division Theorem"
          }
      },
      {
          "id": "cpx_23",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Conjugate in Polar Form (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "If $z = r e^{i\\theta}$, what is the complex conjugate $\\bar{z}$ in polar form?",
          "options": [
              "$r e^{-i\\theta}$",
              "$-r e^{i\\theta}$",
              "$r e^{i(\\theta + \\pi)}$",
              "$-r e^{-i\\theta}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Conjugating a complex number negates its imaginary part, which corresponds to reflecting across the real axis (negating the angle $\\theta$).",
              "stepByStep": [
                  "Step 1: $z = r(\\cos\\theta + i\\sin\\theta)$.",
                  "Step 2: $\\bar{z} = r(\\cos\\theta - i\\sin\\theta) = r(\\cos(-\\theta) + i\\sin(-\\theta)) = r e^{-i\\theta}$."
              ],
              "commonTrap": "Placing a minus sign on the radius r.",
              "reference": "Zill \u00a717.2 \u2014 Complex Conjugate in Polar Form"
          }
      },
      {
          "id": "cpx_24",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Euler Identity Trig Evaluation (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Convert $z = 4 e^{i\\frac{5\\pi}{6}}$ to rectangular Cartesian form $a + bi$.",
          "options": [
              "$-2\\sqrt{3} + 2i$",
              "$2\\sqrt{3} - 2i$",
              "$-2 + 2i\\sqrt{3}$",
              "$-2\\sqrt{3} - 2i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$.",
              "stepByStep": [
                  "Step 1: $\\cos(5\\pi/6) = -\\frac{\\sqrt{3}}{2}$ and $\\sin(5\\pi/6) = \\frac{1}{2}$.",
                  "Step 2: Multiply by $r = 4$: $4\\left(-\\frac{\\sqrt{3}}{2} + i\\frac{1}{2}\\right) = -2\\sqrt{3} + 2i$."
              ],
              "commonTrap": "Mixing up cos(5pi/6) and sin(5pi/6) values.",
              "reference": "Zill \u00a717.2 \u2014 Conversion from Polar to Rectangular"
          }
      },
      {
          "id": "cpx_25",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Argand Plane Rotation (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Multiplying any non-zero complex number $z$ by the imaginary unit $i$ corresponds geometrically to:",
          "options": [
              "A counter-clockwise rotation by $90^\\circ$ ($\\pi/2$ rad)",
              "A clockwise rotation by $90^\\circ$",
              "A reflection across the y-axis",
              "A scaling by factor 2"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$i = 1 e^{i\\pi/2}$. Multiplying by $i$ adds $\\pi/2$ to the argument, rotating the vector $90^\\circ$ counter-clockwise.",
              "stepByStep": [
                  "Step 1: $i z = (1 e^{i\\pi/2})(r e^{i\\theta}) = r e^{i(\\theta + \\pi/2)}$.",
                  "Step 2: The radius remains $r$, while the angle advances by $+90^\\circ$ (counter-clockwise)."
              ],
              "commonTrap": "Thinking multiplication by i flips the sign to clockwise.",
              "reference": "Zill \u00a717.2 \u2014 Geometric Interpretation of Complex Multiplication"
          }
      },
      {
          "id": "cpx_26",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Reciprocal in Polar Form (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the reciprocal $\\frac{1}{z}$ of $z = r e^{i\\theta}$?",
          "options": [
              "$\\frac{1}{r} e^{-i\\theta}$",
              "$\\frac{1}{r} e^{i\\theta}$",
              "$-r e^{-i\\theta}$",
              "$\\frac{1}{r^2} e^{i\\theta}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$\\frac{1}{z} = \\frac{1 e^{i0}}{r e^{i\\theta}} = \\frac{1}{r} e^{i(0 - \\theta)} = \\frac{1}{r} e^{-i\\theta}$.",
              "stepByStep": [
                  "Step 1: Divide magnitude: $1/r$.",
                  "Step 2: Subtract angle: $0 - \\theta = -\\theta$."
              ],
              "commonTrap": "Leaving the angle as +theta.",
              "reference": "Zill \u00a717.2 \u2014 Polar Reciprocal Formula"
          }
      },
      {
          "id": "cpx_27",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Principal Argument of Negative Product (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the principal argument $\\operatorname{Arg}(-z)$ if $\\operatorname{Arg}(z) = \\frac{\\pi}{4}$?",
          "options": [
              "$-\\frac{3\\pi}{4}$",
              "$\\frac{5\\pi}{4}$",
              "$-\\frac{\\pi}{4}$",
              "$\\frac{3\\pi}{4}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$-z = (e^{i\\pi})z$. Adding $\\pi$ to $\\pi/4$ gives $5\\pi/4$, which must be reduced to $(-\\pi, \\pi]$ by subtracting $2\\pi$: $5\\pi/4 - 2\\pi = -3\\pi/4$.",
              "stepByStep": [
                  "Step 1: $-z$ is opposite in direction to $z$ (reflected through the origin).",
                  "Step 2: Angle is $\\frac{\\pi}{4} - \\pi = -\\frac{3\\pi}{4}$."
              ],
              "commonTrap": "Answering 5pi/4 without reducing to the principal interval (-pi, pi].",
              "reference": "Zill \u00a717.2 \u2014 Principal Argument Reductions"
          }
      },
      {
          "id": "cpx_28",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Degrees to Radians Law (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "In Concordia ENGR 213 examinations, what unit MUST all complex arguments $\\theta$ be expressed in?",
          "options": [
              "Radians strictly",
              "Degrees or radians interchangeably",
              "Gradians",
              "Degrees only"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Dr. Paradis and Dr. Haghighat explicitly state that all angles in complex exponential form $e^{i\\theta}$ and marking keys must strictly be in radians.",
              "stepByStep": [
                  "Step 1: The exponential function $e^{i\\theta}$ is defined via Taylor series where $\\theta$ is dimensionless (radians). Degrees invalidate the calculus!"
              ],
              "commonTrap": "Leaving answers as e^{i 45^\\circ}. Full marks are deducted if not converted to e^{i\\pi/4}.",
              "reference": "Paradis Notes Module 7 \u2014 Golden Rule on Radians"
          }
      },
      {
          "id": "cpx_29",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus of Exponential (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus of the complex exponential $w = e^{3 + 4i}$?",
          "options": [
              "$e^3$",
              "$5$",
              "$e^5$",
              "$e^4$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$e^{x + iy} = e^x e^{iy}$. Since $|e^{iy}| = |\\cos y + i\\sin y| = 1$, the modulus is $|e^{x + iy}| = e^x$.",
              "stepByStep": [
                  "Step 1: Split exponential: $e^{3 + 4i} = e^3 \\cdot e^{4i}$.",
                  "Step 2: $|e^{4i}| = 1$ because $\\cos^2(4) + \\sin^2(4) = 1$.",
                  "Step 3: Modulus is $e^3$."
              ],
              "commonTrap": "Computing sqrt(3^2 + 4^2) = 5 or e^5. The imaginary part 4 is purely an angle!",
              "reference": "Zill \u00a717.2 \u2014 Modulus of Complex Exponential Function"
          }
      },
      {
          "id": "cpx_30",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Complex Modulus Identity (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus of $e^{i\\theta}$ for any real angle $\\theta$?",
          "options": [
              "$1$",
              "$\\theta$",
              "$\\sqrt{\\theta}$",
              "$e$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$|e^{i\\theta}| = |\\cos\\theta + i\\sin\\theta| = \\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 1$. All points $e^{i\\theta}$ lie on the unit circle.",
              "stepByStep": [
                  "Step 1: By Euler's formula, $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.",
                  "Step 2: Modulus is $\\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 1$."
              ],
              "commonTrap": "Thinking the modulus grows with theta.",
              "reference": "Zill \u00a717.2 \u2014 The Complex Unit Circle"
          }
      },
      {
          "id": "cpx_31",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre High Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Use De Moivre's theorem to compute $(1 + i)^8$.",
          "options": [
              "$16$",
              "$16i$",
              "$-16$",
              "$8 + 8i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Convert to polar form: $1 + i = \\sqrt{2} e^{i\\pi/4}$. Then $(r e^{i\\theta})^n = r^n e^{in\\theta}$.",
              "stepByStep": [
                  "Step 1: Polar form: $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$, $\\theta = \\pi/4$.",
                  "Step 2: Apply power 8: $(\\sqrt{2} e^{i\\pi/4})^8 = (\\sqrt{2})^8 e^{i 8(\\pi/4)}$.",
                  "Step 3: $(\\sqrt{2})^8 = 2^4 = 16$.",
                  "Step 4: Angle is $8(\\pi/4) = 2\\pi$. Since $e^{i 2\\pi} = 1$, the result is $16 \\times 1 = 16$."
              ],
              "commonTrap": "Forgetting to raise sqrt(2) to the 8th power.",
              "reference": "Zill \u00a717.2 \u2014 De Moivre's Theorem for Integer Powers"
          }
      },
      {
          "id": "cpx_32",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre Power with Quadrant II (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Compute $(-\\sqrt{3} + i)^6$ in rectangular form $a + bi$.",
          "options": [
              "$-64$",
              "$64$",
              "$-64i$",
              "$64i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$-\\sqrt{3} + i$ has modulus $2$ and argument $\\frac{5\\pi}{6}$.",
              "stepByStep": [
                  "Step 1: $r = \\sqrt{(-\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2$.",
                  "Step 2: In Quadrant II, $\\theta = \\pi - \\pi/6 = \\frac{5\\pi}{6}$.",
                  "Step 3: $(2 e^{i 5\\pi/6})^6 = 2^6 e^{i 6(5\\pi/6)} = 64 e^{i 5\\pi}$.",
                  "Step 4: $e^{i 5\\pi} = e^{i\\pi} = -1$. Hence $64(-1) = -64$."
              ],
              "commonTrap": "Using theta = -pi/6 (Quadrant IV angle), which gives 64 e^{-i pi} = -64 by luck but loses marks on steps.",
              "reference": "Zill \u00a717.2 \u2014 Powers via Polar Coordinates"
          }
      },
      {
          "id": "cpx_33",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre Fractional Quotient Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $\\left(\\frac{1 + i}{1 - i}\\right)^{10}$.",
          "options": [
              "$-1$",
              "$1$",
              "$i$",
              "$-i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Simplify the interior fraction first: $\\frac{1+i}{1-i} = \\frac{(1+i)^2}{2} = \\frac{2i}{2} = i$.",
              "stepByStep": [
                  "Step 1: Interior simplifies: $\\frac{1 + i}{1 - i} = i$.",
                  "Step 2: $(i)^{10} = (i^4)^2 \\cdot i^2 = 1^2 \\cdot (-1) = -1$."
              ],
              "commonTrap": "Raising numerator and denominator separately to 10th powers without simplifying first.",
              "reference": "Zill \u00a717.2 \u2014 Powers of Complex Fractions"
          }
      },
      {
          "id": "cpx_34",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre 4th Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $(-1 + i\\sqrt{3})^4$ in rectangular form $a + bi$.",
          "options": [
              "$-8 + 8i\\sqrt{3}$",
              "$-8 - 8i\\sqrt{3}$",
              "$16 + 16i\\sqrt{3}$",
              "$-16 + 16i\\sqrt{3}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Polar form: $r = 2, \\theta = 2\\pi/3$. By De Moivre, $(2 e^{i 2\\pi/3})^4 = 16 e^{i 8\\pi/3}$.",
              "stepByStep": [
                  "Step 1: Angle $8\\pi/3 = 2\\pi + 2\\pi/3 \\equiv 2\\pi/3$.",
                  "Step 2: $16 e^{i 2\\pi/3} = 16\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right) = 16\\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) = -8 + 8i\\sqrt{3}$. Wait: let us re-verify options: option 1 has + or -.",
                  "Step 3: Correct value is $-8 + 8i\\sqrt{3}$."
              ],
              "commonTrap": "Angle reduction error: 8pi/3 - 2pi = 2pi/3.",
              "reference": "Zill \u00a717.2 \u2014 De Moivre Calculations"
          }
      },
      {
          "id": "cpx_35",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Negative Exponent via De Moivre (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $(1 - i)^{-4}$.",
          "options": [
              "$-\\frac{1}{4}$",
              "$\\frac{1}{4}$",
              "$-\\frac{1}{4}i$",
              "$\\frac{1}{4}i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$(r e^{i\\theta})^{-n} = r^{-n} e^{-in\\theta}$.",
              "stepByStep": [
                  "Step 1: $1 - i = \\sqrt{2} e^{-i\\pi/4}$.",
                  "Step 2: $(1 - i)^{-4} = (\\sqrt{2})^{-4} e^{-i(-4)(\\pi/4)} = \\frac{1}{4} e^{i\\pi}$.",
                  "Step 3: Since $e^{i\\pi} = -1$, the result is $\\frac{1}{4}(-1) = -\\frac{1}{4}$."
              ],
              "commonTrap": "Forgetting that the negative power flips the angle sign: -(-4)(pi/4) = +pi.",
              "reference": "Zill \u00a717.2 \u2014 Negative Integer Powers"
          }
      },
      {
          "id": "cpx_36",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre Trigonometric Identity (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Using De Moivre's formula $(\\cos\\theta + i\\sin\\theta)^2 = \\cos(2\\theta) + i\\sin(2\\theta)$, what is $\\cos(2\\theta)$ in terms of $\\cos\\theta$ and $\\sin\\theta$?",
          "options": [
              "$\\cos^2\\theta - \\sin^2\\theta$",
              "$\\cos^2\\theta + \\sin^2\\theta$",
              "$2\\cos\\theta\\sin\\theta$",
              "$1 - \\sin\\theta$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Expand $(\\cos\\theta + i\\sin\\theta)^2 = (\\cos^2\\theta - \\sin^2\\theta) + i(2\\cos\\theta\\sin\\theta)$. Equate real parts.",
              "stepByStep": [
                  "Step 1: Real part is $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$.",
                  "Step 2: Imaginary part is $\\sin(2\\theta) = 2\\cos\\theta\\sin\\theta$."
              ],
              "commonTrap": "Confusing real and imaginary parts.",
              "reference": "Zill \u00a717.2 \u2014 Derivation of Trig Identities via De Moivre"
          }
      },
      {
          "id": "cpx_37",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre High Power of i (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is $(1 - i\\sqrt{3})^6$ in exact Cartesian form?",
          "options": [
              "$64$",
              "$-64$",
              "$64i$",
              "$-64i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$1 - i\\sqrt{3} = 2 e^{-i\\pi/3}$. By De Moivre, $(2 e^{-i\\pi/3})^6 = 2^6 e^{-i 2\\pi} = 64(1) = 64$.",
              "stepByStep": [
                  "Step 1: $r = \\sqrt{1 + 3} = 2$. Angle in Quadrant IV is $-\\pi/3$.",
                  "Step 2: Power 6: $2^6 e^{-i 6(\\pi/3)} = 64 e^{-i 2\\pi} = 64(1) = 64$."
              ],
              "commonTrap": "Answering -64 due to sign confusion on 2pi.",
              "reference": "Zill \u00a717.2 \u2014 De Moivre's Powers"
          }
      },
      {
          "id": "cpx_38",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Pure Imaginary Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Compute $(-2i)^5$.",
          "options": [
              "$-32i$",
              "$32i$",
              "$-32$",
              "$32$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$(-2i)^5 = (-2)^5 \\cdot i^5 = -32 \\cdot i = -32i$.",
              "stepByStep": [
                  "Step 1: Factor: $(-2)^5 = -32$.",
                  "Step 2: Power of $i$: $i^5 = i^4 \\cdot i = i$.",
                  "Step 3: Combine: $-32i$."
              ],
              "commonTrap": "Losing the negative sign on (-2)^5.",
              "reference": "Zill \u00a717.2 \u2014 Powers of Imaginary Numbers"
          }
      },
      {
          "id": "cpx_39",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "De Moivre 12th Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Evaluate $(1 - i)^{12}$.",
          "options": [
              "$-64$",
              "$64$",
              "$-64i$",
              "$64i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$(1 - i) = \\sqrt{2} e^{-i\\pi/4}$.",
              "stepByStep": [
                  "Step 1: Modulus: $(\\sqrt{2})^{12} = 2^6 = 64$.",
                  "Step 2: Argument: $12 \\times (-\\pi/4) = -3\\pi$.",
                  "Step 3: $e^{-i 3\\pi} = \\cos(-3\\pi) + i\\sin(-3\\pi) = -1 + 0 = -1$.",
                  "Step 4: Result: $64(-1) = -64$."
              ],
              "commonTrap": "Thinking e^{-3i pi} is +1 instead of -1.",
              "reference": "Zill \u00a717.2 \u2014 De Moivre Powers"
          }
      },
      {
          "id": "cpx_40",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Modulus of High Power (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the modulus of $z = (3 - 4i)^7$?",
          "options": [
              "$5^7$",
              "$25^7$",
              "$7 \\times 5$",
              "$\\sqrt{5^7}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "By De Moivre, $|z^n| = |z|^n$.",
              "stepByStep": [
                  "Step 1: Compute base modulus: $|3 - 4i| = \\sqrt{3^2 + (-4)^2} = 5$.",
                  "Step 2: Raise to power 7: $|z| = 5^7$."
              ],
              "commonTrap": "Multiplying 5 by 7 instead of exponentiating.",
              "reference": "Zill \u00a717.2 \u2014 Modulus of Powers"
          }
      },
      {
          "id": "cpx_41",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Formula for All n-th Roots (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the general formula for all $n$ distinct roots $w_k$ of $z = r e^{i\\theta}$?",
          "options": [
              "$w_k = r^{1/n} e^{i\\frac{\\theta + 2k\\pi}{n}}, \\quad k = 0, 1, \\dots, n-1$",
              "$w_k = r^n e^{i\\frac{\\theta + k\\pi}{n}}, \\quad k = 0, 1, \\dots, n-1$",
              "$w_k = r^{1/n} e^{i\\frac{\\theta + k\\pi}{n}}, \\quad k = 0, 1, \\dots, n$",
              "$w_k = \\frac{r}{n} e^{i(\\theta + 2k\\pi)}, \\quad k = 0, 1, \\dots, n-1$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The $n$ distinct roots of $z = r e^{i\\theta}$ are given by $w_k = r^{1/n}\\left[\\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right)\\right]$ for $k = 0, 1, \\dots, n-1$.",
              "stepByStep": [
                  "Step 1: The radius of each root is $r^{1/n}$.",
                  "Step 2: The angles are spaced by $\\frac{2\\pi}{n}$ radians, running from $k = 0$ to $k = n-1$."
              ],
              "commonTrap": "Using k pi instead of 2k pi in the angular shift.",
              "reference": "Zill \u00a717.2 \u2014 Theorem 17.2.1 (Roots of Complex Numbers)"
          }
      },
      {
          "id": "cpx_42",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Geometric Distribution of Roots (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Geometrically, the $n$ roots of a complex number $z = r e^{i\\theta}$:",
          "options": [
              "Lie on a circle of radius $r^{1/n}$ centered at origin, equally spaced by $\\frac{2\\pi}{n}$ radians",
              "Lie on a straight line passing through the origin",
              "Lie on an ellipse with foci at $\\pm r$",
              "Lie on a circle of radius $r$ centered at origin"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "All $n$ roots share identical modulus $r^{1/n}$ and form vertices of a regular $n$-gon inscribed in a circle of radius $r^{1/n}$.",
              "stepByStep": [
                  "Step 1: $|w_k| = r^{1/n}$ for all $k$, so they lie on a circle centered at origin.",
                  "Step 2: The angular difference between consecutive roots is $\\frac{\\theta + 2(k+1)\\pi}{n} - \\frac{\\theta + 2k\\pi}{n} = \\frac{2\\pi}{n}$."
              ],
              "commonTrap": "Thinking the circle has radius r instead of r^{1/n}.",
              "reference": "Zill \u00a717.2 \u2014 Geometry of Complex Roots"
          }
      },
      {
          "id": "cpx_43",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Cube Roots of Pure Imaginary (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the principal cube root ($k = 0$) of $z = -8i$?",
          "options": [
              "$\\sqrt{3} - i$",
              "$-\\sqrt{3} - i$",
              "$2i$",
              "$\\sqrt{3} + i$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Write $-8i = 8 e^{-i\\pi/2}$. The principal cube root ($k=0$) is $8^{1/3} e^{i(-\\pi/2)/3} = 2 e^{-i\\pi/6}$.",
              "stepByStep": [
                  "Step 1: Modulus is 8, so $r^{1/3} = 2$.",
                  "Step 2: Principal argument of $-8i$ is $\\theta = -\\pi/2$.",
                  "Step 3: For $k = 0$: angle is $\\frac{-\\pi/2}{3} = -\\frac{\\pi}{6}$.",
                  "Step 4: Cartesian: $2\\left(\\cos\\left(-\\frac{\\pi}{6}\\right) + i\\sin\\left(-\\frac{\\pi}{6}\\right)\\right) = 2\\left(\\frac{\\sqrt{3}}{2} - i\\frac{1}{2}\\right) = \\sqrt{3} - i$."
              ],
              "commonTrap": "Using theta = 3pi/2 instead of principal argument -pi/2, shifting the root indexing.",
              "reference": "Zill \u00a717.2 \u2014 Roots of Pure Imaginary Numbers"
          }
      },
      {
          "id": "cpx_44",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "All Cube Roots of -8i (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Which of the following is ONE of the three cube roots of $z = -8i$?",
          "options": [
              "$2i$",
              "$-2i$",
              "$2$",
              "$-2$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "The 3 cube roots of $-8i = 8 e^{-i\\pi/2}$ correspond to $k = 0, 1, 2$.",
              "stepByStep": [
                  "Step 1: For $k = 1$: angle is $\\frac{-\\pi/2 + 2\\pi}{3} = \\frac{3\\pi/2}{3} = \\frac{\\pi}{2}$.",
                  "Step 2: $w_1 = 2 e^{i\\pi/2} = 2i$.",
                  "Step 3: Verification: $(2i)^3 = 8 i^3 = -8i$. Matches perfectly!"
              ],
              "commonTrap": "Guessing -2i without checking: (-2i)^3 = -8(-i) = +8i (wrong sign!).",
              "reference": "Zill \u00a717.2 \u2014 Cube Roots Example"
          }
      },
      {
          "id": "cpx_45",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Cube Roots of Negative Real Number (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What are all three cube roots of $z = -27$?",
          "options": [
              "$w_0 = \\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}, \\quad w_1 = -3, \\quad w_2 = \\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}$",
              "$w_0 = 3, \\quad w_1 = -3, \\quad w_2 = 3i$",
              "$w_0 = 3i, \\quad w_1 = -3i, \\quad w_2 = -3$",
              "$w_0 = -\\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}, \\quad w_1 = 3, \\quad w_2 = -\\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$-27 = 27 e^{i\\pi}$. The radius is $27^{1/3} = 3$. The angles are $\\frac{\\pi + 2k\\pi}{3}$ for $k = 0, 1, 2$.",
              "stepByStep": [
                  "Step 1: $k = 0$: angle is $\\pi/3 \\implies 3(\\cos(\\pi/3) + i\\sin(\\pi/3)) = \\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}$.",
                  "Step 2: $k = 1$: angle is $3\\pi/3 = \\pi \\implies 3(\\cos\\pi + i\\sin\\pi) = -3$.",
                  "Step 3: $k = 2$: angle is $5\\pi/3 \\equiv -\\pi/3 \\implies \\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}$."
              ],
              "commonTrap": "Believing -3 is the ONLY cube root of -27. There are ALWAYS exactly 3 roots in the complex plane!",
              "reference": "Zill \u00a717.2 \u2014 Cube Roots of Negative Reals"
          }
      },
      {
          "id": "cpx_46",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Fourth Roots of Unity (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What are the four roots of the equation $w^4 = 1$?",
          "options": [
              "$1, \\; -1, \\; i, \\; -i$",
              "$1, \\; -1, \\; 1+i, \\; 1-i$",
              "$i, \\; -i, \\; 2i, \\; -2i$",
              "$\\pm \\frac{\\sqrt{2}}{2} \\pm i\\frac{\\sqrt{2}}{2}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$1 = 1 e^{i 0}$. The angles are $\\frac{2k\\pi}{4} = \\frac{k\\pi}{2}$ for $k = 0, 1, 2, 3$, giving $1, i, -1, -i$.",
              "stepByStep": [
                  "Step 1: $k = 0 \\implies e^0 = 1$.",
                  "Step 2: $k = 1 \\implies e^{i\\pi/2} = i$.",
                  "Step 3: $k = 2 \\implies e^{i\\pi} = -1$.",
                  "Step 4: $k = 3 \\implies e^{i 3\\pi/2} = -i$."
              ],
              "commonTrap": "Listing only 1 and -1, omitting the two complex roots.",
              "reference": "Zill \u00a717.2 \u2014 Roots of Unity"
          }
      },
      {
          "id": "cpx_47",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Square Roots of the Imaginary Unit (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "Find the two square roots of $z = i$.",
          "options": [
              "$\\pm \\left(\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}\\right)$",
              "$\\pm (1 + i)$",
              "$\\pm i$",
              "$\\pm \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "$i = 1 e^{i\\pi/2}$. Square roots have radius $1^{1/2} = 1$ and angles $\\frac{\\pi/2 + 2k\\pi}{2} = \\frac{\\pi}{4} + k\\pi$.",
              "stepByStep": [
                  "Step 1: $k = 0 \\implies e^{i\\pi/4} = \\cos(\\pi/4) + i\\sin(\\pi/4) = \\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}$.",
                  "Step 2: $k = 1 \\implies e^{i 5\\pi/4} = -\\left(\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}\\right)$."
              ],
              "commonTrap": "Writing sqrt(i) = i.",
              "reference": "Zill \u00a717.2 \u2014 Square Roots of Complex Numbers"
          }
      },
      {
          "id": "cpx_48",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Fourth Roots of -16 (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the radius $R$ of the circle on which all four roots of $w^4 = -16$ lie?",
          "options": [
              "$2$",
              "$4$",
              "$16$",
              "$\\sqrt{2}$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "All $n$-th roots of $z$ lie on a circle of radius $R = |z|^{1/n}$.",
              "stepByStep": [
                  "Step 1: $|-16| = 16$.",
                  "Step 2: The radius of the 4th roots is $R = 16^{1/4} = 2$."
              ],
              "commonTrap": "Taking the square root (4) instead of the 4th root (2).",
              "reference": "Zill \u00a717.2 \u2014 Radius of Root Circles"
          }
      },
      {
          "id": "cpx_49",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Angular Separation Between Roots (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "What is the angular separation $\\Delta\\theta$ between consecutive 5th roots of any non-zero complex number?",
          "options": [
              "$\\frac{2\\pi}{5}$ radians ($72^\\circ$)",
              "$\\frac{\\pi}{5}$ radians ($36^\\circ$)",
              "$\\frac{\\pi}{10}$ radians",
              "$\\frac{4\\pi}{5}$ radians"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "Consecutive $n$-th roots are separated by $\\Delta\\theta = \\frac{2\\pi}{n}$. For $n = 5$, $\\Delta\\theta = \\frac{2\\pi}{5} = 72^\\circ$.",
              "stepByStep": [
                  "Step 1: A full revolution of $2\\pi$ radians is divided equally among the $n = 5$ roots.",
                  "Step 2: $\\Delta\\theta = \\frac{2\\pi}{5}$."
              ],
              "commonTrap": "Dividing pi by 5 instead of 2pi by 5.",
              "reference": "Zill \u00a717.2 \u2014 Angular Spacing of Roots"
          }
      },
      {
          "id": "cpx_50",
          "courseId": "ENGR213",
          "chapter": "midterm",
          "methodId": "complex_numbers",
          "topic": "Sum of All n-th Roots of Unity (Sec 17.2)",
          "difficulty": "Midterm Level",
          "question": "For any integer $n \\ge 2$, what is the sum of all $n$ distinct $n$-th roots of unity $1 + w_1 + w_2 + \\dots + w_{n-1}$?",
          "options": [
              "$0$",
              "$1$",
              "$n$",
              "$-1$"
          ],
          "correctIndex": 0,
          "explanation": {
              "coreConcept": "By geometric series or symmetry of the regular $n$-gon centered at the origin, the centroid and sum of all roots is $\\sum_{k=0}^{n-1} w_k = 0$.",
              "stepByStep": [
                  "Step 1: The roots are $w_k = \\omega^k$ where $\\omega = e^{i 2\\pi/n} \\ne 1$.",
                  "Step 2: Sum is a finite geometric series: $\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega}$.",
                  "Step 3: Since $\\omega^n = (e^{i 2\\pi/n})^n = e^{i 2\\pi} = 1$, the numerator is $1 - 1 = 0$."
              ],
              "commonTrap": "Thinking the sum equals 1 because w_0 = 1.",
              "reference": "Zill \u00a717.2 \u2014 Sum of Roots of Unity Identity"
          }
      }
  ],
  "formulas": [
    {
      "id": "form_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Tangent #1",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\tan(x)\\,dx$?",
      "options": [
        "$\\ln|\\sec(x)| + C$",
        "$-\\ln|\\sec(x)| + C$",
        "$\\sec^2(x) + C$",
        "$\\ln|\\sin(x)| + C$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\tan(x)dx = \\int \\frac{\\sin x}{\\cos x}dx = -\\ln|\\cos x| = \\ln|\\sec x| + C$."
        ],
        "commonTrap": "Forgetting that -ln|cos x| = ln|(cos x)^(-1)| = ln|sec x|.",
        "reference": "Calculus Vault \u00b7 Rule #1"
      }
    },
    {
      "id": "form_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Cotangent #2",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\cot(x)\\,dx$?",
      "options": [
        "$\\ln|\\sin(x)| + C$",
        "$-\\ln|\\sin(x)| + C$",
        "$\\ln|\\csc(x)| + C$",
        "$\\csc^2(x) + C$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\cot(x)dx = \\int \\frac{\\cos x}{\\sin x}dx = \\ln|\\sin x| + C$."
        ],
        "commonTrap": "Putting a negative sign: the derivative of sin(x) is +cos(x), so no minus sign!",
        "reference": "Calculus Vault \u00b7 Rule #2"
      }
    },
    {
      "id": "form_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Secant #3",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\sec(x)\\,dx$?",
      "options": [
        "$\\ln|\\sec(x)| + C$",
        "$\\ln|\\sec(x) + \\tan(x)| + C$",
        "$\\sec(x)\\tan(x) + C$",
        "$\\ln|\\cos(x)| + C$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "Multiply numerator and denominator by $(\\sec x + \\tan x)$: $\\int \\frac{\\sec^2 x + \\sec x \\tan x}{\\sec x + \\tan x}dx = \\ln|\\sec x + \\tan x| + C$."
        ],
        "commonTrap": "Confusing the derivative of sec(x) with its integral.",
        "reference": "Calculus Vault \u00b7 Rule #3"
      }
    },
    {
      "id": "form_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Tangent #4",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\tan(x)\\,dx$?",
      "options": [
        "$\\ln|\\sin(x)| + C$",
        "$-\\ln|\\sec(x)| + C$",
        "$\\sec^2(x) + C$",
        "$\\ln|\\sec(x)| + C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\tan(x)dx = \\int \\frac{\\sin x}{\\cos x}dx = -\\ln|\\cos x| = \\ln|\\sec x| + C$."
        ],
        "commonTrap": "Forgetting that -ln|cos x| = ln|(cos x)^(-1)| = ln|sec x|.",
        "reference": "Calculus Vault \u00b7 Rule #4"
      }
    },
    {
      "id": "form_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Cotangent #5",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\cot(x)\\,dx$?",
      "options": [
        "$\\csc^2(x) + C$",
        "$-\\ln|\\sin(x)| + C$",
        "$\\ln|\\csc(x)| + C$",
        "$\\ln|\\sin(x)| + C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\cot(x)dx = \\int \\frac{\\cos x}{\\sin x}dx = \\ln|\\sin x| + C$."
        ],
        "commonTrap": "Putting a negative sign: the derivative of sin(x) is +cos(x), so no minus sign!",
        "reference": "Calculus Vault \u00b7 Rule #5"
      }
    },
    {
      "id": "form_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Secant #6",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\sec(x)\\,dx$?",
      "options": [
        "$\\ln|\\sec(x) + \\tan(x)| + C$",
        "$\\ln|\\sec(x)| + C$",
        "$\\sec(x)\\tan(x) + C$",
        "$\\ln|\\cos(x)| + C$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "Multiply numerator and denominator by $(\\sec x + \\tan x)$: $\\int \\frac{\\sec^2 x + \\sec x \\tan x}{\\sec x + \\tan x}dx = \\ln|\\sec x + \\tan x| + C$."
        ],
        "commonTrap": "Confusing the derivative of sec(x) with its integral.",
        "reference": "Calculus Vault \u00b7 Rule #6"
      }
    },
    {
      "id": "form_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Tangent #7",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\tan(x)\\,dx$?",
      "options": [
        "$-\\ln|\\sec(x)| + C$",
        "$\\ln|\\sec(x)| + C$",
        "$\\sec^2(x) + C$",
        "$\\ln|\\sin(x)| + C$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\tan(x)dx = \\int \\frac{\\sin x}{\\cos x}dx = -\\ln|\\cos x| = \\ln|\\sec x| + C$."
        ],
        "commonTrap": "Forgetting that -ln|cos x| = ln|(cos x)^(-1)| = ln|sec x|.",
        "reference": "Calculus Vault \u00b7 Rule #7"
      }
    },
    {
      "id": "form_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Cotangent #8",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\cot(x)\\,dx$?",
      "options": [
        "$\\csc^2(x) + C$",
        "$-\\ln|\\sin(x)| + C$",
        "$\\ln|\\csc(x)| + C$",
        "$\\ln|\\sin(x)| + C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\cot(x)dx = \\int \\frac{\\cos x}{\\sin x}dx = \\ln|\\sin x| + C$."
        ],
        "commonTrap": "Putting a negative sign: the derivative of sin(x) is +cos(x), so no minus sign!",
        "reference": "Calculus Vault \u00b7 Rule #8"
      }
    },
    {
      "id": "form_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Secant #9",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\sec(x)\\,dx$?",
      "options": [
        "$\\ln|\\cos(x)| + C$",
        "$\\ln|\\sec(x)| + C$",
        "$\\sec(x)\\tan(x) + C$",
        "$\\ln|\\sec(x) + \\tan(x)| + C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "Multiply numerator and denominator by $(\\sec x + \\tan x)$: $\\int \\frac{\\sec^2 x + \\sec x \\tan x}{\\sec x + \\tan x}dx = \\ln|\\sec x + \\tan x| + C$."
        ],
        "commonTrap": "Confusing the derivative of sec(x) with its integral.",
        "reference": "Calculus Vault \u00b7 Rule #9"
      }
    },
    {
      "id": "form_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Tangent #10",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\tan(x)\\,dx$?",
      "options": [
        "$\\sec^2(x) + C$",
        "$-\\ln|\\sec(x)| + C$",
        "$\\ln|\\sec(x)| + C$",
        "$\\ln|\\sin(x)| + C$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\tan(x)dx = \\int \\frac{\\sin x}{\\cos x}dx = -\\ln|\\cos x| = \\ln|\\sec x| + C$."
        ],
        "commonTrap": "Forgetting that -ln|cos x| = ln|(cos x)^(-1)| = ln|sec x|.",
        "reference": "Calculus Vault \u00b7 Rule #10"
      }
    },
    {
      "id": "form_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Cotangent #11",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\cot(x)\\,dx$?",
      "options": [
        "$-\\ln|\\sin(x)| + C$",
        "$\\ln|\\sin(x)| + C$",
        "$\\ln|\\csc(x)| + C$",
        "$\\csc^2(x) + C$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\cot(x)dx = \\int \\frac{\\cos x}{\\sin x}dx = \\ln|\\sin x| + C$."
        ],
        "commonTrap": "Putting a negative sign: the derivative of sin(x) is +cos(x), so no minus sign!",
        "reference": "Calculus Vault \u00b7 Rule #11"
      }
    },
    {
      "id": "form_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Secant #12",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\sec(x)\\,dx$?",
      "options": [
        "$\\ln|\\sec(x) + \\tan(x)| + C$",
        "$\\ln|\\sec(x)| + C$",
        "$\\sec(x)\\tan(x) + C$",
        "$\\ln|\\cos(x)| + C$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "Multiply numerator and denominator by $(\\sec x + \\tan x)$: $\\int \\frac{\\sec^2 x + \\sec x \\tan x}{\\sec x + \\tan x}dx = \\ln|\\sec x + \\tan x| + C$."
        ],
        "commonTrap": "Confusing the derivative of sec(x) with its integral.",
        "reference": "Calculus Vault \u00b7 Rule #12"
      }
    },
    {
      "id": "form_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Tangent #13",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\tan(x)\\,dx$?",
      "options": [
        "$\\ln|\\sin(x)| + C$",
        "$-\\ln|\\sec(x)| + C$",
        "$\\sec^2(x) + C$",
        "$\\ln|\\sec(x)| + C$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\tan(x)dx = \\int \\frac{\\sin x}{\\cos x}dx = -\\ln|\\cos x| = \\ln|\\sec x| + C$."
        ],
        "commonTrap": "Forgetting that -ln|cos x| = ln|(cos x)^(-1)| = ln|sec x|.",
        "reference": "Calculus Vault \u00b7 Rule #13"
      }
    },
    {
      "id": "form_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Cotangent #14",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\cot(x)\\,dx$?",
      "options": [
        "$\\ln|\\csc(x)| + C$",
        "$-\\ln|\\sin(x)| + C$",
        "$\\ln|\\sin(x)| + C$",
        "$\\csc^2(x) + C$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "$\\int \\cot(x)dx = \\int \\frac{\\cos x}{\\sin x}dx = \\ln|\\sin x| + C$."
        ],
        "commonTrap": "Putting a negative sign: the derivative of sin(x) is +cos(x), so no minus sign!",
        "reference": "Calculus Vault \u00b7 Rule #14"
      }
    },
    {
      "id": "form_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Antiderivative of Secant #15",
      "difficulty": "Midterm Level",
      "question": "What is the antiderivative $\\int \\sec(x)\\,dx$?",
      "options": [
        "$\\sec(x)\\tan(x) + C$",
        "$\\ln|\\sec(x)| + C$",
        "$\\ln|\\sec(x) + \\tan(x)| + C$",
        "$\\ln|\\cos(x)| + C$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Essential calculus integral for linear and separable ODE integrating factors.",
        "stepByStep": [
          "Multiply numerator and denominator by $(\\sec x + \\tan x)$: $\\int \\frac{\\sec^2 x + \\sec x \\tan x}{\\sec x + \\tan x}dx = \\ln|\\sec x + \\tan x| + C$."
        ],
        "commonTrap": "Confusing the derivative of sec(x) with its integral.",
        "reference": "Calculus Vault \u00b7 Rule #15"
      }
    },
    {
      "id": "form_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #16",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #1"
      }
    },
    {
      "id": "form_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #17",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #2"
      }
    },
    {
      "id": "form_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #18",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #3"
      }
    },
    {
      "id": "form_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #19",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v - \\int u\\,dv$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int v\\,du$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #4"
      }
    },
    {
      "id": "form_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #20",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #5"
      }
    },
    {
      "id": "form_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #21",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #6"
      }
    },
    {
      "id": "form_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #22",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v - \\int u\\,dv$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int v\\,du$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #7"
      }
    },
    {
      "id": "form_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #23",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v - \\int u\\,dv$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int v\\,du$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #8"
      }
    },
    {
      "id": "form_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #24",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #9"
      }
    },
    {
      "id": "form_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #25",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #10"
      }
    },
    {
      "id": "form_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #26",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v - \\int u\\,dv$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int v\\,du$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #11"
      }
    },
    {
      "id": "form_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #27",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #12"
      }
    },
    {
      "id": "form_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #28",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #13"
      }
    },
    {
      "id": "form_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #29",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #14"
      }
    },
    {
      "id": "form_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Integration by Parts #30",
      "difficulty": "Midterm Level",
      "question": "What is the standard formula for Integration by Parts?",
      "options": [
        "$\\int u\\,dv = u v + \\int v\\,du$",
        "$\\int u\\,dv = u v - \\int v\\,du$",
        "$\\int u\\,dv = u' v - u v'$",
        "$\\int u\\,dv = u v - \\int u\\,dv$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Integration by parts formula derived directly from the product rule.",
        "stepByStep": [
          "Step 1: Product rule: $d(uv) = u\\,dv + v\\,du$.",
          "Step 2: Integrate both sides: $uv = \\int u\\,dv + \\int v\\,du$.",
          "Step 3: Rearrange: $\\int u\\,dv = uv - \\int v\\,du$."
        ],
        "commonTrap": "Putting a plus sign instead of a minus sign in uv - int(v du).",
        "reference": "Calculus Vault \u00b7 IBP #15"
      }
    },
    {
      "id": "form_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #31",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #1"
      }
    },
    {
      "id": "form_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #32",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #2"
      }
    },
    {
      "id": "form_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #33",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #3"
      }
    },
    {
      "id": "form_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #34",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #4"
      }
    },
    {
      "id": "form_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #35",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$1 - \\sin(x)$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #5"
      }
    },
    {
      "id": "form_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #36",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #6"
      }
    },
    {
      "id": "form_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #37",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #7"
      }
    },
    {
      "id": "form_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #38",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #8"
      }
    },
    {
      "id": "form_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #39",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #9"
      }
    },
    {
      "id": "form_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #40",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #10"
      }
    },
    {
      "id": "form_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #41",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$1 - \\sin(x)$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #11"
      }
    },
    {
      "id": "form_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #42",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #12"
      }
    },
    {
      "id": "form_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #43",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #13"
      }
    },
    {
      "id": "form_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #44",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$1 - \\sin(x)$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #14"
      }
    },
    {
      "id": "form_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #45",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #15"
      }
    },
    {
      "id": "form_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #46",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$1 - \\sin(x)$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #16"
      }
    },
    {
      "id": "form_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #47",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$1 - \\sin(x)$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #17"
      }
    },
    {
      "id": "form_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #48",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #18"
      }
    },
    {
      "id": "form_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #49",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #19"
      }
    },
    {
      "id": "form_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "formulas",
      "topic": "Calculus Vault \u00b7 Trig Power Reduction #50",
      "difficulty": "Midterm Level",
      "question": "What is the half-angle power-reduction identity for $\\cos^2(x)$?",
      "options": [
        "$\\frac{1 - \\cos(2x)}{2}$",
        "$\\frac{1 + \\cos(2x)}{2}$",
        "$\\frac{1 + \\sin(2x)}{2}$",
        "$1 - \\sin(x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Double-angle power reduction identity required to integrate $\\cos^2(x)$.",
        "stepByStep": [
          "Step 1: Recall double-angle formula: $\\cos(2x) = 2\\cos^2(x) - 1$.",
          "Step 2: Add 1: $1 + \\cos(2x) = 2\\cos^2(x)$.",
          "Step 3: Divide by 2: $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$."
        ],
        "commonTrap": "Confusing with sin^2(x), which has the minus sign: (1 - cos 2x)/2.",
        "reference": "Calculus Vault \u00b7 Trig Identity #20"
      }
    }
  ]
};
