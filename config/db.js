const mongoose = require('mongoose')
const { MONGO_URL } = require('../utils/constants')

mongoose.connect(MONGO_URL)
const db = mongoose.connection

db.on('error', (err) => {
    console.error('error in connecting to the database');
})

db.once('open', () => {
    console.log('Connected to MongoDB');
})

module.exports = db