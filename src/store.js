import { create } from "zustand"

const store =  (set) => ({
    tasks : [{title : "Task Title" , state : "DONE"}  ]
})

export   const useStore  = create(store)

