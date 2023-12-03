// import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddFight from "./pages/AddFight";
import Fight from "./pages/Fight";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <div className="container" style={{}}>
        <div>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addfight" element={<AddFight />} />
            <Route path="/fight" element={<Fight />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
