import React, { useRef, useEffect, useState } from "react";
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
gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  gsap.set(".I1", { scale: 0, y: -300, x: 0 });
  gsap.set(".I1B", { scale: 0, y: -300, x: 0 });
  gsap.set(".I1C", { scale: 0, y: -300, x: 0 });
  gsap.set(".I2 ", { scale: 0, y: -300, x: 0 });
  gsap.set(".I2B", { scale: 0, y: -300, x: 0 });
  gsap.set(".I2C", { scale: 0, y: -300, x: 0 });
  gsap.set(".I3", { scale: 0, y: -300, x: 0 });
  gsap.set(".I3B", { scale: 0, y: -300, x: 0 });
  gsap.set(".I3C", { scale: 0, y: -300, x: 0 });
  gsap.set(".Contact", { scale: 0, y: -300, x: 0 });
  gsap.set(".B1", { scale: 1, y: 300, x: 0 });
  gsap.set(".BI1", { scale: 1, y: 300, rotation: -23 });
  gsap.set(".BI2", { scale: 1, y: 300, rotation: -23 });

  useEffect(() => {
    gsap.to(".I1", {
      scale: 1.3,
      y: -130,
      x: 60,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "2260",
        end: "2330",
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
        start: "2260",
        end: "2330",
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
        start: "2260",
        end: "2330",
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
        start: "2260",
        end: "2330",
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
        start: "2260",
        end: "2330",
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
        start: "2260",
        end: "2330",
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
        start: "2260",
        end: "2330",
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
        start: "2260",
        end: "2330",
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
        start: "2260",
        end: "2330",
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
        start: "3050",
        end: "3450",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".BI1", {
      y: -300,
      x: 100,
      duration: 2,
      rotate: -196.11,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "3150",
        end: "3450",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".BI2", {
      y: -300,
      x: -100,
      duration: 2,
      rotate: -186.11,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "3150",
        end: "3450",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    gsap.to(".Contact", {
      scale: 1.3,
      y: -120,
      x: -50,
      duration: 2,
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "2500",
        end: "2700",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "4300px",
        overflow: "hidden",
        margin: "auto",
        backgroundImage: `url(${lightBG})`,
        backgroundColor: "#000",
        backgroundSize: "contain",
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
          marginTop: "200px",
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
          <div
            style={{
              gap: "25px",
              color: "#E7B960",
              display: "flex",
              flexDirection: "column",
              marginLeft: "auto",
              margin: "auto",
              width: "70%",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 300 /* Light font weight */,
                fontStyle: "italic" /* Italic style */,
                fontSize: "50px",
                textAlign: "start",
                width: "90%",
                fontWeight: "100",
                marginLeft: "200px",
              }}
              className="cormorant-font"
            >
              With over 15 years of <br /> experience in the casino <br /> party
              industry.
            </span>
            <p
              style={{
                fontWeight: 100 /* Light font weight */,
                // fontStyle: "italic" /* Italic style */,
                fontSize: "20px",
                textAlign: "start",
                width: "90%",
                color: "#fff",
                paddingLeft: "30px",
                lineHeight: "1.5",
                marginLeft: "250px",
              }}
            >
              We guarantee you will feel like you're in Vegas!  Whether you're
              hosting a small 25 person home birthday party or a large 5000 plus
              person corporate event, Double Down Casino Events is committed to
              providing you with the highest quality equipment and best service
              available. All of our events are ran by a professionally trained
              pit boss  to ensure your event runs flawlessly.
              <br />
              What is the difference between Double Down Casino Events and all
              of the other casino party companies? Reliability, competitive
              pricing, and state of the art equipment. Request a quote today to
              see why we are the best in casino rentals in Texas!
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
                padding: "18px 50px",
                fontSize: "20px",
                alignSelf: "end",
              }}
              className="cormorant-font"
            >
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
          <div
            style={{
              gap: "25px",
              color: "#E7B960",
              display: "flex",
              flexDirection: "column",
              marginLeft: "auto",
              margin: "auto",
              width: "70%",
              alignItems: "center",
              marginTop: "-225px",
            }}
          >
            <span
              style={{
                fontWeight: 100 /* Light font weight */,
                fontStyle: "italic" /* Italic style */,
                fontSize: "50px",
                textAlign: "start",
                width: "90%",
                marginRight: "100px",
              }}
              className="cormorant-font"
            >
              Casino Night{" "}
            </span>
            <p
              style={{
                fontWeight: 300 /* Light font weight */,
                fontStyle: "gordita" /* Italic style */,
                fontSize: "20px",
                textAlign: "start",
                width: "90%",
                color: "#fff",
                paddingLeft: "30px",
                lineHeight: "1.5",
              }}
            >
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
                padding: "18px 50px",
                fontSize: "20px",
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
                boxShadow: "0 0 10px #E7B960", // Add a #E7B960 shadow
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
      <div style={{ marginTop: "-120px" }}>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <img
              src={diamondCard}
              style={{
                width: "180px",
                marginBottom: "80px",
                marginLeft: "50px",
              }}
              alt="diamondCard"
              className="I1 floating-img"
            />
            <img
              src={slideBase}
              style={{ width: "400px" }}
              alt="diamondCard"
              className="I1B"
            />
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
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "50px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                Royal Flush
              </span>
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "32px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                $3895
              </span>
              <ul
                style={{
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "18px",
                  color: "#fff",
                }}
              >
                <li>8 Black Jack Tables</li>
                <li>2 Full Size Craps Tables</li>
                <li>2 Texas Hold'em Tables</li>
                <li>2 Roulette Tables</li>
              </ul>
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
                  fontSize: "20px",
                }}
                className="cormorant-font"
              >
                RENT NOW <img alt="heartsButton" src={heartsButton} />
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <img
              src={dice}
              style={{
                width: "180px",
                marginBottom: "100px",
                marginLeft: "30px",
              }}
              alt="dice"
              className="I2 floating-img"
            />
            <img
              src={slideBase}
              style={{ width: "400px" }}
              alt="diceSlideBase"
              className="I2B"
            />
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
                  fontSize: "50px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                Double Down
              </span>
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "32px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                $1495
              </span>
              <ul
                style={{
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "18px",
                  color: "#fff",
                }}
              >
                <li>2 Black Jacks Tables</li>
                <li>2 Texas Hold'em Table</li>
                <li>2 Tables of your choice</li>
                <li>Large craps not included</li>
              </ul>
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
                  fontSize: "20px",
                }}
              >
                RENT NOW <img alt="heartsButton" src={heartsButton} />
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <img
              src={coin}
              style={{
                width: "180px",
                marginBottom: "80px",
                marginRight: "100px",
              }}
              alt="coin"
              className="I3 floating-img"
            />
            <img
              src={slideBase}
              style={{ width: "400px" }}
              alt="diamondCard"
              className="I3B"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0px",
              }}
              className="I3C"
            >
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "50px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                StraightMoney
              </span>
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "32px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                $2395
              </span>
              <ul
                style={{
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "18px",
                  color: "#fff",
                }}
              >
                <li>5 Black Jack Tables</li>
                <li>2 Texas Hold'em Tables</li>
                <li>1 Full Size Craps Table</li>
                <li>1 Roulette Table</li>
              </ul>
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
                  fontSize: "20px",
                }}
                className="cormorant-font"
              >
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
            className="Contact"
          >
            <span
              style={{ fontSize: "120px", color: "#E7B960", fontWeight: "bold", letterSpacing: "10px" }}
              className="cormorant-font"
            >
              CALL US TODAY !
            </span>
            <span
              style={{ fontSize: "90px", color: "#E7B960", letterSpacing: "8px" }}
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
                fontSize: "20px"
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
                  transform: " rotate(-122.11deg)",
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
