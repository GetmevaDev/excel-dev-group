import { Navigation } from "..";

import styles from "./sidebar.module.scss";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <Navigation />
    </nav>
  );
};
