import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [{ title: "Task Title", state: "PLANNED" }],
  dragedTask: null,
  addTask: (title, state) =>
    set(
      (store) => ({ tasks: [...store.tasks, { title, state }] }),
      false,
      "addTask"
    ),
  deleteTask: (title) => {
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    }));
  },
  setDragedTask: (title) => set({ dragedTask: title }),
  moveTask: (title, state) => {
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    }));
  },
});
// middleware
const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log(args);
      set(...args);
    },
    get,
    api
  );

// export const useStore = create(persist(devtools(store), { name: "store" }));
export const useStore = create(
  log(persist(devtools(store), { name: "store" }))
);
// export const useStore = create(devtools(store));
