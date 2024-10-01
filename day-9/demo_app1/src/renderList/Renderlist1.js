import React, { useState } from "react";
import './Rendering.css';

const Renderlist1 = () => {
    const [todos, setTodos] = useState([
        {
            userId: 1,
            model: "Bolero",
            price: 210000,
            Company: "Mahindra",
            date: new Date(2024, 8, 8),
        },
        {
            userId: 2,
            model: "Brezza",
            price: 1500000,
            Company: "Maruti",
            date: new Date(2024, 10, 21),
        },
        {
            userId: 3,
            model: "Honda City",
            price: 210000,
            Company: "Honda",
            date: new Date(2024, 9, 15),
        }
    ]);

    const [showBtn, setShowBtn] = useState(true);

    const Todo = ({ todo }) => {
        return (
            <div className="todo-item">
                <div className="todo">{todo.userId}</div>
                <div className="todo">{todo.model}</div>
                <div className="todo">{todo.price}</div>
                <div className="todo">{todo.Company}</div>
                <div className="todo">{todo.date.toLocaleDateString()}</div>
            </div>
        );
    };

    return (
        <div className="container">
            {/* {showBtn && <button onClick={() => setShowBtn(!showBtn)}>Hide Button</button>}
            {!showBtn && <span>Button is hidden</span>} */}
            <br/><br/>
            {todos.map((todo) => (
                <Todo key={todo.userId} todo={todo} />
            ))}
        </div>
    );
};

export default Renderlist1;
