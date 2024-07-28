const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        unique: true
    },
    content: {
        required: true,
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true });

noteSchema.virtual('createdTime').get(function() {
    const now = new Date(this.createdAt);
    const istOffset = 5.5 * 60 * 60 * 1000; 
    const istTime = new Date(now.getTime() + istOffset);
    
    const hours = istTime.getUTCHours();
    const minutes = istTime.getUTCMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
});


noteSchema.set('toJSON', { virtuals: true });
noteSchema.set('toObject', { virtuals: true });

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
