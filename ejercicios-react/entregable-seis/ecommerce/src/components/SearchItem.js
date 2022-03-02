import React from 'react';
import SearchBox from './SearchBox';
import ItemsFilter from './ItemsFilter';
import { Outlet } from 'react-router-dom';

const SearchItem = () => {

    return (
        <>
            <SearchBox />
            <ItemsFilter />
            <Outlet />
        </>
    );
};

export default SearchItem;