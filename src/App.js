import React from "react";
import "./App.css";
import RouteIndex from "./routes/RouteIndex";
import "./pages/styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="main">
      <RouteIndex />
    </div>
  );
}

export default App;
