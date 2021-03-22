import React, { useState } from 'react';
import "./App.css";
import Slide from './components/Slide';

const App = () => {
    const slides = [...Array(11).keys()];
    const [xAxisStep, SetXAxisStep] = useState(0);
    const [slidePlace, SetSlidePlace] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const TouchStartHandler = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const TouchStopHandler = (e) => {
        const touchDistance = touchStart -  e.changedTouches[0].clientX;

        if(window.innerWidth + Math.abs(touchDistance) > window.innerWidth * 1.5){
            touchDistance < 0 ? goLeft() : goRight();
        }else { SetXAxisStep(slidePlace * 100)}
        console.log({window: window.innerWidth, touch: touchDistance});
        setTouchStart(0)
        
    }

    const TouchMoveHandler = (e) => {
        const TouchMove = e.changedTouches[0].clientX;
        const touchDistance = touchStart -  e.changedTouches[0].clientX
        if(window.innerWidth/2 - Math.abs(touchDistance) > 0){
            SetXAxisStep(prev => touchStart < TouchMove ? prev+1 : prev-1)
        }
        
    }

    const goLeft = () => { 
        SetXAxisStep(prev => prev === 0 ? -100 * (slides.length -1) : Math.round((prev + 100)/100)*100);
        SetSlidePlace(slidePlace + 1);
    };
    const goRight = () => { 
        SetXAxisStep(prev => prev === -100 * (slides.length -1) ? 0 : Math.round((prev - 100)/100)*100);
        SetSlidePlace(slidePlace - 1);
    };
    console.log(xAxisStep);
    return (
        <div className="App">
            <h1 className="text">Task - slider</h1>
            <button onClick={goLeft} className="button button-left">◄</button>
            <button onClick={goRight} className="button button-right">►</button>

            <div className="Slider" onClick={() => console.log('heySlider')} onTouchStart={ (e) => TouchStartHandler(e)} onTouchEnd={(e)=> TouchStopHandler(e)} onTouchMove={(e) =>  TouchMoveHandler(e)}>
                {slides.map((slide) => <Slide transformX={xAxisStep} key={slide} index={slide} />)}
            </div>
        </div>

    )
}

export default App;