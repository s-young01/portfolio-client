import React, { useEffect, useState } from 'react';
import './Header.scss';
import { BiSearchAlt2 } from "react-icons/bi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import UserMenu from './UserMenu';

const Header = () => {
    const { pathname } = useLocation();
    const [userMenu, setUserMenu] = useState(false);
    const onClick_userMenu = () => {
        setUserMenu(!userMenu);
    }
    useEffect(() => {
        setUserMenu(userMenu);
    }, [pathname, setUserMenu, userMenu]);
    return (
        <div className='header'>
            <div className='inner'>
                <h2><Link to='/posts'>Hello_</Link></h2>
                <div className='search_zone'>
                    <nav className='search_box'>
                        <input type='text' placeholder='검색어를 입력하세요'/>
                        <button>
                            <BiSearchAlt2 className='search_icon'/>
                        </button>
                    </nav>
                </div>
                <div className='user_zone'>
                    <img className='user_img' alt='' onClick={onClick_userMenu}
                    src={require('http://localhost:3000/images/img1.jpg').default}/>
                    {userMenu ? <MdKeyboardArrowUp className='user_icon'/> 
                    : <MdKeyboardArrowDown className='user_icon'/>}
                    
                </div>
                {userMenu ? <UserMenu/> : null}
                
            </div>
        </div>
    );
};

export default Header;