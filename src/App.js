import React, { useRef, useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SecondSection from "./components/home/SecondSection";
import "./pages/styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blackJackBG } from "./common/assets/images";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  useEffect(() => {
    const bg2 = bg2Ref.current;
    const bg3 = bg3Ref.current;
    gsap.set(bg2, { opacity: 0, backgroundImage: `url(${blackJackBG})` });
    gsap.set(bg3, { opacity: 0, x: 0, y: 0 });
    gsap.to(bg2, {
      delay: 5,
      opacity: 0,
      backgroundImage: `url(${blackJackBG})`,
      duration: 2,
      onComplete: () => {
        gsap.to(bg2, {
          backgroundImage: `url(${blackJackBG})`,
          opacity: 1,
          scrollTrigger: {
            trigger: ".container",
            start: "top 1px",
            end: "1400",
            // toggleActions: 'play pause reverse none',
            scrub: true,
            pin: bg2,
            // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
            // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
          },
        });
      },
    });
    gsap.to(bg3, {
      x: 0,
      y: 0,
      duration: 3,
      opacity: 1,
      zIndex: 10,
      scrollTrigger: {
        trigger: ".container",
        start: "1400",
        end: "1505",
        // toggleActions: 'play pause reverse none',
        scrub: true,
        pin: bg3,
        // onEnter: function() { gsap.to("#hh", { scaleX: 1, rotation: 0 }) },
        // onLeave: function() { gsap.to("#hh", { scaleX: -1, rotation: -15 }) },
      },
    });
  }, [])
  
 
  return (
    <div className=".container">
      <LandingPage ref={bg2Ref} />
      <div
        ref={bg3Ref}
        style={{
          color: "#FFF",
          zIndex: 3,
          position: "absolute",
          top: "1200px",
          opacity:0,
          width: "100%"
        }}
      >
        <SecondSection />
      </div>
    </div>
  );
}

export default App;
