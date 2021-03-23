import React, { useState } from 'react';
import "./App.css";
import Carousel from './components/Carousel';

const App = () => {
    
    return (
        <div className="App">
            <h1 className="text">Task - slider</h1>
            <Carousel slidesCount={20} />
            
        </div>

    )
}

export default App;