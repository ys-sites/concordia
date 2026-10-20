import { PracticeQuestion } from '../types';

export interface CompanionDrillQuestion extends PracticeQuestion {
  methodId: 'separable' | 'linear_if' | 'exact' | 'non_exact' | 'bernoulli' | 'homogeneous' | 'linear_arg' | 'applications' | 'second_order' | 'formulas';
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
  "second_order": [
    {
      "id": "sec_01",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #1",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 2 \\pm 3i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{2x} + C_2 e^{3x}$",
        "$y(x) = e^{2x}(C_1 \\cos(3x) + C_2 \\sin(3x))$",
        "$y(x) = e^{3x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
        "$y(x) = C_1 \\cos(3x) + C_2 \\sin(3x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 2$ and imaginary part $\\beta = 3$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{2x}(C_1 \\cos(3x) + C_2 \\sin(3x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #1"
      }
    },
    {
      "id": "sec_02",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #2",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 3 \\pm 4i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(4x) + C_2 \\sin(4x)$",
        "$y(x) = C_1 e^{3x} + C_2 e^{4x}$",
        "$y(x) = e^{4x}(C_1 \\cos(3x) + C_2 \\sin(3x))$",
        "$y(x) = e^{3x}(C_1 \\cos(4x) + C_2 \\sin(4x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 3$ and imaginary part $\\beta = 4$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{3x}(C_1 \\cos(4x) + C_2 \\sin(4x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #2"
      }
    },
    {
      "id": "sec_03",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #3",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 4 \\pm 5i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(5x) + C_2 \\sin(5x)$",
        "$y(x) = C_1 e^{4x} + C_2 e^{5x}$",
        "$y(x) = e^{5x}(C_1 \\cos(4x) + C_2 \\sin(4x))$",
        "$y(x) = e^{4x}(C_1 \\cos(5x) + C_2 \\sin(5x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 4$ and imaginary part $\\beta = 5$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{4x}(C_1 \\cos(5x) + C_2 \\sin(5x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #3"
      }
    },
    {
      "id": "sec_04",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #4",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 1 \\pm 6i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{1x} + C_2 e^{6x}$",
        "$y(x) = e^{1x}(C_1 \\cos(6x) + C_2 \\sin(6x))$",
        "$y(x) = e^{6x}(C_1 \\cos(1x) + C_2 \\sin(1x))$",
        "$y(x) = C_1 \\cos(6x) + C_2 \\sin(6x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 1$ and imaginary part $\\beta = 6$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{1x}(C_1 \\cos(6x) + C_2 \\sin(6x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #4"
      }
    },
    {
      "id": "sec_05",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #5",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 2 \\pm 2i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = e^{2x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
        "$y(x) = C_1 e^{2x} + C_2 e^{2x}$",
        "$y(x) = e^{2x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
        "$y(x) = C_1 \\cos(2x) + C_2 \\sin(2x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 2$ and imaginary part $\\beta = 2$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{2x}(C_1 \\cos(2x) + C_2 \\sin(2x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #5"
      }
    },
    {
      "id": "sec_06",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #6",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 3 \\pm 3i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(3x) + C_2 \\sin(3x)$",
        "$y(x) = C_1 e^{3x} + C_2 e^{3x}$",
        "$y(x) = e^{3x}(C_1 \\cos(3x) + C_2 \\sin(3x))$",
        "$y(x) = e^{3x}(C_1 \\cos(3x) + C_2 \\sin(3x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 3$ and imaginary part $\\beta = 3$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{3x}(C_1 \\cos(3x) + C_2 \\sin(3x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #6"
      }
    },
    {
      "id": "sec_07",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #7",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 4 \\pm 4i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = e^{4x}(C_1 \\cos(4x) + C_2 \\sin(4x))$",
        "$y(x) = C_1 e^{4x} + C_2 e^{4x}$",
        "$y(x) = e^{4x}(C_1 \\cos(4x) + C_2 \\sin(4x))$",
        "$y(x) = C_1 \\cos(4x) + C_2 \\sin(4x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 4$ and imaginary part $\\beta = 4$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{4x}(C_1 \\cos(4x) + C_2 \\sin(4x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #7"
      }
    },
    {
      "id": "sec_08",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #8",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 1 \\pm 5i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(5x) + C_2 \\sin(5x)$",
        "$y(x) = C_1 e^{1x} + C_2 e^{5x}$",
        "$y(x) = e^{5x}(C_1 \\cos(1x) + C_2 \\sin(1x))$",
        "$y(x) = e^{1x}(C_1 \\cos(5x) + C_2 \\sin(5x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 1$ and imaginary part $\\beta = 5$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{1x}(C_1 \\cos(5x) + C_2 \\sin(5x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #8"
      }
    },
    {
      "id": "sec_09",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #9",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 2 \\pm 6i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(6x) + C_2 \\sin(6x)$",
        "$y(x) = C_1 e^{2x} + C_2 e^{6x}$",
        "$y(x) = e^{6x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
        "$y(x) = e^{2x}(C_1 \\cos(6x) + C_2 \\sin(6x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 2$ and imaginary part $\\beta = 6$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{2x}(C_1 \\cos(6x) + C_2 \\sin(6x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #9"
      }
    },
    {
      "id": "sec_10",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #10",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 3 \\pm 2i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = e^{3x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
        "$y(x) = C_1 e^{3x} + C_2 e^{2x}$",
        "$y(x) = e^{2x}(C_1 \\cos(3x) + C_2 \\sin(3x))$",
        "$y(x) = C_1 \\cos(2x) + C_2 \\sin(2x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 3$ and imaginary part $\\beta = 2$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{3x}(C_1 \\cos(2x) + C_2 \\sin(2x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #10"
      }
    },
    {
      "id": "sec_11",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #11",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 4 \\pm 3i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(3x) + C_2 \\sin(3x)$",
        "$y(x) = C_1 e^{4x} + C_2 e^{3x}$",
        "$y(x) = e^{3x}(C_1 \\cos(4x) + C_2 \\sin(4x))$",
        "$y(x) = e^{4x}(C_1 \\cos(3x) + C_2 \\sin(3x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 4$ and imaginary part $\\beta = 3$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{4x}(C_1 \\cos(3x) + C_2 \\sin(3x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #11"
      }
    },
    {
      "id": "sec_12",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #12",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 1 \\pm 4i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(4x) + C_2 \\sin(4x)$",
        "$y(x) = C_1 e^{1x} + C_2 e^{4x}$",
        "$y(x) = e^{4x}(C_1 \\cos(1x) + C_2 \\sin(1x))$",
        "$y(x) = e^{1x}(C_1 \\cos(4x) + C_2 \\sin(4x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 1$ and imaginary part $\\beta = 4$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{1x}(C_1 \\cos(4x) + C_2 \\sin(4x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #12"
      }
    },
    {
      "id": "sec_13",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #13",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 2 \\pm 5i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{2x} + C_2 e^{5x}$",
        "$y(x) = e^{2x}(C_1 \\cos(5x) + C_2 \\sin(5x))$",
        "$y(x) = e^{5x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
        "$y(x) = C_1 \\cos(5x) + C_2 \\sin(5x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 2$ and imaginary part $\\beta = 5$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{2x}(C_1 \\cos(5x) + C_2 \\sin(5x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #13"
      }
    },
    {
      "id": "sec_14",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #14",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 3 \\pm 6i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(6x) + C_2 \\sin(6x)$",
        "$y(x) = C_1 e^{3x} + C_2 e^{6x}$",
        "$y(x) = e^{6x}(C_1 \\cos(3x) + C_2 \\sin(3x))$",
        "$y(x) = e^{3x}(C_1 \\cos(6x) + C_2 \\sin(6x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 3$ and imaginary part $\\beta = 6$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{3x}(C_1 \\cos(6x) + C_2 \\sin(6x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #14"
      }
    },
    {
      "id": "sec_15",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #15",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 4 \\pm 2i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(2x) + C_2 \\sin(2x)$",
        "$y(x) = C_1 e^{4x} + C_2 e^{2x}$",
        "$y(x) = e^{2x}(C_1 \\cos(4x) + C_2 \\sin(4x))$",
        "$y(x) = e^{4x}(C_1 \\cos(2x) + C_2 \\sin(2x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 4$ and imaginary part $\\beta = 2$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{4x}(C_1 \\cos(2x) + C_2 \\sin(2x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #15"
      }
    },
    {
      "id": "sec_16",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #16",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 1 \\pm 3i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = e^{1x}(C_1 \\cos(3x) + C_2 \\sin(3x))$",
        "$y(x) = C_1 e^{1x} + C_2 e^{3x}$",
        "$y(x) = e^{3x}(C_1 \\cos(1x) + C_2 \\sin(1x))$",
        "$y(x) = C_1 \\cos(3x) + C_2 \\sin(3x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 1$ and imaginary part $\\beta = 3$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{1x}(C_1 \\cos(3x) + C_2 \\sin(3x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #16"
      }
    },
    {
      "id": "sec_17",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #17",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 2 \\pm 4i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 \\cos(4x) + C_2 \\sin(4x)$",
        "$y(x) = C_1 e^{2x} + C_2 e^{4x}$",
        "$y(x) = e^{4x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
        "$y(x) = e^{2x}(C_1 \\cos(4x) + C_2 \\sin(4x))$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 2$ and imaginary part $\\beta = 4$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{2x}(C_1 \\cos(4x) + C_2 \\sin(4x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #17"
      }
    },
    {
      "id": "sec_18",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #18",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 3 \\pm 5i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{3x} + C_2 e^{5x}$",
        "$y(x) = e^{3x}(C_1 \\cos(5x) + C_2 \\sin(5x))$",
        "$y(x) = e^{5x}(C_1 \\cos(3x) + C_2 \\sin(3x))$",
        "$y(x) = C_1 \\cos(5x) + C_2 \\sin(5x)$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 3$ and imaginary part $\\beta = 5$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{3x}(C_1 \\cos(5x) + C_2 \\sin(5x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #18"
      }
    },
    {
      "id": "sec_19",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #19",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 4 \\pm 6i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = e^{4x}(C_1 \\cos(6x) + C_2 \\sin(6x))$",
        "$y(x) = C_1 e^{4x} + C_2 e^{6x}$",
        "$y(x) = e^{6x}(C_1 \\cos(4x) + C_2 \\sin(4x))$",
        "$y(x) = C_1 \\cos(6x) + C_2 \\sin(6x)$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 4$ and imaginary part $\\beta = 6$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{4x}(C_1 \\cos(6x) + C_2 \\sin(6x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #19"
      }
    },
    {
      "id": "sec_20",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Auxiliary Roots #20",
      "difficulty": "Midterm Level",
      "question": "If the characteristic auxiliary equation of a 2nd-order linear ODE has roots $\\lambda = 1 \\pm 2i$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = e^{2x}(C_1 \\cos(1x) + C_2 \\sin(1x))$",
        "$y(x) = C_1 e^{1x} + C_2 e^{2x}$",
        "$y(x) = e^{1x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
        "$y(x) = C_1 \\cos(2x) + C_2 \\sin(2x)$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Complex roots $\\lambda = \\alpha \\pm i\\beta \\implies y(x) = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$.",
        "stepByStep": [
          "Step 1: Identify real part $\\alpha = 1$ and imaginary part $\\beta = 2$.",
          "Step 2: By Euler's identity, $e^{(\\alpha \\pm i\\beta)x} = e^{\\alpha x}(\\cos\\beta x \\pm i\\sin\\beta x)$.",
          "Step 3: Taking linear combinations of the real and imaginary parts yields: $y(x) = e^{1x}(C_1 \\cos(2x) + C_2 \\sin(2x))$."
        ],
        "commonTrap": "Putting the imaginary part into the exponential instead of the trig functions.",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Complex Roots #20"
      }
    },
    {
      "id": "sec_21",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #21",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -2$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = (C_1 + C_2 x)e^{-2x}$",
        "$y(x) = C_1 e^{-2x} + C_2 e^{-2x}$",
        "$y(x) = C_1 e^{-2x} + C_2 e^{2x}$",
        "$y(x) = C_1 x e^{-2x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-2x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-2x} + C_2 x e^{-2x} = (C_1 + C_2 x)e^{-2x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #1"
      }
    },
    {
      "id": "sec_22",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #22",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -3$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 x e^{-3x}$",
        "$y(x) = C_1 e^{-3x} + C_2 e^{-3x}$",
        "$y(x) = C_1 e^{-3x} + C_2 e^{3x}$",
        "$y(x) = (C_1 + C_2 x)e^{-3x}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-3x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-3x} + C_2 x e^{-3x} = (C_1 + C_2 x)e^{-3x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #2"
      }
    },
    {
      "id": "sec_23",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #23",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -4$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{-4x} + C_2 e^{-4x}$",
        "$y(x) = (C_1 + C_2 x)e^{-4x}$",
        "$y(x) = C_1 e^{-4x} + C_2 e^{4x}$",
        "$y(x) = C_1 x e^{-4x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-4x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-4x} + C_2 x e^{-4x} = (C_1 + C_2 x)e^{-4x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #3"
      }
    },
    {
      "id": "sec_24",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #24",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -1$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = (C_1 + C_2 x)e^{-1x}$",
        "$y(x) = C_1 e^{-1x} + C_2 e^{-1x}$",
        "$y(x) = C_1 e^{-1x} + C_2 e^{1x}$",
        "$y(x) = C_1 x e^{-1x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-1x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-1x} + C_2 x e^{-1x} = (C_1 + C_2 x)e^{-1x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #4"
      }
    },
    {
      "id": "sec_25",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #25",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -2$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{-2x} + C_2 e^{-2x}$",
        "$y(x) = (C_1 + C_2 x)e^{-2x}$",
        "$y(x) = C_1 e^{-2x} + C_2 e^{2x}$",
        "$y(x) = C_1 x e^{-2x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-2x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-2x} + C_2 x e^{-2x} = (C_1 + C_2 x)e^{-2x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #5"
      }
    },
    {
      "id": "sec_26",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #26",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -3$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = (C_1 + C_2 x)e^{-3x}$",
        "$y(x) = C_1 e^{-3x} + C_2 e^{-3x}$",
        "$y(x) = C_1 e^{-3x} + C_2 e^{3x}$",
        "$y(x) = C_1 x e^{-3x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-3x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-3x} + C_2 x e^{-3x} = (C_1 + C_2 x)e^{-3x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #6"
      }
    },
    {
      "id": "sec_27",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #27",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -4$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{-4x} + C_2 e^{-4x}$",
        "$y(x) = (C_1 + C_2 x)e^{-4x}$",
        "$y(x) = C_1 e^{-4x} + C_2 e^{4x}$",
        "$y(x) = C_1 x e^{-4x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-4x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-4x} + C_2 x e^{-4x} = (C_1 + C_2 x)e^{-4x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #7"
      }
    },
    {
      "id": "sec_28",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #28",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -1$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{-1x} + C_2 e^{1x}$",
        "$y(x) = C_1 e^{-1x} + C_2 e^{-1x}$",
        "$y(x) = (C_1 + C_2 x)e^{-1x}$",
        "$y(x) = C_1 x e^{-1x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-1x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-1x} + C_2 x e^{-1x} = (C_1 + C_2 x)e^{-1x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #8"
      }
    },
    {
      "id": "sec_29",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #29",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -2$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{-2x} + C_2 e^{-2x}$",
        "$y(x) = (C_1 + C_2 x)e^{-2x}$",
        "$y(x) = C_1 e^{-2x} + C_2 e^{2x}$",
        "$y(x) = C_1 x e^{-2x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-2x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-2x} + C_2 x e^{-2x} = (C_1 + C_2 x)e^{-2x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #9"
      }
    },
    {
      "id": "sec_30",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #30",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -3$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{-3x} + C_2 e^{-3x}$",
        "$y(x) = (C_1 + C_2 x)e^{-3x}$",
        "$y(x) = C_1 e^{-3x} + C_2 e^{3x}$",
        "$y(x) = C_1 x e^{-3x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-3x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-3x} + C_2 x e^{-3x} = (C_1 + C_2 x)e^{-3x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #10"
      }
    },
    {
      "id": "sec_31",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #31",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -4$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = (C_1 + C_2 x)e^{-4x}$",
        "$y(x) = C_1 e^{-4x} + C_2 e^{-4x}$",
        "$y(x) = C_1 e^{-4x} + C_2 e^{4x}$",
        "$y(x) = C_1 x e^{-4x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-4x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-4x} + C_2 x e^{-4x} = (C_1 + C_2 x)e^{-4x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #11"
      }
    },
    {
      "id": "sec_32",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #32",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -1$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = (C_1 + C_2 x)e^{-1x}$",
        "$y(x) = C_1 e^{-1x} + C_2 e^{-1x}$",
        "$y(x) = C_1 e^{-1x} + C_2 e^{1x}$",
        "$y(x) = C_1 x e^{-1x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-1x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-1x} + C_2 x e^{-1x} = (C_1 + C_2 x)e^{-1x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #12"
      }
    },
    {
      "id": "sec_33",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #33",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -2$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{-2x} + C_2 e^{-2x}$",
        "$y(x) = (C_1 + C_2 x)e^{-2x}$",
        "$y(x) = C_1 e^{-2x} + C_2 e^{2x}$",
        "$y(x) = C_1 x e^{-2x}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-2x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-2x} + C_2 x e^{-2x} = (C_1 + C_2 x)e^{-2x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #13"
      }
    },
    {
      "id": "sec_34",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #34",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -3$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = (C_1 + C_2 x)e^{-3x}$",
        "$y(x) = C_1 e^{-3x} + C_2 e^{-3x}$",
        "$y(x) = C_1 e^{-3x} + C_2 e^{3x}$",
        "$y(x) = C_1 x e^{-3x}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-3x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-3x} + C_2 x e^{-3x} = (C_1 + C_2 x)e^{-3x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #14"
      }
    },
    {
      "id": "sec_35",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Repeated Real Roots #35",
      "difficulty": "Midterm Level",
      "question": "If the auxiliary equation has a repeated real root $\\lambda_1 = \\lambda_2 = -4$, what is the general solution $y(x)$?",
      "options": [
        "$y(x) = C_1 e^{-4x} + C_2 e^{4x}$",
        "$y(x) = C_1 e^{-4x} + C_2 e^{-4x}$",
        "$y(x) = (C_1 + C_2 x)e^{-4x}$",
        "$y(x) = C_1 x e^{-4x}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "Repeated root $\\lambda \\implies y = (C_1 + C_2 x)e^{\\lambda x}$.",
        "stepByStep": [
          "Step 1: First solution is $y_1 = e^{-4x}$.",
          "Step 2: For repeated roots, the second linearly independent solution requires multiplying by $x$: $y_2 = x e^{-ax}$.",
          "Step 3: Combine by superposition: $y(x) = C_1 e^{-4x} + C_2 x e^{-4x} = (C_1 + C_2 x)e^{-4x}$."
        ],
        "commonTrap": "Writing C1 e^{-ax} + C2 e^{-ax} = (C1 + C2)e^{-ax} = C e^{-ax}, which collapses into only 1 independent solution!",
        "reference": "Section 17.2 \u2014 Auxiliary Equations \u00b7 Repeated Roots #15"
      }
    },
    {
      "id": "sec_36",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #36",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #1"
      }
    },
    {
      "id": "sec_37",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #37",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = e^{i \\pi / 4}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #2"
      }
    },
    {
      "id": "sec_38",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #38",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #3"
      }
    },
    {
      "id": "sec_39",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #39",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #4"
      }
    },
    {
      "id": "sec_40",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #40",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #5"
      }
    },
    {
      "id": "sec_41",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #41",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #6"
      }
    },
    {
      "id": "sec_42",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #42",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #7"
      }
    },
    {
      "id": "sec_43",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #43",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #8"
      }
    },
    {
      "id": "sec_44",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #44",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = e^{i \\pi / 4}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #9"
      }
    },
    {
      "id": "sec_45",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #45",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #10"
      }
    },
    {
      "id": "sec_46",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #46",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 2,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #11"
      }
    },
    {
      "id": "sec_47",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #47",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 0,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #12"
      }
    },
    {
      "id": "sec_48",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #48",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = e^{i \\pi / 4}$",
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$"
      ],
      "correctIndex": 3,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #13"
      }
    },
    {
      "id": "sec_49",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #49",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #14"
      }
    },
    {
      "id": "sec_50",
      "courseId": "ENGR213",
      "chapter": "midterm",
      "methodId": "second_order",
      "topic": "Complex Polar Form #50",
      "difficulty": "Midterm Level",
      "question": "What is the polar exponential form $r e^{i\\theta}$ of the complex number $z = 1 + i$?",
      "options": [
        "$z = 2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 4}$",
        "$z = \\sqrt2 e^{i \\pi / 2}$",
        "$z = e^{i \\pi / 4}$"
      ],
      "correctIndex": 1,
      "explanation": {
        "coreConcept": "$z = x + iy = r e^{i\\theta}$ where $r = \\sqrt{x^2 + y^2}$ and $\\theta = \\operatorname{Arg}(z)$.",
        "stepByStep": [
          "Step 1: Compute modulus $r = \\sqrt{x^2 + y^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",
          "Step 2: Compute argument $\\theta = \\arctan(y/x) = \\arctan(1/1) = \\pi/4$ (Quadrant I).",
          "Step 3: Express in Euler polar form: $z = r e^{i\\theta} = \\sqrt{2} e^{i \\pi / 4}$."
        ],
        "commonTrap": "Writing r = 2 instead of sqrt(2), or getting the angle in degrees without converting to radians.",
        "reference": "Section 17.1 \u2014 Complex Numbers \u00b7 Polar Representation #15"
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
