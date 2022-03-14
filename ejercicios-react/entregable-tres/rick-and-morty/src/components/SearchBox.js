import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({ setLocations, locations }) => {

    const [ nameLocation, setNameLocation ] = useState("");
    const [ searchResult, setSearchResult ] = useState({});

    const getLocation = async (e) => {
        setNameLocation(e.target.value);
        await axios.get(`https://rickandmortyapi.com/api/location/?name=${nameLocation}`)
            .then( response => setSearchResult( response.data ));
    }

    const setLocationData = result => {
        setNameLocation("");
        setSearchResult({});
        setLocations(result);
    };

    return (
        <div className="SearchBox">
            <input type="text" value={nameLocation} onChange={ (e) => getLocation(e) } placeholder="Find by location"/>
                <div className="SearchBoxResult">
                    {
                        searchResult.results?.map( result => (
                            <li key={result.id} onClick={ () => setLocationData(result)}> { result.name } </li>
                        ))
                    }
                </div>
        </div>
    );
};

export default SearchBox;