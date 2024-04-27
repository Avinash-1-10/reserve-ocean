import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Fail from "./pages/Fail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/menu/:type" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<Success />} />
        <Route path="/payment-failed" element={<Fail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
