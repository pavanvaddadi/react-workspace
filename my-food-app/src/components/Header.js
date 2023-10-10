import { LOGO_URL } from "../utils/constants";

export function Header() {
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
        </ul>
      </div>
    </div>
  );
}
