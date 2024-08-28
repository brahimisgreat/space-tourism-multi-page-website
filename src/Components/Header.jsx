import {  NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import './Header.css';
import {x} from '../assets/home/Group (1).svg';

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
          
            <img src={logo} alt="logo" />
          
          <div className="nav-line"><hr/></div>
        </div>

        <nav className="navbar">
          <ul>
            <button onClick={handleClick}>
              <CiCircleRemove className="x-button" />
            </button>
            <li>
              <NavLink onClick={handleClick} to="/">
                <span>00</span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/destination">
                <span>01</span> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/crew">
                <span>02</span> CREW
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/technology">
                <span>03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <button onClick={handleClick}>
            <IoMdMenu className="menu color" />
          </button>
        </div>
      </header>
    </>
  );
};
