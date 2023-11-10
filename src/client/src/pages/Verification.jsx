import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../assets/styles/login.css';

export default function Verification() {
  document.title = 'Verificação';
  const navigate = useNavigate();
  useEffect(() => {
    const form = document.getElementById('form');
    form.addEventListener('submit', () => navigate('/pin-verification'));
  });

  return (
    <div className="body">
      <Header />
      <main>
        <div className="floatCard">
          <p className="semibold">Para sua segurança, escolha a forma de obter o código de acesso:</p>
          <p>*Parte dos dados estão ocultados para sua segurança</p>
          <form id="form">
            <div className="radio">
              <input type="radio" id="option1" name="verification_option" value="option1" required />
              <label htmlFor="option1">79*****0042</label>
            </div>
            <div className="radio">
              <input type="radio" id="option2" name="verification_option" value="option2" />
              <label htmlFor="option2">79*****2715</label>
            </div>
            <div className="radio">
              <input type="radio" id="option3" name="verification_option" value="option3" />
              <label htmlFor="option3">contato.emp*@gmail.com</label>
            </div>
            <input type="submit" value="AVANÇAR" />
          </form>
          <p>Não tem acesso a nenhum desses meios? <a className="anchor">Clique aqui</a>.</p>
        </div>
      </main>
      <Footer contactVisibility="hide"/>
    </div>
  );
}
