import React, { useState } from 'react';
import { login } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pokeball } from '../../assets/img/';

const NameUser = () => {

    const [ name, setName ] = useState("");
    const [ error, setError ] = useState({});

    const mode = useSelector(state => state.modeView);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === "") {
            setError({ msg: 'Name is required :('});
        }else {
            dispatch(login(name));
            navigate("/pokedex");
        }
    }

    return (
        <section className={mode ? 'NameUserBlack' : 'NameUser'}>
            <div>
                <img src={pokeball} alt="pokebola"/>
                <h1>Hello trainer!</h1>
                    <form onSubmit={handleSubmit}>
                        <p>Give me your name to start</p>
                        <input 
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={ e => setName(e.target.value) }
                        />
                        <button>Save</button>
                        {
                            error && (<p> {error.msg} </p>)
                        }
                    </form>
            </div>
        </section>
    );
};

export default NameUser;