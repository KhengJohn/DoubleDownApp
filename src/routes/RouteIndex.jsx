import LandingPage from "../pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../pages/public/ContactUs";
import SignUp from "../pages/public/SignUp";
import SignIn from "../pages/public/SignIn";
import ForgetPassword from "../pages/public/ForgetPassword";
import ResetPassword from "../pages/public/ResetPassword";

const RouteIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default RouteIndex;
