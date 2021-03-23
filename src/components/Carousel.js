import React ,{ useState } from 'react';
import Slide from './Slide';

const Carousel = ({slidesCount}) => {
    const slides = [...Array(slidesCount).keys()];

    const TRIGGER_FOR_SWIPE = window.innerWidth * 1.3;
    const PERCENT_OF_WIDTH_FOR_NEXT_SWIPE = 100;
    const LAST_SLIDE = -PERCENT_OF_WIDTH_FOR_NEXT_SWIPE * (slides.length -1);

    const [xAxisStep, SetXAxisStep] = useState(0);
    const [slidePlace, SetSlidePlace] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const TouchStartHandler = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const TouchStopHandler = (e) => {
        const touchDistance = touchStart -  e.changedTouches[0].clientX;

        if(window.innerWidth + Math.abs(touchDistance) > TRIGGER_FOR_SWIPE){
            touchDistance < 0 ? goLeft() : goRight();
        }else { SetXAxisStep(-slidePlace * PERCENT_OF_WIDTH_FOR_NEXT_SWIPE)}
        setTouchStart(0)
        
    }

    const TouchMoveHandler = (e) => {
        const TouchMove = e.changedTouches[0].clientX;
        const touchDistance =  Math.abs(touchStart -  e.changedTouches[0].clientX);
        const movePercent = touchDistance * 100 / window.innerWidth;
        if(movePercent < 30){
            console.log({movePercent, xAxisStep});
            SetXAxisStep(prev => touchStart <= TouchMove ? -slidePlace*100+movePercent : -slidePlace*100-movePercent);
        }
        
    }

    const GoToSlide = (slide) => {
        SetSlidePlace(slide);
        SetXAxisStep(-slide * PERCENT_OF_WIDTH_FOR_NEXT_SWIPE);
    }

    const goLeft = () => { 
        SetXAxisStep(prev => prev >= 0 ? LAST_SLIDE : Math.round((prev + PERCENT_OF_WIDTH_FOR_NEXT_SWIPE)/100)*100);
        SetSlidePlace(slidePlace == 0 ? slides.length-1 : slidePlace - 1);
        
    };
    const goRight = () => { 
        SetXAxisStep(prev => prev <= LAST_SLIDE ? 0 : Math.round((prev - PERCENT_OF_WIDTH_FOR_NEXT_SWIPE)/100)*100);
        SetSlidePlace(slidePlace == slides.length-1 ? 0 : slidePlace + 1);
        
    };
    

    return (
        <>
            <button onClick={goLeft} className="button button-left">◄</button>
            <button onClick={goRight} className="button button-right">►</button>

            <div className="Slider"  onTouchStart={ (e) => TouchStartHandler(e)} onTouchEnd={(e)=> TouchStopHandler(e)} onTouchMove={(e) =>  TouchMoveHandler(e)}>
                {slides.map(slide => <Slide transformX={xAxisStep} key={slide} index={slide} />)}
            </div>

            <div className="Slider-pointer-wrapper">
                {slides.map(slide => <span onClick={() => GoToSlide(slide)} className={slide === slidePlace ? "pointer-active" : "pointer"} key={slide}>{slide + 1}</span>)}
            </div>
        </>
    )
}

export default Carousel