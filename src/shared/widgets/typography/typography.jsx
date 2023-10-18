import classNames from "classnames";
import styles from "./typography.module.scss";

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const colors = {
  white: styles.white,
  black: styles.black,
};

export const Typography = ({
  tag = "h1",
  size = "medium",
  color,
  children,
  className,
}) => {
  const Component = tag;
  const classes = classNames(
    styles.typography,
    sizes[size],
    className,
    colors[color]
  );

  return <Component className={classes}>{children}</Component>;
};
