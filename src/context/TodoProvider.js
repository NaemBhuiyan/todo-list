import React, {useReducer,useEffect} from 'react'
import AppContext from '.';
import  reducer  from "../reducer/index";

const initialState = JSON.parse(localStorage.getItem("todoList")) || [];

const TodoProvider = ({children})=>{

    const [todoList, dispatch] = useReducer(reducer, initialState);

    

     // set localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);


  const context = {todoList,dispatch};
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;

}

export default TodoProvider;