import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ addUser, userSelected, updateUser }) => {

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({
        defaultValues: userSelected
    });

    useEffect(() => {
        if(userSelected.id) {
            setValue('first_name', userSelected.first_name);
            setValue('last_name', userSelected.last_name);
            setValue('email', userSelected.email);
            setValue('birthday', userSelected.birthday);
            setValue('password', userSelected.password);
        }
    }, [userSelected]);

    const onSubmit = (data, e) => {
        e.preventDefault();
            if(userSelected.id) {
                updateUser(data);
            }else {
                addUser(data);
            }
        e.target.reset();
    }

    const deselectUser = () => register("");
  
    return (
        <section className="ContainerFormUsers">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>New User</h1>
                <div className="UsersForm">
                    <input 
                        type="text" 
                        placeholder="First name" 
                        {...register("first_name", {required: true})} />
                    <input 
                        type="text" 
                        placeholder="Last name" 
                        {...register("last_name", {required: true})} />
                    <div>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                        <input 
                            type="password" 
                            placeholder="Password" {...register("password", {required: true})} />
                        <input 
                            type="date" 
                            placeholder="Birthday" 
                            {...register("birthday", {required: true})} />
                    </div>
                    {
                        errors && (
                            <div className="AlertForm">
                                {errors.first_name?.type === 'required' && <p>First name is required</p>}
                                {errors.last_name?.type === 'required' && <p>First name is required</p>}
                                {errors.password?.type === 'required' && <p>Password can't go empty</p>}
                                {errors.birthday?.type === 'required' && <p>birthday is required</p>}
                            </div>
                        )
                    }
                    <button className="ButtonUpload">Upload User</button>
                    {
                        userSelected.id && <button className="ButtonCancel" onClick={deselectUser} id="ButtonCancel">Cancel</button>
                    }
                </div>
            </form>
        </section>
    );
};

export default UsersForm;