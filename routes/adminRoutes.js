const express = require('express')
const {  handleViewData, handleDeleteUser, handleDeleteNote } = require('../controllers/admin')

const router = express.Router()


router.get('/', handleViewData)

router.get('/user/delete/:id', handleDeleteUser)

router.get('/note/delete/:id', handleDeleteNote)

module.exports = router