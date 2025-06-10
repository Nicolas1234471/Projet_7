import { NavLink } from 'react-router-dom';
import './Card.scss';
import apartments from '../../data/apartments-data.json';
console.log(apartments)

function Card({ id, apartment }) {
    return (
        <NavLink to={`/property/${id}`} className='card'>
            <img src={apartment.cover} alt={apartment.title} className='apartment-image' />
            <h2>{apartment.title}</h2>
        </NavLink>
    )
}

export default Card;
