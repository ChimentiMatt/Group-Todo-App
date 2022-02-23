import { AiOutlineDelete } from 'react-icons/ai';

const Task = ({ task, removeTask }) => {
    return (
        <div className="flex justify-center font-bold">
                <p className="w-44 text-red-400">{task.text}</p>
                <button onClick={() => removeTask(task.id)}
                    className="ml-5 hover:text-red-400"
                > <AiOutlineDelete /></button>
        </div>
    )
}

export default Task