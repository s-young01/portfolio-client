import React from 'react';
import '../../App.scss'
import './Login.scss';

const Login = () => {
    return (
        <div className='login'>
            <table className='logintable'>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>
                            <input type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <th>PASSWORD</th>
                        <td>
                            <input type='password'/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='login_btns'>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
            <div className='find'>
                <span className='pointer'>아이디 찾기</span>
                <span>|</span>
                <span className='pointer'>비밀번호 찾기</span>
            </div>
        </div>
    );
};

export default Login;