require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection

db.on('error', (err) => {
    console.error('error in connecting to the database');
})

db.once('open', () => {
    console.log('Connected to MongoDB');
})

module.exports = db