import React from 'react';
import './UserMessage.css'

const UserMessage = ({userImg, userName, message, time}) => {
    return (
        <div className='userMessage d-flex my-3'>
            <img src={userImg} alt="user" className="user-img img-fluid me-3" />
            <div className="message-body">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="user-name mb-0">{userName}</p>
                    <span className="time">{time} ago</span>
                </div>
                <p className="message mt-2">{message}</p>
            </div>
        </div>
    );
};

export default UserMessage;