import "./App.css";
import Home from "./pages/home";
import Slider from "./components/home/Slider";
import SecondSection from "./components/home/SecondSection";
import "./pages/styles.css";
import { blackJackBG } from "./common/assets/images";

function App() {
  return (
    <div className="App">
      <Home />
      <div
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          margin: "auto",
          backgroundImage: `url(${blackJackBG})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          gap: "0px",
          position: "relative",
        }}
      >
        <Slider />
      </div>
      <SecondSection />
    </div>
  );
}

export default App;
