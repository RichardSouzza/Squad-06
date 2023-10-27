import Bell from '../../assets/images/bell.svg';
import './ClientHeader.css';

export default function ClientHeader() {
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
          <p className="credential">CPF / CNPJ: 894.076.010-72</p>
          <p className="credential">CONTRIBUINTE: CONTRIBUINTE TESTE UNIT</p>
        </div>

        <div id="header-right">
          <select><option>Selecionar Inscrição</option></select>
          <select><option>Selecione o tipo DAM</option></select>
        </div>
      </div>
      
      <div id="header-bottom">
        <button className="raised-button">Todos</button>
        <button className="raised-button">A vencer (0)</button>
        <button className="raised-button">Vencidos (3)</button>
      </div>
    </header>
  );
}
