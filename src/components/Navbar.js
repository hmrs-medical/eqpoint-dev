import logo from "../assets/images/logosample.jpg";
import "../assets/css/navbar.css";
import { Link, NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav id="navbar">
        <Link style={{ textDecoration: "none" }} to="/">
          <div id="logo">
            <img className="logo-img" src={logo} alt="logo"></img>
            <span id="company-name">Equipment Point</span>
          </div>
        </Link>

        <div id="nav-items">
          <ul id="nav-items-list">
            <li className="nav-item">
              <NavLink style={{ textDecoration: "none" }} to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ textDecoration: "none" }} to="/contact">
                Contact-us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
