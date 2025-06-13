import Banner from '../../components/Banner/Banner.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';
import './about.scss';

function About() {
    const aboutCollapse = [
        
        {
            "title": "Fiabilité",
            "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            "title": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "title": "Service",
            "content": "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        },
        {
            "title": "Sécurité",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }

    ]
    
    return (
        <div>
            <Banner imgBanner='../../mountain-plains.png' imgText=''/>
            <div className='about-collapse-container'>
                {aboutCollapse.map(({ title, content }, index) => (
                    <Collapse key={index} title={title} content={content} />
                ))}
            </div>
        </div>
    );
}

export default About;
