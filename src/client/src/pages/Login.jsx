import { useEffect } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import addMask from '../assets/scripts/addMask';
import '../assets/styles/Login.css';

export default function Login() {
  useEffect(() => {
    const input = document.getElementById('identification');
    input.pattern = '^\\d{2}\\.?\\d{3}\\.?\\d{3}\\/?\\d{4}-?\\d{2}|\\d{3}\\.?\\d{3}\\.?\\d{3}-?\\d{2}$';
    input.addEventListener('keyup', () => {
      addMask(input)});
  });

  return (
    <div className="body">
      <Header />
      <main>
        <div className="floatCard">
          <p>Entrar com CPF ou CNPJ:</p>
          <form>
            <input type="text" id="identification" name="identification" inputMode="numeric" title="12 números para CPF ou 14 números para CNPJ" required></input>
            <input type="submit" id="submit-button" value="ENTRAR"></input>
          </form>
          <p>Não consegue acessar? <a className="anchor">Clique aqui</a>.</p>
        </div>
      </main>
      <Footer contactVisibility="hide"/>
    </div>
  );
}
