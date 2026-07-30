# Todo Application

A task management web application built with Next.js, Prisma, SQLite, TypeScript, and Tailwind CSS.

## Features

- Create tasks
- View tasks
- Edit tasks
- Archive tasks
- Highlight overdue tasks
- Sort tasks by:
  - Due Date
  - Status
  - Newest First
- Responsive user interface
- SQLite database persistence using Prisma ORM

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite
- Jest
- React Testing Library

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd todo-app
```

### Install dependencies

```bash
npm install
```

### Configure the database

```bash
npx prisma migrate dev
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Database Schema

### Task

| Field | Type |
|---------|---------|
| id | Int |
| title | String |
| description | String |
| topic | String |
| dueDate | DateTime |
| status | String |
| archived | Boolean |
| createdAt | DateTime |
| updatedAt | DateTime |

## Project Structure

```text
todo-app/
│
├── app/
│   ├── api/
│   │   └── tasks/
│   └── page.tsx
│
├── components/
│   ├── TaskForm.tsx
│   ├── TaskList.tsx
│   └── __tests__/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── lib/
│   └── prisma.ts
│
└── README.md
```

## Running Tests

```bash
npm test
```

## Implemented User Stories

### Create Task

Users can create a task by providing:

- Title
- Description
- Topic
- Due Date
- Status

### Edit Task

Users can update existing task information.

### Archive Task

Users can archive tasks instead of permanently deleting them.

### Overdue Task Highlighting

Tasks whose due date has passed and are not completed are highlighted in red and marked as overdue.

### Task Sorting

Users can sort tasks by:

- Due Date
- Status
- Newest First

## Future Improvements

- Search functionality
- Task categories
- User authentication
- Task reminders
- Dashboard analytics

## Author

Mpilo
