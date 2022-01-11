import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import LocationInfo from "./components/LocationInfo";
import ResidenstList from "./components/ResidenstList";
import './App.css';

function App() {

  const [ locations, setLocations ] = useState({});
  const [ isLoading, setisLoading ] = useState(false);

  useEffect( async () => {
    setisLoading(true);
    await axios.get(`https://rickandmortyapi.com/api/location/${getNumber}`)
      .then( response => {
        setLocations( response.data )
        setisLoading(false);
      });
  }, []);

  return (
    <div className="containerApp">
      <>
        {
          isLoading ? (
            <div className="LoaderApp"></div>
          ) : (
          <>
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
            <ResidenstList 
              locations={locations}
            />
          </>
        )
        }
      </>
    </div>
  );
}

const getNumber = Math.floor(Math.random() * 126) + 1;

export default App;
