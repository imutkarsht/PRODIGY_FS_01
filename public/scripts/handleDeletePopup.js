const delBtn = document.getElementById('delBtn')
const delPopup = document.getElementById('delPopup')
const cancelbtn = document.getElementById('cancelbtn')

delBtn.addEventListener('click', () => {
    delPopup.classList.remove('hidden')
    delPopup.classList.add('animate-ping')
    delPopup.classList.add('flex')
    setTimeout(() => delPopup.classList.remove('animate-ping'),150)
})

cancelbtn.addEventListener('click', () => {
    delPopup.classList.add('animate-ping')
    setTimeout(() => {
        delPopup.classList.remove('animate-ping')
        delPopup.classList.remove('flex');
        delPopup.classList.add('hidden');
    },300)
})