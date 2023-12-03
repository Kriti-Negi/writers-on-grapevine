import './App.css';
import Home from './pages/Home';
import Piece from './pages/Piece';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/*" element = {<Piece/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
 