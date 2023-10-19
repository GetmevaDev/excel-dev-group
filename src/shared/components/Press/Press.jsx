import React from "react";

import styles from "./Press.module.scss";
import classNames from "classnames";
import { Typography } from "@/shared/widgets";
import { Card } from "./Card/Card";

export const Press = () => {
  return (
    <div className={styles.press}>
      <div className="layout">
        <Typography className={styles.title}>Press/News</Typography>

        <div className={styles.description}>
          Our commitment to excellence, innovation, and transformative real
          estate development has been featured in prominent publications, online
          platforms, and industry-leading websites.As we continue to shape the
          skyline and redefine cityscapes, we're grateful for the recognition
          and grateful to the media for highlighting our journey. Explore the
          stories that celebrate our dedication and vision, as we collaborate
          with the press to create narratives that inspire, inform, and leave a
          forever lasting impact.
        </div>

        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
