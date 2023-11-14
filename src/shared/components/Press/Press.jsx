import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Press.module.scss";
import { Typography } from "@/shared/widgets";
import { Card } from "./Card/Card";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import classNames from "classnames";
import { ChevronLeft } from "@/shared/svg/chevron-left";
import { ChevronRight } from "@/shared/svg/chevron-right";

export const Press = ({ slides, title, description }) => {
  return (
    <div className={styles.press}>
      <div className="layout">
        <Typography className={styles.title}>{title}</Typography>

        <div className={styles.description}>{description}</div>

        <div className={styles.cards}>
          <Swiper
            cssMode
            slidesPerView={3}
            spaceBetween={25}
            modules={[Navigation]}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            className="press"
            breakpoints={{
              720: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              320: {
                slidesPerView: 1,
              },
            }}
          >
            {slides?.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card {...slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.arrows}>
            <div className={styles.arrow}>
              <ChevronLeft
                className="review-swiper-button-prev"
                fill="#D93B32"
              />
            </div>
            <div className={styles.arrow}>
              <ChevronRight
                className="review-swiper-button-next"
                fill="#D93B32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
