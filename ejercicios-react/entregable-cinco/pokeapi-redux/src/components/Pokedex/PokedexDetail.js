import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { validateColor, validateBackground } from '../../assets/validateBackground';

const PokedexDetail = () => {

    const { name } = useParams();

    const [ pokemon, setPokemon ] = useState({});
    const [ info, setInfo] = useState("About");

    const mode = useSelector(state => state.modeView);

    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => setPokemon(response.data) );
    }, [name]);

    let resultColor = validateColor(pokemon);
    let resultBackground = validateBackground(pokemon);

    mode === false && (document.body.style = `background: ${resultColor[0]}`);

    return (
        <section className={ mode ? 'ContainerPokemonDetailBlack' : 'ContainerPokemonDetail'}>
            <h1>{ pokemon?.forms?.[0]?.name }</h1>
            <p><strong>{`#${pokemon?.order}`}</strong></p>
            <button onClick={ () => navigate("/pokedex")}> <FontAwesomeIcon icon={faArrowLeft} size="2x" color={mode ? 'white' : 'black'}/></button>
            <div className="ContainerPokemonInfo">
                <div className="ImagePokemon">
                    <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="" />
                </div>
                <div className={mode ? 'InfoPokemonBlack' : 'InfoPokemon' } style={{ backgroundColor: '#bdc0c4'}}>
                    <div className="PokemonInfoStats">
                        <div className={ mode ? 'AboutPokemonBlack' : 'AboutPokemon'}>
                            <h1>About Pokemon</h1>
                            <div>
                                <p>Height</p>
                                <p>{pokemon?.height}</p>
                                <p>Weight</p>
                                <p>{pokemon?.weight}</p>
                                <p>Abilities</p>
                                <p>{pokemon?.abilities?.map( ability => `${ability.ability.name} `)}</p>
                                <p>Base Experience</p>
                                <p>{pokemon?.base_experience}</p>
                            </div>
                        </div>
                        <div className={ mode ? 'StatsProgressBlack' : 'StatsProgress'}>
                            <h1>Stats Pokemon</h1>
                            <div>
                                <p>{pokemon?.stats?.[0]?.stat?.name}</p>
                                <p>{pokemon?.stats?.[0]?.base_stat}</p>
                                <progress 
                                    max="100" 
                                    value={pokemon?.stats?.[0]?.base_stat}
                                > {pokemon?.stats?.[0]?.base_stat} 
                                </progress>
                                <p>{pokemon?.stats?.[1]?.stat?.name}</p>
                                <p>{pokemon?.stats?.[1]?.base_stat}</p>
                                <progress 
                                    max="100" 
                                    value={pokemon?.stats?.[1]?.base_stat}
                                > {pokemon?.stats?.[1]?.base_stat} 
                                </progress>
                                <p>{pokemon?.stats?.[2]?.stat?.name}</p>
                                <p>{pokemon?.stats?.[2]?.base_stat}</p>
                                <progress 
                                    max="100" 
                                    value={pokemon?.stats?.[2]?.base_stat}
                                > {pokemon?.stats?.[2]?.base_stat} 
                                </progress>
                                <p>{pokemon?.stats?.[3]?.stat?.name}</p>
                                <p>{pokemon?.stats?.[3]?.base_stat}</p>
                                <progress 
                                    max="100" 
                                    value={pokemon?.stats?.[3]?.base_stat}
                                > {pokemon?.stats?.[3]?.base_stat} 
                                </progress>
                            
                                <p>{pokemon?.stats?.[4]?.stat?.name}</p>
                                <p>{pokemon?.stats?.[4]?.base_stat}</p>
                                <progress 
                                    max="100" 
                                    value={pokemon?.stats?.[4]?.base_stat}
                                > {pokemon?.stats?.[4]?.base_stat} 
                                </progress>     
                                <p>{pokemon?.stats?.[5]?.stat?.name}</p>
                                <p>{pokemon?.stats?.[5]?.base_stat}</p>
                                <progress 
                                    max="100" 
                                    value={pokemon?.stats?.[5]?.base_stat}
                                > {pokemon?.stats?.[5]?.base_stat} 
                                </progress>
                            </div>
                        </div>
                        <div className={mode ? 'ParagraphDetailBlack' : 'ParagraphDetail'}>
                            <h1>Types</h1>
                            <div>
                                {
                                    pokemon?.types?.map( (type, i) => (
                                        <p key={type.slot} style={{ background: `${resultColor[i]}`}}> {type.type?.name} </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={mode ? 'PokemonInfoMoventsBlack' : 'PokemonInfoMovents'}>
                        <div>
                        <h1>Movements</h1>
                            {
                                pokemon?.moves?.map( move => (
                                    <p>{move?.move?.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PokedexDetail;