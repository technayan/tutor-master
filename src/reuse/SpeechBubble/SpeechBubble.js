import React from 'react';
import bubble from '../../assets/speech-bubble.png';
import Atom from '../../assets/Atom.png';
import Bulb from '../../assets/Bulb.png';
import Flusk from '../../assets/Flask.png';
import Molecules from '../../assets/Molecules.png';
import './SpeechBubble.css'

const SpeechBubble = ({icon}) => {
    console.log(icon)
    return (
        <div className={`speech-icon ${icon}`}>
            <div className='speech-bubble'>
                <img src={bubble} alt="Bubble" className='absolute top-0 l-0'/>
                <img src={icon==='atom' ? Atom : icon==='bulb' ? Bulb : icon==='flusk' ? Flusk : icon==='molecules' ? Molecules : ''} alt="Icon" className='absolute top-0 l-0 icon' />
            </div>
        </div>
    );
};

export default SpeechBubble;