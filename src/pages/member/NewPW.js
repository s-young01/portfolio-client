import React, { useState } from 'react';
import './Find.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../../config/config';

const NewPW = () => {
    const navigate = useNavigate();
    const {updateId} = useSelector(state => state.loginCheck.updateId);

    const [changePw, setChangePw] = useState({
        newpw: '',
        newpwCh: '',
        userid: updateId
    });

    const onChange = (e) => {
        const {name, value} = e.target;
        setChangePw({
            ...changePw,
            [name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(changePw.newpw !== '' && changePw.newpwCh !== '') {
            if(changePw.newpw === changePw.newpwCh) {
                axios.post(`${API_URL}/newpw`, changePw)
                .then(res => {
                    console.log(res);
                    if(res.data) {
                        alert('비밀번호가 변경되었습니다.');
                        navigate('/login');
                    }
                })
                .catch(e => console.log(e))
            }else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        }else {
            alert('모든 입력란을 입력해주세요.');
        }
    }
    return (
        <div className='find'>
            <h2>Changing Password</h2>
            <div className='find_box'>
                <form onSubmit={onSubmit}>
                    <table className='find_table'>
                        <tbody>
                            <tr>
                                <th>새로운 비밀번호</th>
                                <td>
                                    <input type='password' name='newpw'
                                    value={changePw.newpw} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 확인</th>
                                <td>
                                    <input type='password' name='newpwCh'
                                    value={changePw.newpwCh} onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <nav className='find_btn'>
                        <button type='submit'>변경하기</button>
                        <Link to='/login'><button>취소</button></Link>
                    </nav>
                </form>
            </div>
        </div>
    );
};

export default NewPW;