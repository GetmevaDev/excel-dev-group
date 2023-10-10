import Image from "next/image";
import { useState } from "react";
import { Logo } from "..";
import styles from "./menu.module.scss";
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className={styles.burger} onClick={toggleMenu}>
        <Image src="/images/menu.svg" width={24} height={24} alt="menu" />
      </button>

      <nav className={`${styles.menu} ${isOpen && styles.open}`}>
        <Logo width={198} height={74} />
        <ul className={styles.list}>
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Portfolio</a>
          </li>

          <li>
            <a href="">Portfolio</a>
          </li>

          <li>
            <a href="">Portfolio</a>
          </li>

          <li>
            <a href="">Portfolio</a>
          </li>
        </ul>

        <button className={styles.burger} onClick={toggleMenu}>
          <Image src="/images/menu.svg" width={24} height={24} alt="menu" />
        </button>
      </nav>
    </div>
  );
};
