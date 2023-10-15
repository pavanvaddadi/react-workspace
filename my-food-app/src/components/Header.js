import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CART</li>
          <button onClick={changeUserStatus}>{btnState}</button>
        </ul>
      </div>
    </div>
  );
}
