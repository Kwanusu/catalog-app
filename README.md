# Modern Product Catalog

A high-performance product discovery interface built with **React**, **Tailwind CSS v4**, and **Shadcn/UI**. This project demonstrates professional frontend architecture, including custom hooks for data orchestration and a service-layer pattern for API communication.

## Technical Stack

* **Framework:** [Vite](https://vitejs.dev/) (React)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Vite-integrated)
* **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **API:** [DummyJSON](https://dummyjson.com/) (Robust e-commerce mock data)

## Architecture Decisions

To ensure scalability and maintainability, this project follows an **Atomic Design-lite** structure:

### 1. Service Layer (`/src/services`)

Abstracts the `fetch` logic away from components. This makes it easy to swap data sources (e.g., moving from DummyJSON to a production backend) without touching the UI.

### 2. Custom Hooks (`/src/hooks`)

The `useProducts` hook acts as a "Headless Controller." It manages:

* **State:** Loading, Error, and Data states.
* **Performance:** Uses `useMemo` for client-side search filtering to prevent unnecessary re-renders.

### 3. Component Hierarchy

* **UI Components:** Low-level, stateless primitives (Button, Card, Input) managed via Shadcn.
* **Feature Components:** High-level components (ProductGrid, ProductCard) that consume data and logic.

## Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Kwanusu/catalog-app.git
cd catalog-app

```

2. **Install dependencies:**
```bash
npm install

```

3. **Run Development Server:**
```bash
npm run dev

```

## Key Features

* **Real-time Search:** Filter products instantly as you type.
* **Responsive Grid:** Fluid layout that adapts from mobile to ultra-wide screens.
* **Graceful Loading:** Integrated **Lucide Spinner** for enhanced User Experience (UX).
* **Type Safety:** Configured with `tsconfig.json` path aliases (`@/`) for clean imports.

## Project Structure

```text
src/
├── components/
│   ├── ui/             # Shadcn primitives (Button, Input, etc.)
│   ├── ProductCard.jsx # Individual product display
│   └── ProductGrid.jsx # Layout grid & loading logic
├── hooks/
│   └── useProducts.js  # Data fetching & filtering logic
├── services/
│   └── api.js          # API configuration
├── App.jsx             # Main application entry
└── index.css           # Tailwind v4 configuration & variables

```

---

## Product Catalog Rubric

This rubric evaluates a student's ability to build a modular, performant, and visually polished React application.

| Category | Excellent (4 pts) | Satisfactory (3 pts) | Developing (2 pts) | Needs Improvement (1 pt) |
| --- | --- | --- | --- | --- |
| **Architecture** | Clear separation of concerns (Services, Hooks, Components). Uses `@/` aliases correctly. | Components are modular, but some logic is leaked into the main `App.jsx`. | Folder structure exists but is inconsistent. No service layer used. | All code is in one or two files (Mega-components). |
| **Custom Hooks** | `useProducts` manages loading, error, and filtering logic efficiently using `useMemo`. | Hook handles fetching and state, but filtering logic is done in the UI layer. | Use of `useEffect` is present but contains complex, unoptimized logic. | No custom hooks used; data fetching lives directly in components. |
| **UI / Shadcn** | Seamless integration of Shadcn components. High attention to spacing, typography, and responsive grid. | Shadcn components used, but layout breaks on some screen sizes. | Standard HTML elements used instead of Shadcn primitives. | Layout is broken; UI is non-responsive or unstyled. |
| **UX & States** | Implements a clear Spinner for loading and a friendly "No Results" state for filters. | Implements a basic loading state (text), but lacks error or empty states. | UI "jumps" significantly when data loads. No visual feedback for user actions. | No loading or error handling; screen is blank until data arrives. |
| **Code Quality** | Clean, commented code. Follows ESM standards. No console errors or warnings. | Readable code with minor linting issues or unused variables. | Variable naming is vague; some logic is redundant. | Multiple console errors; code is difficult to read or follow. |

---

## Grading Guidelines for Instructors

1. **The "Vanish" Test:** Ask the student to swap the API from `DummyJSON` to another source. If they only have to change one file (`api.js`), they get full points for **Architecture**.
2. **The "Slow 3G" Test:** Throttling the network in Chrome DevTools should trigger the **Spinner**. If the screen remains blank without a loader, deduct points in **UX & States**.
3. **The "Console" Test:** Check for the `key` prop warning in the console. If students are mapping products without a unique `key={product.id}`, they fail a core React requirement.
