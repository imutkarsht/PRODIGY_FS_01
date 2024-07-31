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