const Task = ({ task, onDelete }) => {
    return (
        <div className="tasks">
            <h3>{task.text}</h3>
        </div>
    )
}

export default Task