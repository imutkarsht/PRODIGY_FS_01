window.addEventListener('load', () => {
    const msgbox = document.getElementById('msgbox')
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
        if(decodeURIComponent(message) === 'Note deleted'){
            msgbox.classList.remove('text-green-500')
            msgbox.classList.add('text-red-500')
        }
        msgbox.innerHTML = decodeURIComponent(message);
        setTimeout(() => msgbox.innerHTML = '', 1500)
    }
});