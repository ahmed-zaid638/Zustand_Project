/* eslint-disable react/prop-types */

function Task({ status }) {
  return (
    <div className="task">
      <div className="todo">Todo</div>
      <div className="status">{status}</div>
    </div>
  );
}

export default Task;
