
# Full Stack Product Management App

A full-stack web application built with React, Express.js, and MongoDB. It includes user login, JWT-based authentication, and product CRUD operations connected to a deployed backend.

## Features

- User login with email and password
- JWT-based authentication
- Protected product API routes
- Create new products
- View products
- Update product details
- Delete products
- MongoDB database integration
- React frontend connected to a deployed Express backend

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt password hashing

## Project Structure

```text
src/
├── App.jsx
├── Login.jsx
├── Login.css
├── Products.jsx
├── App.css
├── index.css
└── main.jsx
```

## Run Locally

### 1. Clone the repository

```bash
git clone YOUR_FRONTEND_REPOSITORY_URL
cd fullstack-frontend
```

Replace `YOUR_FRONTEND_REPOSITORY_URL` with your GitHub repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Backend

The frontend currently communicates with the deployed backend:

`https://fullstack-backend-pdks.onrender.com`

The backend handles authentication, protected routes, and product operations.

## Security Notes

- Passwords are hashed by the backend before storage.
- Protected product routes require a valid JWT.
- Environment files and secrets must not be committed to GitHub.
- Never publish database credentials, JWT secrets, or real user passwords.

## Future Improvements

- Deploy the frontend
- Add user registration and password recovery UI
- Improve form validation and error handling
- Add loading indicators and responsive styling
- Add automated tests

## Author

Karthik Godige