# REMWaste Skip Selection App

A modern React + TypeScript application for selecting skip sizes, built using Vite. This project offers a clean, component-driven UI that lets users easily browse and select skip hire options. It fetches data from a remote API and presents it in a user-friendly, responsive layout.

---

## Idea

The REMWaste Skip Selection App was developed as a technical interview task to demonstrate modern front-end development skills using React, TypeScript, and Redux Toolkit. It’s designed to help users quickly find the right skip size with an intuitive, responsive interface. With dynamic data fetching, detailed skip information, and clean component-driven architecture, the app showcases a practical and scalable solution for skip hire selection.

---

## Features

 - **Skip Browsing & Selection**
Easily scroll through available skip sizes, view their details, and choose the best option for your needs.

 - **Dynamic Data Fetching**
Skips are fetched from a remote API and automatically enriched with images and suggested use cases.

 - **Informative Skip Cards**
Each card shows:

 - **Capacity, hire period, price (with VAT)**

 - **Suitability** (e.g., road-legal, heavy waste compatibility)

 - **Extra info** like postcode, area, per-tonne costs, and restrictions

 - **Responsive UI**
Built with Tailwind CSS and custom components to ensure it looks great on all devices.

 - **Fully Typed with TypeScript**
Ensures safer code, better tooling, and easier refactoring.

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

## How It Works

1. **Fetching Skips:**  
   Skip data is fetched from a static API endpoint using a Redux async thunk. Each skip entry is enriched with:
   - A matching image (e.g. 4-yarder-skip.jpg)
   - A list of "perfect for" use cases based on size

   The API endpoint is currently hardcoded and does not support .env or dynamic URLs.

2. **Skip Selection:**

- The `SkipPicker` component displays all available skips horizontally.
- Selecting a skip updates the state in the parent component (`SkipSelection`).
- The selected card is visually highlighted with a blue border and background.

3. **Viewing Skip Details:**
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
