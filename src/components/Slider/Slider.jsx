import { useState } from 'react';
import SliderArrowLeft from '../../assets/slider-arrow-left.svg';
import SliderArrowRight from '../../assets/slider-arrow-right.svg';
import Slides from '../../data/apartments-data.json';

function Slider({ sliderData }) {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === sliderData.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? sliderData.length -1 : slide -1);
    }
    return (
        <div className="slider">
            <img className='slider-arrow-left'src={SliderArrowLeft} onClick={prevSlide} />
            {sliderData.map((sliderItem, index) => {
                return (
                    <img
                        src={sliderItem}
                        key={index}
                        className={slide === index ? 'slider-image' : 'slider-image slider-image-hidden'}
                    />
                );
            })}
            <img className='slider-arrow-right' src={SliderArrowRight} onClick={nextSlide} />
            <span class='slider-count'>
                
            </span>
        </div>
    );
}

export default Slider;
