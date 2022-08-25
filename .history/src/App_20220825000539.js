import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import Book
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookList />} />
        <Route path="/" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
