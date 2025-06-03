import './apartments.scss'
import Card from '../../components/Card/Card.jsx'
import apartmentsData from '../../data/apartments-data.json'

function Apartments() {
    return (
        <div className='apartments-container'>
            {apartmentsData.map(apartment => (
                <Card key={apartment.id} apartment={apartment} />
            ))}
        </div>
    )
}

export default Apartments;