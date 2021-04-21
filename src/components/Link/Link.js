import React from "react";
import { NavLink } from "react-router-dom";
//import styles from './Link.module.scss'

const Link = ({ href, text, onClick, children, classes, size = 1, ...props }) => {
  return (

    <NavLink to={`${href}`} {...props} activeClassName="activeCategory" className={`${classes ? classes : ""}`} onClick={onClick}>
      { text && text}
      { children}
    </NavLink >

  );
};

export default Link;
