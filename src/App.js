import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Register from "./pages/registration";
import Contact from "./pages/contact";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:product" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
