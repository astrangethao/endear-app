import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  createStyles,
} from "@material-ui/core";

import "typeface-pacifico";
import "typeface-quicksand";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    <div className="footer-div">
      <ul className="footer-right">
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Link to="/about">
            <a href="#">About</a>
          </Link>
        </li>
        <li>
          <a href="#">Tips</a>
        </li>
        <li>
          <a href="#">Follow</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
