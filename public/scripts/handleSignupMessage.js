window.addEventListener('load', () => {
    const msgbox = document.getElementById('msgbox')
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
        if(decodeURIComponent(message) === 'password is too short' || message === 'Invalid email address'){
            msgbox.classList.remove('text-green-500')
            msgbox.classList.add('text-red-500')
        }
        msgbox.innerHTML = decodeURIComponent(message);
        setTimeout(() => msgbox.innerHTML = '', 2000)
    }
});