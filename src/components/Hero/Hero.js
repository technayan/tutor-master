import React from 'react';
import { Container } from 'react-bootstrap';
import Atom from '../../assets/Atom.png';
import Bulb from '../../assets/Bulb.png';
import Flask from '../../assets/Flask.png';
import Molecules from '../../assets/Molecules.png';
import Schuelke from '../../assets/Schuelke_Logo.png';
import Dots from '../../assets/dots.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero-area d-flex justify-content-center align-items-center'>
            <Container className='position-relative'>
                <div className="hero-text-area text-white text-center mx-auto">
                    <h1 className='hero-title'>Grow your mind and better opportunities you will find</h1>
                    <p className="hero-slogan">Be a good achiever, shape you career</p>

                    <img src={Atom} alt="Atom" className='atom position-absolute' />
                    <img src={Bulb} alt="Bulb" className='bulb position-absolute' />
                    <img src={Flask} alt="Flask" className='flask position-absolute' />
                    <img src={Molecules} alt="Molecules" className='molecules position-absolute' />
                </div>
                <img src={Schuelke} alt="Schuelke" className='schuelke-logo big' />
                <img src={Schuelke} alt="Schuelke" className='schuelke-logo medium' />
                <img src={Schuelke} alt="Schuelke" className='schuelke-logo small' />
            </Container>
            <img src={Dots} alt="dots" className='dots-left' />
            <img src={Dots} alt="dots" className='dots-right' />
        </section>
    );
};

export default Hero;