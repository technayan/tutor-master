import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">
                <Container>
                    <Row>
                        <div className="col-lg-3">
                            <p className="footer-title">Knowledge Transfer</p>
                            <p className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum do
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum do</p>
                            <div className="social-links">
                                <a href="#home"><FaFacebookF /></a>
                                <a href="#home"><FaTwitter /></a>
                                <a href="#home"><FaLinkedinIn /></a>
                            </div>
                        </div>

                        <div className="col-lg-2 offset-lg-1">
                            <h2 className="footer-heading">Quick Links</h2>
                            <a href="#home" className="footer-link">Home</a>
                            <a href="#home" className="footer-link">About</a>
                            <a href="#home" className="footer-link">Trainings</a>
                            <a href="#home" className="footer-link">Contact</a>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <h2 className="footer-heading">Topics</h2>
                            <a href="#home" className="footer-link">Blanket topics</a>
                            <a href="#home" className="footer-link">Country topics</a>
                            <a href="#home" className="footer-link">Product topics</a>
                        </div>

                        <div className="col-lg-2 offset-lg-1">
                            <h2 className="footer-heading">Topics</h2>
                            <a href="#home" className="footer-link">Privacy Policy</a>
                            <a href="#home" className="footer-link">Terms & Conditions</a>
                            <a href="#home" className="footer-link">Disclaimer</a>
                            <a href="#home" className="footer-link">Sitemap</a>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="footer-bar p-3"></div>
        </footer>
    );
};

export default Footer;