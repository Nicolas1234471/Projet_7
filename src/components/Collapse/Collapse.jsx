import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CollapseArrow from '../../assets/arrow-up.svg';
import './Collapse.scss'

function Collapse({ title, content }) {
    const [expanded, setExpanded] = useState(false);

    const openCollapse = () => {
        setExpanded(!expanded)
    }

    return (

        /* Gérer le on onClick avec openCollapse(), et ensuite gérer l'ouverture ou fermeture avec des classes/styles
        ajoutés ou enlevés comme montré plus bas dans la div content */
        <div className="collapse-container">
            <div className='collapse-item' onClick={openCollapse}>
                <div className='collapse-title'>{title}</div>
                <img src={CollapseArrow} alt='collapse arrow' className={`collapse-arrow ${expanded ? 'collapse-arrow-expanded' : ''}`}/>
            </div>
            <div className={`collapse-content ${expanded ? 'collapse-content-expanded' : ''}`}>{content}</div>
        </div>
    )
}

export default Collapse;
/*
<div className="collapse-container">
            <div className={`collapse-item ${expanded ? 'collapse-item-expanded' : ''}`}>
                <div className='collapse-title-icon-flex' onClick={openCollapse}>
                    <div className='collapse-title'>{title}</div>
                    <img src={CollapseArrow} alt='collapse arrow' className={`collapse-arrow ${expanded ? 'collapse-arrow-expanded' : ''}`}/>
                </div>
                <div className={`collapse-content ${expanded ? 'collapse-content-expanded' : ''}`}>{content}</div>
            </div>
        </div>*/