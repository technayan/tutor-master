import React from 'react';
import { Container, Row } from 'react-bootstrap';
import WhySectionCard from './WhySectionCard/WhySectionCard';

const WhySection = () => {
    return (
        <section className='why-section py-5 my-5'>
            <Container>
                <h2 className="section-title">Why Tutor Master</h2>
                <p className="section-desc">Tutor Master will cover the following topics..</p>
            
                <Row className='mt-5 pt-3 gx-4'>
                    <div className="col-lg-4">
                        <WhySectionCard title={'The only source of learning pre-sales activities'} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu consectetur adipiscing elit, sed do eiu"} icon={'source'} />
                    </div>
                    <div className="col-lg-4">
                        <WhySectionCard title={'The only source of learning pre-sales activities'} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu consectetur adipiscing elit, sed do eiu"} icon={'links'} />
                    </div>
                    <div className="col-lg-4">
                        <WhySectionCard title={'The only source of learning pre-sales activities'} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu consectetur adipiscing elit, sed do eiu"} icon={'growth'} />
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default WhySection;