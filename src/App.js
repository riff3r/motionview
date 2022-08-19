import { Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import NavBar from "./component/Layout/Navbar";
import Checkout from "./component/Page/Checkout/Checkout";
import Home from "./component/Page/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./component/Page/Dashboard/Dashboard";
import Login from "./component/Page/Login/Login";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </div>
    </CartProvider>
  );
}

export default App;
