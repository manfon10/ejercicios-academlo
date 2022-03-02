import React, { useState, useEffect  } from 'react';
import { accountDetailThunk } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faBagShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Option } from '../../../utils';
import './account-styles.css';

const Account = () => {

    const [ type, setType ] = useState("UserAccount");
    const [ accountUser, setAccountUser ] = useState({});

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.setItem("tokenUser", "");
        navigate("/");
    }

    useEffect(() => {
        dispatch(accountDetailThunk())
            .then( res => setAccountUser(res.data) );
    }, [dispatch]);

    return (
        <section className="AcountInfo">
            <h2>ACCOUNT</h2>
            <div className="ContainerAccount">
                <div className="ItemMenu">
                    <p> Hi <strong>{accountUser.first_name} {accountUser.last_name}</strong> ! </p>
                    <button onClick={ () => setType("UserAccount")}><FontAwesomeIcon icon={faUserPen} color="#6f5d44" /> My account</button>
                    <button onClick={ () => setType("Orders")}><FontAwesomeIcon icon={faBagShopping} color="#6f5d44" /> Orders</button>
                    <button onClick={logOut}><FontAwesomeIcon icon={faRightFromBracket} color="#6f5d44" /> Log out</button>
                </div>
                <div className="ItemForms">
                    <Option type={type}/>
                </div>
            </div>
        </section>
    );
};

export default Account;