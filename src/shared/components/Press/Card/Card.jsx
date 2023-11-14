import React from "react";

import styles from "./Card.module.scss";
import Image from "next/image";
import { Button } from "@/shared/widgets";
import { ArrowLeft } from "@/shared/svg/arrow-left";
import { truncateText } from "@/shared/utils/truncateText";
import { useState } from "react";
export const Card = ({ title, description, image, alt }) => {
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] =
    useState(false);

  return (
    <div className={styles.press_card}>
      <Image
        src={image?.data?.attributes?.url}
        width={416}
        className={styles.image}
        height={280}
        alt={alt}
      />

      <div className={styles.bottom}>
        <div className={styles.title}>{truncateText(title, 60)}</div>
        <p className={styles.description}>
          {isFullDescriptionVisible ? description : description.slice(0, 100)}
        </p>

        {!isFullDescriptionVisible && description.length > 100 ? (
          <Button
            variant="text"
            svg={<ArrowLeft />}
            onClick={() => setIsFullDescriptionVisible(true)}
          >
            Read more
          </Button>
        ) : (
          <Button
            variant="text"
            onClick={() => setIsFullDescriptionVisible(false)}
          >
            Hide
          </Button>
        )}
      </div>
    </div>
  );
};
