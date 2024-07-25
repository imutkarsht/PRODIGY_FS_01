window.addEventListener('load', () => {
    const msgBox = document.getElementById('message')
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if(message){
        msgBox.innerHTML = decodeURIComponent(message)
        setTimeout(() => msgBox.innerHTML= '' , 2000)
    } 
});