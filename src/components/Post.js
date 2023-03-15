import React from 'react';
import './Post.scss';

const Post = ({data}) => {
    return (
        <div className='post_zone inner2'>
            <div className='head_zone'>
                <h1>{data.p_title}</h1>
                <nav>   
                    <span>{data.p_date}</span>
                    <span>|</span>
                    <span className='click_sp'>수정</span>
                    <span>|</span>
                    <span className='click_sp'>삭제</span>
                </nav>
            </div> 
            <div className='desc_zone'>
            <div dangerouslySetInnerHTML={{ __html: data.p_content.replace(/\n/g, '<br>') }} />
            </div>
            <div className='commend_zone'>
                <nav>
                    <span>댓글</span>
                    <span className='commend_count'>0</span>
                </nav>
                <textarea placeholder='댓글을 입력해주세요'/>
                <nav className='commend_btn'>
                    <button>입력</button>
                </nav>
            </div>
        </div>
    );
};

export default Post;