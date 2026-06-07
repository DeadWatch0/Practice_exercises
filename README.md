# 📘 TypeScript Architecture: Core Domain & Data Contracts

This update establishes the complete structural blueprint for the interactive music interval visualizer. By prioritizing pure type definitions before implementing logic, we guarantee type safety across all three tiers: the React frontend, the Express API, and the MongoDB persistence layer.

## 🏗 Architecture Overview

The system relies on strict structural contracts to eliminate runtime errors, specifically targeting mismatched API payloads and invalid interval math. The type system acts as a rigid boundary, ensuring that only mathematically sound musical data enters the database and only sanitized JSON reaches the 3D rendering engine.

## 📂 File & Concept Registry

### 1. Core Domain Models (`MusicalNote.ts`)
* **Concepts:** Interfaces, Type Aliases, Literal Types, Readonly Properties.
* **Purpose:** Defines the fundamental unit of the application. Enforces strict musical notation (locking `pitch` to `'A'` through `'G'`) to prevent invalid states before data ever reaches the fretboard logic.

### 2. Network Contracts (`ApiResponse.ts`)
* **Concepts:** Generics (`<T>`).
* **Purpose:** A universal shipping container for all Express responses. By injecting specific payloads (like `MusicalNote[]`), the frontend receives precise autocompletion and error boundaries for HTTP requests.

### 3. State Management (`VisualizerAction.ts`)
* **Concepts:** Discriminated (Tagged) Unions.
* **Purpose:** Dictates the exact commands the React frontend can issue (e.g., `PLAY_NOTE` vs. `STOP`). The shared `type` discriminator ensures reducers process only the exact data required for a given state change.

### 4. Database Boundaries (`IPracticeDrillDocument.ts` & `CreatePracticeDrillPayload.ts`)
* **Concepts:** Utility Types (`Omit`), Intersection Types (`&`).
* **Purpose:** Manages the mismatch between MongoDB's internal `_id` structure and the pure JSON expected by React. 
  * `IPracticeDrillDocument`: Maps directly to the Mongoose schema.
  * `PracticeDrillDTO`: Strips database-specific fields for frontend consumption.
  * `CreatePracticeDrillPayload`: Secures the incoming Express `POST` request before the ID is generated.

### 5. API Layer (`createDrill.ts`)
* **Concepts:** Express Request/Response Generic Typing.
* **Purpose:** The security checkpoint. Binds the `CreatePracticeDrillPayload` to `req.body` and `ApiResponse` to `res`, guaranteeing the controller cannot accept or emit malformed data.

### 6. The Constellation Engine (`Constellation.ts`)
* **Concepts:** Mapped Types, Labeled Tuples.
* **Purpose:** The mathematical core of the visualizer. Dynamically maps generic interval unions (e.g., `'1' | 'b3' | '5'`) to exact physical coordinates on the guitar. Uses strictly enforced labeled tuples (`[stringNumber: number, fretNumber: number][]`) to feed pure, error-free geometry data to the 3D rendering engine.

## 🚀 Next Steps (Implementation Phase)
With the static blueprints locked, the next phase transitions into dynamic execution:
1. Initialize the Express.js local server and attach the Mongoose schema to the `IPracticeDrillDocument`.
2. Construct the HTTP routing pipeline using the typed `createDrill` controller.
3. Scaffold the React frontend state to ingest the `PracticeDrillDTO`.