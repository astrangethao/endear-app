import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    <div>
      <div>
        <h1>Endear</h1>
      </div>
      <div className="footer-nav-links">
        <h3>Contact</h3>
      </div>
      <div className="footer-nav-links">
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </div>
      <div className="footer-nav-links">
        <h3>Tips</h3>
      </div>
      <div className="footer-nav-links">
        <h3>Follow</h3>
      </div>
    </div>
    &copy; Prime Digital Academy
  </footer>
);

export default Footer;
