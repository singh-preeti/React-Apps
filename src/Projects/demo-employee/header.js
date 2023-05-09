import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap m-0  shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
          Demo Employee
        </a>
        <ul className="navbar-nav px-3">
          <button className="btn btn-light mx-5">
            <Link to={"/"}>Add</Link>
          </button>
        </ul>
      </header>
    );
  }
}

export default Header;
