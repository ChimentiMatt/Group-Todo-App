import React from 'react' 
import Task from "./Task"

export default function Tasks({ tasks, removeTask }){
    return(
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} removeTask={removeTask} completed={false} dueDate = {task.dueDate}/>
            ))}
        </>
    )
}