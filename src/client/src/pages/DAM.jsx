import { useEffect } from 'react';
import ClientHeader from '../components/ClientHeader/ClientHeader';
import Footer from '../components/Footer/Footer';
import DamImg from '../assets/images/DAM.png';
import { assignDAMFunctions } from '../assets/scripts/damScripts';

export default function DAM() {
  document.title = 'DAM - Documento de Arrecadação Municipal';
  useEffect(() => {assignDAMFunctions()});
  return (
    <div className="body">
      <ClientHeader type="dam" />
      <main>
        <img src={DamImg} />
        <div className="alert-box" id="whatsapp-alert">
          <div>
            <p className="text-red">Você deseja enviar o DAM por WhatsApp?</p>
            <button id="send-dam-whatsapp">ENVIAR</button>
          </div>
        </div>
        <div className="alert-box" id="email-alert">
          <div>
            <p className="text-red">Você deseja enviar o DAM por Email?</p>
            <button id="send-dam-email">ENVIAR</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}