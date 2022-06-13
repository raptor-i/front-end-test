import './App.css';
import {BrowserRouter as Router,Routes,Route, HashRouter,} from "react-router-dom";
import Home from './pages/home/home';
import Task1 from './pages/task-1/Task-1';
import Task2 from './pages/task-2/Task-2';


function App() {
  //
  //
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="task-1" element = {<Task1/>}/>
      <Route path="task-2" element = {<Task2/>}/>
    </Routes>
  </HashRouter>
  );
}

export default App;
