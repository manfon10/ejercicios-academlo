import React, { useEffect, useState } from 'react';
import UsersPost from './UsersPost';
import Pagination from './Pagination';

const UsersList = ({ users, selectedUser, deleteUser }) => {

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage ] = useState(4);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className="ContainerUsers">
            <UsersPost 
                users={currentPosts} 
                selectedUser={selectedUser} 
                deleteUser={deleteUser}
            />
            <Pagination 
                postsPerPage={postsPerPage}
                totalPosts={users.length}
                paginate={paginate}
            />
        </section>
    );
};

export default UsersList;