import { types } from '../actions';

const INIT_STATE = {
    pokemons: [],
    pagina: 16,
    modeView: false,
    filterTypes: {}
}

const reducers = ( state = INIT_STATE, action ) => {

    switch (action.type) {
        case types.nameUser:
            return {
                ...state,
                nameUser: action.payload.nameUser
            }

        case types.setPokemons:
            return {
                ...state,
                pokemons: action.payload.pokemons
            }

        case types.paginate:
            return {
                ...state,
                pagina: action.payload.pagina
            }

        case types.modeView:
            return {
                ...state,
                modeView: action.payload
            }
    
        default:
            return state;
    }
}

export default reducers;