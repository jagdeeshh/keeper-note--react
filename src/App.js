import {useState} from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks';
import owner from './components/owner';

 

function App() {




  const[tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctor appointment',
        day:'Feb 5th at 2.30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 1.30pm',
        reminder:true,

    },
    {
        
        id:3,
        text:'Food shopping',
        day:'Feb 5th at 2.30pm',
        reminder:false,
    }
    
])
const[showAddTask,setshowAddTask]=useState(false)

//add task
const addingTask=(task)=>{
  const id=Math.floor(Math.random()*10000+1)
  // console.log(task)
  const newTask={id,...task}
  console.log(newTask)
  setTasks([...tasks,newTask])
}


//adding delete function
const onDelete=(id)=>{
  setTasks(tasks.filter((task) => task.id!==id))
}

//adding a remainder
const onDoubleclick=(id)=>{
  setTasks(
    tasks.map(
      (task)=>task.id===id ? {...task,reminder:!task.reminder}:task
    ))
}


  return (
    <div className="container">
    <owner />
      <Header title='Task Tracker'
      onAdd={()=> setshowAddTask(!showAddTask)
      }checkTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addingTask}/>}
      {tasks.length===0 ? <h3>nothing to show</h3> 
       : 
       <Tasks tasks={tasks} onDelete={onDelete}
        onDoubleclick={onDoubleclick}
       />}
       
    </div>
  );
}

export default App;
