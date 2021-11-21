import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
    const dispatch = useDispatch();
    const {todo} = useSelector(state => state)
    const markAllComplete  = ()=>dispatch({type: 'todo/completedAll'})
    const clearCompleted  = ()=>dispatch({type: 'todo/clearCompleted'})
    const setFilter  = (value)=>dispatch({type: 'todo/setFilter', payload: value})
    const completed = todo.todos.filter(({completed})=>!completed).length
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-gray-600">Actions</h3>
                <div className="space-x-5 text-gray-800">
                    <button className="btn btn-primary text-xs" onClick={markAllComplete}>Mark All Completed</button>
                    <button className="btn btn-primary text-xs" onClick={clearCompleted}>Delete Completed</button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-gray-600">Remaining To-Do</h3>
                <div className="space-x-3 text-sm "><span className="text-blue-500 font-bold">({completed})</span> left</div>
            </div>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-gray-600">Filter By</h3>
                <div className="space-x-5 text-gray-800">
                    <select value={todo.filter} className="rounded border bg-white" onChange={e=>setFilter(e.target.value)}>
                        <option value={'All'} >ALL</option>
                        <option value={'Active'}>Active</option>
                        <option value={'Completed'} >Completed</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Footer