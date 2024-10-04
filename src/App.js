import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from './components/Home'
import About from "./components/About";
import Country from "./components/Country";
import Navbar from "./components/Navbar";
import Compare from './components/Compare'

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/country" element={<Country />} />
          <Route path="/about" element={<About />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
