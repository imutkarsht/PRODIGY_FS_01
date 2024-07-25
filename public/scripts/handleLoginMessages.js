window.addEventListener('load', () => {
    const msgBox = document.getElementById('message')
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if(message){
        if(decodeURIComponent(message) === 'invalid username or password'){
            msgBox.classList.remove('text-green-500')
            msgBox.classList.add('text-red-500')
        }
        msgBox.innerHTML = decodeURIComponent(message)
        setTimeout(() => msgBox.innerHTML= '' , 2000)
    } 
});