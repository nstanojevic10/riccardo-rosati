import React from "react";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import Activities from "../../pages/Activities/Activities";
import Collaborations from "../../pages/Collaborations/Collaborations";
import Curriculum from "../../pages/Curriculum/Curriculum";
import Publications from "../../pages/Publications/Publications";
import HomePage from "../../pages/HomePage/HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faChartLine,
  faFileLines,
  faHouse,
  faPeopleGroup,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import ProfilePct from "../../assets/photo/photo.jpg";
import "./Home.scss";

const Home = ({
  allPubEn,
  allCurr,
  activity,
  homepage,
  title,
  curriculum,
  changeLang,
  lang,
}) => {
  return (
    <BrowserRouter>
      {/* toggler */}
      <button
        className="navbar-toggler btnToggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon btnTogglerIcon">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>
      <div
        className="collapse navbar-collapse divCollapse"
        id="collapsibleNavbar"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <button
          className="navbar-toggler btnToggler btnTogglerX"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon btnTogglerIcon">
            <FontAwesomeIcon icon={faX} />
          </span>
        </button>
        <ul className="navbar-nav flex-column togglerList">
          <NavLink className="nav-link togglerListItems" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav-link togglerListItems" to="/curriculum">
            Curriculum
          </NavLink>
          <NavLink className="nav-link togglerListItems" to="/publications">
            {title.publications}
          </NavLink>
          <NavLink className="nav-link togglerListItems" to="/activies">
            {title.activities}
          </NavLink>
          <NavLink className="nav-link togglerListItems" to="/collaborations">
            {title.collaboration}
          </NavLink>
          <hr></hr>
          <div className="lang" onClick={() => changeLang()}>
            {lang}
          </div>
        </ul>
      </div>
      {/* toggler */}

      <div className="row homePage">
        {/* prva kolona */}
        <div className="homeFirstCol">
          <img className="profilePct" src={ProfilePct} alt="profile" />
          <h3 className="email">info@riccardorosati.eu</h3>
          <nav className="menu navbar navbar-expand-md">
            <div className="container divToggler">
              <ul className="navbar-nav flex-column ulList">
                <li className="nav-item liItem">
                  <NavLink className="nav-link linkItem" to="/" end>
                    <FontAwesomeIcon className="icon" icon={faHouse} />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item liItem">
                  <NavLink className="nav-link linkItem" to="/curriculum">
                    <FontAwesomeIcon className="icon" icon={faFileLines} />
                    <span>Curriculum</span>
                  </NavLink>
                </li>
                <li className="nav-item liItem">
                  <NavLink className="nav-link linkItem" to="/publications">
                    <FontAwesomeIcon className="icon" icon={faBookOpen} />
                    <span>{title.publications}</span>
                  </NavLink>
                </li>
                <li className="nav-item liItem">
                  <NavLink className="nav-link linkItem" to="/activies">
                    <FontAwesomeIcon className="icon" icon={faChartLine} />
                    <span>{title.activities}</span>
                  </NavLink>
                </li>
                <li className="nav-item liItem">
                  <NavLink className="nav-link linkItem" to="/collaborations">
                    <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
                    <span>{title.collaboration}</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* druga kolona */}
        <div className="homeSecCol">
          <Routes>
            <Route
              path="/"
              element={<HomePage homepage={homepage} title={title} />}
            />
            <Route
              path="/curriculum"
              element={
                <Curriculum
                  allCurr={allCurr}
                  curriculum={curriculum}
                  title={title}
                />
              }
            />
            <Route
              path="/publications"
              element={<Publications allPubEn={allPubEn} title={title} />}
            />
            <Route
              path="/activies"
              element={<Activities activity={activity} title={title} />}
            />
            <Route
              path="/collaborations"
              element={<Collaborations title={title} />}
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;
