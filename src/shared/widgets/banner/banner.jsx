import classNames from "classnames";
import Image from "next/image";
import { Button, Description, Typography } from "..";
import styles from "./banner.module.scss";

export const Banner = ({
  title,
  subTitle,
  size,
  button,
  image,
  width,
  height,
}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay} />
      <Image
        src={image}
        width={width}
        height={height}
        alt="banner"
        className={styles.image}
      />
      <div className={styles.text}>
        <Typography
          tag="h2"
          size={size}
          className={classNames("gap-20", styles.title)}
          color="white"
        >
          {title}
        </Typography>
        {subTitle && (
          <Description className={classNames("gap-40", styles.description)}>
            {subTitle}
          </Description>
        )}
        {button && (
          <a href="tel: 123">
            <Button>{button}</Button>
          </a>
        )}
      </div>
    </div>
  );
};
