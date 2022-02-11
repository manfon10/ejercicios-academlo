import React from 'react';
import PokedexInfo from './PokedexInfo';

const PokedexList = ({ pokemons }) => {

    return (
        <div className="ContainerList">
            {
                pokemons?.map( pokemon => (
                    <PokedexInfo pokemons={pokemon} key={pokemon.name}/>
                ))
            }
        </div>
    );
};

export default PokedexList;