import React from 'react';
import Header from '../components/Header';
import Share from '../components/Share';
import './Post.scss';

const PostPage = () => {
    return (
        <div className='post'>
            <Header/>
            <Share/>
            <div className='post_zone inner2'>
                <div className='head_zone'>
                    <h1>슬기로운 코딩생활</h1>
                    <nav>
                        <span>Hello</span>
                        <span>2023.02.23.02:43</span>
                        <span>수정</span>
                        <span>삭제</span>
                    </nav>
                </div> 
                <div className='desc_zone'>
                    <img src='./images/img1.jpg' alt=''/>
                    <p>이번 블로그의 이름은
                    아무글 대잔치로 정했다
                    아무말 대잔치란 개그 코너가 생각나는데
                    이곳은 말하는 곳이 아닌 글을 쓰는 곳이라
                    말이 안되는 말을 서로 주고 받듯
                    맥락없는 아무글이나 쓰고 싶어서이다
                    내가 일하는 곳은 인디펜더스 리빙인
                    스스로 독립적으로 생활할 수 있는 노인들이 살고 있는 노인 아파트이다
                    </p>
                    <p>이번 블로그의 이름은
                    아무글 대잔치로 정했다
                    아무말 대잔치란 개그 코너가 생각나는데
                    이곳은 말하는 곳이 아닌 글을 쓰는 곳이라
                    말이 안되는 말을 서로 주고 받듯
                    맥락없는 아무글이나 쓰고 싶어서이다
                    내가 일하는 곳은 인디펜더스 리빙인
                    스스로 독립적으로 생활할 수 있는 노인들이 살고 있는 노인 아파트이다
                    </p>
                    <p>이번 블로그의 이름은
                    아무글 대잔치로 정했다
                    아무말 대잔치란 개그 코너가 생각나는데
                    이곳은 말하는 곳이 아닌 글을 쓰는 곳이라
                    말이 안되는 말을 서로 주고 받듯
                    맥락없는 아무글이나 쓰고 싶어서이다
                    내가 일하는 곳은 인디펜더스 리빙인
                    스스로 독립적으로 생활할 수 있는 노인들이 살고 있는 노인 아파트이다
                    </p>
                </div>
                <div className='commend_zone'>
                    <nav>
                        <span>댓글</span>
                        <span className='commend_count'>0</span>
                    </nav>
                    <textarea placeholder='댓글을 입력해주세요'/>
                    <nav className='commend_btn'>
                        <button>입력</button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PostPage;