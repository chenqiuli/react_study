import React from "react";
import styles from "./Tabbar.less";
import { NavLink } from "dva/router";

export default function Tabbar() {
  return (
    <div className={styles.root}>
      <ul>
        {["film", "cinema", "mine"].map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={`/${item}`} activeClassName={styles.active}>
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
