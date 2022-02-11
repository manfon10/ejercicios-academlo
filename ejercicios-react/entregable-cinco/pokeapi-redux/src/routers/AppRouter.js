import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '../routers/ProtectedRoutes';
import NameUser from '../components/auth/NameUser';
import AppConfig from '../components/config/AppConfig';
import Pokedex from '../components/Pokedex/Pokedex';
import PokedexDetail from '../components/Pokedex/PokedexDetail';

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={ <NameUser /> } />
                <Route element={ <ProtectedRoutes /> }>       
                    <Route path="/pokedex" element={ <Pokedex /> } />
                    <Route path="/pokedex/:name" element={ <PokedexDetail /> }/>
                    <Route path="/config" element={ <AppConfig /> }/>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default AppRouter;