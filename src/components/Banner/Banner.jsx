import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Banner.scss'
import imageMountains from '../../assets/mountains-view.jpg';
import imagePlains from '../../assets/mountain-plains.png';

function Banner() {
    const titleBanner = 'Chez vous, partout et ailleurs'
    return (
        <div className='home-banner'>
            <img src={imageMountains} alt='paysage montagneux' className='home-banner-image'/>
            <h1 className='home-banner-title'>{titleBanner}</h1>
        </div>
    )
}

export default Banner