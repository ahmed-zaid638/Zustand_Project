import Task from "../task/Task";
import "./Column.css";
import { useStore } from "../../store";
import { useState } from "react";
import classNames from "classnames";


function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
   const [drop , setDrop ] = useState(false)

  const tasks = useStore((store) => {
    return store.tasks.filter((task) => task.state === state);
  });

  // add Task
  const addTask = useStore((store) => store.addTask);
  // dragging
  const dragedTask = useStore((store) => store.dragedTask);
  const setDragedTask = useStore((store) => store.setDragedTask);
  // moving
  const taskMove = useStore((store) => store.moveTask);

  return (
    <div
      className= {classNames('column' , {drop : drop})}
      onDragOver={(e) =>{
        e.preventDefault()
        setDrop(true)
      }}
      onDragLeave={() =>  {
        setDrop(false)

      } }
      onDrop={(e) => {
        setDragedTask(null);
        taskMove(dragedTask, state);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => {
          setOpen(true)
     
        
        }}>Add</button>
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


