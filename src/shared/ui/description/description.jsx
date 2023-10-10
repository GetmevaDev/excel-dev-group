import styles from "./description.module.scss";

export const Description = ({ children }) => {
  return <div className={styles.description}>{children}</div>;
};
