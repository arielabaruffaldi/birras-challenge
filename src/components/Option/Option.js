import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Option.module.scss";

const option = ({ href, icon, name }) => {
  return (
    <li className={styles.Option}>
      <NavLink exact to={href} activeClassName={styles.active}>
        {icon}
        {name}
      </NavLink>
    </li>
  );
};

export default option;
