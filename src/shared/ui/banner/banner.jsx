import Image from "next/image";
import styles from "./banner.module.scss";

export const Banner = ({ children }) => {
  return (
    <div className={styles.banner}>
      <Image
        src="/images/banner.jpg"
        width={1920}
        height={720}
        alt="banner"
        className={styles.image}
      />
      <div className={styles.text}>{children}</div>
    </div>
  );
};
