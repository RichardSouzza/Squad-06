import Bell from '../assets/images/bell.svg'
import Logo from '../assets/images/logo.png'
import '../assets/styles/style.css'

export default function ClientHeader() {
  return (
    <header>
      <div id="header-top">
        <div className="sidebar"></div>

        <img id="logo" src={Logo} alt="Ágape logo" />
        
        <div id="flex-end">
          <div className="notification">
            <button className="notification-btn"><img className="btn-icon" src={Bell} /></button>
          </div>

          <div className="exit">
            <button className="exit-btn"><p>Sair</p></button>
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

        <div className="header-right">
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
