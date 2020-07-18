import React, { Component } from "react";
// statless func component

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary ml-1">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
// class Navbar extends Component {
//   render() {

//   }
// }

export default Navbar;
