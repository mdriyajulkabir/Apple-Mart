import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import Login from "../../Authentication/Login/Login";
import SignUp from "../../Authentication/SignUp/SignUp";
import "./Header.css";
const Header = () => {
  const state = useSelector((state) => state.addItem);
  const {user} = useFirebase()
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#s">
            Apple Mart
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to="/home"
                  className={(navinfo) =>
                    navinfo.isActive ? "active" : "unactive"
                  }>
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/product"
                  className={(navinfo) =>
                    navinfo.isActive ? "active" : "unactive"
                  }>
                  Phones
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/contact"
                  className={(navinfo) =>
                    navinfo.isActive ? "active" : "unactive"
                  }>
                  Contact Us
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/aboutus"
                  className={(navinfo) =>
                    navinfo.isActive ? "active" : "unactive"
                  }>
                  About us
                </NavLink>
              </li>
            </ul>

            {user?.email ?<><Login/> <SignUp/></> :<> <Login />
            <SignUp /> </>}
            <NavLink
              to="/cart"
              className="fa fa-shopping-cart btn btn-outline-primary py-2">
              Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
