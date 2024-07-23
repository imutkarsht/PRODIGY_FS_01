const express = require('express')
const { PORT_NO } = require('./utils/constants')
const db = require('./config/db')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')

const noteRoutes = require('./routes/noteRoutes')
const userRoutes = require('./routes/userRoutes')
const { restrictToLoggedInUserOnly } = require('./middlewares/auth')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/user', userRoutes)
app.use('/note', restrictToLoggedInUserOnly, noteRoutes)

app.get('/signup', (req, res) => {
    return res.render('signup')
})

app.get('/login', (req,res) => {
    return res.render('login')
})

app.listen(PORT_NO, () => {
    console.log(`Server has started running on port ${PORT_NO}`);
})