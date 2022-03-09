import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home/Home";
import "../assets/index.scss";
import Detail from "../pages/detail/Detail";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}
