import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todosSlice';
import { AppDispatch } from '../app/store';
import styles from './TodoItem.module.css';

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <li className={styles.item}>

            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {text}
            </span>

            <button onClick={() => dispatch(deleteTodo(id))} className={styles.button}>Удалить</button>
            <button onClick={() => dispatch(toggleTodo(id))}>Выполнено</button>
        </li>
    );
};

export default TodoItem;