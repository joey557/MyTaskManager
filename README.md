# Personal Task Manager App

A simple React Native task management application built with Expo and TypeScript. This app allows users to manage their daily tasks with basic create, read, update, and delete operations.

## Features

- Display list of tasks with status (pending/completed)
- Add new tasks
- Edit existing tasks
- Delete tasks
- Toggle task status
- Search tasks by title
- View task details

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional for mobile development)

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd MyTaskManager
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
- Press `w` to run in web browser
- Press `i` to run in iOS simulator
- Press `a` to run in Android emulator
- Scan QR code with Expo Go app to run on physical device

## Project Structure

```
MyTaskManager/
├── app/                    # Main application screens
│   ├── _layout.tsx        # Root layout with navigation setup
│   ├── index.tsx          # Home screen
│   └── taskList.tsx       # Task list screen
├── components/            # Reusable components
│   ├── AddTaskModal.tsx
│   ├── TaskEditForm.tsx
│   └── TaskDetailsModal.tsx
├── types/                 # TypeScript type definitions
│   └── Task.ts
└── app.json              # Expo configuration
```

## Built With

- React Native
- Expo
- TypeScript
- React Native Paper
- Expo Router

## Development

To work on new features:

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: add your feature"
```

3. Push changes and create a pull request:
```bash
git push origin feature/your-feature-name
```
