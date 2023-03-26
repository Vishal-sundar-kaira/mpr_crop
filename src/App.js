import Home from './Components/Home'
import { Routes, Route } from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Recommend from './Components/Recommend';
import Notestate from './Components/context/notes/Notestate';
// import 'style.css';
function App() {
  return (
    <>
    <Notestate>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/recommend" element={<Recommend/>}></Route>

      </Routes>
    </Router>
    </Notestate>
    </>

  );
}

export default App;
