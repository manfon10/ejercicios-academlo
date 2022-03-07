import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url) => {
    const [ weatherData, setWeatherData ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        setLoading(true);
            const successResult = async ( position ) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const apiKey = '57a085d7b75514a1993f2d8276e1ba1f';

                    await axios.get(`${url}weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                        .then((res ) => {
                            setWeatherData(res.data)
                            setLoading(false)
                        })
                        .catch(
                            (error) => {
                                setError(true);
                                setLoading(false);
                            }
                        );
            }

        navigator.geolocation.getCurrentPosition( successResult );

    }, []);

    return { weatherData, loading, error };
};

export default useApi;