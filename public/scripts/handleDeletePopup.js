const delBtns = document.querySelectorAll('.delBtn');
const delPopups = document.querySelectorAll('.delPopup');
const cancelBtns = document.querySelectorAll('.cancelbtn');

delBtns.forEach((delBtn, index) => {
    delBtn.addEventListener('click', () => {
        const delPopup = delPopups[index];
        delPopup.classList.remove('hidden');
        delPopup.classList.add('animate-ping');
        delPopup.classList.add('flex');
        setTimeout(() => delPopup.classList.remove('animate-ping'), 150); 
    });
});

cancelBtns.forEach((cancelBtn, index) => {
    cancelBtn.addEventListener('click', () => {
        const delPopup = delPopups[index];
        delPopup.classList.add('animate-ping');
        setTimeout(() => {
            delPopup.classList.remove('animate-ping');
            delPopup.classList.remove('flex');
            delPopup.classList.add('hidden');
        }, 150);
    });
});
