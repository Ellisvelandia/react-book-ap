import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookList />} />
        <Route path="/favorites" element={<Fav />} />
      </Routes>
    </div>
  );
}

export default App;
