import React, { useState } from "react";
import styles from "./TodoList.module.css";

export default function AddTodo({ addNewTodo }) {
    // declare initial state
    const [newTodo, setNewTodo] = useState("");
    const [date, setDate] = useState("");

    // handle input change
    const handleInputChange = (e) => {
        e.preventDefault()
        setNewTodo(e.target.value)
        console.log("newTodo:>>", newTodo);
    }

    // handle date change
    const handleDateChange = (e) => {
        e.preventDefault()
        setDate(e.target.value)
        console.log("date:>>", date);
    }

    // handle form submit
    const handleInputSubmit = (e) => {
        e.preventDefault()
        addNewTodo(newTodo, date)
        setNewTodo("")
        setDate("")
    }

    return (
        <React.Fragment>
            <form onSubmit={handleInputSubmit}>
                <input className={styles.input} type="text" value={newTodo} placeholder="Add a task" onChange={handleInputChange} />
                <input className={styles.date} type="date" placeholder="Plan the day" onChange={handleDateChange} />
                {/* <input type="time" placeholder="Plan the time" /> */}
                <button className={styles.button} type="submit"> Add </button>
            </form>
        </React.Fragment>
    )
}