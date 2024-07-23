const express = require('express')
const router = express.Router()

const {
    handleReadNotes,
    handleCreateNote, 
    handleDeleteNote,
    handleUpdateNote,
    handleUpdateNoteInDb
} = require('../controllers/note');

router.get('/',  handleReadNotes)

router.post('/create', handleCreateNote);

router.get('/delete/:id', handleDeleteNote);

router.get('/edit/:id', handleUpdateNote)

router.post('/edit/:id', handleUpdateNoteInDb)

module.exports = router