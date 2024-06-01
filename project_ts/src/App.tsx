import React from 'react';
import AddTodo from "./features/AddTodo";
import TodoList from "./features/TodoList";
import './App.css'
const App: React.FC = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;