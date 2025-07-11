import Banner from '../../components/Banner/Banner.jsx';
import Card from '../../components/Card/Card.jsx';
import './home.scss';

/* le composant Home reçoit comme prop apartmentsData qui correspond à la liste d'appartments provenant du fichier json sous forme de prop */

function Home({ apartmentsData }) {
    return (
        <div className="apartments-banner-container">
            <Banner
                imgBanner="../../mountains-view.jpg"
                imgText="Chez vous, partout et ailleurs"
                boxShadow={true}
            />
            <div className="apartments-container">
                {apartmentsData.map((apartment) => (
                    <Card
                        key={apartment.id}
                        id={apartment.id}
                        apartment={apartment}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
