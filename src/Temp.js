import React, { useMemo } from "react";
import { useStore } from "./store";

function Temp(state) {
  // using Filter
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.status === state),
    (prev, next) => {  // using shallow 
      const lognest = prev.length > next.length ? prev.length : next.length;
      for (let i = 0; i < lognest.length; i++) {
        if (!prev[i] || !next[i]) return false;
        if (prev[i] === next[i]) return false;
      }
      return true;
    }
  );
  // prefred to use useMemo hook
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      return (task.status = state);
    });
  }, [tasks, state]);

  return <div>Temp</div>;
}

export default Temp;
