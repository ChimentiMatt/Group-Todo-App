import React, { useState } from "react"
import Header from './components/Header.js'
import AddTask from './components/AddTask.js'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Walk the dog',
      completed: false,
    },
    {
      id: 2,
      text: 'Exercise',
      completed: false,
    }
  ])

  const addTask = (task) => {
    task.id = Date.now()
    task.completed = false
    setTasks([...tasks, task])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="
      w-full
      text-center">
      <Header />
      <AddTask addTask={addTask}/>
      <Tasks tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
