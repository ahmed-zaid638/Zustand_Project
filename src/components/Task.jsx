import classNames from "classnames";
import { useStore } from "../store";
import "./Task.css";
import deleteIcon  from "../../public/assets/trash-2.svg"

function Task({ title }) {
  const task = useStore((store) => {
    return store.tasks.find((task) => (task.title === title));
  });

 // delete Task
 const deleteTask = useStore((store) => store.deleteTask )
 
  return (
    <div className="task" draggable>
      <div className="title">{task.title}</div>
      <div className="bottomWrapper">
        <div className="img"  onClick={() => deleteTask(title) }>  <img src= {deleteIcon} /></div>
        <div className= {classNames('status' , task.state)}>{task.state}</div>
      </div>
    </div>
  );
}

export default Task;

