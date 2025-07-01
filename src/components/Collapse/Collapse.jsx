import { useState, useEffect } from 'react';
import CollapseArrow from '../../assets/arrow-up.svg';
import './Collapse.scss';

function Collapse({ title, content }) {
    const [expanded, setExpanded] = useState(false);

    const openCollapse = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="collapse-container">
            <div className="collapse-item" onClick={openCollapse}>
                <div className="collapse-title">{title}</div>
                <img
                    src={CollapseArrow}
                    alt="collapse arrow"
                    className={`collapse-arrow ${
                        expanded ? 'collapse-arrow-expanded' : ''
                    }`}
                />
            </div>
            <div
                className={`collapse-content ${
                    expanded ? 'collapse-content-expanded' : ''
                }`}
            >
                {content}
            </div>
        </div>
    );
}

export default Collapse;
