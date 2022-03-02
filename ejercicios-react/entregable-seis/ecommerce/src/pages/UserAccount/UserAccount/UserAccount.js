import React, { useState, useEffect } from 'react';
import { accountDetailThunk } from '../../../redux/actions';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Option } from '../../../utils';
import './userAccount-styles.css';

const UserAccount = () => {

    const navigate = useNavigate();

    const [ accountUser, setAccountUser ] = useState({});
    const [ type, setType ] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(accountDetailThunk())
            .then( res => setAccountUser(res.data) );
    }, [dispatch]);

    return (
        <main>
            <h2>User data</h2>
            <section className="UserForm">
                <div>
                    <h3 style={{ color: '#6f5d44' }}>Personal Information</h3>
                    <p><FontAwesomeIcon icon={faUser} size="1x" color="#6f5d44"/> {accountUser?.first_name} {accountUser?.last_name}</p>
                    <p><FontAwesomeIcon icon={faEnvelope} size="1x" color="#6f5d44"/> {accountUser?.email}</p>
                    <button onClick={ () => setType("UserAccountEdit") }>Edit <FontAwesomeIcon icon={faPenToSquare} size="1x" /></button>
                </div>
                {
                    type && (
                        <div>
                            <Option type={type} data={accountUser} setType={setType}/>
                        </div>
                    )
                }
            </section>
        </main>
    );
};

export default UserAccount;