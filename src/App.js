import './App.css';
import Home from './pages/Home';
import Piece from './pages/Piece';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path = "/./:value" element = {<Piece/>}/>
      <Route exact path = "/" element = {<Home/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
 