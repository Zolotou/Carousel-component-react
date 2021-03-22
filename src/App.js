import React, { useState } from 'react';
import "./App.css";
import Slide from './components/Slide';

const App = () => {
    const slides = [...Array(11).keys()];
    const [xAxisStep, SetXAxisStep] = useState(0);

    const goLeft = () => { 
        SetXAxisStep(prev => prev === 0 ? -100 * (slides.length -1) : prev + 100)
    };
    const goRight = () => { 
        SetXAxisStep(prev => prev === -100 * (slides.length -1) ? 0 : prev - 100) 
    };
    console.log(xAxisStep)
    return (
        <div className="App">
            <h1 className="text">Task - slider</h1>
            <button onClick={goLeft} className="button button-left">◄</button>
            <button onClick={goRight} className="button button-right">►</button>

            <div className="Slider">
                {slides.map((slide) => <Slide transformX={xAxisStep} key={slide} index={slide} />)}
            </div>
        </div>

    )
}

export default App;