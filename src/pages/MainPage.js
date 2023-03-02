import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.scss';

const MainPage = () => {
    return (
        <div className='main'>
            <h1>Sharing Memory</h1>
            <div className='start' >
                <p>" 당신의 특별한 일상을 기록하고, 소중한 사람들과 공유해보세요. "</p>
                <button><Link to='/login'>시작하기</Link></button>
            </div>
        </div>
    );
};

export default MainPage;