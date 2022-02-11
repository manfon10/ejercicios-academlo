import axios from 'axios';

export const types = {
    nameUser: 'SET_NAME',
    setPokemons: 'GET_POKEMONS',
    paginate: 'SET_PAGINA',
    modeView: 'SET_VIEW',
    filterTypes: 'GET_FILTER_TYPES'
}

export const login = ( nameUser ) => ({
    type: types.nameUser,
    payload: {
        nameUser
    }
});

export const setPokemons = ( pokemons ) => ({
    type: types.setPokemons,
    payload: {
        pokemons
    }
});

export const pagination = ( pagina ) => ({
    type: types.paginate,
    payload: {
        pagina
    }
});

export const modeView = ( mode ) => ({
    type: types.modeView,
    payload: mode
});

export const getPokemons = () => {
    return (dispatch) => {
        //dispatch(setIsLoading(true));
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1118`)
            .then( response => dispatch(setPokemons(response.data.results)));
    }
}

export const filterTypes = (type) => {
    return (dispatch) => {
        //dispatch(setIsLoading(true));
        axios.get(`https://pokeapi.co/api/v2/type/${type}`)
            .then( response => dispatch(setPokemons(response.data.pokemon?.map( poke => poke.pokemon ))));
    }
}

export const filterName = (name) => {
    return (dispatch) => {
        //dispatch(setIsLoading(true));
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then( response => dispatch(setPokemons(response.data.forms)));
    }
}

//