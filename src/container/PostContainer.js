import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getData } from '../modules/Data';
import Post from '../components/Post';
import { API_URL } from '../config/config';
import axios from 'axios';

const PostContainer = () => {
    // 콜백함수
    const postData = async () => {
        const data = await axios.get(`${API_URL}/post/${no}`);
        return data;
    }

    const{loading, data, error} = useSelector(state => state.postData.post);
    const dispatch = useDispatch();

    const {no} = useParams();
    useEffect(() => {
        dispatch(getData(postData));
    }, [dispatch]);

    if(loading) return <div>로딩중..</div>
    if(error) return <div>에러 발생!</div>
    if(!data) return <div>데이터가 없습니다.</div>
    console.log(data)
    return (
        <Post data={data}/>
    );
};

export default PostContainer;