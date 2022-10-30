import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Plants from "./components/Plants/Plants";

import "./App.css";

const App = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Plants />} />
    </Routes>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
