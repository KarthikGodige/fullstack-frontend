# Full Stack Product Management App

A full-stack web application built using React, Node.js, Express, and MongoDB. It provides user login, JWT-based authentication, protected API routes, and product management with CRUD operations.

## Live Demo

**Frontend:** https://fullstack-frontend-one-liart.vercel.app/

**Backend:** https://fullstack-backend-pdks.onrender.com

## Features

* User login with email and password
* JWT-based authentication
* Protected product API routes
* Create, read, update, and delete products
* MongoDB database integration
* React frontend connected to a deployed backend
* Responsive application structure

## Tech Stack

**Frontend:** React, Vite, JavaScript, CSS

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** JSON Web Token (JWT), bcrypt

**Deployment:** Vercel (frontend), Render (backend)

**Version Control:** Git and GitHub

## Project Architecture

React Frontend → Express REST API → MongoDB Database

The frontend sends HTTP requests to the backend. The backend validates authentication where required and interacts with MongoDB to manage product data.

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/KarthikGodige/fullstack-frontend.git
cd fullstack-frontend
```

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

The backend is deployed separately on Render:

https://fullstack-backend-pdks.onrender.com

The frontend currently uses this deployed API.

## Security Notes

* Environment files and secrets should not be committed to GitHub.
* Protected API endpoints require a valid authentication token.
* Passwords are hashed using bcrypt on the backend.
* JWT secrets are configured through backend environment variables.

## Future Improvements

* User registration interface
* Improved product form validation
* Search, filtering, and pagination
* Enhanced UI and responsive styling
* Automated testing

## Author

**Karthik Godige**

GitHub: https://github.com/KarthikGodige

## License

This project is available for learning and portfolio demonstration. Add a license if you intend to grant others specific reuse rights.
