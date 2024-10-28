import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Styles from "./style.module.css"
import Home from "./components/home/Home";
import About from "./components/about/about";


function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;