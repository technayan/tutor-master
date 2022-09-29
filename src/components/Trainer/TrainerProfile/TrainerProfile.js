import React from 'react';
import './TrainerProfile.css';

const TrainerProfile = ({profileImg, name, title, subject}) => {
    return (
        <div className='trainer-profile d-flex'>
            <img src={profileImg} alt={name} className='img-fluid' />
            <div className="trainer-details h-100">
                <h4 className="trainer-name">{name}</h4>
                <span className='trainer-title d-block'>{title}</span>
                <span className='trainer-subject d-block'>{subject}</span>

                <a href="#home" className="primary-link">Know More</a>
            </div>
        </div>
    );
};

export default TrainerProfile;