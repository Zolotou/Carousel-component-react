import React from 'react';
import './Slide.css';

const Slide = ({index, transformX}) => {
    const sliderTheme = (sliderPlace) => {
        let theme 
        if( sliderPlace % 2 === 0) { theme = 'secondary'}
        if( sliderPlace % 3 === 0) { theme = 'third'}
        
        return theme
    }
    return (
        <div className="slide" style={{transform : `translateX(${transformX}%)`}}>
            <div className={`slide-content ${sliderTheme(index+1)}`}>
                <h1> Slide № {index + 1} </h1> 
            </div>
            
        </div>
    )
}

export default Slide