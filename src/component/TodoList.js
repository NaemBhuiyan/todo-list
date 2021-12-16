import React from 'react'
import useTodoContext from '../hooks/useTodoContext'
import TodoCard from './TodoCard'

function TodoList() {
    const { todoList, dispatch } =  useTodoContext();

    const handleSort = ()=>{
        dispatch({
            type: "SORT",
        })
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-6 text-start'>
                <button className='btn btn-success' onClick={handleSort}>Sort</button>
                {todoList.length? todoList.map((todo)=>{
                    return <TodoCard todoObj={todo} key={todo.id}/>
                }): <p className='fs-5 text-center mt-5'>Add a todo to get Start</p>}
                
            </div>
        </div>
    )
}

export default TodoList
