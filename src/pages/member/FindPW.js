import React from 'react';
import { Link } from 'react-router-dom';
import './Find.scss';

const FindPW = () => {
    return (
        <div className='find'>
            <h2>Forget Password</h2>
            <div className='find_box'>
                <p>" 가입 시 입력한 이름과 이메일(아이디)을 입력해주세요. "</p>
                <table className='find_table'>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type='text'/>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일(아이디)</th>
                            <td>
                                <input type='text'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav className='find_btn'>
                    <button>찾기</button>
                    <Link to='/login'><button>취소</button></Link>
                </nav>
            </div>
        </div>
    );
};

export default FindPW;