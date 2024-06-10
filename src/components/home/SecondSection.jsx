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
  gsap.set(".B1", { scale: 1, y: -200, x: 0, opacity: 0 });

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add(
      {
        isMobile: "(max-width: 600px)",
        isDesktop: "(max-width: 1600px)",
        isLargeDesktop: "(min-width: 1799px)",
      },
      (context) => {
        let { isMobile, isDesktop, isLargeDesktop } = context.conditions;

        gsap.to(".I1", {
          scale: 1.3,
          y: isDesktop ? "-22vh" : "-22vh", //-130
          x: isDesktop ? "6vw" : "12vw", //60
          duration: 2,
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: isDesktop ? "+=250" : "+=250",
            scrub: 1,
            toggleActions: "play none none none", 
          },
        });

        gsap.to(".I1B", {
          scale: 1.3,
          y: isDesktop ? "-20vh" : "-22vh", //-120
          x: isDesktop ? "5vw" : "12vw", //50
          duration: 1,
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: "+=250",
            scrub: 1,
            toggleActions: "play none none none",
          },
        });

        gsap.to(".I1C", {
          y: isDesktop ? "-20vh" : "-22vh", //-120
          x: isDesktop ? "5vw" : "12vw", //50
          duration: 2,
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: "+=250",
            scrub: 1,
            toggleActions: "play none none none",
          },
        });

        gsap.to(".I2", {
          scale: 1.3,
          y: isDesktop ? "-20vh" : "-22vh", //-120
          x: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: "+=250",
            scrub: 1,
            toggleActions: "play none none none",
          },
        });

        gsap.to(".I2B", {
          scale: 1.3,
          y: isDesktop ? "-20vh" : "-22vh", //-120
          x: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: "+=250",
            scrub: 1,
            toggleActions: "play none none none",
          },
        });

        gsap.to(".I2C", {
          y: isDesktop ? "-20vh" : "-22vh", //-120
          x: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: "+=250",
            scrub: 1,
            toggleActions: "play none none none",
          },
        });

        gsap.to(".I3", {
          scale: 1.3,
          duration: 2,
          y: isDesktop ? "-22vh" : "-22vh", //-130
          x: isDesktop ? "-6vw" : "-12vw", //-60
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: "+=250",
            scrub: 1,
            toggleActions: "play none none none",
          },
        });

        gsap.to(".I3B", {
          scale: 1.3,
          y: isDesktop ? "-20vh" : "-22vh", //-120
          x: isDesktop ? "-5vw" : "-12vw", //-50
          duration: 2,
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: "+=250",
            scrub: 1,
            toggleActions: "play none none none",
          },
        });
        gsap.to(".I3C", {
          y: isDesktop ? "-20vh" : "-22vh", //-120
          x: isDesktop ? "-5vw" : "-12vw", //-50
          duration: 2,
          scrollTrigger: {
            trigger: ".three-items-div",
            start: isDesktop ? "bottom" : "center",
            end: "+=250",
            scrub: 1,
            toggleActions: "play none none none",
          },
        });

        ScrollTrigger.create({
          trigger: ".footer",
          start:  isDesktop ?"155% top": "155% center",
          end: "+=200",
          scrub: 1.5,
          animation: gsap.timeline().to(".B1", {
            y: -70,
            x: 0,
            duration: 1,
            opacity: 1,
          }),
        });
        ScrollTrigger.create({
          trigger: ".footer",
          start:  isDesktop ?"155% top": "155% center",
          end: "+=100",
          scrub: 1.5,
          toggleActions: "play",
          animation: gsap.timeline().to(".BI1", {
            y: 0,
            x: 0,
            rotate: -188.11,
          }),
        });

        ScrollTrigger.create({
          trigger: ".footer",
          start:  isDesktop ?"155% top": "155% center",
          end: "+=100",
          scrub: 1.5,
          animation: gsap.timeline().to(".BI2", {
            y: 0,
            x: 0,
            rotate: -178.11,
          }),
        });
      }
    );
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${lightBG})`,
      }}
      className="scrollElement"
    >
      <div
        style={{
          width: "100%",
          height: "150vh",
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
            <p className="second-first-description gordita-font">
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
            <p className="second-first-description gordita-font">
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
            <button className="cormorant-font second-first-btn">
              READ MORE
            </button>
          </div>
        </div>

        {/* LINE */}
        <div style={{ position: "absolute", left: "50vw", top: 0 }}>
          <div style={{ display: "flex", position: "relative", width: "45px" }}>
            <div
              style={{
                height: "150vh",
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
      <div style={{ height: "25vh" }}></div>
      {/* Three Items */}
      <div className="three-items-div">
        <div className="three-div">
          <img src={diamondCard} alt="diamondCard" className="I1" />
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
          <img src={dice} alt="dice" className="I2" />
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
            <span className="cormorant-font  gradient-text three-div-title">
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
          <img src={coin} alt="coin" className="I3" />
          <img src={slideBase} alt="diamondCard" className="I3B" />
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
      <div className="callus-section-container">
        <span className="callus-text cormorant-font">CALL US TODAY !</span>
        <span className="callus-tel cormorant-font">+1 (512)-945-2363</span>
        <button className="cormorant-font callus-btn">
          REQUEST A QUOTE <img alt="request-dice" src={requestDice} />
        </button>
      </div>
      {/* FOOTER */}
      <div className="footer">
        <div className="B1 footer-text-container">
          <span className="cormorant-font footer-text-I B1">
            ©doubledowncasinoevents.com
          </span>
          <span className="cormorant-font footer-text-II B1">By MdX</span>
        </div>
        <div className="footer-img-container">
          <img src={bottomSpade} alt="" className="BI1 footer-img-I" />
          <img src={bottomHeart} alt="" className="BI2 footer-img-II" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
