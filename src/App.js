import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "react-use-cart";
import NavBar from "./component/Layout/Navbar";
import Checkout from "./component/Page/Checkout/Checkout";
import Dashboard from "./component/Page/Dashboard/Dashboard";
import Home from "./component/Page/Home/Home";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer />
      </div>
    </CartProvider>
  );
}

export default App;
