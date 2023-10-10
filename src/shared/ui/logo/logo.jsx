import Image from "next/image";
import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/images/logo.svg" alt="logo" width={684} height={254} />
    </div>
  );
};
