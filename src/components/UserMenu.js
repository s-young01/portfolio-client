import React from 'react';
import './UserMenu.scss';

const UserMenu = () => {
    return (
        <ul className='user_menu'>
            <li className='user_li'>
                <span>글쓰기</span>
            </li>
            <li className='user_li'>
                <span>투두 리스트</span>
            </li>
            <li className='user_li'>
                <span>관리</span>
            </li>
            <li className='user_li'>
                <span>로그아웃</span>
            </li>
        </ul>
    );
};

export default UserMenu;