import React from 'react';
import './PostsList.scss';
import { Link } from 'react-router-dom';

// map돌려서 화면에 뿌려줄 함수형 컴포넌트 작성
function Posts({ list }) {
    // html 태그 정규식으로 없애기
    const htmlReg = /(<([^>]+)>)/gi;
    // &nbsp;(줄바꿈) 없애기
    const newlineReg = /(&nbsp;)/g;
    return(
        <Link to={`/post/${list.p_no}`}>
            <div className='posts'>
                <div className='img_zone'>
                    <img src='./images/img1.jpg' alt=''/>
                </div>
                <div className='text_zone'>
                    <h3>{`${list.p_title}`}</h3>
                    <p>{`${list.p_content}`.replace(htmlReg, '').replace(newlineReg, ' ')}</p>
                    <nav>
                        <span className='bold'>|</span>
                        <span>{`${list.p_date}`}</span>
                    </nav>
                </div>
            </div>
        </Link>
    );
}

const PostsList = ({data}) => {
    return (
        <div className='postslist inner2'>
            <h2>전체 글 ({data.length}) </h2>
            <div className='posts_box'>
                {data.length > 0 ? data.map(d => <Posts key={d.p_no} list={d}/>)
                : <>
                    <div className='posts'>
                        {/* <div className='img_zone'>
                            <img src='./images/img1.jpg' alt=''/>
                        </div> */}
                        <div className='text_zone'>
                            <h3>당신의 첫 게시글을 작성해주세요!</h3>
                            <p>Written Forest에 오신 걸 환영합니다<br/>
                                상단 왼쪽 메뉴 버튼을 눌러 글쓰기를 시작해보세요
                            </p>
                            <nav>
                                <span className='bold'>|</span>
                                <span>Written_Forest</span>
                            </nav>
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    );
};

export default PostsList;