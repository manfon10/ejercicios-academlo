import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons } from '../../redux/actions';
import DateUser from '../auth/DateUser';
import SearchBox from './SearchBox';
import PokedexList from './PokedexList';
import Pagination from './Pagination';
import axios from 'axios';

const Pokedex = () => {

    const getPokemonsResult = useSelector( state => state.pokemons);
    const pagina = useSelector( state => state.pagina);
    const mode = useSelector(state => state.modeView);

    const dispatch = useDispatch();

    document.body.style = `background: ${ mode ? '#566573' : '#ECF0F1' }`;

    const [ currentPage, setCurrentPage ] = useState(0);
    const [ postsPerPage ] = useState(Number(pagina));

    const currentPokemons = getPokemonsResult?.slice(currentPage, currentPage + postsPerPage);

    const prevPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - postsPerPage);
        }
    }

    const nextPage = () => {
        if(getPokemonsResult.length > currentPage + postsPerPage) {
            setCurrentPage(postsPerPage + currentPage);
        }
    }

    console.log(currentPage)
    console.log(postsPerPage)

    useEffect( () => {
        dispatch(getPokemons());
    }, [dispatch]);

    return (
        <main>
            <DateUser />
            <div className="BottonConfig">
                <Link to='/config'>
                    <FontAwesomeIcon 
                        icon={faSlidersH} 
                        size="2x"
                        color={ mode ? 'white' : 'black'}
                    />
                </Link>
            </div>
            <SearchBox />
            <PokedexList 
                pokemons={currentPokemons} 
            />
            <Pagination
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Pokedex;