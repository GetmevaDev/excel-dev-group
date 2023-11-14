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
export const Vertical = ({ title, description, slides }) => {
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
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide?.image?.data?.attributes?.url}
              alt={slide?.alt}
              className={styles.image}
              width={600}
              height={450}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.right}>
        <Typography tag="h2" className={styles.title}>
          {title}
        </Typography>

        <div className={styles.description}>{description}</div>

        <Button variant="text" className={styles.button} svg={<ArrowLeft />}>
          Read more
        </Button>
      </div>
    </section>
  );
};
