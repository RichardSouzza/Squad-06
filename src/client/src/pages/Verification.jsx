import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import FloatCard from '../components/FloatCard/FloatCard';
import Footer from '../components/Footer/Footer';

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
        <FloatCard content={
          <>
            <p className="semibold">Para sua segurança, confirme se o endereço de e-mail exibido abaixo é o seu:</p>
            <p>*Parte dos dados estão ocultados para sua segurança</p>
            <form id="form">
              <div className="email-box">contato.emp*@gmail.com</div>
              <input type="submit" value="CONFIRMAR" />
            </form>
            <p>O e-mail mostrado não é seu? <a className="anchor">Clique aqui</a>.</p>
          </>
        } />
      </main>
      <Footer />
    </div>
  );
}
