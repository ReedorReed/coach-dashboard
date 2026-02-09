# Coaching Dashboard

A responsive, React-based dashboard designed for Coaches to track business performance, manage leads, and oversee client progress.

## Features

- **Performance Overview:** Track Active Clients, Monthly Revenue, and Lead generation stats at a glance.
- **Sales & Lead Insights:** Detailed views for upcoming discovery calls, clarity sessions, and recent lead sources.
- **Client Alerts:** Intelligent notifications for client accountability (e.g., missed reflections, journal entries pending feedback).
- **Responsive Design:** Optimized layout that adapts for desktop and tablet views using CSS Grid and Flexbox.
- **Data Integration:** Built with a scalable architecture using JSON mock data to simulate real-world API responses.

## Tech Stack

- **Frontend:** React
- **Routing:** React Router
- **Styling:** Sass (Indented Syntax) using BEM naming convention.
- **Icons:** React Icons (FontAwesome, IcoMoon)
- **Build Tool:** Vite

## Project Structure

The project follows a modular, component-based directory structure where styles live alongside their specific logic:

```text
src/
├── components/           # UI Components
│   ├── coachInsight/     # Alert components
│   ├── navigation/       # Main navigation logic
│   ├── salesCalls/       # Sales calls list styling & logic
│   └── ...
├── pages/                # Page Views
│   ├── DashboardComponent.jsx   # Overview Page
│   └── leadsSalesInsight.jsx    # Detailed Leads Page
├── styles/               # Global Styles
│   ├── _layout.sass      # Main grid layouts
│   ├── _resets.sass      # CSS resets
│   └── main.sass         # Style entry point
└── data/
    └── mockData.json     # Simulation data for the dashboard

```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ReedorReed/coach-dashboard.git
cd coach-dashboard-project
```

2. Install dependencies:

```bash

npm install

```

3. Run the development server:

```bash
   npm run dev

```

4. Open in browser:
Navigate to the port shown in your terminal.

## Styling Methodology

This project uses Sass with the BEM (Block Element Modifier) methodology to ensure styles are modular and maintainable.

- Global layout logic is handled in 
    \_layout.sass.
- Component-specific styles are located in their respective folders (e.g., SalesCalls.sass).

## Future Improvements

- Implement dark mode toggle.
- Add interactive charts for revenue history.
