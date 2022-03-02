import React from 'react';
import { Link } from 'react-router-dom';

const Beginning = () => {
    return (
        <div>
            <h1>Pagina de inicio</h1>
            <Link to="/shop">Shop Now</Link>
        </div>
    );
};

export default Beginning;