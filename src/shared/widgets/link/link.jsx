import styles from "./link.module.scss";

export const Link = ({ text }) => {
  return (
    <li className={styles.link}>
      <a href="">{text}</a>
    </li>
  );
};
