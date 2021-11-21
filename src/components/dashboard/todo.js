import React from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
const Todo = (props) => (
    <div className="space-y-4">
        <div className="flex flex-row items-center justify-between px-4 bg-white shadow border py-3">
        <h3>
           TO-DO
        </h3>
        <AddTodo />
        </div>
        <TodoList />
    
    </div>
)

export default Todo