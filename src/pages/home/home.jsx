import { NavLink } from 'react-router-dom';
import Apartments from '../apartments/apartments.jsx';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Card from '../../components/Card/Card.jsx';
import './home.scss';

function Home({ apartmentsData }) {
    return (
        <div>
            <div className="apartments-banner-container">
                <Banner imgBanner= '../../mountains-view.jpg' imgText='Chez vous, partout et ailleurs'/>
                <div className="apartments-container">
                    {apartmentsData.map((apartment) => (
                        <Card key={apartment.id} id={apartment.id} apartment={apartment} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
