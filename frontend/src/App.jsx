import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import Reset from "./pages/auth/Reset";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./pages/addProduct/AddProduct";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="/forgot" element={<Forgot />}></Route> */}
          {/* <Route path="/resetpassword/:resetToken" element={<Reset />}></Route> */}

          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <Layout>
                  <Dashboard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/add-product"
            element={
              <Sidebar>
                <Layout>
                  <AddProduct />
                </Layout>
              </Sidebar>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
