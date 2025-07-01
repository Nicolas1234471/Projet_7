import { NavLink } from 'react-router-dom';
import logoKasaRed from '../../assets/logo-kasa-red.png';
import './Header.scss';

function Header() {
    return (
        <header>
            <div className="header-flex-container">
                <img
                    src={logoKasaRed}
                    alt="Logo Kasa Red"
                    className="logo-kasa-red"
                />
                <div className="nav-links">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">À propos</NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
