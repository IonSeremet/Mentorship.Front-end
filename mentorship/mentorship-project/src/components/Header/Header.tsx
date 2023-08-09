import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Logo.png";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";

const Header: React.FC = () => {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
  };
  return (
    <header>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header-right">
          <Link to="/">Home</Link>
          <Link to="/products">Products </Link>
          {user ? (
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
