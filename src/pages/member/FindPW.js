import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/config';
import './Find.scss';

const FindPW = () => {
    const [findPw, setFindPw] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        userid: ''
    });

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/findpw`, formData)
        .then(res => {
            setFindPw(res.data);
        })
        .catch(e => console.log(e))
    }
    return (
        <div className='find'>
            <h2>Forget Password</h2>
            {findPw ? 
            <div className='find_box'>
                <p>" 회원님의 비밀번호는 {findPw} 입니다. "</p>
                <nav>
                    <Link to='/new_pw'><button>비밀번호 변경</button></Link>
                    <Link to='/login'><button>로그인하기</button></Link>
                </nav>
            </div>
            : <div className='find_box'>
                <p>" 가입 시 입력한 이름과 이메일(아이디)을 입력해주세요. "</p>
                <form onSubmit={onSubmit}>
                    <table className='find_table'>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td>
                                    <input type='text' name='username' 
                                    value={formData.username} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일(아이디)</th>
                                <td>
                                    <input type='text' name='userid' 
                                    value={formData.userid} onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <nav className='find_btn'>
                        <button type='submit'>찾기</button>
                        <Link to='/login'><button>취소</button></Link>
                    </nav>
                </form>
            </div> }
        </div>
    );
};

export default FindPW;