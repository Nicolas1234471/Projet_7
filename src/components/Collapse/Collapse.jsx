import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CollapseArrow from '../../assets/arrow-up.svg';
import './Collapse.scss'

function Collapse({ title, content, isExpanded, onToggle }) {
    const [expandedId, setExpandedId] = useState();

    return (
        <div className="collapse-container">
            <div className='collapse-item'>
                <div className='collapse-title-icon-flex'>
                    <div className='collapse-title'></div>
                    <img src={CollapseArrow} alt='collapse arrow' className='collapse-arrow'/>
                </div>
                <div className='collapse-content'>{content}</div>
            </div>
        </div>
    )
}

export default Collapse