import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li id="signin">
            <Link to="/signin">Sign In</Link>
          </li>
          <li id="register">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
