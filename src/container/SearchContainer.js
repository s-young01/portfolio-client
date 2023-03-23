import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchList from '../components/SearchList';
import { API_URL } from '../config/config';
import { getSearch } from '../modules/Search';

const SearchContainer = () => {
    const dispatch = useDispatch();
    const { userpath, text } = useParams();
    console.log(userpath, text)
    const {loading, data, error} = useSelector(state => state.searchData.search);

    const searchDatas = async () => {
        const data = await axios.get(`${API_URL}/search/${userpath}/${text}`);
        console.log(data)
        return data;
    }
    console.log(data);

    useEffect(() => {
        dispatch(getSearch(searchDatas));
    }, [dispatch, userpath, text]);

    if(loading) return <div>로딩중...</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(error) return <div>에러 발생 !</div>
    return (
        <SearchList data={data} text={text} userpath={userpath}/>
    );
};

export default SearchContainer;