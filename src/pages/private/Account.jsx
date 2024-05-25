import React, { useState } from "react";
import {
  blackJackBG,
  accountImg,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import { accountMenu } from "../../common/dummydata/DummyData";
const Account = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "auto",
        margin: "auto",
        backgroundImage: `url(${blackJackBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="noScrollBar"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 50px 50px",
          gap: "50px",
        }}
      >
        <span
          style={{
            fontSize: "40px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#e7b960",
          }}
          className="cormorant-font gradient-text"
        >
          MY ACCOUNT
        </span>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            zIndex: 2,
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div
            style={{ display: "flex", width: "15%", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={accountImg} style={{ width: "90px" }} alt="" />
              <span className="account-name">Jasmine</span>
            </div>
            <div>
              <ul className="accout-sidebar">
                {accountMenu.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemClick(index)}
                    className={
                      activeIndex === index ? "accout-sidebar-active" : ""
                    }
                  >
                    <img
                      src={item.img}
                      alt=""
                      className={activeIndex === index ? "active-svg" : ""}
                    />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "85%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
              gap: "40px",
            }}
          >
            <span
              className="gordita-font"
              style={{
                color: "#fff",
                width: "65%",
                fontSize: "0.89em",
                lineHeight: "130%s",
              }}
            >
              Hello Jasmine (not you?{" "}
              <Link
                to={"/sign-in"}
                style={{ color: "#D1A757", textDecoration: "none" }}
              >
                Sign out
              </Link>
              ). From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses and edit your{" "}
              <span style={{ color: "#D1A757" }}>
                password and account details.
              </span>
            </span>
            <table
              className="account-table"
              style={{ borderColor: "red", width: "100%", height: "100%" }}
            >
              <thead
                className="cormorant-font"
                style={{
                  color: "#D1A757",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <tr>
                  <th>Order</th>
                  <th style={{ width: "45%" }}>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody
                className="gordita-font"
                style={{
                  fontSize: "0.8em",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <tr>
                  <td>#302</td>
                  <td>November 6, 2023</td>
                  <td>Complete</td>
                  <td>$340.00</td>
                  <td>
                    <Link style={{ fontSize: "10px", color: "#fff" }}>
                      View details
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>{" ."}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ textDecoration: "underline" }}></td>
                </tr>
                <tr>
                  <td>{" ."}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ textDecoration: "underline" }}></td>
                </tr>{" "}
                <tr>
                  <td>{" ."}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ textDecoration: "underline" }}></td>
                </tr>{" "}
                <tr>
                  <td>{" ."}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ textDecoration: "underline" }}></td>
                </tr>{" "}
                <tr>
                  <td>{" ."}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ textDecoration: "underline" }}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
