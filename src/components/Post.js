import React from 'react';
import './Post.scss';

const Post = ({data}) => {
    // html 태그까지 출력되는 걸 정규식으로 없애기
    const htmlReg = /(<([^>]+)>)/gi;
    // &nbsp; 를 줄바꿈으로 바꾸기
    const newlineReg = /(&nbsp;)/g;
    return (
        <div className='post_zone inner2'>
            <div className='head_zone'>
                <h1>{data.p_title}</h1>
                <nav>   
                    <span>{data.p_date}</span>
                    <span>|</span>
                    <span>수정</span>
                    <span>|</span>
                    <span>삭제</span>
                </nav>
            </div> 
            <div className='desc_zone'>
                <img src='./images/img1.jpg' alt=''/>
                <p>{`${data.p_content}`.replace(htmlReg, '').replace(newlineReg, '')}</p>
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