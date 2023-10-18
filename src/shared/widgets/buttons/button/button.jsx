import classNames from "classnames";

import styles from "./button.module.scss";

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Button = ({
  type = "button",
  children,
  className,
  disabled,
  variant = "primary",
  ...props
}) => {
  const classes = classNames(styles.button, className, variants[variant]);

  return (
    <button type={type} className={classes} {...props} disabled={disabled}>
      {children}
    </button>
  );
};
