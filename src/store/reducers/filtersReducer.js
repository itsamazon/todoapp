const initialState = {
    status: 'All',
    colors:[]
}

const FiltersReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'filterStatus' : {
            return{
                ...state,
                status:action.payload
            }
        }
        default:
            return state
    }
}

export default FiltersReducer