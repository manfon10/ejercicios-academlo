import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Account } from '../pages';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import './navbar-styles.css';

const Navbar = () => {

    const carts = useSelector( state => state.cartItems.cartItems);

    return (
        <nav className="Navbar">
            <div>
                <Link to="/shop">
                    Shop
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
            </div>
            <div className="ItemsAccount">
                <div>
                    {
                        localStorage.getItem("tokenUser") && (
                            <Link to="/cart">
                                <FontAwesomeIcon icon={faCartShopping} size="1x"/>
                                <p className="ItemCartLenght">{carts.length}</p>
                            </Link> 
                        )
                    }
                </div>
                <div>
                    {
                        localStorage.getItem("tokenUser") && ( 
                            <Link to="/account">
                                <FontAwesomeIcon icon={faUser} size="1x"/>
                            </Link>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;