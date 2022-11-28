import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Game from "./game/game";
import Mail from "./mail/mail";
import TodoList from "./todo/todoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
