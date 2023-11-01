import Logo from '../../assets/images/logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <img src={Logo} alt="Logo Ágape"/>
    </header>
  );
}