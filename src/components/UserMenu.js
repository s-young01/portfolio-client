import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './UserMenu.scss';

const UserMenu = () => {
    const { pathname } = useLocation();
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
                <span>내 프로필</span>
            </li>
            <li className='user_li'>
                <span>로그아웃</span>
            </li>
        </ul>
    );
};

export default UserMenu;