import React, { useState } from 'react';
import './Share.scss';
import { IoShareSocialSharp } from "react-icons/io5";
import { TbLink } from "react-icons/tb";
import { RiKakaoTalkFill, RiTwitterFill } from "react-icons/ri";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TwitterShareButton } from "react-share";

const ShareBtn = () => {
    // 공유 버튼 상태관리
    const [share, onShare] = useState(true);
    const onClick_Share = () => {
        onShare(!share);
    }
    const li3 = () => {
        document.querySelector('.share1').style.top = '33%';
        document.querySelector('.share1').style.left = '18%';
    }
    const li4 = () => {
        document.querySelector('.share2').style.top = '33%';
        document.querySelector('.share2').style.left = '18%';
    }
    const li5 = () => {
        document.querySelector('.share3').style.top = '33%';
        document.querySelector('.share3').style.left = '18%';
    }

    // window객체에서 현재 url 가져오기 
    const copyURL = window.location.href;
    // 복사 링크 눌렀을 때 알림창 뜨게 하기
    const onClick_Copy = () => {
        alert('주소가 복사되었습니다.');
    }
    return (
        <>
            <div className='share_btn' onClick={onClick_Share}>
                    <IoShareSocialSharp className='share_icon'/>
            </div>
            <ul className='share_menu'>
                <li>
                    {share ? null : <TwitterShareButton url={copyURL} 
                    className='share1' li3={li3}>                  
                        <RiTwitterFill className='share_icon2'/>
                    </TwitterShareButton>}
                </li>
                <li>
                    {share ? null : <button className='share2' li4={li4}>
                        <RiKakaoTalkFill className='share_icon2'/>
                    </button>}
                </li>
                <li>
                    {share ? null : <CopyToClipboard text={copyURL}>
                    <button className='share3' li5={li5} onClick={onClick_Copy}>
                        <TbLink className='share_icon2'/>
                    </button></CopyToClipboard>}
                </li>
            </ul>
        </>
    );
};

export default ShareBtn;