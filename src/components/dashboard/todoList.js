import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './todoListItems'

const selectTodos = state => {
    console.log(state)
    return (state.todo)}


const TodoList = () => {
  const {todos,filter} = useSelector(selectTodos)
  const filtered = todos.filter(todo=>{
    if(filter === 'All' || filter === undefined) return true;

    if (filter === 'Active' &&  !todo.completed) return  true;
    if (filter === 'Completed' &&  todo.completed) return  true;
    return false;
  })
  // since `todos` is an array, we can loop over it
  const renderedListItems = filtered.map((todo,index) => {
    return <TodoListItem key={index} todo={todo} />
  })


  const emptyList= (
    <tr >
    <td colSpan="3" className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 flex h-10 w-10 text-center items-center">
          <span className="text-gray-700">No Tasks Added Yet</span>
        </div>
      </div> 
    </td>
  </tr>
  );

  return (<div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Task
                  </th>
                 
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {todos.length?renderedListItems:
                  emptyList
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>)
}

export default TodoList