import './App.css';
import Home from './pages/Home';
import Piece from './pages/Piece';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path = "/" element = {<Home/>}/>
      <Route path = "/*" element = {<Piece/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
 