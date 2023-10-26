const whatsappAlert = document.getElementById('whatsapp-alert');
const emailAlert = document.getElementById('email-alert');


function addRedBorders() {
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


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        addRedBorders();
    }, 2000);
});


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




// Ajusta o conteúdo das células nas colunas Tributo e Competência
var tributoCells = document.querySelectorAll("#dam-table tbody tr.dam-row td:nth-child(1)");
var competenciaCells = document.querySelectorAll("#dam-table tbody tr.dam-row td:nth-child(2)");

for (var i = 0; i < tributoCells.length; i++) {
  tributoCells[i].textContent = tributoCells[i].textContent;
}

for (var i = 0; i < competenciaCells.length; i++) {
  competenciaCells[i].textContent = competenciaCells[i].textContent;
}

// Ajusta o formato da coluna de Vencimento para data formatada
{
  var vencimentoColumn = document.querySelector("#vencimento");
  var vencimentoCells = document.querySelectorAll("#dam-table tbody tr.dam-row td:nth-child(3)");
  var dateFormatOptions = { day: "2-digit", month: "2-digit", year: "numeric" };

  for (var i = 0; i < vencimentoCells.length; i++) {
    var dateString = vencimentoCells[i].textContent;
    var date = new Date(dateString);
    var formattedDate = date.toLocaleDateString("pt-BR", dateFormatOptions);
    vencimentoCells[i].textContent = formattedDate;
  }
}

// Ajusta o formato da coluna Valor para número formatado
var valorCells = document.querySelectorAll("#dam-table tbody tr.dam-row td:nth-child(4)");

for (var i = 0; i < valorCells.length; i++) {
  var valorString = valorCells[i].textContent;
  var valorNumerico = parseFloat(valorString.replace(/[^0-9,\.]/g, '').replace(',', '.'));
  var valorFormatado = valorNumerico.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  valorCells[i].textContent = valorFormatado;
}