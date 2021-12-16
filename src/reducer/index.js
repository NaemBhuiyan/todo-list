const reducer = (state, action)=>{
    const {type, payload} = action
    switch (type) {
        case 'ADD':
            return state = [payload,...state]
        case 'DELETE':
            return state = state.filter((todo)=>todo.id!==payload.id)
        case 'EDIT':
            return state = state.map((todo)=>{

                if( todo.id === payload.id ){
                    return payload
                }
                return todo
            })
        default:
            return state
    }
}

export default reducer