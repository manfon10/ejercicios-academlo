import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentsPost from './ResidentsPost';

const ResidentInfo = ({ residents }) => {

    return (
        <div className="containerResidents">
            {
               residents?.map( resident => <ResidentsPost residents={resident} key={resident} />)
            }
        </div>
    );
};

export default ResidentInfo;