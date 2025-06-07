# REMWaste Skip Selection App

A modern React + TypeScript application for selecting skip sizes, built with Vite. This project demonstrates a clean, component-driven approach to presenting skip hire options, fetching data from a remote API, and providing a user-friendly selection experience.

---

## Idea

The idea behind the REMWaste Skip Selection App is to provide users with an intuitive and efficient way to select the right skip size for their needs. By leveraging a modern tech stack and best practices in UI/UX design, the app aims to simplify the process of skip hire and make it accessible to a wider audience.
The app features a responsive design, dynamic data fetching, and detailed skip information, allowing users to make informed decisions quickly.

---

## Features

- **Skip Selection:** Users can browse available skip sizes, view details, and select the most suitable option.
- **Dynamic Data:** Skips are fetched from a remote API and enriched with images and usage suggestions.
- **Detailed Skip Cards:** Each skip displays capacity, hire period, price, VAT, suitability, and more.
- **Responsive UI:** Built with Tailwind CSS and custom UI components for a modern look and feel.
- **Type Safety:** All data structures and API responses are strongly typed with TypeScript.

---

## Project Structure

```
remwaste/
├── src/
│   ├── components/
│   │   ├── Footer/Footer.tsx            # Footer component
│   │   ├── Navbar/Navbar.tsx            # Navbar component
│   │   ├── Logo/SkipLogoCard.tsx        # Simple logo svg component
│   │   ├── SkipCard/SkipCard.tsx        # Displays details of a selected skip
│   │   ├── SkipPicker/SkipPicker.tsx    # Displays all skips horizontally for selection
│   │   ├── ListItem/ListItem.tsx        # Generic list item component
│   │   ├── Stepper/Stepper.tsx          # Stepper component for navigation
│   │   └── ui/
│   │       ├── button.tsx               # Reusable button component
│   │       ├── card.tsx                 # Reusable card component
│   │       ├── avatar.tsx               # Reusable avatar component
│   │       ├── select.tsx               # Reusable select component
│   │       └── tooltip.tsx              # Reusable tooltip component
│   ├── pages/
│   │   └── Skips/SkipSelection.tsx      # Main skip selection page
│   ├── store/
│   │   ├── skipsSlice.ts                # Redux slice for skips, with async fetching and data enrichment
│   │   ├── index.ts                     # Redux store configuration
│   │   └── hooks.ts                     # Typed Redux hooks
└── └── App.tsx                          # App entry point
```

---

## Data Flow & Approach

1. **Fetching Skips:**  
   The app fetches skips from a remote API using a Redux async thunk. Each skip is enriched with:
   - An image URL based on its size (e.g., `4-yarder-skip.jpg`)
   - A `perfect_for` array suggesting typical use cases for each size
   - API calls are hardcoded for this task and the app does not handle env files or dynamic API endpoints.

2. **Skip Selection:**

   - The `SkipPicker` component displays all skips horizontally.
   - Clicking a card updates the selected skip in the parent (`SkipSelection`).
   - The selected skip is highlighted with a blue background and border.

3. **Skip Details:**

   - The `SkipCard` component shows all relevant details for the selected skip, including:
     - Capacity, hire period, price, VAT
     - Allowed on road, allows heavy waste (with warnings if not)
     - Transport/per-tonne cost, postcode, area and forbidden status
     - "Perfect for" suggestions and an image

4. **State Management:**
   - Redux Toolkit is used for state management.
   - Skips are stored in a slice with async actions to fetch and enrich data.
   - Typed selectors and actions ensure type safety.

5. **Optimization:**
   - The app uses React's memo techniques to prevent unnecessary re-renders.
   - Component *SkipCard* is memoized to avoid unwanted re-rendering when the selected skip changes.

6. **UI/UX:**
   - Cards have pointer cursors and blue borders on hover.
   - Tooltips provide extra context for certain fields.
   - Responsive layout for desktop and mobile.

---

## Customization

- **API Endpoint:**  
  The skip data is fetched from  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`  
  You can change the postcode/area in `skipsSlice.ts` as needed.

- **Image Mapping:**  
  Images are mapped by skip size:  
  `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/{size}-yarder-skip.jpg`

- **Perfect For Suggestions:**  
  The `perfect_for` field is set in `skipsSlice.ts` based on skip size, but can be customized.

---

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run the app:**

   ```sh
   npm run dev
   ```

3. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173)

---

## Development Notes

- Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), [Redux Toolkit](https://redux-toolkit.js.org/), and [Tailwind CSS](https://tailwindcss.com/).
- ESLint and Prettier are recommended for code quality.
- All components are typed with TypeScript for safety and maintainability.
