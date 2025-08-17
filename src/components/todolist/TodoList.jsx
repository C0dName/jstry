import React from 'react';
import classes from "./TodoList.module.css";

const TodoList = () => {

    return (
        <div className={classes.todoGlobal}>
            <h1>Список задач</h1>
            <input type="text"/>
            
        </div>
    );
};

export default TodoList;