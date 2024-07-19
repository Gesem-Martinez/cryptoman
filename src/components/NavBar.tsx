import cryptoMan from "../assets/cryptoman.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-img-container">
          <img src={cryptoMan} alt="" className="logo-img" />
        </div>
        <h1 className="logo-text">CryptoMan</h1>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <Link
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            to="/cryptos"
            className={activeLink === "/cryptos" ? "active" : ""}
            onClick={() => handleLinkClick("/cryptos")}
          >
            Cryptos
          </Link>
          <Link
            to="/dashboard"
            className={activeLink === "/dashboard" ? "active" : ""}
            onClick={() => handleLinkClick("/dashboard")}
          >
            Dashboard
          </Link>
        </div>
        <div className="nav-profile">
          <p>Username</p>
          <div className="profile-img">
            <img src={cryptoMan} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}
