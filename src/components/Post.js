import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/config';
import { getCookie } from '../utill/cookie';
import './Post.scss';
import WriteCommend from './WriteCommend';

const Post = ({data}) => {
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const user_nick = getCookie('usernickname');

    const no = data.p_no;
    const navigate = useNavigate();
    
    // 게시글 삭제 버튼
    const postDelete = () => {
        if(window.confirm('이 글 및 이미지 파일이 완전히 삭제됩니다. 삭제하시겠습니까?')) {
            axios.delete(`${API_URL}/delatepost/${no}`)
            .then(res => {
                alert('삭제되었습니다.');
                navigate(-1);
            })
            .catch(e => console.log(e));
        }else {
            return null;
        }
    }
    return (
        <div className='post_zone inner2'>
            <div className='head_zone'>
                <h1>{data.p_title}</h1>
                <nav>
                    {isLogin ? null 
                    : <><span>{data.p_writer}</span>
                    <span>|</span></> }   
                    <span>{data.p_date}</span>
                    {isLogin && user_nick ?
                    <><span>|</span>
                    <Link to={`/modifypost/${data.p_no}`}><span className='click_sp'>수정</span></Link>
                    <span>|</span>
                    <span className='click_sp' onClick={postDelete}>삭제</span></>
                    : null}
                </nav>
            </div> 
            <div className='desc_zone'>
                <div dangerouslySetInnerHTML={{ __html: data.p_content.replace(/\n/g, '<br>') }} />
            </div>
            <WriteCommend postno={data.p_no}/>
        </div>
    );
};

export default Post;