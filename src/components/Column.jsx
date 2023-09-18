import Task from "./Task";
import "./Column.css";
import { useStore } from "../store";

function Column({ state }) {
  const tasks = useStore((store) => {
    return store.tasks.filter((task) => (task.state === state));
  });

  console.log(tasks[0]);

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button>add</button>
      </div>
      {tasks.map((task) => {
        return <Task title={task.title} key={task.title} />;
      })}
    </div>
  );
}

export default Column;
