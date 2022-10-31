import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Plants from "./components/Plants/Plants";
import About from "./components/About/About";
import PlantScreen from "./components/Shop/PlantScreen/PlantScreen";

import "./App.css";

const App = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Plants />} />
      <Route path="/plants" element={<PlantScreen />} />
      <Route path="/plants/:id" element={<PlantScreen />} />

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
