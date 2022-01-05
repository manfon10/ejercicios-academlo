import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faWind, faThermometerQuarter } from '@fortawesome/free-solid-svg-icons';

export const CardWeather = ({ background, icon, country, city, description, centigrade, speed, clouds, pressure }) => {
    return (
        <div className="CardWeather">
            <section>
                <div className="infoApp" style={{ backgroundImage: `url(${ background })`}}>
                    <h1>Weather App</h1>
                    <p> { city } - { country } </p>
                </div>
                <div className="containerInfoCard">
                    <div className="infoWeatherIcon">
                        <h2> { description } </h2>
                        <img src={icon} alt="iconWeather"/>
                        <p> { centigrade } </p>
                    </div>
                    <div className="infoWeather">
                        <p> 
                            <FontAwesomeIcon icon={faWind} size="1x" />
                            { speed } m/s 
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCloud} size="1x" />
                             { clouds } % 
                        </p>
                        <p> 
                            <FontAwesomeIcon icon={faThermometerQuarter} size="1x" /> 
                            { pressure } md 
                        </p>
                    </div>
                </div>
            </section>   
        </div>
    )
}
