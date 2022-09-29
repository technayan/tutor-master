import React, { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import './ToTop.css';


const ToTop = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            setScroll(scrollY);
        });
    })

    const goToTop = () => {
        window.scrollTo(0,0);
    }

    

    return (
        <div className={`to-top ${scroll > 250 ? 'd-flex' : 'd-none'}`} id='toTop' onClick={goToTop} >
            <BsChevronUp />
        </div>
    );
};

export default ToTop;