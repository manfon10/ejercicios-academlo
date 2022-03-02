import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrdersThunk } from '../../../redux/actions';
import './orders-styles.css';

const Orders = () => {

    const orders = useSelector( state => state.orders.orders);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getOrdersThunk());
    }, [dispatch]);

    return (
        <div className="OrdersContainer">
            <h2>My Orders</h2>
            <table>
                <thead>
                    <tr className="CartListLabel">
                        <th style={{ textAlign: 'center', color: '#afafaf', fontSize: 15}}>Order ID</th>
                        <th style={{ textAlign: 'center', color: '#afafaf', fontSize: 15}}>Category</th>
                        <th style={{ textAlign: 'left', color: '#afafaf', fontSize: 15}}>Item</th>
                        <th style={{ textAlign: 'center', color: '#afafaf', fontSize: 15}}>Price</th>
                        <th style={{ textAlign: 'center', color: '#afafaf', fontSize: 15}}>Quantity</th>
                        <th style={{ textAlign: 'center', color: '#afafaf', fontSize: 15}}>Total</th>
                        <th style={{ textAlign: 'center', color: '#afafaf', fontSize: 15}}>Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map( order => (
                            <tr key={order.id} className="CartItemProduct">
                                <td className="ItemOrder"> {order.id} </td>
                                <td className="ItemOrder"> {order.product?.category?.name} </td>
                                <td className="ItemImage">
                                    <img src={order.product?.images[0]?.url} alt="" style={{width: 100}} />
                                    <Link to={`/shop/${order.product?.id}`}>
                                        <p>{order.product?.name}</p>
                                    </Link>
                                </td>
                                <td className="ItemOrder">${order.product?.price}</td>
                                <td className="ItemOrder">{order?.quantity}</td>
                                <td className="ItemOrder">${ parseInt(order?.product?.price) * order?.quantity }.00</td>
                                <td className="ItemOrder">{order?.purchase_date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;