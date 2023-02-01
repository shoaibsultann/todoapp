"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Todo 1", completed: false },
    { todoText: "Todo 2", completed: true },
    { todoText: "Todo 3", completed: true },
    { todoText: "Todo 4", completed: false },
  ]);

  const onClickHandler = (myElm: any) => {
    console.log("myElm", myElm);

    // map runs on an array and returns an array
    const newTodos = todos.map((todo) => {
      console.log("todo", todo);
      if (todo.todoText == myElm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo('')
  };

  const deleteTodo = (myTodo:any) =>{
    const newTodos = todos.filter(todo=>{
      if(todo.todoText == myTodo.todoText){
        return false;
      } else
      return true
    })
    console.log("old todos", todos, "new todos", newTodos)
    setTodos(newTodos)
  }
  return (
    <>
      <div>Todo</div>
      <input
        placeholder="add todo text"
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "red", //ternary operator, if and else
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}

              <button 
                style={{
                  color: "white",
                  background: "red",
                  marginLeft: "1%",
                  borderColor: "whitesmoke",
                }}
                onClick={()=>{
                  deleteTodo(elm)
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
