# Prodigy Internship Full Stack Task 01 - Note Keep App with User Login and Auth System

## Overview

A Note Taking CRUD app created using NodeJS, MongoDB, Express along with EJS and Tailwind for the frontend. This application allows users to efficiently manage their notes with a secure and responsive interface.

## Features

### Minimal Responsive UI
The app features a clean and minimalistic user interface designed with Tailwind CSS. The UI is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
```html
    <div class="flex items-center justify-end gap-2 pb-2 pt-2 mt-auto">
        <a href="note/edit/<%= note._id %>">
            <button>
                <i class='bx bxs-edit-alt bg-blue-500 text-zinc-100 font-semibold p-1 rounded-full text-xl'></i>
            </button>
        </a>
        <a href="note/delete/<%= note._id %>">
            <button>
                <i class='bx bx-x  bg-blue-500 text-zinc-100 font-semibold p-1 rounded-full text-xl'></i>
            </button>
        </a>
        <p class="absolute bottom-2 left-4 text-xs text-zinc-400"><%= note.createdTime %></p>
    </div>

 ```

### Create, Read, Update, and Delete Notes
Users can perform all CRUD (Create, Read, Update, Delete) operations on their notes. This functionality is essential for managing personal notes effectively.

```js
const express = require('express');
const router = express.Router();

const {
    handleReadNotes,
    handleCreateNote,
    handleDeleteNote,
    handleUpdateNote,
    handleUpdateNoteInDb
} = require('../controllers/note');

router.get('/', handleReadNotes);
router.post('/create', handleCreateNote);
router.get('/delete/:id', handleDeleteNote);
router.get('/edit/:id', handleUpdateNote);
router.post('/edit/:id', handleUpdateNoteInDb);

module.exports = router;

 ```

### Login/Logout System Using JWT Tokens
Authentication is implemented using JSON Web Tokens (JWT). Users can securely log in and log out, with their sessions managed via JWTs. This ensures that user data remains private and secure.

```js
const restrictToLoggedInUserOnly = async (req, res, next) => {
    const userUid = req.cookies.uid;
    
    if (!userUid) {
        console.log('No user UID found, redirecting to login.');
        return res.redirect('/login');
    }

    const user = getUser(userUid);

    if (!user) {
        console.log('No user found in session, redirecting to login.');
        return res.redirect('/login');
    }

    req.user = user;
    next();
}

 ```

### Password Encryption
All user passwords are encrypted using bcrypt before being stored in the database. This adds an additional layer of security, protecting user credentials from unauthorized access.

```js
const isMatch = await bcrypt.compare(password, existingUser.password);
if (!isMatch) {
    return res.redirect('/login?message=invalid%20username%20or%20password');
}
const token = setUser(existingUser);
res.cookie('uid', token);
return res.redirect('/note?message=logged%20in%20successfully');

 ```

### User-specific Notes
Each user can only view the notes they have created. This ensures that user data is isolated and private, preventing unauthorized access to other users' notes.

```js
const handleReadNotes = async (req, res) => {
    try {
        if (!req.user) return res.redirect('/login');
        const notes = await note.find({ createdBy: req.user._id });
        res.render('home', { notes: notes });
    } catch (err) {
        res.status(404).json({ err: 'Invalid request (not found)' });
    }
}

 ```

### Input Validation and Feedback
The app provides checks and messages for every incorrect or ambiguous entry by the user. This includes validating email formats during signup and ensuring that passwords meet minimum length requirements. Users receive clear feedback, enhancing the overall user experience.

```js
try {
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
        return res.redirect('/login?message=invalid%20username%20or%20password');
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
        return res.redirect('/login?message=invalid%20username%20or%20password');
    }
    const token = setUser(existingUser);
    res.cookie('uid', token);
    return res.redirect('/note?message=logged%20in%20successfully');
} catch (error) {
    console.error(error);
    return res.status(500).send({
        message: "Login failed",
        status: 0
    });
}

 ```

### Admin Panel to control all aspects of app (role based access)
It contains an admin panel at /admin route which is accessible when user is logged in through admin email and password at that panel one can delete/edit/update all users and notes value. 

```js 
const checkAdmin = async (req, res, next) => {
    const token = req.cookies.uid;
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        const email = decoded.email; 
        if(email === process.env.ADMIN_USER_NAME)
            next();
        else
            res.redirect('/note')
      } catch (err) {
        console.error('Error decoding token:', err);
      }
}

```

## Live Demo

Check out the live demo of the Note Keep App:

[Note Keep app](https://prodigy-fs-01-k5np.onrender.com/)
