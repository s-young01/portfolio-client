import React, { useEffect } from 'react';
import Header from '../components/Header';
import PostsContainer from '../container/PostsContainer';

const PostsPage = ({isButtonTrue}) => {
    useEffect(()=>{
        isButtonTrue();
    },[isButtonTrue])
    return (
        <div>
            <Header/>
            <PostsContainer/>
        </div>
    );
};

export default PostsPage;