# INDU 211: Introduction to Production & Manufacturing Systems
## Problem Solution Guide 01: Demand Forecasting & Market Share
**Department of Mechanical, Industrial & Aerospace Engineering · Concordia University**

---

> [!NOTE]
> * **YouTube Video Tutorial**: [Watch Video 1: INDU 211 - Forecasting Problem](https://www.youtube.com/watch?v=SOivSDdtTH8)
> * **Video ID**: `SOivSDdtTH8` · **Duration**: 20:35
> * **Target Exam Scope**: 🎯 **MIDTERM EXAM (Week 6, Chapters 1–5 & 7)**
> * **Curriculum Context**: Chapter 7 — Operations Planning & Control

---

## 1. Problem Statement & Historical Sales Data

**Company ABC** manufactures and sells four distinct models of computer monitors (Product 1, Product 2, Product 3, and Product 4). The recorded historical weekly sales figures over the past five weeks are summarized below:

| Week ($t$) | Product 1 ($X_{1,t}$) | Product 2 ($X_{2,t}$) | Product 3 ($X_{3,t}$) | Product 4 ($X_{4,t}$) | Total ABC Sales ($X_{\text{total},t}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Week 1** | 20 | 55 | 42 | 48 | **165** |
| **Week 2** | 25 | 50 | 32 | 35 | **142** |
| **Week 3** | 50 | 80 | 65 | 80 | **275** |
| **Week 4** | 55 | 98 | 88 | 90 | **331** |
| **Week 5** | 45 | 95 | 72 | 90 | **302** |

---

## 2. Mathematical Background: Moving Average Model

The simple $n$-period moving average forecasts the future demand $\hat{X}_t$ for period $t$ by taking the arithmetic mean of the actual demand values observed in the $n$ immediately preceding periods:

$$\hat{X}_t = \frac{1}{n} \sum_{i=1}^{n} X_{t-i} = \frac{X_{t-1} + X_{t-2} + \dots + X_{t-n}}{n}$$

### Trade-Off Analysis: Responsiveness vs. Stability
* **Small $n$ (e.g., $n=2$ or $n=3$)**: Highly responsive to rapid demand shifts; reacts quickly, but amplifies random noise.
* **Large $n$ (e.g., $n=5$ or $n=8$)**: High stability and effective smoothing; filters noise, but significantly lags behind genuine upward or downward trends.

---

## 3. Step-by-Step Worked Solutions

### Part 2.1.1: 3-Period Moving Average Forecast for Product 1 in Week 6

* **Goal**: Compute $\hat{X}_{1,6}$ using $n=3$ periods.
* **Relevant Historical Periods**: Preceding 3 weeks are Week 5, Week 4, and Week 3.
  * $X_{1,5} = 45$ (Week 5)
  * $X_{1,4} = 55$ (Week 4)
  * $X_{1,3} = 50$ (Week 3)
* **Calculation**:
  $$\hat{X}_{1,6} = \frac{X_{1,5} + X_{1,4} + X_{1,3}}{3} = \frac{45 + 55 + 50}{3} = \frac{150}{3} = \mathbf{50\text{ units}}$$
* **Decision**: Plan manufacturing scheduling and inventory replenishment for **50 units** of Product 1 in Week 6.

---

### Part 2.1.2: 3-Period Moving Average Forecast for Product 2 in Week 5 & Error Analysis

* **Goal**: Compute $\hat{X}_{2,5}$ using $n=3$ periods and compare against the actual realized sales.
* **Relevant Historical Periods**: Weeks 4, 3, and 2.
  * $X_{2,4} = 98$ (Week 4)
  * $X_{2,3} = 80$ (Week 3)
  * $X_{2,2} = 50$ (Week 2)
* **Calculation**:
  $$\hat{X}_{2,5} = \frac{X_{2,4} + X_{2,3} + X_{2,2}}{3} = \frac{98 + 80 + 50}{3} = \frac{228}{3} = \mathbf{76\text{ units}}$$
* **Evaluation of Forecast Error**:
  * Actual Sales in Week 5: $X_{2,5} = 95\text{ units}$
  * Absolute Error: $e_5 = X_{2,5} - \hat{X}_{2,5} = 95 - 76 = \mathbf{+19\text{ units}}$
  * Percentage Error: $\frac{19}{95} \times 100\% = \mathbf{+20.0\%}$
* **Industrial Engineering Takeaway**:
  The forecast substantially **underestimated** customer demand by 19 units. In production systems, under-forecasting leads to stockouts, lost sales revenue, damaged customer loyalty, and emergency rush overtime costs.

---

### Part 2.2: Competitive Market Share & Competitor Sales Forecast

* **Problem Context**:
  * A competitor, **Company XYZ**, produces **Product 5** (a competing monitor).
  * Market research confirms that XYZ's Product 5 commands a stable **20% market share** ($MS_{\text{XYZ}} = 0.20$), while ABC's four monitor models collectively capture the remaining **80% market share** ($MS_{\text{ABC}} = 0.80$).
  * Use a **4-period moving average** ($n=4$) on ABC's aggregate sales to forecast XYZ's Product 5 sales in **Week 5**.

* **Step 1: Aggregate Historical Total Sales for Company ABC**:
  * Week 1 Total: $X_{\text{total},1} = 20 + 55 + 42 + 48 = 165$
  * Week 2 Total: $X_{\text{total},2} = 25 + 50 + 32 + 35 = 142$
  * Week 3 Total: $X_{\text{total},3} = 50 + 80 + 65 + 80 = 275$
  * Week 4 Total: $X_{\text{total},4} = 55 + 98 + 88 + 90 = 331$

* **Step 2: 4-Period Moving Average Forecast for ABC in Week 5**:
  $$\hat{X}_{\text{total},5} = \frac{331 + 275 + 142 + 165}{4} = \frac{913}{4} = \mathbf{228.25\text{ units}}$$

* **Step 3: Total Market Volume Estimation ($W$)**:
  Since ABC's projected total sales represent 80% of the entire regional market:
  $$\hat{X}_{\text{total},5} = W \times 0.80 \implies W = \frac{228.25}{0.80} = \mathbf{285.3125\text{ units}}$$

* **Step 4: Competitor XYZ Product 5 Sales Forecast**:
  Company XYZ captures 20% of the total market $W$:
  $$\hat{Y}_{\text{XYZ},5} = W \times 0.20 = 285.3125 \times 0.20 = 57.0625 \approx \mathbf{57\text{ physical units}}$$

---

## 4. Exam Pitfalls & High-Yield Summary

1. **Index Alignment**: When forecasting for period $t$, use periods $t-1, t-2, \dots, t-n$. Never include period $t$ inside the historical average.
2. **Market Share Math**: To find the total market from a subset, divide by the subset's percentage ($W = \frac{\text{Sales}}{0.80}$). Do not multiply.
3. **Integer Discrete Goods**: Always round fractional monitor forecasts to the nearest whole integer (57 units) for physical production plans.
