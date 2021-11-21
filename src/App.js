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
import Order from "./Order/Order";
import Registar from './Components/Login/Registar/Registar';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import MakeAnAdmin from "./Components/Dashbord/MakeAnAdmin/MakeAnAdmin";
import AddProduct from "./Components/Dashbord/AddProduct/AddProduct";
import UserOrder from "./Components/Home/UserOrder/UserOrder";

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/order/:orderId" element={<Order />}></Route>
            <Route path="/dashbord" element={<Dashbord />}></Route>
            <Route path={`/dashboard/makeAdmin`} element={
              <MakeAnAdmin></MakeAnAdmin>
            }></Route>
            <Route path={`/dashboard/addProduct`} element={
              <AddProduct />
            }></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/userorder" element={<UserOrder></UserOrder>}></Route>
            <Route path="/register" element={<Registar />}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
