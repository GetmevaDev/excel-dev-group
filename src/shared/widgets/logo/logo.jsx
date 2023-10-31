import Image from "next/image";
import styles from "./logo.module.scss";
import Link from "next/link";

export const Logo = ({ width = 684, height = 254, alt = "logo" }) => {
  return (
    <Link className={styles.logo} href="/">
      <Image
        src="/images/logo.svg"
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
      />
    </Link>
  );
};
