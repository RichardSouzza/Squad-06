import DigitalCertify from '../../assets/images/digital-certify.svg';
import Logo from '../../assets/images/logo.svg';
import SAC from '../../assets/images/sac.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <div id="contact">
        <img src={Logo} alt="Logo Ágape" />
        <ul className="anchor">
          <li>Suporte</li>
          <li>Contato</li>
          <li>Reclamações</li>
          <li>Sugestões</li>
        </ul>
      </div>
      <div id="certify">
        <img src={DigitalCertify} alt="Certificação digital" />
      </div>
      <div id="sac">
        <p>Em que posso ajudar?</p>
        <img src={SAC} alt="Serviço de Atendimento ao Consumidor" />
      </div>
    </footer>
  )
}
