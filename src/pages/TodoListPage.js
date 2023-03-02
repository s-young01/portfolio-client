import React from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

const TodoListPage = () => {
    return (
        <div className='TodoList'>
            <TodoHeader/>
            <TodoList/>
        </div>
    );
};

export default TodoListPage;