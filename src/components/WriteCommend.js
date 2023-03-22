import axios from 'axios';
import React, { useState } from 'react';
import './WriteCommend.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/config';
import { getCookie } from '../utill/cookie';
import PostCommend from './PostCommend';

const WriteCommend = ({postno}) => {
    // 로그인 여부
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const navigate = useNavigate();
    const user_nick = getCookie('usernickname');

    // 댓글 작성 상태관리
    const [formData, setFormData] = useState({
        c_nickname: user_nick,
        c_desc: '',
        c_postno: postno
    });

    // change 이벤트 
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // submit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        if(!isLogin) {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
        }else if(formData.c_desc === '') {
            alert('내용을 입력해주세요.');
        }else {
            axios.post(`${API_URL}/commend`, formData)
            .then(res => {
                alert('등록되었습니다.');
            })
            .catch(e => console.log(e));
        }
    }
    return (
        <>
            <PostCommend postno={postno}/>
            <form onSubmit={onSubmit}>
                <textarea placeholder='댓글을 입력해주세요' name='c_desc'
                value={formData.c_desc} onChange={onChange}/>
                <nav className='commend_btn'>
                    <button type='submit'>입력</button>
                </nav>
            </form>
        </>
    );
};

export default WriteCommend;