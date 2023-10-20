import { Logo, Navigation } from "..";

import styles from "./sidebar.module.scss";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.logo}>
        <Logo width={200} height={75} />
      </div>
      <ul className={styles.navigation}>
        <Navigation />
      </ul>
    </nav>
  );
};
