import React from 'react';
import './Join.scss';

const Join = () => {
    return (
        <div className='join'>
            <h2>JOIN</h2>
            <div className='join_zone'>
                <table className='join_table'>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type='text'/>
                            </td>
                        </tr>
                        <tr>
                            <th>닉네임</th>
                            <td>
                                <input type='text'/>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
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
                            <th>전화번호</th>
                            <td>
                                <input type='text'/>
                            </td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input type='text'/>
                                <spna>년</spna>
                                <input type='text'/>
                                <spna>월</spna>
                                <input type='text'/>
                                <spna>일</spna>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='join_btn'>
                    <button>회원가입</button>
                    <button>취소</button>
                </div>
            </div>
        </div>
    );
};

export default Join;