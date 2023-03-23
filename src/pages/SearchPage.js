import React, { useEffect } from 'react';
import Header from '../components/Header';
import SearchContainer from '../container/SearchContainer';

const SearchPage = ({isButtonTrue}) => {
    useEffect(()=>{
        isButtonTrue();
    },[isButtonTrue]);
    return (
        <>
            <Header/>
            <SearchContainer/>
        </>
    );
};

export default SearchPage;