import React, { useState, useEffect} from 'react';
import Loader from "react-loader-spinner";
import axios from 'axios';
import { CardWeather }  from './components/CardWeather';
import { ButtonConvert } from './components/ButtonConvert';
import { background } from './imageBackground';
import './App.css';

function App() {

  const [ weatherData, setWeatherData ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ units, setUnits ] = useState(false);

  useEffect(() => {
    setLoading(true);
    const successResult = async ( position ) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = '57a085d7b75514a1993f2d8276e1ba1f';
        await axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
          .then( 
            (response) => {
              setWeatherData(response.data)
              setLoading(false);
            }
          )
          .catch(
            (error) => {
              setError(true);
              setLoading(false);
            }
          );
    }

    navigator.geolocation.getCurrentPosition( successResult );

  }, []);

  let icon = `http://openweathermap.org/img/wn/${weatherData.weather?.[0].icon}@2x.png`;
  let kelvin = weatherData.main?.temp;
  let centigrade = kelvin - 273.15;
  centigrade = centigrade.toFixed(2);

  const changeUnits = () => {
    return setUnits(!units);
  }

  const getBackgroundImages = ( description ) => background.find( image => image.description === weatherData.weather?.[0].description );

  const back = getBackgroundImages( weatherData.weather?.[0].description );

  const backgroundData = background.filter( back => back.description === weatherData.weather?.[0].description);

  let backgroundResult = backgroundData?.[0]?.src;

  return (
    <div className="container">
      {
        loading ? (
          <div className="Loader">
            <Loader
              type="Bars"
              color="black"
              height={80}
              width={80}
            />
          </div>
        ) : error ? (
          <div><p> Hay un error en la peticion, intente nuevamente! </p></div>
        ) : (
          <div className="containerCard">
            <CardWeather
              icon={icon}
              city={weatherData.name}
              country={weatherData.sys?.country}
              description={weatherData.weather?.[0].description}
              centigrade={units ? `${centigrade} °C` : `${centigrade * 1.8 + 32} °F`}
              speed={weatherData.wind?.speed}
              clouds={weatherData.clouds?.all}
              pressure={weatherData.main?.pressure}
              background={backgroundResult}
            />
            <ButtonConvert
              changeUnits={changeUnits}
            />
          </div>
        )
      }
    </div>
  );

}

export default App;
