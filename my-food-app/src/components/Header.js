import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  let [btnState, setBtnState] = useState("Login");
  function changeUserStatus() {
    btnState === "Login" ? setBtnState("Logout") : setBtnState("Login");
  }
  return (
    <div className="header-container">
      <div className="logo">
        <img src={LOGO_URL} alt="food logo" className="avatar" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>CART</li>
          <button onClick={changeUserStatus}>{btnState}</button>
        </ul>
      </div>
    </div>
  );
}
