import React from "react";
import { useDispatch } from "react-redux";


const TodoListItem = (props) => {
  const dispatch = useDispatch()

  const toogleTaskState = ()=>dispatch({type: 'todo/toggleState', payload: props.todo.id})
  const deleteTask = ()=>dispatch({type: 'todo/remove', payload: props.todo.id})
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex h-10 w-10 items-center">
            <input type='checkbox' checked={props.todo.completed} onChange={toogleTaskState} />
          </div>
        </div>
      </td>
      <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${props.todo.completed? 'line-through':''}`}>{props.todo.text}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

        <button onClick={deleteTask} className="text-indigo-600 hover:text-indigo-900">
          delete
        </button>
      </td>
    </tr>
  );
}
export default TodoListItem;