import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AlertScreen } from '../components';
import { filterNameThunk } from '../redux/actions';
import './seach-styles.css';

const SearchBox = () => {

    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const submit = data => {
        dispatch(filterNameThunk(data.name))
            .catch( () => console.log('errorrr'));
    }

    return(
        <section className="SearchBox">
            <form onSubmit={handleSubmit(submit)}>
                <input 
                    type="text"
                    placeholder="Type to search"
                    {...register("name", { required: true })}
                />
            </form>
        </section>
    );
}

export default SearchBox