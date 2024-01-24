import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import TaskContextProvider from "./contexts/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TaskContextProvider>
            <App />
        </TaskContextProvider>
    </React.StrictMode>
);
