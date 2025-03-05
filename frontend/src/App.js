import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Search from "./Components/Search.js";
import Login from "./Components/Login.js";
import Registration from "./Components/Registration.js"; 
import Products from "./Components/Products.js";
import Cart from "./Components/Cart.js"; 
import Profile from "./Components/Profile.js";
import History from "./Components/History.js";
import Order from "./Components/Order.js";
import Payment from "./Components/Payment.js"; 
import Track from "./Components/Track.js";
import Logout from "./Components/Logout.js";
import Welcome from "./Components/Welcome.js";
import ProductsAPI from "./Components/ProductsAPI.js";
import Logo from "./Components/Logo.js";
import Video from "./Components/Video.js";
import ProductList from "./Components/ProductList";
import UserList from "./Components/UserList";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/track" element={<Track />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/ProductsAPI" element={<ProductsAPI />} />
          <Route path="/logo" element={<Logo />}/>
          <Route path="/video" element={<Video />}/>
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/UserList" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;