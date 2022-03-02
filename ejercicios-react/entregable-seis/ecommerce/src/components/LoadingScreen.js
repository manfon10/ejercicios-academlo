import React from 'react';
import { RotatingSquare } from  'react-loader-spinner';
import './loading-styles.css';

const LoadingScreen = () => {
    return (
        <div className="overlay">
            <RotatingSquare 
                heigth="100"
                width="100"
                color='white'
            />
        </div>
    );
};

export default LoadingScreen;