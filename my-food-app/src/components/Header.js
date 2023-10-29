import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import AuthContext from "../utils/AuthContext";

export function Header() {
  let [btnState, setBtnState] = useState("Login");
  let onlineStatus = useOnlineStatus();
  let userInfo = useContext(AuthContext);

  function changeUserStatus() {
    btnState === "Login" ? setBtnState("Logout") : setBtnState("Login");
  }
  return (
    <div className="flex justify-between bg-blue-950 text-white">
      <div className="p-4">
        <img className="w-12" src={LOGO_URL} alt="food logo" />
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="px-3">
            App Status: {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-3 cursor-pointer hover:bg-black rounded-md">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-3 cursor-pointer hover:bg-black rounded-md">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 cursor-pointer hover:bg-black rounded-md">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="px-3 cursor-pointer hover:bg-black rounded-md">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="px-3 cursor-pointer hover:bg-black rounded-md">
            CART
          </li>
          <li className="px-3 cursor-pointer hover:bg-black rounded-md">
            {userInfo.loggedInUser}
          </li>
          <li className="px-3 cursor-pointer hover:bg-black rounded-md">
            <button onClick={changeUserStatus}>{btnState}</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
