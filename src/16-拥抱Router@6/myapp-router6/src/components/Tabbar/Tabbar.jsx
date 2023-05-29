import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Tabbar.module.css';

export default function Tabbar() {
  return (
    <div>
      <ul>
        {['films', 'cinemas', 'mine'].map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item}`}
              className={({ isActive }) => {
                return isActive ? styles.qiuActive : undefined;
              }}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
