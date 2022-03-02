import React, { useState } from 'react';
import { Option } from '../../../utils';
import './menu-style.css';

const Menu = () => {

    const [ type, setType ] = useState("Login");

    return (
        <main className="ContainerMenu">
            <div className="ContainerButtonsLogin">
                <button onClick={ () => setType("Signup") }><strong>CREATE ACCOUNT</strong></button>
                <button onClick={ () => setType("Login") }><strong>ALREADY REGISTERED</strong></button>
            </div>
            <Option type={type}/>
        </main>
    );
};

export default Menu;