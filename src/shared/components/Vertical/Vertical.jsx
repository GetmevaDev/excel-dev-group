import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button, Typography } from "@/shared/widgets";

import styles from "./Vertical.module.scss";
import Image from "next/image";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft } from "@/shared/svg/arrow-left";
import { useMediaQuery } from "@/shared/hooks";
export const Vertical = () => {
  const isLarge = useMediaQuery("(min-width: 200px)");

  return (
    <section className={classNames("layout", styles.vertical)}>
      <Swiper
        cssMode
        direction={isLarge ? "vertical" : "horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="vertical"
        breakpoints={{
          720: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          320: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <Image
            src="/images/vertical-card.jpg"
            alt="card"
            className={styles.image}
            width={600}
            height={450}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/vertical-card.jpg"
            className={styles.image}
            alt="card"
            width={600}
            height={450}
          />
        </SwiperSlide>
      </Swiper>

      <div className={styles.right}>
        <Typography tag="h2" className={styles.title}>
          Our Team
        </Typography>

        <div className={styles.description}>
          Our purpose is to turn land into vibrant communities where people can
          live, work, and flourish. We support sustainable development, which
          combines environmental responsibility with brilliant architecture.
          Every aspect of our work is driven by excellence, making sure that
          every project we take on is of the highest caliber and originality. We
          commit top-notch people and financial resources to all of our markets
          and business prospects, and we have developed a reputation for
          profitable deals swiftly and efficiently.
        </div>

        <Button variant="text" className={styles.button} svg={<ArrowLeft />}>
          Read more
        </Button>
      </div>
    </section>
  );
};
