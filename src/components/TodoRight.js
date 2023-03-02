import React from 'react';
import './TodoRight.scss';
import { TbPlus } from "react-icons/tb";

const TodoRight = () => {
    return (
        <div className='todoright'>
            <div className='list_zone'>
                <ul className='list'>
                    <li>
                        <span>할 일1 입니다.</span>
                    </li>
                    <li>할 일2 입니다.</li>
                    <li>할 일3 입니다.</li>
                    <li>할 일4 입니다.</li>
                    <li>할 일5 입니다.</li>
                </ul>
            </div>
            <div className='add_zone'>
                <div className='input_zone'>
                    <input type='text'/>
                </div>
                <nav className='add_btn'>
                    <button><TbPlus className='add_icon'/></button>
                </nav>
            </div>
        </div>
    );
};

export default TodoRight;