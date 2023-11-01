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
            <SwiperSlide>
              <Card />
            </SwiperSlide>

            <SwiperSlide>
              <Card />
            </SwiperSlide>

            <SwiperSlide>
              <Card />
            </SwiperSlide>

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
          </Swiper>
        </div>
      </div>
    </div>
  );
};
