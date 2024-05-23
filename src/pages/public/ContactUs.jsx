import React, { useState } from "react";
import {
  sendIcon,
  rightContactbg,
  leftContactbg1,
  leftContactbg2,
  rightImage,
  leftImage,
  logoT,
  hamburger,
  shoppingCart,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import NavBar from "../../components/home/NavBar";

const ContactUs = () => {
  const [menu, setMenue] = useState(true);

  const toggleMenu = () => {
    setMenue(!menu);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <NavBar toggleMenu={toggleMenu} menu={menu} />
      <Link to={"/"}>
        <div className="logo-container">
          <img
            src={leftImage}
            alt="Animated"
            style={{
              position: "absolute",
              top: "16px",
              left: "3.5vw",
              transform: " rotate(-29.11deg)",
              zIndex: 2,
            }}
          />
          <img
            src={rightImage}
            alt="Animated"
            style={{
              position: "absolute",
              top: "14px",
              left: "5vw",
              transform: " rotate(-29.11deg)",
              zIndex: 1,
            }}
          />
          <img
            src={logoT}
            alt="logo"
            style={{
              width: "150px",
              position: "absolute",
              top: "16px",
              left: "8vw",
            }}
          />
        </div>
      </Link>
      <img
        src={hamburger}
        alt="logo"
        style={{
          position: "absolute",
          top: "28px",
          right: "5%",
          width: "50px",
          cursor: "pointer",
          ":hover": {
            cursor: "pointer",
          },
        }}
        onClick={toggleMenu}
      />
      <Link to={"/sign-up"}>
        <button
          style={{
            position: "absolute",
            top: "12px",
            right: "18%",
            border: "1px solid transparent",
            borderImage:
              "linear-gradient(to right, #BE9F60 0%, #000 49%, #BE9F60 100%) 1",
            borderImageSlice: "1",
            borderImageRepeat: "stretch",
            backgroundColor: "initial",
            color: "#E7B960",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "8px",
            padding: "05px 20px",
            cursor: "pointer",
            zIndex: 10,
            marginTop: "10px",
            opacity: 1,
          }}
          className="cormorant-font"
        >
          SIGN UP
        </button>
      </Link>
      <img
        src={shoppingCart}
        alt="logo"
        style={{
          position: "absolute",
          top: "12px",
          right: "12%",
          cursor: "pointer",
          zIndex: 10,
          opacity: 1,
          ":hover": {
            cursor: "pointer",
          },
        }}
      />
      <img
        className="leftContactbg1 contact-floating-img1"
        src={leftContactbg1}
        alt=""
      />
      <img
        className="leftContactbg2 contact-rotation-img"
        src={leftContactbg2}
        alt=""
      />
      <img
        className="rightContactbg1 contact-floating-img2"
        src={rightContactbg}
        alt=""
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "60%",
        }}
      >
        <span
          className="cormorant-font gradient-text"
          style={{
            fontSize: "45px",
            fontWeight: 600,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: "89%",
            fontStyle: "italic",
          }}
        >
          Take a professional casino
          <br /> event planner today
        </span>
        <span
          style={{
            fontFamily: "gordita-font",
            fontSize: "14px",
            color: "#c7c7c7",
            textAlign: "center",
            fontWeight: 100,
            lineHeight: "135%",
          }}
        >
          To contact your casino party specializes please fill out the form and
          our team of <br />
          casino event planners with me with you within the day.
        </span>
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "60%",
          }}
        >
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="contact-form-control"
              id="contactUsName"
              aria-describedby="nameHelp"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="form-label">
              Date of Event
            </label>
            <input
              type="date"
              className="contact-form-control"
              id="contactUsDate"
              placeholder="00/00/0000"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="form-label">
              City
            </label>
            <input
              type="text"
              className="contact-form-control"
              id="contactUsCity"
              placeholder="Enter your city"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="form-label">
              Guest Count
            </label>
            <input
              type="number"
              className="contact-form-control"
              id="contactUsGuestCount"
              placeholder="00"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="contact-form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label for="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="contact-form-control"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your Phone number"
            />
          </div>
          <div className="form-group">
            <label for="message" className="form-label">
              Message
            </label>
            <textarea
              type=""
              className="contact-form-control"
              id="exampleInputEmail1"
              placeholder="Type your message here"
              style={{ height: "150px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <button type="submit" className="contact-btn">
              SEND MESSAGE
              <img src={sendIcon} alt="sendIcon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
