const createNoteBtn = document.getElementById('newNote')
const closePanel = document.getElementById('closePanel')
const noteForm = document.getElementById('noteForm')

createNoteBtn.addEventListener('click', () => {
    if (noteForm.classList.contains('hidden')) {
        noteForm.classList.remove('hidden')
        noteForm.classList.add('animate-ping')
        setTimeout(()=> noteForm.classList.remove('animate-ping'), 150)
        noteForm.classList.add('flex')
        createNoteBtn.classList.add('hidden')
        closePanel.classList.remove('hidden')
    }
})

closePanel.addEventListener('click', () => {
    if (noteForm.classList.contains('flex')) {
        noteForm.classList.add('animate-ping')
        setTimeout(()=>{
            noteForm.classList.remove('flex')
            noteForm.classList.add('hidden')
        } , 150)
        closePanel.classList.add('hidden')
        createNoteBtn.classList.remove('hidden')
    }
})