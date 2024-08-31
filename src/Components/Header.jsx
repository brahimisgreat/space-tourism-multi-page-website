import {  NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import './Header.css';

export const Header = () => {
  const handleClick = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open");
    console.log("clicked");
    console.log(navbar);
  };
  return (
    <>
      <header className="header">
        <div className="logo-container">
          
            <img src={logo} alt="logo" className="logo" />
          
          <div className="nav-line"><hr/></div>
        </div>
        <hr/>

        <nav className="navbar">
          <ul>
            <button onClick={handleClick}>
              <CiCircleRemove className="x-button" />
            </button>
            <li>
              <NavLink  to="/">
                <span></span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink  to="/destination">
                <span>01</span> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew">
                <span>02</span> CREW
              </NavLink>
            </li>
            <li>
              <NavLink  to="/technology">
                <span>03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="menu-container">
          <button onClick={handleClick}>
            <IoMdMenu className="menu" />
          </button>
        </div>
      </header>
    </>
  );
};
