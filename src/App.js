import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ROUTING_PATH } from "./constant/RoutingPath";
import Home_Page from "./pages/Home_Page";
import ToDo from "./pages/ToDo";
import { createContext, useState } from "react";

export const ToDoContext = createContext(null);

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  return (
    <ToDoContext.Provider value={{task, setTask,taskArray, setTaskArray,data, setData,filteredData, setFilteredData}}>

    <BrowserRouter>
      <Routes>
        <Route path={ROUTING_PATH.home} element={<Home_Page />} />
        <Route path={ROUTING_PATH.todo} element={<ToDo />} />
      </Routes>
    </BrowserRouter>
    </ToDoContext.Provider>
  );
}

export default App;
