import React from 'react';
import './Share.scss';
import ShareBtn from './ShareBtn';
import VerticalBtn from './VerticalBtn';

const Share = () => {
    return (
        <div className='share'>
            <VerticalBtn/>
            <ShareBtn/>
        </div>
    );
};

export default Share;