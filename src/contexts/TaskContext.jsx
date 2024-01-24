import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import taskReducer from "../reducers/taskReducer";
import { initialTasks } from "../data/tasks";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

const TaskContextProvider = ({ children }) => {
    const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

    return (<TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
            {children}
        </TaskDispatchContext.Provider>
    </TaskContext.Provider>)
}
export default TaskContextProvider