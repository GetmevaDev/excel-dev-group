import Image from "next/image";

import { Button, Typography } from "..";
import styles from "./card-slider.module.scss";
import { useState } from "react";
import { useEffect } from "react";

export const CardSlider = ({ id, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src="images/card.jpg" width={536} height={486} alt="card" />

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
