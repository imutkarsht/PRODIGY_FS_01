const express = require('express')
const { PORT_NO } = require('./utils/constants')
const db = require('./config/db')
const app = express()
const path = require('path')
const noteRoutes = require('./routes/noteRoutes')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', noteRoutes)

app.listen(PORT_NO, () => {
    console.log(`Server has started running on port ${PORT_NO}`);
})