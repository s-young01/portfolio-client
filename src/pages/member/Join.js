import React, { useState } from 'react';
import './Join.scss';
import { FcCalendar } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import axios from 'axios';
import { API_URL } from '../../config/config';

const Join = () => {
    // 달력 아이콘 상태 관리
    const [cal, onCal] = useState(false);
    const onClick_Calendar = () => {
        onCal(!cal);
    }

    // 회원가입 상태 관리
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        m_name: '', 
        m_nickname: '', 
        m_email1: '', 
        m_email2: 'google.com', 
        m_pw: '', 
        m_pwch: '', 
        m_phone: '', 
        m_Y: '', 
        m_M: '', 
        m_D: ''
    });

    // 닉네임 중복체크
    const [nickCheck, setNickCheck] = useState(false);
    const onClick_nickCh = () =>{
        if(formData.m_nickname !== '') {
            axios.get(`${API_URL}/nickcheck/${formData.m_nickname}`)
            .then(res => {
                console.log(res);
                if(res.data.m_nickname === formData.m_nickname) {
                    alert('이미 사용중인 닉네임입니다.');
                }else {
                    alert('사용 가능한 닉네임 입니다.');
                    setNickCheck(true);
                }
            })
        }else {
            alert('닉네임을 입력해주세요.');
        }
    }

    // input Change 이벤트
    const onChange = (e) => {
        const { name,value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    
    // 폼 전송 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        // 중복체크 버튼을 안 누르고 전송했을 때 전송 안되게 하기
        if(!nickCheck){
            alert("안돼용");
        }else if(formData.m_name === '' || formData.m_nickname === ''
        || formData.m_email1 === '' || formData.m_email2 === ''
        || formData.m_pw === '' || formData.m_pwch === ''
        || formData.m_phone === '' || formData.m_Y === ''
        || formData.m_M === '' || formData.m_D === '') {
            alert('모든 입력란은 필수입니다.');
        }else{
            addMember();
        }
    }
    const addMember = () => {
        axios.post(`${API_URL}/join`, formData)
        .then(res => {
            alert('회원가입 되었습니다.');
            navigate('/login');
        })
        .catch(e => console.log(e))
    }

    return (
        <div className='join'>
            <h2>JOIN</h2>
            <div className='join_zone'>
                <form onSubmit={onSubmit}>
                    <table className='join_table'>
                        <tbody>
                            <tr>
                                <th width='10%'>이름</th>
                                <td>
                                    <input type='text' name='m_name' value={formData.m_name}
                                    onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>닉네임</th>
                                <td width='30%'>
                                    <input type='text' name='m_nickname' value={formData.m_nickname}
                                    onChange={onChange}/>
                                    <button className='chek_btn' type='button' onClick={onClick_nickCh}>중복확인</button>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일(아이디)</th>
                                <td>
                                    <input type='text' name='m_email1' value={formData.m_email1}
                                    onChange={onChange}/>
                                    <span>@</span>
                                    <select name='m_email2' value={formData.m_email2} onChange={onChange}>
                                        <option value='google.com'>google.com</option>
                                        <option value='naver.com'>naver.com</option>
                                        <option value='daum.com'>daum.net</option>
                                        <option value='nate.com'>nate.com</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td>
                                    <input type='password' name='m_pw' value={formData.m_pw} onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 확인</th>
                                <td>
                                    <input type='password' name='m_pwch' value={formData.m_pwch} onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                                <th width='10%'>전화번호</th>
                                <td>
                                    <input type='text' name='m_phone' value={formData.m_phone}
                                    onChange={onChange}  maxLength='11'/>
                                </td>
                            </tr>
                            <tr>
                                <th>생년월일</th>
                                <td>
                                    <input type='text' className='short_input' maxLength='4'
                                    name='m_Y' onChange={onChange} value={formData.m_Y}/>
                                    <span>년</span>
                                    <input type='text' className='short_input' maxLength='2'
                                    name='m_M' onChange={onChange} value={formData.m_M}/>
                                    <span>월</span>
                                    <input type='text' className='short_input' maxLength='2'
                                    name='m_D' onChange={onChange} value={formData.m_D}/>
                                    <span>일</span>
                                    <FcCalendar className='calendar_icon' onClick={onClick_Calendar}/>
                                    {cal ? <Calendar formatDay={(locale, date) =>
                                    date.toLocaleString('en', { day: 'numeric' })
                                    }/> : null}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='join_btn'>
                        <button type='submit'>회원가입</button>
                        <Link to='/login'>
                            <button type='reset'>취소</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Join;