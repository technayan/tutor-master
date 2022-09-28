import React from 'react';
import './Notification.css';


const Notification = ({title, userImg, time}) => {
    return (
        <div className='notification d-flex my-3'>
            <img src={userImg} alt="user" className="user-img img-fluid me-3" />
            <div className="notification-info">
                <p className="notification-title mb-0">{title}</p>
                <span className="time">{time} ago</span>
            </div>
        </div>
    );
};

export default Notification;