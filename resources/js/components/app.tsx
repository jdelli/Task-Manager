import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import { TaskProvider } from "./contex/TaskContex";

function App() {
    return (
        <BrowserRouter>
            <TaskProvider>
                <AppRoutes />
            </TaskProvider>
        </BrowserRouter>
    );
}

export default App;
