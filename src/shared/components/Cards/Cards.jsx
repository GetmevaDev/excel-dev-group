import React from "react";
import { Typography } from "@/shared/widgets";

import styles from "./Cards.module.scss";
import { Card } from "../Press/Card/Card";

export const Cards = ({ data }) => {
  return (
    <div>
      <Typography className={styles.title}>{data?.cards?.title}</Typography>
      <div className={styles.description}>{data?.cards?.description}</div>

      <div className={styles.cards}>
        {data?.cards?.Card?.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
