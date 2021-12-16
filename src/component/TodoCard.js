import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useTodoContext from '../hooks/useTodoContext'

const formattedDate = (postedTime)=> new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(postedTime))

function TodoCard({todoObj}) {
		const {todoContent, postedTime, id} = todoObj;
    const { dispatch } =  useTodoContext();
    const  [editText, setEditText] = useState('');
    const [isEdit, setIsEdit] = useState(false);


    useEffect(()=>{
        setEditText(todoContent)
    },[todoContent])
    

   const handleEdit = ()=>{
        setIsEdit(true)
   }
   
   const handleSaveEdit = ()=>{
       dispatch({
            type: 'EDIT',
            payload: {
                ...todoObj,
                todoContent: editText,
            }
        })
        setIsEdit(false)
   }

   const handleDelete = ()=>{
        dispatch({
            type: 'DELETE',
            payload: {
                id
            }
        })
   }

	 const handleCancel = ()=>{
			setIsEdit(false)
			setEditText(todoContent)
	 }

   const handleChange = ({target})=>setEditText(target.value);

    return (
        
        <div className="card mt-5">
            <div className="card-body">
                {isEdit? 
										<>
                        <input className="form-control mb-4" value={editText} type='text' onChange={handleChange}/>
                        <div className='row justify-content-end'>
                            <div className='col-auto'>
                                <button className='btn btn-danger me-3' onClick={handleCancel}>Cancel</button>
                                <button className='btn btn-primary' onClick={handleSaveEdit}>save</button>
                            </div>
                        </div>
                    </> : <>
                            <small>{formattedDate(postedTime)}</small>
                            <p className='fs-5'>{todoContent}</p>
                            <div className='row justify-content-end'>
                                <div className='col-auto'>
                                    <button className='btn btn-danger me-3' onClick={handleDelete}>Delete</button>
                                    <button className='btn btn-primary' onClick={handleEdit}>Edit</button>
                                </div>
                            </div>
                         </>
                    }
            </div>
        </div>
           
    
    )
}

TodoCard.propTypes = {
	todoObj: PropTypes.object,
}

export default TodoCard

