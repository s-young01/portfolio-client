import React from 'react';
import './Header.scss';
import { BiSearchAlt2 } from "react-icons/bi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const Header = () => {
    return (
        <div className='header'>
            <div className='inner'>
                <h2><Link to='/posts'>Hello님의 기록</Link></h2>
                <div className='search_zone'>
                    <nav className='search_box'>
                        <input type='text' placeholder='검색어를 입력하세요'/>
                        <button>
                            <BiSearchAlt2 className='search_icon'/>
                        </button>
                    </nav>
                </div>
                <div className='user_zone'>
                    <span>Hello_</span>
                    <nav className='user_img'>
                        <img src='' alt=''/>
                    </nav>
                    <MdKeyboardArrowDown/>
                </div>
                <UserMenu/>
            </div>
        </div>
    );
};

export default Header;