import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailThunk, addProductCart, filterCategoryThunk } from '../../redux/actions';
import { useForm } from 'react-hook-form';
import { AlertScreen } from '../../components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './shopDetail-styles.css';

const ShopDetail = () => {

    const { id } = useParams();
    
    const dispatch = useDispatch();

    const productDetail = useSelector( state => state.products?.productDetail);
    const productCategory = useSelector( state => state.products?.productsCategory);
    const alertLoading = useSelector( state => state.app.alertLoading);

    const { register, handleSubmit } = useForm();

    const [ url, setUrl ] = useState("");

    useEffect( () => {
        setUrl(productDetail?.images?.[0]?.url);
    }, [productDetail]);

    useEffect(() => {
        dispatch(getProductDetailThunk(id))
    }, [dispatch, id]);

    const addToCart = (data) => {
        const product = {
            product: productDetail?.id,
            quantity: data.quantity
        }

        dispatch(addProductCart(product))
            .then( () => <AlertScreen message="Se a agregado el producto al carrito" severity="success" /> );
    }

    return (
        <>
            <div className="ContainerProductDetail">
                <section className="ImagesCarrucel">
                    <div>
                        {
                            productDetail.images?.map( images => (
                                <div key={images.id}>
                                    <img 
                                        src={images.url} 
                                        alt={images.id} 
                                        className="ImagesGallery"
                                        onClick={ () => setUrl(images.url)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <label className="GalleryThumb">
                        <img src={url} alt={productDetail.name} className="ImagesGallery" /> 
                    </label>
                </section>
                <section className="ProductoInfo">
                    <h1  style={{fontSize: 30}}>{productDetail.name}</h1>
                    <p style={{fontSize: 20}}>${productDetail.price}</p>
                    <p>DESCRIPTION</p>
                    <p>{productDetail.description}</p>
                    <p>Quantity:</p>
                    <form onSubmit={handleSubmit(addToCart)}>
                        <input 
                            type="number"
                            min="1"
                            {...register("quantity", { required: true })}
                        />
                        <button>Add To Cart</button>
                    </form>
                </section>
            </div>
            <div className="AlertAddCart">
                { alertLoading && <AlertScreen message="Product add to cart"/> }
            </div>
            <section className="ProductsCategory">
                <h1>You Might Also Like</h1>
                <div className="ContainerProductsCategory">
                    {
                        productCategory?.map( category => (
                            <Link to={`/shop/${category?.id}`} key={category?.id}>
                                <div>
                                    <img 
                                        src={category?.images[0]?.url} alt={category?.name}
                                        onMouseOver={ e => e.currentTarget.src = category.images[2]?.url }
                                        onMouseOut={ e => e.currentTarget.src = category.images[0]?.url }
                                    />
                                    <div>
                                        <p style={{fontWeight: 'bold' }}> {category.name} </p>
                                        <p> ${category.price} </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default ShopDetail;