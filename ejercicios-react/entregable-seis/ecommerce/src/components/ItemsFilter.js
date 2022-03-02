import React from 'react';
import { filterCategoryProductThunk, getProductsThunk } from '../redux/actions';
import { useDispatch } from 'react-redux';
import './items-styles.css';


const ItemsFilter = () => {

    const dispatch = useDispatch();

    return (
        <section className="ItemsFilter">
            <ul>
                <li onClick={ () => dispatch(getProductsThunk()) }>All</li>
                <li onClick={ () => dispatch(filterCategoryProductThunk(1)) }>Earrings</li>
                <li onClick={ () => dispatch(filterCategoryProductThunk(2)) }>Necklaces</li>
                <li onClick={ () => dispatch(filterCategoryProductThunk(3)) }>Rings</li>
                <li onClick={ () => dispatch(filterCategoryProductThunk(4)) }>Bracelets</li>
            </ul>
        </section>
    );
};

export default ItemsFilter;