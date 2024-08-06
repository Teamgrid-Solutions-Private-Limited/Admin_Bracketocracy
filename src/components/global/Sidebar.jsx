//import useState hook to create menu collapse state
import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import Logo from "../../assets/logo-white.png";
import Logo_da from "../../assets/logo-wh.png";
import "./global.css";

const Sidebar = () => {
  return (
    <>
      <Col className="g-0" xs={12} md={4} lg={4} xl={2}>
        <div className="sidebar">
          <div className="logo">
            <a to="/">
              <Image src={Logo} fluid />
            </a>
          </div>

          <div
            className="hamburger-menu"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-navigation"
            aria-expanded="false"
            aria-controls="collapse-navigation"
          >
            <i className="bi bi-list"></i>
          </div>

          <div className="navigation" id="collapse-navigation">
            <ul>
              {/* <li>
                <i className="bi bi-1-square"></i>
                <a to="/dashboard">Dashboard</a>
              </li> */}
              <li>
                <i className="bi bi-diagram-3-fill"></i>
                <a >Matches</a>
              </li>
              <li className="">
                <i className="bi bi-people-fill"></i>
                <a >Teams</a>
              </li>
              <li>
                <i className="bi bi-boxes"></i>
                <a >Rounds</a>
              </li>
              <li className="">
                <i className="bi bi-layers-fill"></i>
                <a >Regions</a>
              </li>
              <li>
                <i className="bi bi-person-lines-fill"></i>
                <a >Users</a>
              </li>
              <li>
                <i className="bi bi-bell-fill"></i>
                <a >Notifications</a>
              </li>
              <li>
                <i className="bi bi-currency-dollar"></i>
                <a >Sponsors</a>
              </li>
              <li>
                <i className="bi bi-clock"></i>
                <a >CountDown</a>
              </li>
            </ul>
          </div>

          <div className="sidebar-bottom">
            <span>Developed by</span> <Image src={Logo_da} fluid />
          </div>
        </div>
      </Col>
    </>
  );
};

export default Sidebar;
