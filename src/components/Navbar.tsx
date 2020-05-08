import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/players">Players</Link>
        </li>
        <li className="nav-item">
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
