window.addEventListener('load', () => {
    const msgbox = document.getElementById('message')
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    const notiPopup = document.getElementById('notiPopup')
    const okBtn = document.getElementById('okBtn')
    const signForm = document.getElementById('signform')
    
    if (message) {
        notiPopup.classList.remove('hidden')
        notiPopup.classList.add('flex')
        notiPopup.classList.add('animate-ping')
        signForm.classList.add('blur-sm')
        setTimeout(() => notiPopup.classList.remove('animate-ping') , 200)
        if(decodeURIComponent(message) === 'password is too short' || message === 'Invalid email address'){
            msgbox.classList.remove('text-green-500')
            msgbox.classList.add('text-red-500')
        }
        msgbox.innerHTML = decodeURIComponent(message);
    }
    okBtn.addEventListener('click', () => {
        notiPopup.classList.add('animate-ping')
        setTimeout(() => {
            notiPopup.classList.remove('animate-ping')
            notiPopup.classList.remove('flex');
            notiPopup.classList.add('hidden');
            signForm.classList.remove('blur-sm')
        }, 200)
    })
});