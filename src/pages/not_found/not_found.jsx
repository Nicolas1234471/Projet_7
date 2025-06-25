import { NavLink } from 'react-router-dom';
import './not_found.scss';

function NotFound() {
    return (
        <div className='notfound-container'>
            <div className='notfound-number'>
                404
            </div>
            <div className='notfound-text'>
                Oups! La page que vous demandez n'existe pas.
            </div>
            <NavLink to='/' className='notfound-redirect'>
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    )
}

export default NotFound;