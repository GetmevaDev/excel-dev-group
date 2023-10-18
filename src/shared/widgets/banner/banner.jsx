import Image from "next/image";
import { Button, Description, Typography } from "..";
import styles from "./banner.module.scss";

export const Banner = ({ children }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay} />
      <Image
        src="/images/banner.jpg"
        width={1920}
        height={720}
        alt="banner"
        className={styles.image}
      />
      <div className={styles.text}>
        <Typography tag="h2" className="gap-20" color="white">
          Excel Development Group
        </Typography>
        <Description className="gap-40">
          Innovate. Develop. Excel. The Essence of The Excel Group.
        </Description>
        <a href="tel: 123">
          <Button>Click to call</Button>
        </a>
      </div>
    </div>
  );
};
