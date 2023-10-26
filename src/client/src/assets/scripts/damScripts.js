const whatsappAlert = document.getElementById('whatsapp-alert');
const emailAlert = document.getElementById('email-alert');


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

export default {};