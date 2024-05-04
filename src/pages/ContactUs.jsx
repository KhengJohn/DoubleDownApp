import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const onSubmit = () => {};

  const handleSignUpBtnClick = () => {
    navigate("/signup");
  };

  return (
    <div className="contactus-page">
      <div className="contactus-modal">
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <div className="contactus-title">
            Take a professional casino <br /> event planner today
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#fff",
              display: "flex",
            }}
          >
            To contact your casino party specializes please fill out the form
            and our team of <br /> casino event planners with me with you within
            the day.
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "30px" }}
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
              placeholder="Enter your full name"
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
              placeholder="Your Password"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="form-label">
              City
            </label>
            <input
              type="date"
              className="contact-form-control"
              id="exampleInputPassword1"
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
              id="exampleInputPassword1"
              placeholder="Enter your city"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="contact-form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label for="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="email"
              className="contact-form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Phone number"
            />
          </div>
          <div className="form-group">
            <label for="phoneNumber" className="form-label">
              Message
            </label>
            <textarea
              type=""
              className="contact-form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Type your message here"
              style={{ height: "300px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <button
              type="submit"
              className="send-message"
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "20px",
                backgroundColor: "transparent",
                padding: "30px",
                color: "#E7B960",
                border: "solid 1px #efce76",
                cursor: "pointer",
                marginTop: "20px",
                fontSize: "20px",
              }}
            >
              <div>SEND MESSAGE</div>
              <img src={"/assets/images/send-icon.svg"} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
