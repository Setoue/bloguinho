import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink className={styles.brand} to="/">
        <span>Bloguinho</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
