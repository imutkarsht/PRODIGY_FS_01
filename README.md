# Prodigy_FS_01 - Note-Keeping Application

## Overview

This is a note-keeping application built using the MEN stack (MongoDB, Express.js, Node.js) with EJS for server-side rendering and Tailwind CSS for styling. It features user authentication, note management (CRUD operations), and an admin panel for managing users and notes.

## Tech Stack

- **Frontend**: EJS, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose for ODM)
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing
- **Environment Variables**: dotenv for configuration

## Features

- **User Authentication**:
  - User signup and login with email and password.
  - Passwords are hashed using bcrypt for security.
  - JWT is used for session management.

- **Note Management**:
  - Create, read, update, and delete notes.
  - Notes are associated with users, and users can only manage their own notes.

- **Admin Panel**:
  - View and manage all users and notes.
  - Delete users and notes from the admin panel.

- **Responsive Design**:
  - Uses Tailwind CSS for styling.
  - Provides a modern, responsive UI.

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB instance (locally or cloud-based like MongoDB Atlas)
- Environment variables for configuration

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/imutkarsht/PRODIGY_FS_01.git
    cd PRODIGY_FS_01
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory and add the following environment variables:

    ```
    PORT=3000
    SECRET=your_jwt_secret
    ADMIN_USER_NAME=admin@example.com
    ```

4. **Set up MongoDB**:
   - Update the `db.js` configuration file with your MongoDB connection string.

5. **Run the application**:

    ```bash
    npm start
    ```

    The application will start on `http://localhost:3000`.

### Endpoints

- **Static Routes**:
  - `/` - Home page
  - `/signup` - User signup page
  - `/login` - User login page

- **User Routes** (authenticated):
  - `/user` - POST: Create a new user
  - `/user/login` - POST: Log in a user
  - `/user/logout` - GET: Log out a user
  

- **Note Routes** (authenticated):
  - `/note` - GET: View all notes
  - `/note/create` - POST: Create a new note
  - `/note/edit/:id` - POST: Update a note
  - `/note/delete/:id` - GET: Delete a note

- **Admin Routes** (admin only):
  - `/admin` - GET: View all users and notes
  - `/admin/user/delete/:id` - GET: Delete a user
  - `/admin/note/delete/:id` - GET: Delete a note

## Code Snippet (`index.js`)
```js
require('dotenv').config()
const express = require('express')
const db = require('./config/db')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')

const staticRoutes = require('./routes/staticRoutes')
const noteRoutes = require('./routes/noteRoutes')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const { restrictToLoggedInUserOnly, checkAuth, checkAdmin } = require('./middlewares/auth')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/', staticRoutes)
app.use('/user', checkAuth, userRoutes)
app.use('/note', restrictToLoggedInUserOnly, noteRoutes)
app.use('/admin', checkAdmin, adminRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server has started running`);
})
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various open-source projects.
- Thanks to the community for the open-source tools and libraries used in this project.


## Live Demo

Check out the live demo of the Note Keep App:

[Note Keep app](https://prodigy-fs-01-k5np.onrender.com/)
