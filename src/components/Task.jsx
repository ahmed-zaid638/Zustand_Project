import classNames from "classnames";
import { useStore } from "../store";
import "./Task.css";

function Task({ title }) {
  const task = useStore((store) => {
    return store.tasks.find((task) => (task.title === title));
  });


 
  return (
    <div className="task" draggable>
      <div className="title">{task.title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className= {classNames('status' , task.state)}>{task.state}</div>
      </div>
    </div>
  );
}

export default Task;

