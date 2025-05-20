import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { CgMail } from "react-icons/cg";
import "./NavBar.css";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${navColour ? "sticky" : ""}`}>
      <div className="container">
        <Link to="/" className="logo">
          <h4>Sai.</h4>
        </Link>
        <div
          className={`toggle ${expand ? "expanded" : ""}`}
          onClick={() => setExpand(!expand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu ${expand ? "show" : ""}`}>
          <Link to="/" onClick={() => setExpand(false)}>
            <AiOutlineHome /> Home
          </Link>
          <Link to="/about" onClick={() => setExpand(false)}>
            <AiOutlineUser /> About
          </Link>
          <Link to="/project" onClick={() => setExpand(false)}>
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
          <Link to="/resume" onClick={() => setExpand(false)}>
            <CgFileDocument /> Resume
          </Link>
          <Link to="/contact" onClick={() => setExpand(false)}>
            <CgMail  /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
