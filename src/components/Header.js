import React, { useEffect, useState } from 'react';
import './Header.scss';
import { BiSearchAlt2 } from "react-icons/bi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import UserMenu from './UserMenu';
import { getCookie } from '../utill/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../modules/LoginCheck';

const Header = () => {
    const { pathname } = useLocation();
    const [userMenu, setUserMenu] = useState(false);
    const onClick_userMenu = () => {
        setUserMenu(!userMenu);
    }
    useEffect(() => {
        setUserMenu(userMenu);
    }, [pathname, setUserMenu, userMenu]);

    // 로그인 되어 있는지 확인
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const user_nickname = getCookie('usernickname');
    const dispatch = useDispatch();

    useEffect(() => {
        
        if(user_nickname) {
            dispatch(setLogin());
        }
    });
    return (
        <div className='header'>
            <div className='inner'>
                <h2><Link to='/posts'>{isLogin ? user_nickname :
                <Link to='/'>Written_Forest</Link>}</Link></h2>
                <div className='search_zone'>
                    {pathname === '/writepost' ? null
                    : <nav className='search_box'>
                        <input type='text' placeholder='검색어를 입력하세요'/>
                        <button>
                            <BiSearchAlt2 className='search_icon'/>
                        </button>
                    </nav>}
                </div>
                {isLogin ?  
                    <div className='user_zone'  onClick={onClick_userMenu}>
                        <div className='user_img' alt=''>
                        </div>
                        {userMenu && user_nickname ? <MdKeyboardArrowUp className='user_icon'/> 
                        : <MdKeyboardArrowDown className='user_icon'/>}
                    </div>
                : 
                    <div className='header_login'>
                        <Link to='/login'><button>로그인</button></Link>
                    </div>
                }  
            </div>
            {userMenu ? <UserMenu/> : null}
            {isLogin ? userMenu : !userMenu}
        </div>
    );
};

export default Header;