import React from 'react';
import { Navbar } from '.';
import { FooterApp } from '../pages';
import { Outlet } from 'react-router-dom';

const MainLayaout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <FooterApp />
        </div>
    );
};

export default MainLayaout;