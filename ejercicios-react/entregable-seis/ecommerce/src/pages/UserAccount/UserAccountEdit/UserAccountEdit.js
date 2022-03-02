import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { accountEditThunk } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import './account-edit-style.css';

const UserAccountEdit = ({ data, setType }) => {

    const { handleSubmit, register, setValue } = useForm();

    const dispatch = useDispatch();

    useEffect( () => {
        if(data) {
            setValue("id", data.id);
            setValue("email", data.email);
            setValue("first_name", data.first_name);
            setValue("last_name", data.last_name);
        }
    }, [data]);

    const submit = (data) => {
        dispatch(accountEditThunk(data));
    }

    return (
        <section className="ContainerFormEdit">
            <form onSubmit={handleSubmit(submit)}>
                <input type="hidden" {...register("id")} />
                <div className="ContainerInputsName">
                    <div>
                        <p><strong>First Name</strong></p>
                        <input 
                            type="text"
                            placeholder="Firts Name"
                            {...register("first_name")}
                        />
                    </div>
                    <div>
                        <p><strong>Last Name</strong></p>
                        <input 
                            type="text"
                            placeholder="Last Name"
                            {...register("last_name")}
                        />
                    </div>
                </div>
                <div className="ContainerInputMail">
                    <div>
                        <p><strong>Email</strong></p>
                        <input 
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                    </div>
                </div>
                <button style={{ backgroundColor: '#ABEBC6', color: 'black' }} >Update</button>
                <button style={{ backgroundColor: '#F5B7B1 '}} onClick={ () => setType("") }>Cancel</button>
            </form>
        </section>
    );
};

export default UserAccountEdit;