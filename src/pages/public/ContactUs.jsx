import React from "react";
import {
  sendIcon,
  rightContactbg,
  leftContactbg1,
  leftContactbg2, 
} from "../../common/assets/images"; 

const ContactUs = () => {
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
      <div className="contact-container">
        <span
          className="contact-header cormorant-font gradient-text">
          Take a professional casino
          <br /> event planner today
        </span>
        <span className="contact-p">
          To contact your casino party specializes please fill out the form and
          our team of <br />
          casino event planners with me with you within the day.
        </span>
        <form className="contact-form"
          onSubmit={onSubmit}
        >
          <div className="contact-form-group">
            <label for="exampleInputEmail1" className="contact-form-label">
              Name
            </label>
            <input
              type="text"
              className="contact-form-control contact-form-control-fn"
              id="contactUsName"
              aria-describedby="nameHelp"
              placeholder="Full Name"
            />
          </div>
          <div className="contact-form-group">
            <label for="exampleInputPassword1" className="contact-form-label">
              Date of Event
            </label>
            <input
              type="date"
              className="contact-form-control"
              id="contactUsDate"
              placeholder="00/00/0000"
            />
          </div>
          <div className="contact-form-group">
            <label for="exampleInputPassword1" className="contact-form-label">
              City
            </label>
            <input
              type="text"
              className="contact-form-control"
              id="contactUsCity"
              placeholder="Enter your city"
            />
          </div>
          <div className="contact-form-group">
            <label for="exampleInputPassword1" className="contact-form-label">
              Guest Count
            </label>
            <input
              type="number"
              className="contact-form-control"
              id="contactUsGuestCount"
              placeholder="00"
            />
          </div>
          <div className="contact-form-group">
            <label for="exampleInputEmail1" className="contact-form-label">
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
          <div className="contact-form-group">
            <label for="phoneNumber" className="contact-form-label">
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
          <div className="contact-form-group">
            <label for="message" className="contact-form-label">
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
