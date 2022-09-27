import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  function logout() {
    window.open("http://localhost:5000/auth/logout", "_self");
  }
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/">App</Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="list-item">
            <img src={user.photos[0].value} alt="user-img" className="avatar" />
          </li>
          <li className="list-item">{user.displayName}</li>
          <li className="list-item" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

export default Navbar;
