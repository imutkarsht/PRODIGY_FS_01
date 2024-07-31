const Note = require('../models/note')
const User = require('../models/user')


const handleViewData =  async (req, res) => {
    const allNotes = await Note.find({})
    const allUsers = await User.find({})
    if(!allNotes) return res.redirect('/admin?message=fail%20to%20load%20notes')
    return res.render('adminData', { notes: allNotes, users: allUsers })
}

const handleDeleteUser = async (req, res) =>{
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    if(!user) return res.redirect('/admin?message=fail%20to%20delete%20user')
    return res.redirect('/admin?message=deletion%20successfull')
}

const handleDeleteNote = async (req, res) =>{
    const id = req.params.id
    const note = await Note.findByIdAndDelete(id)
    if(!note) return res.redirect('/admin?message=fail%20to%20delete%20user')
    return res.redirect('/admin/?message=deletion%20successfull')
}

module.exports = {
    handleDeleteUser,
    handleViewData,
    handleDeleteNote
}