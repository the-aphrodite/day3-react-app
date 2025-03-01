import React from 'react'
import {useState} from 'react'

function TodoForm({addTodo}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const subimtTodo = (e) => {
        if (title.length === 0) return;
        addTodo(title, description);
        setTitle('');
        setDescription ('');
    }


    return (
        <div>
            <div className="form-group">
                <label htmlFor="title">Enter Todo Title</label>
                <input type='text' id='title' className=' form-control' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>

            <div className="form-group mt-3">
                <label htmlFor="description">Enter Todo Description</label>
                <textarea rows={6} id='description' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div className="form-group mt-3 align-items-center justify-content-center d-flex">
                <button type='submit' className=' btn btn-success ' onClick={(e) => subimtTodo(e.target.value)}>Submit</button>
            </div>

        </div>
    )
}

export default TodoForm