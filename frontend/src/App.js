import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Plants from "./components/Plants/Plants";
import About from "./components/About/About";
import PlantScreen from "./components/Shop/PlantScreen/PlantScreen";
import CartScreen from "./components/Shop/CartScreen/CartScreen";
import LoginScreen from "./components/Shop/LoginScreen/LoginScreen";
import RegisterScreen from "./components/Shop/RegisterScreen/RegisterScreen";
import ProfileScreen from "./components/Shop/ProfileScreen/ProfileScreen";

import "./App.css";

const App = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Plants />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/product/:id" element={<PlantScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/cart/:id" element={<CartScreen />} />
      <Route path="/products" element={<Plants />} />

      {/* <Route path="/products/:id" element={<PlantScreen />} /> */}

      <Route path="/about" element={<About />} />
    </Routes>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
