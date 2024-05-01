import React, {useEffect, useRef} from "react";
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

const SecondSection = () => {    

  
  return (
    <div
      style={{
        width: "100%",
        height: "450vh",
        overflow: "hidden",
        margin: "auto",
        backgroundImage: `url(${lightBG})`,
        backgroundColor: "#000",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        gap: "0px",
        position: "relative",
        zIndex: 4
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200vh",
          overflow: "hidden",
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
                fontSize: "26px",
                textAlign: "start",
                width: "90%",
              }}
              className="cormorant-font"
            >
              With over 15 years of experience in the casino party industry.
            </span>
            <p
              style={{
                fontWeight: 100 /* Light font weight */,
                // fontStyle: "italic" /* Italic style */,
                fontSize: "13px",
                textAlign: "start",
                width: "90%",
                color: "#fff",
                paddingLeft: "30px",
              }}
            >
              We guarantee you will feel like you're in Vegas!  Whether you're
              hosting a small 25 person home birthday party or a large 5000 plus
              person corporate event, Double Down Casino Events is committed to
              providing you with the highest quality equipment and best service
              available. All of our events are ran by a professionally trained
              pit boss  to ensure your event runs flawlessly. What is the
              difference between Double Down Casino Events and all of the other
              casino party companies? Reliability, competitive pricing, and
              state of the art equipment. Request a quote today to see why we
              are the best in casino rentals in Texas!
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
                padding: "10px 25px",
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
              marginTop: "-190px",
            }}
          >
            <span
              style={{
                fontWeight: 100 /* Light font weight */,
                // fontStyle: "italic" /* Italic style */,
                fontSize: "26px",
                textAlign: "start",
                width: "90%",
              }}
              className="cormorant-font"
            >
              Casino Night{" "}
            </span>
            <p
              style={{
                fontWeight: 300 /* Light font weight */,
                fontStyle: "italic" /* Italic style */,
                fontSize: "13px",
                textAlign: "start",
                width: "90%",
                color: "#fff",
                paddingLeft: "30px",
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
                height: "150vh",
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
                top: "70vh",
                left: "-50%",
                boxShadow: "0 0 10px #E7B960", // Add a #E7B960 shadow
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Three Items */}
      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "20px",
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <img
              src={diamondCard}
              style={{ width: "150px" }}
              alt="diamondCard"
            />
            <img src={slideBase} style={{ width: "250px" }} alt="diamondCard" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0px",
              }}
            >
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "26px",
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
                  fontSize: "20px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                $3895
              </span>
              <ul
                style={{
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "14px",
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
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <img src={dice} style={{ width: "150px" }} alt="dice" />
            <img src={slideBase} style={{ width: "250px" }} alt="diamondCard" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0px",
              }}
            >
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "26px",
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
                  fontSize: "20px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                $1495
              </span>
              <ul
                style={{
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "14px",
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
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <img src={coin} style={{ width: "150px" }} alt="coin" />
            <img src={slideBase} style={{ width: "250px" }} alt="diamondCard" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0px",
              }}
            >
              <span
                style={{
                  fontWeight: 300 /* Light font weight */,
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "26px",
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
                  fontSize: "20px",
                  color: "#E7B960",
                }}
                className="cormorant-font"
              >
                $2395
              </span>
              <ul
                style={{
                  fontStyle: "italic" /* Italic style */,
                  fontSize: "14px",
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
            height: "150vh",
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
              height: "40vh",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
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
                margin: "auto",
                width: "32%",
              }}
            >
              <img
                src={bottomSpade}
                style={{
                  transform: " rotate(162.11deg)",
                  zIndex: 2,
                  position: "absolute",
                  left: "0%",
                  width: "16rem",
                  bottom: "-320px",
                }}
                alt=""
              />
              <img
                src={bottomHeart}
                style={{
                  transform: " rotate(0.11deg)",
                  zIndex: 1,
                  position: "absolute",
                  right: "0%",
                  width: "16rem",
                  bottom: "-320px",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
