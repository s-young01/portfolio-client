import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setLogout } from '../modules/LoginCheck';
import { removeCookie } from '../utill/cookie';
import './UserMenu.scss';

const UserMenu = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    // 로그아웃
    const logout_Click = () => {
        removeCookie('userid');
        removeCookie('usernickname');
        dispatch(setLogout());
        alert('로그아웃 되었습니다.');
        navigate('/posts');
    }
    return (
        <ul className='user_menu'>
            <li className='user_li'>
                {pathname === '/writepost' ?
                <Link to='/posts'>
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