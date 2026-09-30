# INDU 211 · Comprehensive Topic Guide (Part 4)
# Chapter 5: Material Handling, Distribution & Routing
**Concordia University · Department of Mechanical, Industrial & Aerospace Engineering (MIAE)**

*Built on the teacher's Lecture 5.0 slides, with depth from the course textbook (Hicks, Chapter 5: Material Handling, Distribution, and Routing).*

---

## Table of Contents
1. [Why Material Handling Matters](#1-why-material-handling-matters)
2. [Material Handling Equipment](#2-material-handling-equipment)
3. [Principles of Material Handling](#3-principles-of-material-handling)
4. [Routing: The Travelling Salesman Problem (TSP)](#4-routing-the-travelling-salesman-problem-tsp)
5. [Vehicle Routing and the Clark-Wright Savings Method](#5-vehicle-routing-and-the-clark-wright-savings-method)
6. [Exam Checklist](#6-exam-checklist)

---

## 1. Why Material Handling Matters

Material handling means **using equipment to move materials** inside and between facilities. It is **non-productive (non-value-added)**: moving a part does not change it, yet it costs money, time and space. Chapter 4 already told us that material handling is **30% to 95% of production cost**, which is why layout and handling are designed together.

![Material flow through the supply chain](./images/material_flow_supply_chain.png)

*Figure 1: Material handling, Lecture 5.0, slide 3.*

**Reading the figure:** material moves from **suppliers** to **manufacturing**, then to a **wholesaler**, a **retailer** and finally the **consumer**. The arrow returning from the consumer is the reverse flow of **end-of-life or damaged product**. Every arrow is a handling and transport step that adds cost but no value.

![Material handling inside a plant](./images/in_plant_material_handling_flow.png)

*Figure 2: Material handling within a facility, Lecture 5.0, slide 4.*

**Reading the figure:** inside the plant, material arrives at **receiving**, goes to **storage**, travels between **work centres** and intermediate storage, and leaves through **shipping** onto trucks. The purple arrows are the internal moves an industrial engineer tries to shorten, combine or eliminate.

> **From the textbook (Hicks, §5.1):** material movement occurs *any time* a product or part moves from one place to another, and it usually accounts for a large share of the cost of producing the product. Reducing the number and length of moves is one of the cheapest ways to cut cost.

---

## 2. Material Handling Equipment

| Equipment | What it does | Typical use |
| :--- | :--- | :--- |
| **Conveyors** | Move homogeneous material from one **fixed point** to another at a constant rate | Assembly lines, parcel sorting |
| **Industrial trucks** (forklifts) | Move loads along **varying paths**, intermittently | Job shops, warehouses |
| **Cranes and hoists** | Overhead lifting of heavy loads | Steel mills, heavy assembly |
| **Containers and racks** | Store and handle bulk material; better use of space | Pallets, bins, carts |
| **Elevators and lifts** | Vertically raise or lower material; fixed location | Multi-floor plants |
| **Automatic guided vehicles (AGV)** | Driverless vehicles on predetermined paths | Automated plants, hospitals |
| **AS/RS** (automated storage and retrieval) | Storage racks + computer control + crane | High-density warehouses |

![Conveyors and industrial trucks](./images/conveyors_and_industrial_trucks.png)

*Figure 3: Conveyors and industrial trucks, Lecture 5.0, slide 5.*

**Reading the slide:** the roller conveyors (top right) fix the path, which suits steady, identical loads. The forklifts (bottom) can go anywhere with intermittent loads, which suits job shops where every order takes a different route. **The choice of equipment follows the layout**: product layouts use conveyors, process layouts use trucks.

![Automatic guided vehicles](./images/automatic_guided_vehicles.png)

*Figure 4: Automatic guided vehicles, Lecture 5.0, slide 8.*

**Reading the slide:** AGVs are driverless carts that follow predetermined paths (wires, tape or laser navigation). The layout sketch (bottom right) shows the guide paths connecting stations: flexible like trucks, but automated like conveyors.

![Automated storage and retrieval system](./images/asrs_storage_retrieval.png)

*Figure 5: Automated storage and retrieval system (AS/RS), Lecture 5.0, slide 9.*

**Reading the photos:** tall racks with narrow aisles and a computer-controlled crane that stores and retrieves loads. AS/RS trades a large investment for **space utilisation** (building up, not out) and fast, accurate picking.

---

## 3. Principles of Material Handling

![Principles of material handling](./images/principles_of_material_handling.png)

*Figure 6: Principles of materials handling, Lecture 5.0, slide 10 (continued on slide 11).*

| Principle | Meaning | Example |
| :--- | :--- | :--- |
| **Planning** | Handling is planned, not left to evolve | Handling plan drawn with the layout |
| **Systems** | Treat material movement as a cycle from receiving to shipping | Integrated receiving–storage–production–shipping |
| **Material flow** | Keep flow smooth | Avoid back-tracking and cross-traffic |
| **Simplification** | Motion economy: eliminate, combine, simplify moves | Deliver straight to the point of use |
| **Gravity** | Use gravity when possible | Gravity-feed bins, roller conveyors on a slope |
| **Space utilisation** | Use the cube, not just the floor | High racks with narrow-aisle stacking trucks |
| **Unit size** | Move the largest practical accumulated load | Pallets, containers |
| **Automation** | Use powered and automated equipment where it pays | Powered conveyors, automatic pallet stackers |
| **Equipment selection** | Choose based on all aspects of the material and move | Weight, shape, frequency, distance |
| **Standardisation** | Standard equipment and load sizes | Standard pallets and containers |
| **Adaptability** | Equipment that can do a variety of tasks | Variable-speed conveyors |
| **Maintenance** | Plan preventive and emergency maintenance | Scheduled conveyor servicing |
| **Safety** | Protect the operator | Guarding, safe stacking heights |

> **Exam tip:** questions often give an example and ask which principle it illustrates. Gravity-feed bins and roller conveyors → **gravity**; pallets → **unit size**; high racks → **space utilisation**; "planned, not evolved" → **planning**.

---

## 4. Routing: The Travelling Salesman Problem (TSP)

**Problem:** one vehicle leaves a depot (plant A), visits every location exactly once, and returns, so that the **total distance is minimised**. Example: routing a forklift through a warehouse, or one truck supplying all warehouses.

![TSP example distance matrix](./images/tsp_distance_matrix_example.png)

*Figure 7: Material routing (TSP example 1), Lecture 5.0, slide 12.*

**Reading the matrix:** row = from, column = to. The matrix is symmetric (A→B = B→A = 14), and the diagonal is blank (no trip from a place to itself).

### Why a heuristic?
The TSP is **very difficult to solve optimally** when there are many stops: with $n$ stops there are $(n-1)!/2$ different tours. For 7 locations that is $6!/2 = 360$ tours, which could be enumerated; for 20 it is about $6 \times 10^{16}$, which cannot. So we use **heuristics**: fast rules that give a good, feasible route that is not guaranteed optimal.

### Nearest Neighbour method (Lecture 5.0, slide 14)
**Rule:** from the current location, always go to the **closest unvisited** location; when all are visited, return to the start.

| Step | From | Closest unvisited | Distance | Running total |
| :---: | :---: | :--- | :---: | :---: |
| 1 | A | E | 6 | 6 |
| 2 | E | B (tie with G at 9; take B) | 9 | 15 |
| 3 | B | D | 9 | 24 |
| 4 | D | C | 1 | 25 |
| 5 | C | F | 9 | 34 |
| 6 | F | G (only one left) | 21 | 55 |
| 7 | G | back to A | 9 | **64** |

The optimal tour is **A–G–B–F–C–D–E–A = 60**. Nearest neighbour is $\frac{64 - 60}{60} = 6.7\%$ worse, and if the tie at E is broken toward G the route becomes 69. **Heuristics can be sensitive to tie-breaking**: the greedy early choices force expensive late legs (F→G = 21).

---

## 5. Vehicle Routing and the Clark-Wright Savings Method

When one truck cannot carry all the demand, we need **several routes**: the **vehicle routing problem (VRP)**, also called the multiple travelling salesman problem. Each route starts and ends at the depot, and the load on each route must not exceed the **truck capacity**.

**Lecture example 2:** supply 6 warehouses (B–G) from depot A; truck capacity 25,000 units; demands B 5,000, C 7,000, D 10,000, E 4,000, F 6,000, G 10,000 (total 42,000, so at least $\lceil 42{,}000 / 25{,}000 \rceil = 2$ trucks).

![Clark-Wright procedure](./images/clark_wright_savings_concept.png)

*Figure 8: Clark-Wright procedure, Lecture 5.0, slide 19.*

**Reading the diagram:** the "flower" on the right is the starting solution, with one out-and-back trip from the depot to every stop. Joining stops $i$ and $j$ into one trip removes the two returns to the depot and adds the direct leg $i \to j$. The distance saved is

$$S_{ij} = C_{0i} + C_{0j} - C_{ij}$$

where $C_{0i}$ is the depot-to-$i$ distance and $C_{ij}$ the distance between the two stops.

### The procedure (slide 19)
1. **Initial routes:** one route per stop.
2. **Calculate savings** $S_{ij}$ for every pair.
3. **Rank** the savings in descending order.
4. **Link** pairs in that order, as long as the truck capacity holds, the route stays feasible (a stop can only be joined at the end of a route), and all destinations are eventually visited.

**Worked savings:** $S_{CD} = 21 + 20 - 1 = 40$ (the largest), $S_{CF} = 21 + 24 - 9 = 36$, $S_{DF} = 20 + 24 - 9 = 35$.

![Ranked savings list](./images/clark_wright_ranked_savings.png)

*Figure 9: Ranked combinations, Lecture 5.0, slide 20.*

### Building the routes
| Rank | Pair | Saving | Decision | Route load |
| :---: | :---: | :---: | :--- | :---: |
| 1 | C–D | 40 | Start route Depot–C–D–Depot | 17,000 |
| 2 | C–F | 36 | Add F at the C end: Depot–F–C–D–Depot | 23,000 |
| 3 | D–F | 35 | Both already on the same route: skip | — |
| 4 | B–F | 28 | Adding B makes 28,000 > 25,000: **reject** | — |
| … | … | … | Continue; build the second route | … |
| | | | Second route Depot–E–B–G–Depot | 19,000 |

**Final routes:** Depot–F–C–D–Depot ($24 + 9 + 1 + 20 = 54$) and Depot–E–B–G–Depot ($6 + 9 + 11 + 9 = 35$), total **89** (×100 = 8,900 miles).

> **From the textbook (Hicks, §5.3.2–5.3.3):** the same savings logic is used for public-sector routing (garbage collection, school buses, mail). Real VRPs add time windows and driver-hour limits; exact solutions are hard, so heuristics like Clark-Wright and computer software are standard practice (Lecture 5.0, slide 22).

---

## 6. Exam Checklist

- [ ] Material handling is **non-value-added** and 30–95% of production cost.
- [ ] Match equipment to layout: conveyors (fixed path) vs trucks (varying path) vs AGV vs AS/RS.
- [ ] Name the principle from an example (gravity, unit size, space utilisation, planning…).
- [ ] Nearest neighbour: always the closest **unvisited** stop; add the return leg; state the tie-breaking rule.
- [ ] Savings: $S_{ij} = C_{0i} + C_{0j} - C_{ij}$; rank descending; check **capacity** before every link.
- [ ] Minimum number of trucks = total demand ÷ capacity, **rounded up**.
