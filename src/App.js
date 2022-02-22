import React, { useState } from "react"
import Header from './components/Header.js'
import AddTask from './components/AddTask.js'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Walk the dog'
    },
    {
      id: 2,
      text: 'Exercise'
    }
  ])

  const addTask = (task) => {
    task.id = 5
    setTasks([...tasks, task])
  }

  return (
    <div className="
      w-full
      text-center">
      <Header />
      <AddTask addTask={addTask}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
