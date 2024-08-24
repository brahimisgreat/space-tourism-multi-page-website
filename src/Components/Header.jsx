import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

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
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="nav-line"><hr/></div>
        </div>

        <nav className="navbar">
          <ul>
            <button onClick={handleClick}>
              <CiCircleRemove className="x-button" />
            </button>
            <li>
              <Link to="/">
                <span>00</span> HOME
              </Link>
            </li>
            <li>
              <Link to="/destination">
                <span>01</span> DESTINATION
              </Link>
            </li>
            <li>
              <Link to="/crew">
                <span>02</span> CREW
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <span>03</span> TECHNOLOGY
              </Link>
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
