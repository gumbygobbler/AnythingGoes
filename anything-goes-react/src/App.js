import "./styles.css";
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
import Fighter from "./pages/Fighter";
import Fight from "./pages/Fight";
import NoPage from "./pages/NoPage";

import PrivateRoute from "./utils/PrivateRoute";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <NavBar />
          <div className="page-container">
            <div className="side-component left">
              <img
                className="side-graphic"
                src="/stickerbomb1.jpg"
                alt="Left Aside Graphic"
              />
            </div>
            <div className="main-content">
              <div>
                <Routes>
                  <Route index element={<Welcome />} />
                  <Route path="/welcome" element={<Welcome />} />
                  <Route path="/home" element={<Home />} />
                  {/* <Route
                    path="/home"
                    element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }
                  /> */}
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/addfight" element={<AddFight />} />
                  <Route path="/fighter" element={<Fighter />} />
                  <Route path="/fight" element={<Fight />} />
                  <Route path="*" element={<NoPage />} />
                </Routes>
              </div>
              <div>
                <Footer />
              </div>
            </div>
            <div className="side-component right">
              <img
                className="side-graphic"
                src="/stickerbomb2.jpg"
                alt="Left Aside Graphic"
              />
            </div>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
