import React from 'react';
import './PostsList.scss';
import { Link } from 'react-router-dom';

// html 태그 정규식으로 없애기
const htmlReg = /(<([^>]+)>)/gi;
// &nbsp;(줄바꿈) 없애기
const newlineReg = /(&nbsp;)/g;

const SearchList = ({data, text, userpath}) => {
    console.log(data);
    console.log(text);
    return (
        <div className='postslist inner2'>
            <h2>{text} ({data.length}) </h2>
            <div className='posts_box'>
                {data.map(d => <Link to={`/post/${d.p_no}/${d.p_writer}`} key={d.p_no}>
                    <div className='posts'>
                        <div className='img_zone'>
                            <img src='./images/img1.jpg' alt=''/>
                        </div>
                        <div className='text_zone'>
                            <h3>{d.p_title}</h3>
                            <p>{d.p_content.replace(htmlReg, '').replace(newlineReg, ' ')}</p>
                            <nav>
                                <span className='bold'>|</span>
                                <span>{d.p_date}</span>
                            </nav>
                        </div>
                    </div>
                </Link>)}
            </div>
        </div>
    );
};

export default SearchList;