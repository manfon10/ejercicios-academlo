import {
    bug,
    dark,
    dragon,
    electric, 
    fairy,
    flying, 
    ghost,
    grass,
    ground, 
    ice,  
    normal, 
    poison,  
    psychic,
    rock,  
    steel, 
    water, 
    fighting,
    fire
} from './img/index';

const backgroundPokemons = [
    {
        src: electric,
        type: 'electric',
        color: "#F7DC6F"
    },
    {
        src: fairy,
        type: 'fairy',
        color: "#EC7063" 
    },
    {
        src: fire,
        type: 'fire',
        color: "#DC7633"
    },
    {
        src: flying,
        type: 'flying',
        color: "#7FB3D5" 
    },
    {
        src: ground,
        type: 'ground',
        color: "#F5B041"
    },
    {
        src: poison,
        type: 'poison',
        color: "#BB8FCE"
    },
    {
        src: water,
        type: 'water',
        color: "#5DADE2"
    },
    {
        src: fighting,
        type: 'fighting',
        color: "#AF601A"
    },
    {
        src: normal,
        type: 'normal',
        color: "#AEB6BF"
    },
    {
        src: grass,
        type: 'grass',
        color: "#82E0AA"
    },
    {
        src: bug,
        type: 'bug',
        color: "#2ECC71"
    },
    {
        src: psychic,
        type: 'psychic',
        color: "#C39BD3"
    },
    {
        src: rock,
        type: 'rock',
        color: "#7F8C8D"
    },
    {
        src: ice,
        type: 'ice',
        color: "#AED6F1"
    },
    {
        src: ghost,
        type: 'ghost',
        color: "#6C3483"
    },
    {
        src: dark,
        type: 'dark',
        color: "#1C2833"
    },
    {
        src: steel,
        type: 'steel',
        color: "#AED6F1"
    },
    {
        src: dragon,
        type: 'dragon',
        color: "#2874A6"
    },
];

export const validateColor = (pokemon) => {
    let arregloTypes = [];
    let result = [];

    pokemon?.types?.map( (type, i) => {
        arregloTypes.push(type.type.name);
        const getBackground = tipo => backgroundPokemons.filter( (img) => img.type === arregloTypes[i] );
        let getBackgroundFilter = getBackground(arregloTypes);
        result.push(getBackgroundFilter[0]?.color);
    });
    return result;
}

export const validateBackground = (pokemon) => {
    let arregloTypes = [];
    let result = [];

    if(pokemon?.types?.length >= 2) {
        let typePokemon = pokemon?.types?.slice(1, );
        typePokemon?.map( (type, i) => {
            arregloTypes.push(type.type.name);
            const getBackground = tipo => backgroundPokemons.filter( (img) => img.type === arregloTypes[i] );
            let getBackgroundFilter = getBackground(arregloTypes);
            result.push(getBackgroundFilter[0]?.src);
        });
    }else if(pokemon?.types?.length <= 1) {
        let typePokemon = pokemon?.types?.slice(0, );
        typePokemon?.map( (type, i) => {
            arregloTypes.push(type.type.name);
            const getBackground = tipo => backgroundPokemons.filter( (img) => img.type === arregloTypes[i] );
            let getBackgroundFilter = getBackground(arregloTypes);
            result.push(getBackgroundFilter[0]?.src);
        });
    }
    
    return result;
    console.log(result);
}