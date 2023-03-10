import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostsList from '../components/PostsList';
import { API_URL } from '../config/config';
import { getDatas } from '../modules/Data';

// 콜백함수
const postsData = async () => {
    const data = await axios.get(`${API_URL}/posts`);
    return data;
}

const PostsContainer = () => {
    const { loading, data, error } = useSelector(state => state.postData.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDatas(postsData));
    }, [dispatch]);
    console.log(data);

    if(loading) return <div>로딩중...</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(error) return <div>에러 발생!</div>
    return (
        <PostsList data={data}/>
    );
};

export default PostsContainer;