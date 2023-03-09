import React from 'react';
import './PostsList.scss';
import { Link } from 'react-router-dom';

// map돌려서 화면에 뿌려줄 함수형 컴포넌트 작성
function Posts({ list }) {
    return(
        <Link to='/post'>
            <div className='posts'>
                <div className='img_zone'>
                    <img src='./images/img1.jpg' alt=''/>
                </div>
                <div className='text_zone'>
                    <h3>{`${list.title}`}</h3>
                    <p>{`${list.content}`}</p>
                    <nav>
                        <span>|</span>
                        <span>2023.02.23.</span>
                        <span>02:43</span>
                    </nav>
                </div>
            </div>
        </Link>
    );
}

const PostsList = ({ data }) => {
    return (
        <div className='postslist inner2'>
            <h2>전체 글 (7) </h2>
            <div className='posts_box'>
                {data.map(d => <Posts key={d.p_no} list={d}/>)}
            </div>
        </div>
    );
};

export default PostsList;