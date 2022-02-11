import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTypes, filterName, getPokemons } from '../../redux/actions';
import axios from 'axios';

const SearchBox = () => {

    const dispatch = useDispatch();

    const [ types, setTypes ] = useState([]);
    const [ nameType, setNameType ] = useState("");

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => setTypes(response.data.results));
    }, []);

    const nameFilter = (e) => {
        if(e.key == 'Enter') {
            dispatch(filterName(e.target.value));
        }
    }

    return (
        <div className="SearchBox">
            <div>
                <select onChange={ e => dispatch(filterTypes(e.target.value)) }>
                    {
                        types?.map( type => (
                            <option key={type.name} value={type.name}> {type.name} </option>
                        ))
                    }
                </select>
            </div>
            <div>
                <input 
                    type="text" 
                    onKeyPress={nameFilter}
                    placeholder="Search by Name"
                />
            </div>
        </div>
    );
};

export default SearchBox;