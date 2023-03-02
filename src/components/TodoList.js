import React from 'react';
import TodoLeft from './TodoLeft';
import TodoRight from './TodoRight';
import './TodoList.scss';

const TodoList = () => {
    return (
        <div className='todolist inner'>
            <TodoLeft/>
            <TodoRight/>
        </div>
    );
};

export default TodoList;