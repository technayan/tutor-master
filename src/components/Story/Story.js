import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Check from '../../assets/check.png';
import StoryImg from '../../assets/story-img.png';
import './Story.css';

const Story = () => {
    return (
        <section className='story-section py-5 my-5'>
            <Container>
                <Row>
                    <div className="col-lg-6 story-left">
                        <h2 className='title'>The story of Tutor Master?</h2>
                        <p className="desc my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet</p>

                        <ul className="check-lists ps-0">
                            <li><img src={Check} alt="Check" className='img-fluid me-3 my-2' />USP #1 showcased here with brief as needed</li>
                            <li><img src={Check} alt="Check" className='img-fluid me-3 my-2' />USP #1 showcased here with brief as needed</li>
                            <li><img src={Check} alt="Check" className='img-fluid me-3 my-2' />USP #1 showcased here with brief as needed</li>
                        </ul>

                        <button className='primary-btn mt-2 text-white'>Know More</button>
                    </div>

                    <div className="col-lg-6 story-right">
                        <div className="story-img-wrapper ms-auto me-4">
                            <img src={StoryImg} alt="Story" className='story-img img-fluid' />
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Story;