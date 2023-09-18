import Task from "./Task";
import "./Column.css";
import { useStore } from "../store";
import { useState } from "react";

function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);

  const tasks = useStore((store) => {
    return store.tasks.filter((task) => task.state === state);
  });

  // add Task
  const addTask = useStore((store) => store.addTask);

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>add</button>
      </div>
      {tasks.map((task) => {
        return <Task title={task.title} key={task.title} />;
      })}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Column;
