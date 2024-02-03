import { useEffect, useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {

  const [tasks, setTasks] = useState([])

  function loadSaveTask() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved){
      setTasks(JSON.parse(saved))
    }
  }
  useEffect(()=>{
    loadSaveTask()
  },[])
  function setTaskAndSave(newTasks) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }
  function addTasks(taskTitle) {
    setTaskAndSave([...tasks,{
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted:false
    }]);
  }
  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTaskAndSave(newTasks)
  }
  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTaskAndSave(newTasks);
  }

  return (
    <>
      <Header handleAddTask={addTasks}/>
      <Tasks 
      tasks = {tasks}
      onCompleted = {toggleTaskCompletedById}
      onDelete = {deleteTaskById}
      />
    </>
  )
}

export default App
