

# Task Tracker API

A RESTful Task Tracker API built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- User registration
- User login
- JWT-based authentication
- Create task
- Get all my tasks
- Get single task by id
- Update task
- Delete task

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## Installation

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Tasks
- GET `/api/tasks`
- GET `/api/tasks/:id`
- POST `/api/tasks`
- PATCH `/api/tasks/:id`
- DELETE `/api/tasks/:id`