import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Architecture } from "./components/Pages/Architecture";
import {Dummy} from "./components/Pages/Dummy";
function App() {
  return (
    <>
      <Router>
        <NavBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/architecture" element={<Architecture/>} />
              <Route path="/dummy" element={<Dummy/>} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;