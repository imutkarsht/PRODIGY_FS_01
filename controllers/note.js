const note = require('../models/note')

const handleReadNotes = async (req,res) => {
    try {
        if(!req.user) return res.redirect('/login')
        const notes = await note.find({ createdBy: req.user._id })
        res.render('home', {notes: notes})    
    } catch (err) {
        res.status(404).json({ err: 'Invalid request(not found)' });
    }
}

const handleCreateNote = async (req, res) => {
    try {
        const createdBy = req.user._id
        const { title, content } = req.body;
        const newNote = await note.create({
            title,
            content,
            createdBy
        })

        console.log(newNote);
        res.redirect('/note');

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
}

const handleDeleteNote =  async (req, res) => {
    try {
        const id = req.params.id;
        const data = await note.findByIdAndDelete(id);

        if (!data) {
            return res.status(404).json({ error: 'Note not found' });
        }

        console.log('Deleted successfully');
        res.redirect('/note');
    } catch (err) {
        console.error('Error deleting note:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const handleUpdateNote = async (req, res) => {
    try {
        const id = req.params.id
        const data = await note.findById(id)
        if(!data){
            return res.status(404).json({ err: 'Note not Found' })
        }
        console.log('fetched Succesfully')
        res.render('edit', {note: data})
    } catch (err) {
        res.status(404).json({ err: 'Invalid request(not found)' });
    }
}

const handleUpdateNoteInDb = async (req, res) => {
    try{
        const id = req.params.id
        const updatedData = req.body
        const data = await note.findByIdAndUpdate(id, updatedData)
        if(data){
            console.log('request fetched');
            res.redirect('/note')
        }
        else
            res.send('failed to update')
           
    } catch (err) {
        res.status(404).json({ err: 'Invalid request(not found)' });
    }
}

module.exports = {
    handleReadNotes,
    handleCreateNote,
    handleDeleteNote,
    handleUpdateNote,
    handleUpdateNoteInDb
}