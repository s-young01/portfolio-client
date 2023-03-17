import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/config';
import './Find.scss';

const FindID = () => {
    const [findId, setFindId] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        userphone: ''
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
        axios.post(`${API_URL}/findid`, formData)
        .then(res => {
            setFindId(res.data);
        })
        .catch(e => console.log(e))
    }
    return (
        <div className='find'>
            <h2>Forget ID</h2>
            {findId ? 
            <div className='find_box'>
                <p>" 회원님의 아이디는 {findId} 입니다. "</p>
                <Link to='/login'><button>로그인하기</button></Link>
            </div>
            : <div className='find_box'>
                <p>" 가입 시 입력한 이름과 전화번호를 입력해주세요. "</p>
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
                                <th>전화번호</th>
                                <td>
                                    <input type='text' name='userphone'
                                    value={formData.userphone} onChange={onChange}/>
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

export default FindID;