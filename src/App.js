import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import "./pages/styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
 
  return (
    <div className="main">
      <LandingPage />
    </div>
  );
}

export default App;
