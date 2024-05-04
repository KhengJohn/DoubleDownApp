import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const onSubmit = () => {};

  const handleSignUpBtnClick = () => {
    navigate('/signup');
  };

  return (
    <div className="signup-page">
      <div className="signup-modal">
        <div className="auth-modal-title">
          SIGN IN TO <br /> DOUBLE DOWN
        </div>
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <div class="form-group">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Your Password"
              />
            </div>
          </div>
          <div className="forgot-text-btn">Forgot your password?</div>
          <button type="submit" className="form-submit">
            SIGN IN
          </button>
          <div className="signup-form-divider">Or sign in using</div>
          <button
            style={{
              display: "flex",
              padding: "15px",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "solid 1px #D1A757",
              color: "#fff",
              fontSize: "15px",
            }}
          >
            <img
              src={"/assets/images/flat-color-icons_google.svg"}
              alt="google"
            />
            <div>Login with Google</div>
          </button>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div style={{ color: "#9F9694" }}>Don't have an account?</div>
            <div
              style={{ color: "#D1A757", cursor: "pointer" }}
              onClick={handleSignUpBtnClick}
            >
              Sign Up
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
