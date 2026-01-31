import React, { useEffect, useState } from 'react';
import './Preloader.css';
import loadiGif from './loadi.gif';

const Preloader = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2000 ); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            <img src={loadiGif} alt="loading" className="preloader-gif" />
        </div>
    );
};

export default Preloader;x``
