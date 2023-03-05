import React from 'react';
import './Share.scss';
import { IoShareSocialSharp, IoEllipsisVertical } from "react-icons/io5";


const Share = () => {
    return (
        <div className='share'>
            <div className='share_btn'>
                <IoEllipsisVertical className='share_icon'/>
            </div>
            <div className='share_btn'>
                <IoShareSocialSharp className='share_icon'/>
            </div>
        </div>
    );
};

export default Share;