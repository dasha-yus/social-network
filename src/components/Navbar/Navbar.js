import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" activeClassName={styles.active}>
          <i class="fas fa-address-card"></i>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" activeClassName={styles.active}>
          <i class="fas fa-envelope"></i>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeClassName={styles.active}>
          <i class="fas fa-newspaper"></i>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" activeClassName={styles.active}>
          <i class="fas fa-music"></i>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" activeClassName={styles.active}>
          <i class="fas fa-cog"></i>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
