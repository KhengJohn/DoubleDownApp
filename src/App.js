import "./App.css";
import LandingPage from "./pages/LandingPage";
import Slider from "./components/home/Slider";
import SecondSection from "./components/home/SecondSection";
import "./pages/styles.css";
import { blackJackBG } from "./common/assets/images";

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <div
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          margin: "auto",
          backgroundImage: `url(${blackJackBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          gap: "0px",
          position: "relative",
        }}
      >
        <Slider />
      </div>
      <SecondSection /> */}
    </div>
  );
}

export default App;
