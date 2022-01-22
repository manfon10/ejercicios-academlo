import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

const UsersPost = ({ users, selectedUser, deleteUser }) => {

    return (
        <>
            {
                users.map( user => (
                    <section className="UsersPost">
                        <div>
                            <p key={user.id}><strong>{`${user.first_name} ${user.last_name}`}</strong></p>
                            <p>{user.email}</p>
                            <p><FontAwesomeIcon icon={faBirthdayCake} /> {user.birthday}</p>
                        </div>
                        
                        <button className="ButtonEdit" onClick={ () => selectedUser(user) }><FontAwesomeIcon icon={faEdit} /></button>
                        <button className="ButtonDelete" onClick={ () => deleteUser(user) }><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </section>
                ))
            }
        </>
    );
};

export default UsersPost;