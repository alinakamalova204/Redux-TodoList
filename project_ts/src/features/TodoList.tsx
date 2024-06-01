import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import {RootState} from "../app/store";
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);

    return (
        <ul className={styles.list}>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
                ))
            ) : (
                <p>Пока нет задач</p>
            )}
        </ul>
    );
};

export default TodoList;