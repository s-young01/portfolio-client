import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setLogout } from '../modules/LoginCheck';
import { getCookie, removeCookie } from '../utill/cookie';
import './UserMenu.scss';

const UserMenu = () => {
    const user_nick = getCookie('usernickname');
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    // 로그아웃
    const logout_Click = () => {
        removeCookie('userid');
        removeCookie('usernickname');
        dispatch(setLogout());
        alert('로그아웃 되었습니다.');
        navigate('/');
    }
    return (
        <ul className='user_menu'>
            <li className='user_li'>
                {pathname === '/writepost' ?
                <Link to={`/posts/${user_nick}`}>
                    <span>포스트</span>
                </Link>
                : <Link to='/writepost'>
                    <span>글쓰기</span>
                </Link>}
            </li>
            <li className='user_li'>
                <Link to='/todolist'>
                    <span>투두 리스트</span>
                </Link>
            </li>
            <li className='user_li'>
                <Link to='/profile'>
                    <span>내 프로필</span>
                </Link>
            </li>
            <li className='user_li'>
                <span onClick={logout_Click}>로그아웃</span>
            </li>
        </ul>
    );
};

export default UserMenu;