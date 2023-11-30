import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Bell from '../../assets/images/bell.svg';
import Download from '../../assets/images/download.svg';
import Gmail from '../../assets/images/gmail.svg';
import Print from '../../assets/images/print.svg';
import WhatsApp from '../../assets/images/whatsapp.svg';
import { assignDAMHeaderFunctions } from '../../assets/scripts/damScripts';
import './ClientHeader.css';

function HeaderBottomDefault({ behaviors }) {
  const [totalItemsNumber, dueDateItemsNumber, expiredItemsNumber] = behaviors.itemsNumber;
  return (
    <div id="header-bottom">
      <button className="raised-button" onClick={behaviors.disableFilter}>Todos ({totalItemsNumber})</button>
      <button className="raised-button" onClick={behaviors.filterByNearDueDate}>A vencer ({dueDateItemsNumber})</button>
      <button className="raised-button" onClick={behaviors.filterByExpired}>Vencidos ({expiredItemsNumber})</button>
    </div>
  )
}

HeaderBottomDefault.propTypes = {
  behaviors: PropTypes.object
};

function HeaderBottomDAM() {
  useEffect(() => {assignDAMHeaderFunctions()});
  return (
    <div className="flex-end" id="header-bottom">
      <button className="icon-button" id="whatsapp-btn"><img src={WhatsApp} /></button>
      <button className="icon-button" id="email-btn"><img src={Gmail} /></button>
      <button className="icon-button" id="download-btn"><img src={Download} /></button>
      <button className="icon-button" id="print-btn"><img src={Print} /></button>
    </div>
  )
}

export default function ClientHeader({ type, behaviors }) {
  const navigate = useNavigate();
  const identification = localStorage.getItem('identification');
  return (
    <header className="ClientHeader">
      <div id="header-top">
        <div></div>

        <div id="fictitious-logo">Logo Fictício</div>
        
        <div id="flex-end">
          <div className="notification">
            <button className="notification-button"><img className="button-icon" src={Bell} alt="Sino de notificação" /></button>
          </div>

          <div className="exit">
            <button className="exit-button" onClick={() => navigate("/")}><p>Sair</p></button>
          </div>
        </div>
      </div>
      <hr />
      <div id="header-center">
        <div>
          <p className="welcome">BEM-VINDO!</p>
          <p className="credential">CPF / CNPJ: {identification}</p>
          <p className="credential">CONTRIBUINTE: #</p>
        </div>

        <div id="header-right">
          <select><option>Selecionar Inscrição</option></select>
          <select><option>Selecione o tipo DAM</option></select>
        </div>
      </div>
      
      {
        type === "dam" 
          ? <HeaderBottomDAM />
          : <HeaderBottomDefault behaviors={behaviors} />
      }
    </header>
  );
}

ClientHeader.propTypes = {
  type: PropTypes.string,
  behaviors: PropTypes.object
};

ClientHeader.defaultProps = {
  type: 'default',
  behaviors: {}
};
