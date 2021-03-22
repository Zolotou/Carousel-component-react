import React from 'react';

const Slide = ({index, transformX}) => {
    return (
        <div className="slide" style={{transform : `translateX(${transformX}%)`}}>
            <div className="slide-content">
                <h1> Slide № {index + 1} </h1> 
            </div>
            
        </div>
    )
}

export default Slide