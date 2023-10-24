document.addEventListener("DOMContentLoaded", function() {
    var inputs = document.querySelectorAll(".principal__login__codigo");
  
    inputs.forEach(function(input, index) {
      input.addEventListener("input", function() {
        if (this.value.length === 1) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });
      input.addEventListener("keydown", function(e) {
        if (e.key === "Backspace" && this.value.length === 0) {
          if (index > 0) {
            inputs[index - 1].focus();
          }
        }
      });
    });
  });

 document.addEventListener("DOMContentLoaded", function() {
  let tentativasRestantes = 5;

  function verificarCodigo() {
    let codigoCorreto = "1234"; // Substituir pelo código correto
    let codigoDigitado = "";

    const camposCodigo = document.querySelectorAll(".principal__login__codigo");
    camposCodigo.forEach(function(campo) {
      codigoDigitado += campo.value;
    });

    if (codigoDigitado === codigoCorreto) {
      window.location.href = 'client'; // Redirecionar para a próxima página
    } else {
      tentativasRestantes--;
      if (tentativasRestantes > 0) {
        document.getElementById("numeroDestacado").innerText = tentativasRestantes;
      } else {
        alert("Suas tentativas esgotaram. Contate o suporte.");
      }
    }
  }

  document.getElementById("avancarBotao").addEventListener("click", verificarCodigo);
});

document.addEventListener("DOMContentLoaded", function() {
    let tempoInicial = 59;
  
    // Função para atualizar o cronômetro
    function atualizarCronometro() {
      const tempoRestanteElement = document.getElementById("tempoRestante");
      const segundosFormatados = tempoInicial.toString().padStart(2, '0');
  
      tempoRestanteElement.textContent = `00:${segundosFormatados}`;
      
      if (tempoInicial > 0) {
        tempoInicial--;
      } else {
        clearInterval(intervalId);
        tempoRestanteElement.textContent = "Tempo esgotado";
        // Ativar o botão de reenviar código quando o tempo se esgotar
        document.getElementById("reenviarCodigo").disabled = false;
      }
    }
  
    // Função para reenviar o código
    function reenviarCodigo() {
      // Coloque aqui a lógica para reenviar o código
      // Reiniciar o cronômetro
      tempoInicial = 59;
      atualizarCronometro();
      // Desativar o botão de reenviar código após clicar
      document.getElementById("reenviarCodigo").disabled = true;
    }
  
    atualizarCronometro();
    const intervalId = setInterval(atualizarCronometro, 1000);
  });



