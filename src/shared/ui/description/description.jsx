import classNames from "classnames";
import styles from "./description.module.scss";

export const Description = ({ children, className }) => {
  return (
    <div className={classNames(styles.description, className)}>{children}</div>
  );
};
