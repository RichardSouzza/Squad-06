import DamFile from '../data/DAM.pdf';


let whatsappAlert;
let emailAlert;


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
  var a = document.createElement('a');
  a.href = DamFile;
  a.download = 'DAM.pdf';
  a.click();
}


function printDAM() {
  window.location.href = DamFile;
}


function assign(element, func) {
  element.addEventListener('click', () => {func()})
}

export function assignDAMHeaderFunctions() {
  const whatsappButton = document.getElementById('whatsapp-btn');
  const emailButton = document.getElementById('email-btn');
  const downloadButton = document.getElementById('download-btn');
  const printButton = document.getElementById('print-btn');
  assign(whatsappButton, showWhatsAppAlert);
  assign(emailButton, showEmailAlert);
  assign(downloadButton, downloadDAM);
  assign(printButton, printDAM);
}

export function assignDAMFunctions() {
  whatsappAlert = document.getElementById('whatsapp-alert');
  emailAlert = document.getElementById('email-alert');
  const sendByWhatsAppBtn = document.getElementById('send-dam-whatsapp');
  const sendByEmailBtn = document.getElementById('send-dam-email');
  assign(sendByWhatsAppBtn, sendByWhatsApp);
  assign(sendByEmailBtn, sendByEmail);
}
