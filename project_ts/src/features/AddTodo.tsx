import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';
import styles from './AddTodo.module.css';
import {AppDispatch} from "../app/store";

const AddTodo: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
                className={styles.input}
            />
            <button type="submit" className={styles.button}>Добавить</button>
        </form>
    );
};

export default AddTodo;