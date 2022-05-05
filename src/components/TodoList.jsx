import React, { useState } from "react";
import AddTodo from "./AddTodo";
import styles from "./TodoList.module.css";

export default function TodoList() {
    // declare initial state
    const [todos, setTodos] = useState([{ text: "Learn React", id: Math.random(), date: "2020-01-01" }]);

    // add new todo function
    const addNewTodo = (newTodo, date) => {
        setTodos([...todos, { text: newTodo, id: Math.random(), date: date }]);
    }

    // delete new todo function
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== Number(id)));
    }

    // get deleted todo id
    const removeTodo = (e) => {
        const id = e.target.id;
        deleteTodo(id);
    }



    return (
        <React.Fragment>
            <div className={styles.container}>
                <h1 className={styles.title}>Todo List</h1>
                <AddTodo addNewTodo={addNewTodo} deleteTodo={deleteTodo} />
                <ul>
                    {todos.map((todo) => {
                        return (
                            <li key={todo.id} className={styles.list}  >{todo.text} {" "} <span className={styles.span}>{todo.date}</span> <button className={styles.remove} id={todo.id} onClick={removeTodo}>x</button> </li>

                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}