import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getProductsCartThunk, deleteItemCartThunk, buyProductsThunk, updateQuantityThunk } from '../../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons';
import './cart-styles.css';

const Cart = () => {

    const dispatch = useDispatch();

    const carts = useSelector( state => state.cartItems.cartItems);

    useEffect(() => {
        dispatch(getProductsCartThunk());
    }, [dispatch]);

    //En un useEffect cambiar tittle.

    const deleteItemCart = id => dispatch(deleteItemCartThunk(id));

    const subtotal = () => {

        let sum = 0;

        carts.map( price => {
            sum += parseInt(price?.product?.price) * price?.quantity;
        });

        return sum;
    }

    return (
        <section className="Container">
            <h2>shopping cart</h2>
            <form>
            <div className="CartItemContainer">
                {
                    carts.length === 0 ? (
                        <div className="CartItemCartVacuum"><p>You have nothing in your shopping cart. Continue Shopping</p></div>
                    ) : (
                        <table>
                            <thead>
                                <tr className="CartListLabel">
                                    <th></th>
                                    <th style={{ textAlign: 'left', color: '#afafaf', fontSize: 11}}> <p>Item</p></th>
                                    <th style={{ color: '#afafaf', fontSize: 11}}> <p>Quantity</p></th>
                                    <th style={{ textAlign: 'right', color: '#afafaf', fontSize: 11 }}> <p>Price</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts?.map( cart => (
                                        <tr key={cart.id} className="CartItemProduct">
                                            <td className="ItemRemove">
                                                <button onClick={ () => deleteItemCart(cart?.id)}><FontAwesomeIcon icon={faX} color="#a5a5a5" /></button>
                                            </td>
                                            <td className="ItemImage">
                                                <img src={cart?.product?.images[0]?.url} alt={cart.name} />
                                                <Link to={`/shop/${cart?.product?.id}`}>{cart?.product?.name}</Link>
                                            </td>
                                            <td className="ItemQuantity">
                                                <input type="text" value={cart?.quantity} onChange={ (e) => dispatch(updateQuantityThunk(cart.id, e.target.value )) }/>
                                            </td>
                                            <td className="ItemPrice">
                                                <p>$ {parseInt(cart?.product?.price) * cart?.quantity}.00</p>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
            {
                carts.length === 0 ? (
                    <div></div>
                ) : (
                    <div className="ItemSubTotal">
                        <p>Subtotal ${ subtotal() }.00</p>
                        <button onClick={ () => dispatch(buyProductsThunk()) }>Checkout</button>
                    </div>
                )
            }
            </form>
        </section>
    );
};

export default Cart;