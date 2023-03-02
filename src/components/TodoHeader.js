import React from 'react';

const TodoHeader = () => {
    return (
        <div className='header'>
            <div className='inner'>
                <h2>My_To Do List</h2>
                <div>
                    <h3>Today</h3>
                    <span>:</span>
                    <span>23-02-26</span>
                </div>
                <div className='logout_btn'>
                    <button>로그아웃</button>
                </div>
            </div>
        </div>
    );
};

export default TodoHeader;