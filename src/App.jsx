import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Skills from "./components/pages/Skills";
import Hero from "./components/Hero/Hero";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Route>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/Contact" element={Contact} />
          <Route path="/Skills" element={Skills} />
        </Route>
      </Navbar>
      <div className="container">
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
