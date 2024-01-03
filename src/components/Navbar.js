import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
export default function Navbar(props) {
  let style={};
  if(props.mode==='light'){
    style= {
      backgroundColor: '#f8f9fa',
      color: 'black'
    }
  }
  else if(props.mode==='dark'){
    style= {
      backgroundColor: '#343a40',
      color: 'white'
    }
  }
  else if(props.mode==='red'){
    style= {
      backgroundColor: '#c27878',
      color: 'black'
    }
  }
  else{
    style= {
      backgroundColor: '#72c372',
      color: 'black'
    }
  }
  return (
    <nav style={style}
      className={`navbar navbar-expand-lg  `}
    >
      <a style={style} className="navbar-brand" href="0">
        TEXED
      </a>
      <button 
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link style={style} className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li style={style} className="nav-item">
            <Link style={style} className="nav-link" to="/About">
              {props.aboutText}
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`mx-3 form-check form-switch text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          onClick={props.redMode}
          role="switch"
          id="flexSwitchCheckDefault"
          checked={props.mode==='red'?true:false}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Enable Red Mode
        </label>
      </div>
      <div
        className={`mx-3 form-check form-switch text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <input
          className=" form-check-input"
          type="checkbox"
          onClick={props.darkMode}
          role="switch"
          id="flexSwitchCheckDefault"
          checked={props.mode==='dark'?true:false}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Enable Dark Mode
        </label>
      </div>
      <div
        className={`mx-3 form-check form-switch text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          onClick={props.greenMode}
          role="switch"
          id="flexSwitchCheckDefault"
          checked={props.mode==='green'?true:false}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Enable Green Mode
        </label>
      </div>
    </nav>
  );
}
Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set title Here",
  aboutText: "About Text Here",
};
