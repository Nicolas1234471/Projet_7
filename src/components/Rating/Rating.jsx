import { useState } from 'react';
import StarActive from '../../assets/star-active.svg';
import StarInactive from '../../assets/star-inactive.svg';
import './Rating.scss';

function Rating ({ ratingData }) {

    function generateStar() {
        const ratingArray = []
        for (let i = 0; i < 5; i++) {
            if (i < ratingData)
                ratingArray.push(<img key={i} src={StarActive} className='star-full' />)
            else {
                ratingArray.push(<img key={i} src={StarInactive} className='star-empty' />)
            }
        }
        return ratingArray

    }

    return (
        <div className='rating-container'>
            {generateStar()}
        </div>
    )
}

export default Rating;