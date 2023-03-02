import React from 'react';
import './TodoLeft.scss';

const TodoLeft = () => {
    return (
        <div className='todoleft'>
            <h3>남은 할 일 5개</h3>
            <div>
                <ul className=''>
                    <li>할 일1 입니다.</li>
                    <li>할 일2 입니다.</li>
                    <li>할 일3 입니다.</li>
                    <li>할 일4 입니다.</li>
                    <li>할 일5 입니다.</li>
                </ul>
            </div>
        </div>
    );
};

export default TodoLeft;