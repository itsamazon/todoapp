import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import LoginReducer from './reducers/loginReducer'
import FiltersReducer from './reducers/filtersReducer'
import TodoReducer from './reducers/todoReducer'

const ConfigureStore = () => {
    let preloadedState
    const persistedTodoString = localStorage.getItem('todos')
    if(persistedTodoString != null){
        console.log(persistedTodoString)
        preloadedState ={
            todo:{todos:JSON.parse(persistedTodoString)}
        }
    }
    const rootReducer = combineReducers({
        login: LoginReducer,
        todo: TodoReducer,
        filter: FiltersReducer
        
    });
    return createStore(rootReducer,preloadedState,applyMiddleware(thunk))
}
export default ConfigureStore;