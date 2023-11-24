import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Bell from '../../assets/images/bell.svg';
import Download from '../../assets/images/download.svg';
import Gmail from '../../assets/images/gmail.svg';
import Print from '../../assets/images/print.svg';
import WhatsApp from '../../assets/images/whatsapp.svg';
import { assignDAMHeaderFunctions } from '../../assets/scripts/damScripts';
import './ClientHeader.css';

function HeaderBottomDefault({itemsNumber, disableFilter, filterByNearDueDate, filterByExpired}) {
  const [totalItemsNumber, dueDateItemsNumber, expiredItemsNumber] = itemsNumber;
  return (
    <div id="header-bottom">
      <button className="raised-button" onClick={disableFilter}>Todos ({totalItemsNumber})</button>
      <button className="raised-button" onClick={filterByNearDueDate}>A vencer ({dueDateItemsNumber})</button>
      <button className="raised-button" onClick={filterByExpired}>Vencidos ({expiredItemsNumber})</button>
    </div>
  )
}

HeaderBottomDefault.propTypes = {
  itemsNumber: PropTypes.array,
  disableFilter: PropTypes.func,
  filterByNearDueDate: PropTypes.func,
  filterByExpired: PropTypes.func
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

export default function ClientHeader({ type, headerBehaviors }) {
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
            <button className="exit-button"><p>Sair</p></button>
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
          : <HeaderBottomDefault
              itemsNumber={headerBehaviors.itemsNumber}
              disableFilter={headerBehaviors.disableFilter} 
              filterByNearDueDate={headerBehaviors.filterByNearDueDate} 
              filterByExpired={headerBehaviors.filterByExpired} 
            />
      }
    </header>
  );
}

ClientHeader.propTypes = {
  type: PropTypes.string,
  headerBehaviors: PropTypes.object
};

ClientHeader.defaultProps = {
  type: 'default',
  headerBehaviors: {}
};
