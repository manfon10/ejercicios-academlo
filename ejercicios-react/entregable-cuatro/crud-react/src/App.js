import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import axios from 'axios';
import './App.css';

function App() {

  const [ users, setUsers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState({});

  useEffect( () => {
      axios.get('https://users-crud1.herokuapp.com/users/')
          .then( response => setUsers(response.data) );
  }, []);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then( response => setUsers(response.data) );
  }

  const addUser = user => {
    axios
      .post('https://users-crud1.herokuapp.com/users/', user)
      .then( response => getUsers() );
  }

  const selectedUser = user => {
    setUserSelected(user);
  }

  const updateUser = user => {
    axios
      .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
      .then( () => getUsers());
  }

  const deleteUser = user => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
      .then( () => getUsers());
  }

  return (
    <main className="Container">
      <div className="ContainerApp">
        <UsersForm 
          addUser={addUser} 
          userSelected={userSelected} 
          updateUser={updateUser}
        />
        <UsersList 
          users={users} 
          selectedUser={selectedUser}
          deleteUser={deleteUser}
        />
      </div>
    </main>
  );
}

export default App;
