
const sortArr = (arr)=>{
    return arr.sort(function(a,b){

        if(new Date(a.postedTime) > new Date(b.postedTime)){
            return   new Date(b.postedTime) - new Date(a.postedTime);
        } else if (new Date(a.postedTime) < new Date(b.postedTime)) {
            return  new Date(a.postedTime) -  new Date(b.postedTime);
        } else{
            return 0
        }

     
        
      });
}
const reducer = (state, action)=>{
    const {type, payload} = action
    switch (type) {
        case 'ADD':
            return state = [...state, payload]
        case 'SORT':
            return state = [...sortArr([...state])]
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