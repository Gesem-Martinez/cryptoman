import cryptoMan from "../assets/cryptoman.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/NavBar.css"

export default function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
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
            className={activeLink.startsWith("/cryptos") ? "active" : ""}
            onClick={() => handleLinkClick("/cryptos")}
          >
            Cryptos
          </Link>
          <Link
            to="/news"
            className={activeLink.startsWith("/news") ? "active" : ""}
            onClick={() => handleLinkClick("/news")}
          >
            News
          </Link>
        </div>
      </div>
    </nav>
  );
}
