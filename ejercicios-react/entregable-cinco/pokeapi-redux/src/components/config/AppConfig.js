import React from 'react';
import { pagination, modeView } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faArrowLeft, faListOl } from '@fortawesome/free-solid-svg-icons';

const AppConfig = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mode = useSelector(state => state.modeView);

    document.body.style = `background: ${ mode ? '#566573' : '#ECF0F1' }`;

    return (
        <div className={ mode ? 'ContainerConfigBlack' : 'ContainerConfig'}>
            <button 
                onClick={ () => navigate("/pokedex")}> 
                <FontAwesomeIcon icon={faArrowLeft} size="2x" color={mode ? 'white' : 'black'}/>
            </button>
            <h1>Application Config</h1>
            <section>
                <div>
                    <h2> <FontAwesomeIcon icon={faListOl}/> - Select the total number of pokemons per page</h2>
                    <select onChange={ e => dispatch(pagination(e.target.value))} style={{ width: 150}}>
                        <option selected="selected"> Selected Option</option>
                        <option value="4">4</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="20">20</option>
                    </select> 
                </div>
                <div>
                    <h2> { mode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/> } - { mode ? 'Disabled dark mode' : 'Activated dark mode'}</h2>
                    <select onChange={ e => dispatch(modeView(e.target.value))} style={{ width: 150}}>
                        <option selected="selected"> Selected Option</option>
                        <option value={true}>Activated</option>
                        <option value={""}>Disabled</option>
                </select>
                </div>
            </section>
        </div>
    );
};

export default AppConfig;