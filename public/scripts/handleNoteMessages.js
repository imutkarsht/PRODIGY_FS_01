window.addEventListener('load', () => {
    const msgbox = document.getElementById('msgbox')
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
        msgbox.innerHTML = decodeURIComponent(message);
        setTimeout(() => msgbox.innerHTML = '', 2000)
    }
});