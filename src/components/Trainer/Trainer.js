import React from 'react';
import TrainerProfile from './TrainerProfile/TrainerProfile';
import TrainerImg from '../../assets/user.png';
import { Container, Row } from 'react-bootstrap';

const Trainer = () => {
    return (
        <section className='trainer-section my-5 py-5'>
            <Container>
                <h2 className="section-title">Who will train you?</h2>
                <p className="section-desc">Tutor Master will cover the following topics..</p>

                <Row className='g-5 mt-5'>
                    <div className="col-lg-6">
                        <TrainerProfile profileImg={TrainerImg} name={'James Williams'} title={'Bsc Msc'} subject={'Cardiology'} />
                    </div>
                    <div className="col-lg-6">
                        <TrainerProfile profileImg={TrainerImg} name={'James Williams'} title={'Bsc Msc'} subject={'Cardiology'} />
                    </div>
                    <div className="col-lg-6">
                        <TrainerProfile profileImg={TrainerImg} name={'James Williams'} title={'Bsc Msc'} subject={'Cardiology'} />
                    </div>
                    <div className="col-lg-6">
                        <TrainerProfile profileImg={TrainerImg} name={'James Williams'} title={'Bsc Msc'} subject={'Cardiology'} />
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Trainer;