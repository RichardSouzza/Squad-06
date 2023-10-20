import DigitalCertify from '../assets/images/digital-certify.svg'
import Logo from '../assets/images/logo.png'
import SAC from '../assets/images/sac.png'
import '../assets/styles/style.css'

export default function Footer({ contactVisibility }) {
  return (
    <footer>
      <div className={contactVisibility} id="contact">
        <img src={Logo} />
        <ul>
          <li>Suporte</li>
          <li>Contato</li>
          <li>Reclamações</li>
          <li>Sugestões</li>
        </ul>
      </div>
      <div>
        <img src={DigitalCertify} />
      </div>
      <div id="sac">
        <p>Em que posso ajudar?</p>
        <img src={SAC} />
      </div>
    </footer>
  )
}

Footer.propTypes = {
  contactVisibility: String
};
