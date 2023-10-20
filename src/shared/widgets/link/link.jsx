import Link from "next/link";
import styles from "./link.module.scss";

export const LinkItem = ({ text, link }) => {
  return (
    <li className={styles.link}>
      <Link href={link}>{text}</Link>
    </li>
  );
};
