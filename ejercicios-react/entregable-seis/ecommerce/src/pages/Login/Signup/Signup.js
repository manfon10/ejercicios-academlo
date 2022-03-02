import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../../../redux/actions';
import './Signup-styles.css';

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const submit = data => {
        dispatch(signupThunk(data));
    }

    return (
        <section className="ContainerSignup">
            <p><strong>SIGN UP</strong></p>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="NamesForm">
                        <div>
                            <p>LAST NAME:</p>
                            <input 
                                type="text"
                                {...register("last_name", { required: true })}
                            />
                        </div>
                        <div>
                            <p>FIRTS NAME:</p>
                            <input 
                                type="text"
                                {...register("first_name", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="DatesForm">
                        <p>EMAIL:</p>
                        <input 
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="DatesForm">
                        <p>PASSWORD:</p>
                        <input 
                            type="password"
                            {...register("password", { required: true })}
                        />
                    </div>
                    <div style={{ textAlign: 'center'}}>
                        <button className="ButtonLogin">Create</button>
                    </div>
                </form>
        </section>
    );
};

export default Signup;