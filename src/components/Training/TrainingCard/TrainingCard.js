import React from 'react';
import Earth from '../../../assets/earth.png';
import Package from '../../../assets/package.png';
import Blanket from '../../../assets/blanket.png';
import './TrainingCard.css'

const TrainingCard = ({cardTitle, cardDesc, cardIcon}) => {
    return (
        <div className='training-card text-center'>
            <h3 className="crd-title text-white">{cardTitle}</h3>
            <p className='card-desc text-white'>{cardDesc}</p>
            <button className='primary-btn bg-light'>Know More</button>

            <div className="card-icon">
                <img src={cardIcon==='earth' ? Earth : cardIcon==='package' ? Package : cardIcon==='blanket' ? Blanket : ''} alt="" />
            </div>
        </div>
    );
};

export default TrainingCard;