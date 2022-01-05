import React from 'react';

export const ButtonConvert = ({ changeUnits }) => {
    return (
        <div className="ButtonConvert">
            <button onClick={ changeUnits }> Convertir</button>
        </div>
    )
}
