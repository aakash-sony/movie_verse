import React from "react";
import "./Navbar.css";
import Fire from "../../assets/Fire01.png";
import Party from "../../assets/party_face.png";
import Star from "../../assets/Star01.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieVerse</h1>
      <div className="navbar_links">
        <NavLink to="/">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/upcoming">
          Upcoming
          <img src={Party} alt="party emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated
          <img src={Star} alt="star emoji" className="navbar_emoji" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
