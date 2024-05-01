import React from "react";
import {
  requestDice,
} from "../../common/assets/images";

const About = () => {
  return (
    <div
    style={{
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      margin: "auto",
      gap: "0px",
      position: "relative",
      backgroundColor: '#000'
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
  )
}

export default About