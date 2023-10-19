import React from "react";

import styles from "./Card.module.scss";
import Image from "next/image";
import { Button } from "@/shared/widgets";
import { ArrowLeft } from "@/shared/svg/arrow-left";
export const Card = () => {
  return (
    <div className={styles.press_card}>
      <Image
        src="/images/press-card.jpg"
        width={416}
        className={styles.image}
        height={280}
        alt="press"
      />

      <div className={styles.bottom}>
        <div className={styles.title}>title</div>
        <p className={styles.description}>descrioption</p>

        <Button variant="text" svg={<ArrowLeft />}>
          Read more
        </Button>
      </div>
    </div>
  );
};
