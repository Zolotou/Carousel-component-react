import React from 'react';

const Slide = ({index, transformX}) => {
    return (
        <div className="slide" style={{transform : `translateX(${transformX}%)`}}>Slide № {index + 1}</div>
    )
}

export default Slide