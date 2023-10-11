import { Logo, Menu } from "@/shared/ui";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
};
