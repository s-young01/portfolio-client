import React, { useEffect } from 'react';
import Header from '../components/Header';
import Share from '../components/Share';
import PostContainer from '../container/PostContainer';

const PostPage = ({isButtonTrue}) => {
    useEffect(()=>{
        isButtonTrue();
    },[isButtonTrue]);
    return (
        <div className='post'>
            <Header/>
            <Share/>
            <PostContainer/>
        </div>
    );
};

export default PostPage;