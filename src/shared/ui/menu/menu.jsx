import Image from "next/image";
import { useState } from "react";
import { Logo, Navigation } from "..";
import styles from "./menu.module.scss";
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className={styles.burger} onClick={toggleMenu}>
        <Image src="/images/menu.svg" width={24} height={24} alt="menu" />
      </button>

      <nav className={`${styles.menu} ${isOpen && styles.open}`}>
        <Logo width={198} height={74} />
        <Navigation />

        <button className={styles.close_button} onClick={toggleMenu}>
          <Image src="/images/menu.svg" width={24} height={24} alt="menu" />
        </button>
      </nav>
    </>
  );
};
