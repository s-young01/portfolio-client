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
                {data.map(d => <Posts key={d.p_no} list={d}/>)}
            </div>
        </div>
    );
};

export default PostsList;