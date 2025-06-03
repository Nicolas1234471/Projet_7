import './Card.scss';
import apartments from '../../data/apartments-data.json';
console.log(apartments)

function Card({ apartment }) {
    return (
        <div className='card'>
            <img src={apartment.cover} alt={apartment.title} className='apartment-image' />
            <h2>{apartment.title}</h2>
        </div>
    )
}

export default Card;
