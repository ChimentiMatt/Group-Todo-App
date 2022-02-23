import React, { useState } from 'react';

export default function AddTask({ addTask }) {
    const [text, setText] = useState('')

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask({text})
    }

    return(
        <form className='mb-3'>
            <input
                placeholder='Enter a task'
                value={text}
                onChange={handleChange}
                className="border-solid border-2 border-sky-500"
            />
            <button onClick={handleSubmit}
                className="
                bg-blue-500 
                hover:bg-blue-700 
                text-white 
                font-bold 
                ml-2
                py-1 
                px-2 
                rounded"
            >Add Task</button>
        </form>
    )
}

