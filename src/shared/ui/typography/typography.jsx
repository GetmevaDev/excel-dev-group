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
  return (
    <Component
      className={classNames(styles.typography, className, sizes[size])}
    >
      {children}
    </Component>
  );
};
