const initialState ={
    todos: [

    ],
    filter: 'All'
}

//RandomIdGenerator
const todoId = (todos) => {
    const theId = todos.reduce((theId,todo) => Math.max(todo.id,theId), -1)
    return theId + 1
}

const saveState = (state) => {
    localStorage.setItem('todos',JSON.stringify(state.todos))
    return state
}


// The reducer
const TodoReducer = (state = initialState,action) =>{
    console.log(state,action)
    switch(action.type){

        case 'todos/todoAdded':
            return saveState({ 
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id:todoId(state.todos),
                        text: action.payload,
                        completed:false
                    }
                ]
            })
        
        case 'todo/completedTask':
            return saveState({
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload){
                        return todo
                    }

                    return{
                        ...todo,
                        completeed: !todo.completed
                    }
                })
            }
        )

        case 'todo/completedAll':
            return saveState({
                ...state,
                todos: state.todos.map(todo => {
                    return {
                        ...todo,
                        completed: true
                    }
                })
            }
        )

        case 'todo/toggleState': 
           
            return saveState({
                ...state,
                todos: state.todos.map(todo=>{
                    
                    if (todo.id !== action.payload) return todo
                    console.log("my todo",todo)
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                })
            })

    

        case 'todo/clear':
            return saveState({
                ...state, 
                todos: []
            })

        case 'todo/clearCompleted':
            return saveState({
                ...state, 
                todos: state.todos.filter(({completed})=>!completed)
            })

        
        case 'todo/remove':
            return saveState({
                ...state, 
                todos: state.todos.filter(item => item.id !== action.payload)
            })

        case 'todo/setFilter':
            return saveState({
                ...state,
                filter: action.payload,
            })
        default:
            return state
    }
}

export default TodoReducer