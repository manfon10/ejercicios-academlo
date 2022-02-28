import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Button = ({background, changeQuote}) => {
    return (
        <>
            <button onClick={changeQuote} style={{ background: background }} >
                <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </button>
        </>
    );
};

export default Button;