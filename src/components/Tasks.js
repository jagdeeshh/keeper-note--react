import Task from "./Task";
const Tasks = ({tasks, onDelete,onDoubleclick}) => {
  return (
    <>
    {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} 
        onDoubleclick={onDoubleclick}/>
        
    ))}

    </>
  );
}

export default Tasks;
