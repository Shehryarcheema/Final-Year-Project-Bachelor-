# Hiking Trail Guide

A mobile application that helps outdoor enthusiasts discover, evaluate, and
plan hiking trips — built as a **final-year bachelor's project** for a
Bachelor's degree in Computer Science.

## Overview

The Hiking Trail Guide is a cross-platform mobile app (Android and iOS) built
with React Native. It lets users search and filter hiking trails, explore
locations on an interactive map, plan hikes, check trail weather, and stay
informed with safety tips and emergency services information — all from one
place.

This was developed as applied software engineering work: a real,
multi-screen mobile product designed around a specific user need.

## Key features

- **Trail discovery and filtered search** — search trails by location and
  filter by difficulty (Easy, Medium, Hard) and trail length, backed by a
  REST API for trail data.
- **Interactive map** — tap-to-select hike locations using
  `react-native-maps`.
- **Hike planning flow** — Discover Trails, Plan Your Hike, and Scheduled
  Hikes with a progress tracker.
- **Trail weather information** — weather conditions for trip planning.
- **Safety and emergency** — safety tips and alerts plus quick access to
  emergency services.
- **User authentication** — sign-up and login screens.

## Tech stack

| Area | Technology |
| --- | --- |
| Mobile framework | React Native 0.73.6 (Android + iOS) |
| UI library | React 18.2.0 |
| Language | TypeScript 5.0.4 |
| Navigation | React Navigation 6 (`native-stack`) |
| Data fetching | Axios + TanStack Query 5 |
| Maps | `react-native-maps` |
| Testing | Jest + React Test Renderer |
| Linting / formatting | ESLint, Prettier |

The app is a mobile client that consumes a REST API for trail data (the
development build targeted a local API over HTTP); backend source code is
not included in this repository.

## Project structure

```
Final-Year-Project-Bachelor-/
└── Hiking-master/
    ├── android/            # Android native project
    ├── ios/                # iOS native project
    ├── src/
    │   ├── Assets/         # Images and static assets
    │   ├── Components/     # Reusable UI components
    │   └── Screens/        # App screens
    │       ├── Home.jsx
    │       ├── FilterSearch.jsx     # Trail search: location, difficulty, length
    │       ├── PlanHike.jsx / HikePlanner.jsx
    │       ├── ProgressTracker.jsx  # Scheduled hikes
    │       ├── Weather.jsx
    │       ├── Safety.jsx / Emergency.jsx
    │       ├── Login.jsx / Signup.jsx
    │       └── Trial.jsx / Hikers.jsx
    ├── __tests__/         # Jest tests
    ├── App.tsx             # App entry point (navigation setup)
    ├── index.js
    └── package.json
```

## Getting started

Prerequisites: Node.js ≥ 18, and the
[React Native environment setup](https://reactnative.dev/docs/environment-setup)
for your platform (Android Studio for Android, Xcode for iOS).

```bash
cd Hiking-master
npm install

# Terminal 1 — start the Metro bundler
npm start

# Terminal 2 — run the app
npm run android   # Android emulator or device
# or
npm run ios       # iOS simulator
```

Other commands:

```bash
npm test        # run the Jest test suite
npm run lint    # run ESLint
```

To connect the app to real trail data, point the Axios calls in
`src/Screens/` (e.g. `FilterSearch.jsx`) at your API's base URL.

## Author

**Shehryar** — Final Year Project, Bachelor's degree in Computer Science.
