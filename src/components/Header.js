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

    // 검색 상태 관리
    const [isSearch, setIsSearch] = useState('');

    const onChange = (e) => {
        setIsSearch(e.target.value);
    }

    const click_Search = () => {
        if(isSearch !== undefined && isSearch !== '') {
            setIsSearch('');
        }else {
            alert('검색어를 입력해주세요.');
        }
    }
    return (
        <div className='header'>
            <div className='inner'>
                <h2><Link to={`/posts/${user_nickname}`}>{isLogin ? user_nickname :
                <Link to='/'>Written_Forest</Link>}</Link></h2>
                <div className='search_zone'>
                    {pathname === '/writepost' ? null
                    : <nav className='search_box'>
                        <input type='text' placeholder='검색어를 입력하세요' value={isSearch} onChange={onChange}/>
                        {isSearch !== undefined && isSearch !== '' ? 
                        <Link to={`/searchpost/${user_nickname}/${isSearch}`}>
                            <button onClick={click_Search}>
                                <BiSearchAlt2 className='search_icon'/>
                            </button>
                        </Link>
                        : <button onClick={click_Search}>
                                <BiSearchAlt2 className='search_icon'/>
                            </button>}
                    </nav>}
                </div>
                {isLogin ?  
                    <div className='user_zone' onClick={onClick_userMenu}>
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