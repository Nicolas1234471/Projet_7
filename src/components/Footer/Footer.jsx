import { NavLink } from 'react-router-dom'
import logoKasaWhite from '../../assets/logo-kasa-white.png'
import './Footer.scss'

function Footer() {
    return (
        <footer>
            <img src={logoKasaWhite} alt='Logo Kasa white' className='logo-kasa-white'/>
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;