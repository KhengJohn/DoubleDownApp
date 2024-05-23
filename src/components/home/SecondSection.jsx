import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  requestDice,
  diamondCard,
  dice,
  coin,
  slideBase,
  heartsButton,
  bottomHeart,
  bottomSpade,
  lightBG,
} from "../../common/assets/images";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  gsap.set(".I1", { scale: 0, y: -300, x: 0 });
  gsap.set(".I1B", { scale: 0, y: -300, x: 0 });
  gsap.set(".I1C", { scale: 0, y: -300, x: 0 });
  gsap.set(".I2", { scale: 0, y: -300, x: 0 });
  gsap.set(".I2B", { scale: 0, y: -300, x: 0 });
  gsap.set(".I3", { scale: 0, y: -300, x: 0 });
  gsap.set(".I3B", { scale: 0, y: -300, x: 0 });
  gsap.set(".B1", { scale: 1, y: 300, x: 0 });

  useGSAP(() => {
    gsap.to(".I1", {
      scale: 1.3,
      y: -130,
      x: 60,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".I1B", {
      scale: 1.3,
      y: -120,
      x: 50,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".I1C", {
      y: -120,
      x: 50,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".I2", {
      scale: 1.3,
      y: -120,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".I2B", {
      scale: 1.3,
      y: -105,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".I2C", {
      y: -105,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });

    gsap.to(".I3", {
      scale: 1.3,
      duration: 2,
      y: -130,
      x: -60,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".I3B", {
      scale: 1.3,
      y: -120,
      x: -50,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });

    gsap.to(".I3C", {
      y: -120,
      x: -50,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "9860",
        end: "9930",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });

    gsap.to(".B1", {
      y: -300,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "10650",
        end: "11050",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".BI1", {
      y: -300,
      x: 0,
      duration: 2,
      rotate: -188.11,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "10750",
        end: "11050",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });

    gsap.to(".BI2", {
      y: -300,
      x: 0,
      duration: 2,
      rotate: -178.11,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "10750",
        end: "11050",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        margin: "auto",
        backgroundImage: `url(${lightBG})`,
        // backgroundColor: "red",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        gap: "0px",
        position: "relative",
        zIndex: 4,
      }}
      className="scrollElement"
    >
      <div
        style={{
          width: "100%",
          height: "200vh",
          overflow: "auto",
          margin: "auto",
          gap: "0px",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <div className="second-first-div">
            <span className="cormorant-font second-first-title">
              With over 15 years of experience in the casino party industry.
            </span>
            <p className="second-first-description">
              We guarantee you will feel like you're in Vegas!  Whether you're
              hosting a small 25 person home birthday party or a large 5000 plus
              person corporate event, Double Down Casino Events is committed to
              providing you with the highest quality equipment and best service
              available. All of our events are ran by a professionally trained
              pit boss  to ensure your event runs flawlessly.
              <br />
              <br />
              <br />
              What is thedifference between Double Down Casino Events and all of
              the other casino party companies? Reliability, competitive
              pricing, and state of the art equipment. Request a quote today to
              see why we are the best in casino rentals in Texas!
            </p>
            <button className="cormorant-font second-first-btn">
              REQUEST A QUOTE <img alt="request-dice" src={requestDice} />
            </button>
          </div>
        </div>

        <div
          style={{
            height: "50vh",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <div></div>
          <div className="second-first-divII">
            <span className="cormorant-font second-first-title">
              Casino Night
            </span>
            <p className="second-first-description">
              Host a Vegas style casino night for your friends and colleagues
              with Double Down Casino Events. We provide unsurpassed casino
              night rentals to the great state of Texas. Our 100% handmade in
              Texas, full-sized casino rentals will make your party
              unforgettable. We will bring the fun and energy of Las Vegas to
              all sized parties. Casino nights are great for birthday parties,
              holidays, weddings, corporate events, and many other occasions.
              Many companies have found that hosting a casino night boosts
              morale and camaraderie among their employees. With over 15 years
              of experience in the casino rental industry, not only will your
              party have state of the art casino equipment you will also have
              the best dealers around. Our dealers are trained in the Bellagio
              style to give your guests the friendliest most authentic
              experience. Give one of our expert event planners a call to see
              why Double Down Casino Events is your best choice.
            </p>
            <button
              style={{
                border: "1px solid transparent",
                borderImage:
                  "linear-gradient(to right, #E7B960 0%, #000 49%, #E7B960 100%) 1",
                borderImageSlice: "1",
                borderImageRepeat: "stretch",
                backgroundColor: "initial",
                color: "#E7B960",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "8px",
                padding: "15px 35px",
              }}
              className="cormorant-font"
            >
              READ MORE
            </button>
          </div>
        </div>
        {/* LINE */}
        <div style={{ position: "absolute", left: "50vw", top: 0 }}>
          <div style={{ display: "flex", position: "relative", width: "45px" }}>
            <div
              style={{
                height: "155vh",
                width: "3px",
                backgroundColor: "#E7B960",
                // position: "absolute",
                // top: "0",
                // left: "50vw",
                boxShadow: "0 0 3px #E7B960", // Add a #E7B960 shadow
              }}
            ></div>
            {/* DOT I */}
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "100%",
                backgroundColor: "#E7B960",
                position: "absolute",
                top: "22vh",
                left: "-50%",
                boxShadow: "0 0 10px #E7B960", // Add a #E7B960 shadow
              }}
            ></div>
            {/* DOTII */}
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "100%",
                backgroundColor: "#E7B960",
                position: "absolute",
                top: "76vh",
                left: "-50%",
                boxShadow: "0 0 10px #E7B960", // Add a #E7B960 shadow
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Three Items */}
      <div className="three-items-div">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            height: "100vh",
            paddingLeft: "70px",
            paddingRight: "70px",
          }}
        >
          <div className="three-div">
            <img
              src={diamondCard}
              style={{ width: "200px", marginBottom: "-20px" }}
              alt="diamondCard"
              className="I1"
            />
            <img src={slideBase} alt="diamondCard" className="I1B" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0px",
              }}
              className="I1C"
            >
              <span className="cormorant-font gradient-text three-div-title">
                Royal Flush
              </span>
              <span className="cormorant-font  gradient-text three-div-subtitle">
                $3895
              </span>
              <ul className="three-div-list">
                <li>8 Black Jack Tables</li>
                <li>2 Full Size Craps Tables</li>
                <li>2 Texas Hold'em Tables</li>
                <li>2 Roulette Tables</li>
              </ul>
              <button className="cormorant-font three-div-btn">
                RENT NOW <img alt="heartsButton" src={heartsButton} />
              </button>
            </div>
          </div>
          <div className="three-div">
            <img
              src={dice}
              style={{ width: "150px" }}
              alt="dice"
              className="I2"
            />
            <img src={slideBase} alt="diamondCard" className="I2B" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0px",
              }}
              className="I2C"
            >
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "26px",
                  color: "#E7B960",
                }}
                className="cormorant-font  gradient-text three-div-title"
              >
                Double Down
              </span>
              <span className="cormorant-font gradient-text three-div-subtitle">
                $1495
              </span>
              <ul className="three-div-list">
                <li>2 Black Jacks Tables</li>
                <li>2 Texas Hold'em Table</li>
                <li>2 Tables of your choice</li>
                <li>Large craps not included</li>
              </ul>
              <button className="cormorant-font three-div-btn">
                RENT NOW <img alt="heartsButton" src={heartsButton} />
              </button>
            </div>
          </div>
          <div className="three-div">
            <img
              src={coin}
              style={{ width: "150px" }}
              alt="coin"
              className="I3"
            />
            <img
              src={slideBase}
              style={{ width: "250px" }}
              alt="diamondCard"
              className="I3B"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0px",
              }}
              className="I3C"
            >
              <span className="cormorant-font gradient-text three-div-title">
                StraightMoney
              </span>
              <span className="cormorant-font gradient-text  three-div-subtitle">
                $2395
              </span>
              <ul className="three-div-list">
                <li>5 Black Jack Tables</li>
                <li>2 Texas Hold'em Tables</li>
                <li>1 Full Size Craps Table</li>
                <li>1 Roulette Table</li>
              </ul>
              <button className="cormorant-font three-div-btn">
                RENT NOW <img alt="heartsButton" src={heartsButton} />
              </button>
            </div>
          </div>
        </div>
        {/* CALL US SECTION */}
        <div
          style={{
            height: "190vh",
            margin: "auto",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100vh",
              gap: "30px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "100px", color: "#E7B960" }}
              className="cormorant-font"
            >
              CALL US TODAY !
            </span>
            <span
              style={{ fontSize: "50px", color: "#E7B960" }}
              className="cormorant-font"
            >
              +1 (512)-945-2363
            </span>
            <button
              style={{
                border: "1px solid transparent",
                borderImage:
                  "linear-gradient(to right, #E7B960 0%, #000 49%, #E7B960 100%) 1",
                borderImageSlice: "1",
                borderImageRepeat: "stretch",
                backgroundColor: "initial",
                color: "#E7B960",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "8px",
                padding: "10px 25px",
              }}
              className="cormorant-font"
            >
              REQUEST A QUOTE <img alt="request-dice" src={requestDice} />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              height: "90vh",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "300px",
              }}
              className="B1"
            >
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "16px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                ©doubledowncasinoevents.com
              </span>
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "16px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                By MdX
              </span>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                marginTop: "0",
                width: "32%",
                backgroundColor: "green",
              }}
            >
              <img
                src={bottomSpade}
                style={{
                  transform: " rotate(-102.11deg)",
                  zIndex: 2,
                  position: "absolute",
                  left: "0%",
                  width: "16rem",
                  bottom: "-520px",
                }}
                alt=""
                className="BI1"
              />
              <img
                src={bottomHeart}
                style={{
                  transform: " rotate(-102.11deg)",
                  zIndex: 1,
                  position: "absolute",
                  right: "0%",
                  width: "16rem",
                  bottom: "-520px",
                }}
                alt=""
                className="BI2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
