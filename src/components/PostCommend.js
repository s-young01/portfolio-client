import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/config';
import { getCommends } from '../modules/Commemd';
import { getCookie } from '../utill/cookie';


const PostCommend = ({postno}) => {
    // 댓글 리스트 상태관리
    const [commendMenu, setCommendMenu] = useState(false);
    const onCommend_Menu = () => {
        setCommendMenu(!commendMenu);
    }

    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const user_nick = getCookie('usernickname');

    const {loading, data, error} = useSelector(state => state.commendsData.commends);
    const dispatch = useDispatch();

    const commendDatas = async () => {
        const data = await axios.get(`${API_URL}/commend/${postno}`);
        return data;
    }

    // 댓글 삭제
    const deleteCommend = (no) => {
        console.log(no);
        if(window.confirm('댓글을 삭제하시겠습니까?')) {
            axios.delete(`${API_URL}/delcommend/${no}`)
            .then(res => {
                alert('삭제되었습니다.');
                dispatch(getCommends(commendDatas));
            })
            .catch(e => console.log(e));
        }else {
            return null
        }
    }

    useEffect(() => {
        dispatch(getCommends(commendDatas));
    }, [dispatch, postno]);

    if(loading) return <div>로딩중..</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(error) return <div>에러 발생!</div>

    return (
        <div className='commend_zone'>
            <nav className='commend_open'>
                <span>댓글</span>
                <nav onClick={onCommend_Menu}>
                    <span className='commend_count'>{data.length}</span>
                    {commendMenu ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
                </nav>
            </nav>
            <ul className={commendMenu ? 'commend_list' : 'close_list'}>
                {data.map(da => <li key={da.c_no}>
                    <nav className='commend_info'>
                        <img src='' alt=''/>
                        <span>{da.c_nickname}</span>
                    </nav>
                    <nav className='commend'>
                        <p>{da.c_desc}</p>
                    </nav>
                    {user_nick === `${da.c_nickname}` && isLogin ? 
                    <nav className='commend_modify'>
                        <span>수정</span>
                        <span>|</span>
                        <span onClick={() => {deleteCommend(da.c_no)}}>삭제</span>
                    </nav> : null}
                </li>)}
            </ul>
        </div>
    );
};

export default PostCommend;