import React, { useEffect } from 'react';
import Header from '../components/Header';
import PostsList from '../components/PostsList';

const PostsPage = ({isButtonTrue}) => {
    useEffect(()=>{
        isButtonTrue();
    },[isButtonTrue])
    return (
        <div>
            <Header/>
            <PostsList/>
        </div>
    );
};

export default PostsPage;