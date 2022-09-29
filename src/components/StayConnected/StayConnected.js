import React from 'react';
import { Container, Row } from 'react-bootstrap';
import User from '../../assets/user.png';
import Notification from './Notification/Notification';
import UserMessage from './Notification/UserMessage/UserMessage';
import './StayConnected.css';

const StayConnected = () => {
    return (
        <section className='stay-connected-section py-5 my-5'>
            <Container>
                <h2 className="section-title">Stay Connected with us</h2>
                <p className="section-desc">Tutor Master will cover the following topics..</p>
            
                <Row className='mt-5'>
                    <div className="col-lg-4 offset-lg-1">
                        <div className="connect-leftside">
                            <div className="leftside-header d-flex align-items-center justify-content-between pb-4">
                                <h4 className='leftside-title mb-0'>Notification</h4>
                                <p className='mark-text mb-0'>Mark as read</p>
                            </div>

                            <Notification userImg={User} title={'Thomas added a new course on Cardiology'} time={'3mins'} />
                            <Notification userImg={User} title={'Thomas added a new course on Cardiology'} time={'3mins'} />
                            
                            <div className="text-end">
                                <a href="#home" className='primary-link'>view all</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="connect-rightside">
                            <UserMessage userImg={User} userName={'James'} message={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offcia'} time={'3mins'} />
                            <UserMessage userImg={User} userName={'James'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuconsectetur adipiscing elit, sed do eiu'} time={'3mins'} />
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default StayConnected;