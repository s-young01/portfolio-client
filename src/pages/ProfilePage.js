import React from 'react';
import './ProfilePage.scss';
import Header from '../components/Header';

const ProfilePage = () => {
    return (
        <div className='profile'>
            <Header/>
            <div className='inner2 user_profile'>
                <h3>내 프로필</h3>
                <div className='profile_zone'>
                    <div className='user_img'>
                        <p>| 프로필 이미지</p>
                        <div className='user_imgbox'>
                        </div>
                        <label for="file">
                            <div class="btn-upload">+</div>
                        </label>
                        <input type='file' className='file'/>
                    </div>
                    <div className='user_name'>
                        <nav className='input_box'>   
                            <p>| 이름</p>
                            <input type='text'/>
                        </nav>
                        <nav className='input_box'>   
                            <p>| 닉네임</p>
                            <input type='text'/>
                        </nav>
                        <nav className='input_box'>   
                            <p>| 전화번호</p>
                            <input type='text'/>
                        </nav>
                    </div>
                </div>
                <div className='profile_btn'>
                    <button>변경사항 저장</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;