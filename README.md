# 💻 Full-Stack Engineering Practice Environment

This repository serves as a centralized workspace for mastering modern, scalable web architecture. It tracks the vertical progression of a complete 3-tier stack—from database persistence to client-side 3D rendering.

The primary application driving this learning progression is an **Interactive Music Interval Visualizer**, acting as a "tracer bullet" to test strict data contracts across the entire stack.

## 🏗 System Architecture

The application is heavily reliant on strictly typed, declarative data flow. To ensure stability, the system uses shared TypeScript interfaces to govern how mathematical interval data is generated, sanitized, and passed between layers.

```text
[ Client Tier ]             [ Application Tier ]          [ Persistence Tier ]
    React         <======>        Express        <======>       MongoDB
(Visualizer UI)   JSON API     (Node Server)     Mongoose     (Data Store)
       |                            |                               |
       v                            v                               v
 Render Fretboard             Sanitize DTOs                 Store Drill Data

```

## 📂 Repository Structure

The codebase is modular, isolating specific technologies into their respective directories to build concepts incrementally before integration.

* **`/typescript`**: The Core Domain. Contains the pure structural blueprints, generic API responses, and the mathematical engine (Constellation maps) that converts interval degrees into physical fretboard coordinates.
* **`/react`** *(Pending)*: The Presentation Layer. Will house the component tree, local state reducers, and the 3D visualizer canvas, consuming the strictly typed APIs.
* **`/express`** *(Pending)*: The API Layer. Will handle HTTP routing, middleware validation, and database interactions using Express.js and Mongoose.
* **`/mongodb`** *(Pending)*: The Persistence Layer. Will define the NoSQL document schemas for storing generated practice drills.

## 🚀 Current Progress: Phase 1 (Core Domain)

The foundational TypeScript architecture is complete. All dynamic endpoints are now protected by strict static types, eliminating entire classes of runtime errors before the UI or Server is even initialized.

**Key Implementations:**

* **Domain Models:** Strict literal types for musical notation (e.g., `'A'` through `'G'`).
* **State Management:** Discriminated unions mapping precise UI commands (e.g., `PLAY_NOTE` vs. `STOP`).
* **Database Boundaries:** Utility types (`Omit`) bridging internal MongoDB `_id` schemas with sanitized frontend DTOs.
* **Constellation Engine:** Advanced mapped types and labeled tuples transforming generic musical intervals into precise `[stringNumber, fretNumber]` coordinates.

## 🗺 Deployment Roadmap

As the repository matures, the final application will transition from local development servers to a production-ready environment.

1. **Component Integration:** Wire the Express backend to the React frontend utilizing `useEffect` and custom hooks for data fetching.
2. **Containerization:** Package the Node server, React static build, and MongoDB instance into isolated Docker containers.
3. **Self-Hosting:** Deploy the containerized stack to a local Linux homelab environment for real-world network monitoring and performance testing.
