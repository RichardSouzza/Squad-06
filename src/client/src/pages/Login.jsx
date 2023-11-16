import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { error } from '../assets/scripts/toasts';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { addMask, validateID } from '../assets/scripts/loginScripts';
import '../assets/styles/login.css';

export default function Login() {
  document.title = 'Login';
  const navigate = useNavigate();
  useEffect(() => {
    const input = document.getElementById('identification');
    const form = document.getElementById('form');
    input.pattern = '^\\d{2}\\.?\\d{3}\\.?\\d{3}\\/?\\d{4}-?\\d{2}|\\d{3}\\.?\\d{3}\\.?\\d{3}-?\\d{2}$';
    input.addEventListener('keyup', () => addMask(input));
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validateID(input.value)) {
        navigate('/verification');
      } else {
        if (input.value.length === 14) {
          error('CPF inválido');
        } else {
          error('CNPJ inválido');
        }
      }
    });
  });

  return (
    <div className="body">
      <Header />
      <main>
        <div className="floatCard">
          <p>Entrar com CPF ou CNPJ:</p>
          <form id="form">
            <input type="text" id="identification" name="identification" inputMode="numeric" title="11 números para CPF ou 14 números para CNPJ" required></input>
            <input type="submit" value="ENTRAR"></input>
          </form>
          <p>Não consegue acessar? <a className="anchor">Clique aqui</a>.</p>
        </div>
      </main>
      <ToastContainer />
      <Footer contactVisibility="hide"/>
    </div>
  );
}
