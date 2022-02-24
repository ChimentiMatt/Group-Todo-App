import React, { useState } from 'react';
import DatePickerButton from './DatePickerButton';
export default function AddTask({ addTask }) {
    const [text, setText] = useState('')

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask({text})
    }

	const buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-1 px-2 rounded";//style for todo add buttons

    return(
        <form className='mb-3 flex justify-center'>
            <input
                placeholder='Enter a task'
                value={text}
                onChange={handleChange}
                className="border-solid border-2 border-sky-500 px-3 rounded-l-lg"
            />
		<DatePickerButton buttonStyle = {buttonStyle}/>
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

