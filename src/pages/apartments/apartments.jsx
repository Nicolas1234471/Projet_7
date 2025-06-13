import './apartments.scss';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card.jsx';
import Tags from '../../components/Tags/Tags.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';

function Apartments({ apartmentsData }) {
    const { id } = useParams();

    const apartment = apartmentsData.find((apartment) => apartment.id === id);

    const apartmentsCollapse = [
        {    
            "title": "Description",
            "content": apartment.description
        },
        {
            "title": "Équipements",
            "content": apartment.equipments
        }
    ]


    return (
        <div className="apartments-details-container">
            <div className="apartments-details-carousel"></div>
            <div className="apartments-details-text-rating-container">
                <div className="apartments-details-title-tags-container">
                    <div className="title-container">
                        <h3 className='apartment-title'>{apartment.title}</h3>
                        <span>{apartment.location}</span>
                    </div>
                    <div className="tags-container">
                        {apartment.tags.map((tag, index) => (
                            <Tags key={index} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className="apartments-details-host-rating-container">
                    <div className="host-picture-container">
                        <h3>
                            {apartment.host.name}
                        </h3>
                        <img src={apartment.host.picture} alt='' className='host-picture'/>
                    </div>
                    <div className="rating"></div>
                </div>
            </div>
            <div className='apartments-collapse-container'>
                {apartmentsCollapse.map(({ title, content }, index) => (
                    <Collapse key={index} title={title} content={content} />
                ))}
            </div>
        </div>
    );
}

export default Apartments;