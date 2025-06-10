import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Banner.scss'
import imageMountains from '../../assets/mountains-view.jpg';
import imagePlains from '../../assets/mountain-plains.png';

function Banner({ imgBanner, imgText }) {
    return (
        <div className='home-banner'>
            <img src={imgBanner} alt='paysage montagneux' className='home-banner-image'/>
            <h1 className='home-banner-title'>{imgText}</h1>
        </div>
    )
}

export default Banner