import Task from "./Task";
/* eslint-disable react/prop-types */

function Column({ state }) {
  return (
    <div className="column">
      <div className="status"> {state}</div>
      <Task status = {state}  />
    </div>
  );
}

export default Column;
