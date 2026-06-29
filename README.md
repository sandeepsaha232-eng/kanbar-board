# 📋 Kanban Board

A simple, interactive task management application built with vanilla JavaScript. Organize your tasks using a drag-and-drop Kanban board with persistent local storage.

## Features

- **📝 Task Management** - Create, edit, and delete tasks effortlessly
- **🎯 Three-Column Workflow** - To Do → In Progress → Done
- **🖱️ Drag & Drop** - Seamlessly move tasks between columns
- **💾 Persistent Storage** - All tasks are saved to browser's local storage
- **✨ Clean UI** - Modern, responsive interface with Font Awesome icons
- **⌨️ Keyboard Support** - Press ESC to close modals quickly

## File Structure

```
kanban-board/
├── index.html       # HTML structure and modal
├── app.js          # Application entry point and event listeners
├── state.js        # State management and localStorage operations
├── crud.js         # Create, Read, Update, Delete card operations
├── render.js       # Rendering logic for cards and columns
├── dragdrop.js     # Drag and drop functionality
├── modal.js        # Modal open/close management
├── styles.css      # Styling and layout
└── README.md       # This file
```

## File Descriptions

### `index.html`
The main HTML file containing:
- Page structure with header and board container
- Modal dialog for adding/editing tasks
- Links to Font Awesome icons and stylesheets

### `app.js`
Application initialization and event handling:
- Imports all modules
- Sets up modal event listeners (click outside to close, ESC key)
- Initializes the board on page load

### `state.js`
Core state management and data persistence:
- **Columns**: Defines the three board columns (To Do, In Progress, Done)
- **Board State**: Tracks current editing card and column
- **localStorage Operations**: Save and retrieve tasks
- **Utility Functions**: Generate unique IDs, escape HTML for security

### `crud.js`
Create, Read, Update, Delete operations:
- Add new tasks to the board
- Edit existing tasks
- Delete tasks from columns
- Update card content in localStorage

### `render.js`
Rendering and DOM manipulation:
- Render all columns and cards on page load
- Update UI when tasks change
- Generate HTML for cards with action buttons

### `dragdrop.js`
Drag and drop functionality:
- Enable dragging cards between columns
- Handle drop events
- Update data model when cards are moved

### `modal.js`
Modal dialog management:
- Open modal for adding/editing tasks
- Close modal and reset form
- Handle modal state

### `styles.css`
Application styling:
- Responsive layout using CSS Grid
- Card and column styling
- Modal and button styles
- Animations and transitions

## Getting Started

### Installation

1. Clone or download this repository
2. No external dependencies or build process needed

### Usage

1. Open `index.html` in your web browser
2. Click the "Add Task" button to create a new task
3. Drag tasks between columns to change their status
4. Click edit to modify a task
5. Click delete to remove a task
6. All changes are automatically saved to your browser

## How It Works

- **Data Storage**: Tasks are stored in the browser's `localStorage` with the key `kanban_board_data`
- **Drag & Drop**: Implemented using native HTML5 drag and drop API
- **Modular Design**: Each feature is separated into its own module for maintainability
- **No Backend Required**: Everything runs client-side in the browser

## Browser Compatibility

Works in all modern browsers that support:
- ES6 Modules
- HTML5 Drag and Drop API
- localStorage API
- CSS Grid

## Future Enhancements

Potential features for future versions:
- Task priorities and labels
- Due dates and reminders
- Search and filter functionality
- Export/import board data
- Dark mode theme
- Collaboration features

## License

Open source - feel free to use and modify for your projects.

## Notes

- Data persists across browser sessions
- Clearing browser storage will delete all tasks
- Each task is assigned a unique ID for tracking
- HTML content is sanitized to prevent XSS attacks
