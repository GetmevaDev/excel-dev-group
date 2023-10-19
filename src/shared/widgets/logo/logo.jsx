import Image from "next/image";
import styles from "./logo.module.scss";

export const Logo = ({ width = 684, height = 254 }) => {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={width}
        height={height}
        className={styles.image}
      />
    </div>
  );
};
