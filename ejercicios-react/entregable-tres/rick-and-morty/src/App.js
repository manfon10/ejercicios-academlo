import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import LocationInfo from "./components/LocationInfo";
import ResidenstList from "./components/ResidenstList";
import './App.css';

function App() {

  const [ locations, setLocations ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect( async () => {
    setIsLoading(true);
    await axios.get(`https://rickandmortyapi.com/api/location/${getNumber}`)
      .then( response => {
        setLocations( response.data )
        setIsLoading(false)
      });
  }, []);

  console.log(locations);

  return (
    <div className="containerApp">
      <div className="BackgroundHeader">
        <h1>Rick and Morty API</h1>
        <p>By Manuel Fonseca</p>
      </div>
        <SearchBox 
          setLocations={setLocations}
          locations={locations}
        />
        <LocationInfo 
          name={locations.name}
          type={locations.type}
          dimension={locations.dimension}
          residents={locations.residents?.length}
        />
        {
          isLoading ? (
            <div className="LoaderApp">
              <p></p>
            </div>
          ) : (
            <ResidenstList 
              locations={locations}
            />
          )
        }

    </div>
  );
}

const getNumber = Math.floor(Math.random() * 126) + 1;

export default App;
