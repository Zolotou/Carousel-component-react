import React from 'react';
import "./App.css";
import Carousel from './components/Carousel/Carousel';

const App = () => {
    const NUMBER_OF_SLIDES = 10;
    
    
    return (
        <div className="App">
            <h1 className="text">Features:</h1>
            <ul className="requirements">
                <li>Basic requrements are met</li>
                <li>Supports infinite option</li>
                <li>Supports scrolling to a selected slide</li>
                <li>NO npx | NO runtime libraries</li>
            </ul>
            <Carousel facts slidesCount={NUMBER_OF_SLIDES} infiniteOption={true} />
            
        </div>

    )
}

export default App;