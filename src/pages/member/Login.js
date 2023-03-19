import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.scss'
import { API_URL } from '../../config/config';
import { setLogin } from '../../modules/LoginCheck';
import { setCookie } from '../../utill/cookie';
import './Login.scss';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        userid: '',
        userpw: ''
    });

    // input Change 이벤트
    const onChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    // form 전송 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        if(loginData.userid === '' || loginData.userpw === '') {
            alert('모든 입력란을 입력해주세요');
        }else {
            axios.post(`${API_URL}/login`, loginData)
            .then(result => {
                console.log(result)
                const {m_id, m_nickname} = result.data[0];
                if(result.data === "실패") {
                    alert('아이디나 비밀번호를 확인해주세요.');
                }else if(m_id && m_nickname) {
                    alert('로그인 되었습니다.');
                    let expires = new Date();
                    expires.setMinutes(expires.getMinutes()+720);
                    setCookie('userid', `${m_id}`, {path: '/', expires});
                    setCookie('usernickname', `${m_nickname}`, {path: '/', expires});
                    dispatch(setLogin());
                    navigate(`/posts/${m_nickname}`);
                } 
            })
            .catch(e => console.log(e));
        }
    }
    return (
        <div className='login'>
            <h2>LOGIN</h2>
            <div className='login_zone'>
                <form onSubmit={onSubmit}>
                    <table className='login_table'>
                        <tbody>
                            <tr>
                                <th width='35%'>ID</th>
                                <td>
                                    <input type='text' name='userid'
                                    value={loginData.userid} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th width='35%'>PASSWORD</th>
                                <td>
                                    <input type='password' name='userpw'
                                    value={loginData.userpw} onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='login_btns'>
                        <button type='submit'>로그인</button>
                        <Link to='/join'><button>회원가입</button></Link>
                    </div>
                    <div className='find_zone'>
                        <Link to='/find_id'><span className='pointer'>아이디 찾기</span></Link>
                        <span>|</span>
                        <Link to='/find_pw'><span className='pointer'>비밀번호 찾기</span></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;