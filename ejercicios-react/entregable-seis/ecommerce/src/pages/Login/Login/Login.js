import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { loginThunk } from '../../../redux/actions';
import { AlertScreen } from '../../../components';
import { Option } from '../../../utils';
import './login-styles.css';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ loginError , setLoginError ] = useState("");

    const dispatch = useDispatch();

    const submit = data => {
        dispatch(loginThunk(data))
            .catch( () => setLoginError("Incorrect credentials"));
    }

    return (
        <section className="ContainerLogin">
            <p><strong>SIGN IN WHIT EMAIL</strong></p>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <p>EMAIL:</p>
                    <input 
                        type="email"
                        {...register("email", { required: true })}
                    />
                </div>
                <div>
                    <p>PASSWORD:</p>
                    <input 
                        type="password"
                        {...register("password", { required: true })}
                    />
                </div>
                <button className="ButtonLogin"><strong>SIGN IN</strong></button>
            </form>
            <div>
            {
                errors && (
                    <div className="AlertsLogin">
                        { errors.email?.type === 'required' && <AlertScreen message="Email is required" severity="error"/> }
                        { errors.password?.type === 'required' && <AlertScreen message="Password is required" severity="error"/> }
                    </div>
                )
            }
            {
                loginError && (
                    <div>
                        <AlertScreen message={loginError} severity="error" />
                    </div>
                )
            }
            </div>
            <div className="ContainerTestAccount">
                <p><strong>TEST ACCOUNT</strong></p>
                <p><FontAwesomeIcon icon={faUser} /> admin@admin.com</p>
                <p><FontAwesomeIcon icon={faKey} /> root</p>
            </div>
        </section>
    );
};

export default Login;