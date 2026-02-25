# Swift Shop

A high-performance product discovery interface built with **React**, **Tailwind CSS v4**, and **Shadcn/UI**. This project demonstrates professional frontend architecture, including global state management via Context API, custom hooks for data orchestration, and custom Tailwind variants.

## 1. Technical Stack

* **Framework:** [Vite](https://vitejs.dev/) (React)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using `@custom-variant`)
* **State Management:** React Context API (Global Theme & Persistence)
* **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
* **Icons:** [Lucide React](https://lucide.dev/) (PascalCase exports)
* **API:** [DummyJSON](https://dummyjson.com/)

---

## 2. Architecture Decisions

### Global Theme Context (`/src/context`)

The `ThemeProvider` manages the application's visual state. It synchronizes with `localStorage` and system settings (`prefers-color-scheme`). By injecting the `.dark` class into the `document.documentElement`, it enables the v4 custom variant logic.

### Headless Logic Layer (`/src/hooks`)

The `useProducts` hook handles the heavy lifting. It fetches a base dataset and then uses `useMemo` to derive specific "Collections" (**Deals** and **New Arrivals**) without redundant API calls.

### UI Strategy

* **Adaptive Skeletons:** Loading states are color-synced to the current theme to prevent "flash" effects.
* **Image Safe Zones:** Dark mode uses internal rounded containers to isolate product photos, ensuring white-background images remain aesthetically pleasing in dark themes.

---

## 3. Project Structure

```text
src/
├── components/
│   ├── ui/             # Shadcn primitives (Button, Card, Input, etc.)
│   ├── ProductCard.jsx # Card with dynamic badging & theme logic
│   ├── ProductGrid.jsx # Grid with adaptive skeleton loaders
│   └── QuickViewModal.jsx # Detail modal with dark-mode safe zones
├── context/
│   └── ThemeContext.jsx # Global dark/light mode state & persistence
├── hooks/
│   └── useProducts.js  # Multi-collection data orchestrator (Memoized)
├── App.jsx             # View management & Layout orchestration
└── index.css           # Tailwind v4 configuration & custom variants

```

---

## 4. Technical Rubric

This rubric evaluates the ability to build a modular, performant, and visually polished React application.

| Category | Excellent (4 pts) | Satisfactory (3 pts) | Developing (2 pts) |
| --- | --- | --- | --- |
| **Architecture** | Clear separation of Service, Hook, and UI. Uses `@/` aliases correctly. | Components are modular, but some logic is leaked into `App.jsx`. | Folder structure exists but is inconsistent. No service layer. |
| **State & Context** | Context API manages Theme; persists to `localStorage`. No "white flash" on reload. | Context is used but doesn't persist or causes unnecessary re-renders. | Local state used for global needs; theme resets on refresh. |
| **Custom Hooks** | `useProducts` manages loading/error and derives Collections via `useMemo`. | Hook handles fetching, but filtering logic is done in the UI layer. | Use of `useEffect` is present but contains complex, unoptimized logic. |
| **UX & States** | Theme-aware Skeletons and a polished "Empty State." High attention to responsive grid. | Implements basic loading (text), but lacks error or empty states. | UI "jumps" significantly when data loads. No visual feedback. |
| **Code Quality** | PascalCase used for Lucide icons. No console errors. Clean Tailwind v4 variants. | Readable code with minor linting issues or unused variables. | Variable naming is vague; some logic is redundant. |

---

## 5. Grading Guidelines for Instructors

### The "Persistence" Test

Set the app to **Dark Mode** and refresh. If the app reverts to Light Mode or "flashes" white briefly before switching back, deduct points in **State & Context**.

### The "Memoization" Test

Inspect `useProducts.js`. The `deals`, `newArrivals`, and `filteredProducts` arrays must be wrapped in `useMemo` to pass **Excellent**.

### The "Safe Zone" Test

View a product with a white background in **Dark Mode**. If the image bleeds harshly into the dark UI without a container, deduct points in **UX & States**.

---

## 6. Student Submission Checklist

* [ ] Theme stays consistent after refreshing the page.
* [ ] "Deals" and "New Arrivals" show the correct filtered products.
* [ ] Product badges (Hot/New) appear correctly on cards.
* [ ] All Lucide icons use PascalCase (e.g., `<Flame />`).
* [ ] Mobile view is fully functional and responsive.