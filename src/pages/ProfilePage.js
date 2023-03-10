import React from 'react';
import Header from '../components/Header';

const ProfilePage = () => {
    return (
        <div className='profile'>
            <Header/>
            <div className='inner2'>
                <div className='user_profile'>
                    <span>내 프로필</span>
                    <div></div>
                    <div>
                        <button>수정하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;