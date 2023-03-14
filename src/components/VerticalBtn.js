import React, { useState } from 'react';
import { IoEllipsisVertical, IoHeart } from "react-icons/io5";
import { TbPencil, TbTrash } from "react-icons/tb";
import { useSelector } from 'react-redux';

const VerticalBtn = () => {
    // 더보기 버튼 상태관리
    const [add, onAdd] = useState(true);
    const onClick_ver = () => {
        onAdd(!add);
    }
    const li1 = () => {
        document.querySelector('.vertical1').style.top = '33%';
        document.querySelector('.vertical1').style.left = '18%';
    }
    const li2 = () => {
        document.querySelector('.vertical2').style.top = '33%';
        document.querySelector('.vertical2').style.left = '18%';
    }

    // 로그인 체크
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    return (
        <>
            {isLogin ? 
            <div className='share_btn' onClick={isLogin ? onClick_ver : null}>
                <IoEllipsisVertical className='share_icon'/>
            </div>
            : 
            <div className='share_btn'>
                <IoHeart className='share_icon'/>
            </div>
            }
            {isLogin ? null : <span className='heart_count'>2</span>}
            <ul className='vertical_menu'>
                <li>
                    {add ? null : <button className='vertical1' li1={li1}>
                        <span>수정</span>
                        <TbPencil className='modify_icon'/>
                    </button>}
                </li>
                <li>
                    {add ? null : <button className='vertical2' li2={li2}>
                        <span>삭제</span>
                        <TbTrash className='trash_icon'/>
                    </button>}
                </li>
            </ul>
        </>
    );
};

export default VerticalBtn;