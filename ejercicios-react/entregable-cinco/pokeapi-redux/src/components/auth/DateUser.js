import React from 'react';
import { useSelector } from 'react-redux';

const DateUser = () => {

    const nameUser = useSelector( state => state.nameUser);
    const mode = useSelector(state => state.modeView);

    return (
        <div className={ mode ? 'DateUserBlack' : 'DateUser'}>
            <h1>Pokedex</h1>
            <p>Welcome {nameUser}, here you can find favorite pokemon.</p>
        </div>
    );
};

export default DateUser;