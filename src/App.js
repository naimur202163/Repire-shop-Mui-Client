import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord/Dashbord";
import Login from "./Components/Login/Login/Login";
import About from "./Components/About/About";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashbord" element={<Dashbord />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
