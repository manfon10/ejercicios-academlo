import React, { useState } from 'react';
import ResidentInfo from './ResidentInfo';
import Pagination from './Pagination';

const ResidenstList = ({ locations, setloading }) => {

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage ] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = locations.residents?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="ResidentList">
            <h1>Residents Location - { locations.name}</h1>
            <ResidentInfo 
                residents={currentPosts}
            />
            <Pagination 
                postsPerPage={postsPerPage} 
                totalPosts={locations.residents?.length} 
                paginate={paginate} 
            />
        </div>
    );
};

export default ResidenstList;