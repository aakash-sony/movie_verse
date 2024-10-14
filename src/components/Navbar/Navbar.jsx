import React from "react";
import "./Navbar.css";
import Fire from "../../assets/Fire01.png";
import Party from "../../assets/party_face.png";
import Star from "../../assets/Star01.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieVerse</h1>
      <div className="navbar_links">
        <a href="#popular">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming
          <img src={Party} alt="party emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          Top Rated
          <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
