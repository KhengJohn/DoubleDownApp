import LandingPage from "../pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../pages/public/ContactUs";
import SignUp from "../pages/public/SignUp";
import SignIn from "../pages/public/SignIn";
import ForgetPassword from "../pages/public/ForgetPassword";
import ResetPassword from "../pages/public/ResetPassword";
import SingleProduct from "../pages/public/SingleProduct";
import Products from "../pages/public/Products";
import NavBarWrapper from "../components/navbar/NavBarWrapper";
import Account from "../pages/private/Account";
import Cart from "../pages/public/Cart";
import Checkout from "../pages/public/Checkout";
import SuccessfulPayment from "../components/cart/SuccessfulPayment";
import Test from "../pages/public/Test";
const RouteIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/single-product/:id"
        element={
          <NavBarWrapper>
            <SingleProduct />
          </NavBarWrapper>
        }
      />
      <Route
        path="/products"
        element={
          <NavBarWrapper>
            <Products />
          </NavBarWrapper>
        }
      />
      <Route
        path="/account"
        element={
          <NavBarWrapper>
            <Account />
          </NavBarWrapper>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkout" element={<Checkout />} />
      <Route path="/cart/success" element={<SuccessfulPayment />} />
    </Routes>
  );
};

export default RouteIndex;
