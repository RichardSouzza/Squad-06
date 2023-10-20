const whatsappAlert = document.getElementById('whatsapp-alert');
const emailAlert = document.getElementById('email-alert');


export function addRedBorders() {
    const body = document.getElementsByTagName('body')[0];
    const DAMs = document.getElementsByClassName('dam-row');
    for (let dam of DAMs) {
        const damRect = dam.getBoundingClientRect();
        const leftBorder = document.createElement('div');
        leftBorder.className = 'red-border';
        leftBorder.style.height = `calc(${damRect.height}px - 0.5rem)`
        leftBorder.style.left = `calc(${damRect.left}px + 0.5rem)`
        leftBorder.style.top = `calc(${damRect.top}px + 0.25rem)`
        body.appendChild(leftBorder);
        const rightBorder = document.createElement('div');
        rightBorder.className = 'red-border';
        rightBorder.style.height = `calc(${damRect.height}px - 0.5rem)`;
        rightBorder.style.left = `calc(${damRect.right}px - 0.75rem)`;
        rightBorder.style.top = `calc(${damRect.y}px + 0.25rem)`;
        body.appendChild(rightBorder);
    }
}


function closeAlerts() {
    closeWhatsAppAlert();
    closeEmailAlert();
    document.removeEventListener('click', clickHandler);
}


function clickHandler(event) {
    if (!whatsappAlert.contains(event.target)) {
        closeAlerts()
    }
}


function setClickHandlerEventListener() {
    setTimeout(() => {
        document.addEventListener('click', clickHandler);
    }, 0);
}


function showWhatsAppAlert() {
    closeAlerts();
    whatsappAlert.style.display = 'block';
    setClickHandlerEventListener();
}


function closeWhatsAppAlert() {
    whatsappAlert.style.display = 'none';
}


function sendByWhatsApp() {
    closeWhatsAppAlert();
}


function showEmailAlert() {
    closeAlerts();
    emailAlert.style.display = 'block';
    setClickHandlerEventListener();
}


function closeEmailAlert() {
    emailAlert.style.display = 'none';
}


function sendByEmail() {
    closeEmailAlert();
}


function downloadDAM() {
    const damUrl = '../static/data/DAM.pdf';
    var a = document.createElement('a');
    a.href = damUrl;
    a.download = 'DAM.pdf';
    a.click();
}


function printDAM() {
    const damUrl = '../static/data/DAM.pdf';
    window.location.href = damUrl;
}


export default addRedBorders;