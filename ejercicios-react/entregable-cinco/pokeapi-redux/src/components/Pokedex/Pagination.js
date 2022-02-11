import React from 'react';
import { useSelector } from 'react-redux';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];
    const mode = useSelector(state => state.modeView);


    for( let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="Pagination">
            <ul>
                {
                    pageNumbers.map( number => (
                        <li key={number} onClick={ () => paginate(number)} className={ mode ? 'pagesRepliesBlack' : 'pagesReplies'}> { number } </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;