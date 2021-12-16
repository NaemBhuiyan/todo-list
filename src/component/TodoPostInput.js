import React, {useState} from 'react'
import useTodoContext from '../hooks/useTodoContext';

function TodoPostInput() {
    const { dispatch } =  useTodoContext()
		const [inputText, setInputText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(inputText){
					dispatch({
            type: 'ADD',
            payload: {
                id: Math.random(),
                todoContent: inputText,
                postedTime: new Date()
            }
        })
        setInputText('')
				}
    }

    const onChange = ({ target:{ value } })=>{
        setInputText(value)
    }

    return (
        <div>
           <form className="row justify-content-center" onSubmit={handleSubmit}>
								<div className="col-5">
									<label  className="visually-hidden">Todo</label>
									<input type="text" className="form-control" id="text" placeholder="Enter new todo here" value={inputText} onChange={onChange} required/>
								</div>
								<div className="col-auto">
									<button type="submit" className="btn btn-primary mb-3">Add</button>
								</div>
           </form>
        </div>
    )
}



export default TodoPostInput

