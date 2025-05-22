import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"

import TodoDetails from "./Components/TodoDetails"
import { CreateTodo } from "./Components/CreateTodo"
import { EditTodo } from "./Components/EditTodo"
import { TodoList } from './Components/TodoList';



function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetails/>} />
        <Route path="/create-todo" element={<CreateTodo />} />
        <Route path="/edit-todo/:id" element={<EditTodo />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
