import Image from "next/image";

import { Button, Typography } from "..";
import styles from "./card-slider.module.scss";
import { useState } from "react";
import { useEffect } from "react";

export const CardSlider = ({ id, title, description, image, alt }) => {
  return (
    <div className={styles.card}>
      <Image
        src={image?.data?.attributes?.url}
        width={536}
        height={486}
        alt={alt}
        className={styles.image}
      />

      <div className={styles.right}>
        <Typography
          tag="div"
          size="small"
          className={styles.title}
          color="white"
        >
          {title}
        </Typography>

        <div className={styles.description}>{description}</div>

        <Button variant="secondary" className={styles.button}>
          View project
        </Button>
      </div>
    </div>
  );
};
