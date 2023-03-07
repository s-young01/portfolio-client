import React, { useState } from 'react';
import './Join.scss';
import { FcCalendar } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Calendar } from 'react-calendar';


const Join = () => {
    // 달력 아이콘 상태 관리
    const [cal, onCal] = useState(false);
    const onClick_Calendar = () => {
        onCal(!cal);
    }
    return (
        <div className='join'>
            <h2>JOIN</h2>
            <div className='join_zone'>
                <table className='join_table'>
                    <tbody>
                        <tr>
                            <th width='10%'>이름</th>
                            <td>
                                <input type='text'/>
                            </td>
                        </tr>
                        <tr>
                            <th>닉네임</th>
                            <td width='30%'>
                                <input type='text'/>
                                <button className='chek_btn'>중복확인</button>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일(아이디)</th>
                            <td>
                                <input type='text'/>
                                <span>@</span>
                                <select>
                                    <option>google.com</option>
                                    <option>naver.com</option>
                                    <option>daum.net</option>
                                    <option>nate.com</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type='password'/>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호 확인</th>
                            <td>
                                <input type='password'/>
                            </td>
                        </tr>
                        <tr>
                            <th width='10%'>전화번호</th>
                            <td>
                                <input type='text'/>
                            </td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input type='text' className='short_input'/>
                                <span>년</span>
                                <input type='text' className='short_input'/>
                                <span>월</span>
                                <input type='text' className='short_input'/>
                                <span>일</span>
                                <FcCalendar className='calendar_icon' onClick={onClick_Calendar}/>
                                {cal ? <Calendar formatDay={(locale, date) =>
                                date.toLocaleString('en', { day: 'numeric' })
                                }/> : null}
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='join_btn'>
                <button>회원가입</button>
                <Link to='/login'><button>취소</button></Link>
            </div>
        </div>
    );
};

export default Join;