import React from 'react';
import './Header.scss';
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
    return (
        <div className='header'>
            <div className='inner'>
                <h2>Hello님의 기록</h2>
                <div className='search_zone'>
                    <nav className='search_box'>
                        <input type='text' placeholder='검색어를 입력하세요'/>
                        <button>
                            <BiSearchAlt2 className='search_icon'/>
                        </button>
                    </nav>
                </div>
                <div className='logout_btn'>
                    <button>로그아웃</button>
                </div>
            </div>
        </div>
    );
};

export default Header;