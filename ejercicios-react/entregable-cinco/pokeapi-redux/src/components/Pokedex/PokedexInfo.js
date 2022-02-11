import React, { useState, useEffect } from 'react';
import { validateColor, validateBackground } from '../../assets/validateBackground';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokedexInfo = ({ pokemons }) => {

    const [ pokemon, setPokemon ] = useState({});
    const [ types, setTypes ] = useState("");
    const mode = useSelector(state => state.modeView);

    useEffect( () => {
        axios.get(pokemons.url)
            .then( response => {
                setPokemon(response.data)
                setTypes(response.data)
            });
    }, [pokemons.url]);

    let resultColor = validateColor(types);
    let resultBackground = validateBackground(types);

    return (
        <section className={ mode ? "ContainerInfoBlack" : "ContainerPokemon"}>
            <Link to={`/pokedex/${pokemon.name}`} >
                <div className="ContainerInfo">
                    <img src={resultBackground[0]} alt="" />
                    <div className="ImagePokemon">
                        <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
                    </div>
                    <p># {pokemon?.order}</p>
                    <h2> {pokemon?.name}</h2>
                    <div className="Paragraph">
                        {
                            pokemon?.types?.map( (type, i) => (
                                <p key={type.slot} style={{ background: `${resultColor[i]}`}}> {type.type?.name} </p>
                            ))
                        }
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default PokedexInfo;