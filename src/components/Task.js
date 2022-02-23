import { AiOutlineDelete, AiFillCheckCircle } from 'react-icons/ai';
const Task = ({ task, removeTask }) => {
    return (
        <div className="flex justify-center font-bold">
                <p className="w-44 text-red-400" id={task.id}>{task.text}</p>
                <button onClick={() => {task.completed = MarkDone(task)}}
                    className="ml-5 hover:text-red-400"
                ><AiFillCheckCircle/></button>
                <button onClick={() => removeTask(task.id)}
                    className="ml-5 hover:text-red-400"
                > <AiOutlineDelete /></button>
        </div>
    )
}

function MarkDone(task){
    const myText = document.getElementById(task.id);
    if (!task.completed){
        myText.classList.remove("text-red-400");
        myText.classList.add("text-gray-300");
        myText.classList.add("line-through");
    }else{
        myText.classList.add("text-red-400");
        myText.classList.remove("text-gray-300");
        myText.classList.remove("line-through");
    }
    console.log("completed set to: " + !task.completed +" for task " + task.id);
    return !task.completed;
}

export default Task