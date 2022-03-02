import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { AlertScreen } from '../../components';
import './shop-styles.css';

const Shop = () => {

    const dispatch = useDispatch();

    const productsList = useSelector(state => state.products.products);

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    if( productsList.length === 0) {
        <>
            <AlertScreen message="The product was not found" severity="info" />
            <p>hola</p>
        </>
        
    }

    return (
        <main className="ContainerProducts">
            {
                productsList?.map( products => (
                    <Link to={`/shop/${products.id}`} key={products.id}>
                        <div className="ProductInfo">
                            <img 
                                src={products.images[0]?.url} 
                                alt={products.name}
                                onMouseOver={ e => e.currentTarget.src = products.images[1]?.url }
                                onMouseOut={ e => e.currentTarget.src = products.images[0]?.url }
                            />
                            <p style={{ fontWeight: 'bold', fontSize: 20}}> {products.name} </p>
                            <p> ${products.price} </p>
                        </div>
                    </Link>
                ))
            }
        </main>
    );
};

export default Shop;