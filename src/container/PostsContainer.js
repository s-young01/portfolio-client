import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostsList from '../components/PostsList';
import { API_URL } from '../config/config';
import { getDatas } from '../modules/Data';

const PostsContainer = () => {
    const { loading, data, error } = useSelector(state => state.postData.posts);
    const dispatch = useDispatch();
    const {userpath} = useParams();
    console.log(userpath);

    // 콜백함수
    const postsData = async () => {
    const data = await axios.get(`${API_URL}/posts/${userpath}`);
    return data;
}
    
    useEffect(() => {
        dispatch(getDatas(postsData));
    }, [dispatch]);
    console.log(data);

    if(loading) return <div>로딩중...</div>
    if(!data) return <div className='posts'>
        {/* <div className='img_zone'>
            <img src='./images/img1.jpg' alt=''/>
        </div> */}
        <div className='text_zone'>
            <h3>당신의 첫 게시글을 작성해주세요!</h3>
            <p>Written Forest에 오신 걸 환영합니다<br/>
                상단 왼쪽 메뉴 버튼을 눌러 글쓰기를 시작해보세요
            </p>
            <nav>
                <span className='bold'>|</span>
                <span>Written_Forest</span>
            </nav>
        </div>
    </div>
    if(error) return <div>에러 발생!</div>
    return (
        <PostsList data={data}/>
    );
};

export default PostsContainer;