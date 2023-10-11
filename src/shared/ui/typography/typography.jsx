import classNames from "classnames";
import styles from "./typography.module.scss";

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export const Typography = ({
  tag = "h1",
  size = "medium",
  children,
  className,
}) => {
  const Component = tag;
  const classes = classNames(styles.typography, sizes[size], className);

  return <Component className={classes}>{children}</Component>;
};
