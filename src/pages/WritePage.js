import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TextEdit from '../components/TextEdit';
import './WritePage.scss';

const WritePage = () => {
    return (
        <div className='write'>
            <Header/>
            <div className='write_zone inner2'>
                <input className='title_input' type='text' required
                placeholder='제목을 입력하세요'/>
                <TextEdit/>
            </div>
            <div className='footer'>
                <nav className='inner'>
                    <Link to='http://speller.cs.pusan.ac.kr/'>
                        <p>맞춤법 검사하기</p>
                    </Link>
                    <button>등록하기</button>
                </nav>
            </div>
        </div>
    );
};

export default WritePage;