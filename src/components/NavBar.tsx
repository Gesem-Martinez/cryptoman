import cryptoMan from "../assets/cryptoman.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/NavBar.css";
import { MenuOutlined } from "@ant-design/icons";

export default function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [showNav, setShowNav] = useState(false);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    handleShowNavbar();
  };

  const handleShowNavbar = () => setShowNav(!showNav);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <div className="logo-container">
            <div className="logo-img-container">
              <img src={cryptoMan} alt="" className="logo-img" />
            </div>
            <h1 className="logo-text">CryptoMan</h1>
          </div>
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuOutlined />
        </div>
        <div className={`nav-links ${showNav && "active"}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={activeLink === "/" ? "active-link" : ""}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cryptos"
                className={
                  activeLink.startsWith("/cryptos") ? "active-link" : ""
                }
                onClick={() => handleLinkClick("/cryptos")}
              >
                Cryptos
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={activeLink.startsWith("/news") ? "active-link" : ""}
                onClick={() => handleLinkClick("/news")}
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
