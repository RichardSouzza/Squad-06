document.getElementById('identification').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '/' : x[4]) + x[4] + (x[5] ? '-' + x[5] : '');

    if (e.target.value.length < 15) {
        x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '-' + x[4] : '');
    }
});

function isValidCpfCnpj(value) {
    const cpfPattern = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{11})$/;
    return cpfPattern.test(value);
}

document.getElementById("validationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("identification");
    const errorMessage = document.getElementById("errorMessage");
    const value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (isValidCpfCnpj(value)) {
        window.location.href = "src/templates/contribuinte.html";
    } else {
        errorMessage.textContent = alert("CPF ou CNPJ inválido. Por favor, verifique o valor digitado.");
    }
});
