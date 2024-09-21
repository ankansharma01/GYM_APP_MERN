import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import WorkoutSessions from "./Components/WorkoutSessions";
import Gallery from "./Components/Gallery";
import Pricing from "./Components/Pricing";
import BMIcalculator from "./Components/BMIcalculator";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import CustomCursor from "./Components/CustomeCursor";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <CustomCursor /> */}
        <NavBar />
        <Hero />
        <WorkoutSessions />
        <Gallery />
        <Pricing />
        <BMIcalculator />
        <Contact />
        <Footer />
        <ToastContainer theme="dark" position="top-center" />
      </div>
    </Router>
  );
};

export default App;
