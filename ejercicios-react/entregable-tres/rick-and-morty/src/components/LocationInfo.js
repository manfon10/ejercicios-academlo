import React from 'react';

const LocationInfo = ({ name, type, dimension, residents }) => {
    return (
        <div className="LocationInfo">
            <h1> Location Info </h1>
            <div>
                <p>Type: { type } </p>
                <p>Dimension: { dimension } </p>
                <p>Population:  { residents } </p>
            </div>
        </div>
    );
};

export default LocationInfo;