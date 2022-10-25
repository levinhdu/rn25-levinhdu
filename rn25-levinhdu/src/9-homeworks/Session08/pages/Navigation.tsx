import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            List User
          </Link>
          <Link to="/create" className="navbar-brand">
            Create User
          </Link>
          <Link to="/detail/:id" className="navbar-brand">
            Detail User
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
