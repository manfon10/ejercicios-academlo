import React from 'react';

const Pagination = ({ nextPage, prevPage, currentPage }) => {

    return (
        <div className="Pagination">
            {
                currentPage === 0 ? ("") : (<button onClick={ prevPage }>Previous</button>)
            }
            <button onClick={ nextPage }>Next</button>
        </div>
    );
};

export default Pagination;