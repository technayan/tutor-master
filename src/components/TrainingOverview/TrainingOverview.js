import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';
import Thumbnail from '../../assets/video-poster.png';
import VideoSrc from '../../assets/video/video.mp4';
import './TrainingOverview.css'

const TrainingOverview = () => {
    
    return (
        <section className='training-overview-section my-5 py-5'>
            <h2 className="section-title">Training Overview</h2>

            <Video poster={Thumbnail} className='video mx-auto mt-5'>
                <source src={VideoSrc} type='video/webm' />
            </Video>
        </section>
    );
};

export default TrainingOverview;