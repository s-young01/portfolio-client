import React, { useState } from 'react';
import './MainPage.scss';
import Login from './member/Login';

const MainPage = () => {
    // 시작버튼 상태관리하기
    const [start, setStart] = useState(false);
    const onClick = () => {
        setStart(!start);
    }
    return (
        <div className='main'>
            <h1>Sharing Memory</h1>
            {start ? <Login/> : <div className='start' >
                <p>" 당신의 특별한 일상을 기록하고, 소중한 사람들과 공유해보세요. "</p>
                <button onClick={onClick}>시작하기</button>
            </div>}
        </div>
    );
};

export default MainPage;