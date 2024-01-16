import React from "react";

export default function Navbar({ links }) {
  return (
<nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
    <a className="navbar-brand">
      <h1 className="brand-text">SHOYO</h1>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav nav-underline me-auto mb-2 mb-lg-0 ms-auto">
        {links.map((link, index) => (
          <li className="nav-item" key={index}>
            <h5>{link}</h5>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>
  );
}
