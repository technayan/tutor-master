import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Training.css'
import TrainingCard from './TrainingCard/TrainingCard';

const Training = () => {
    return (
        <section className='training-section my-5 py-5'>
            <Container>
                <h2 className="section-title">On what you will be trained!</h2>
                <p className="section-desc">Tutor Master will cover the following topics..</p>
                <Row className='g-5 mt-5'>
                    <div className="col-lg-4">
                        <TrainingCard cardTitle={'Country Topics'} cardDesc={'USP #1 showcased here with brief as needed'} cardIcon={'earth'} />
                    </div>
                    <div className="col-lg-4">
                        <TrainingCard cardTitle={'Product Topics'} cardDesc={'USP #1 showcased here with brief as needed'} cardIcon={'package'} />
                    </div>
                    <div className="col-lg-4">
                        <TrainingCard cardTitle={'Blanket Topics'} cardDesc={'USP #1 showcased here with brief as needed'} cardIcon={'blanket'} />
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Training;