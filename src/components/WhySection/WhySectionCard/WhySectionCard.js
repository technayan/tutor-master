import React from 'react';
import Source from '../../../assets/source.png';
import Links from '../../../assets/links.png';
import Growth from '../../../assets/growth.png';
import './WhySectionCard.css';

const WhySectionCard = ({title, desc, icon}) => {
    return (
        <div className='why-section-card d-flex align-items-top'>
            <div className="card-icon-wrapper d-flex justify-content-center align-items-center me-3">
                <img src={icon==='source' ? Source : icon==='links' ? Links : icon==='growth' ? Growth : ''} alt="" className="why-card-icon" />
            </div>
            <div className="card-info">
                <h3 className='crd-title'>{title}</h3>
                <p className="card-desc">{desc}</p>
            </div>

        </div>
    );
};

export default WhySectionCard;