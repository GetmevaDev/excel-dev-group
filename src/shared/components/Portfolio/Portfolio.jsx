import { CardSlider, Typography } from "@/shared/widgets";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Portfolio.module.scss";
import { useRef } from "react";
import { ChevronLeft } from "@/shared/svg/chevron-left";
import { ChevronRight } from "@/shared/svg/chevron-right";
import { Navigation } from "swiper/modules";

export const Portfolio = ({ slides, title }) => {
  const swiperRef = useRef(null);

  const [swiper, setSwiper] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);

  return (
    <div className={styles.portfolio}>
      <Typography tag="h2" color="white" className={styles.title}>
        {title}
      </Typography>

      <Swiper
        centeredSlides
        slidesPerView={1.5}
        modules={[Navigation]}
        initialSlide={1}
        autoplay={{ delay: 1000 }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        grabCursor
        watchOverflow
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".portfolio-swiper-button-next",
          prevEl: ".portfolio-swiper-button-prev",
        }}
        className="portfolio"
        spaceBetween={120}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setPrevIndex(swiper.realIndex);
        }}
        breakpoints={{
          720: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },

          320: {
            slidesPerView: 1,
          },
        }}
      >
        {slides?.map((item) => (
          <SwiperSlide key={item.id}>
            <CardSlider {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.arrows}>
        <div className={styles.arrow}>
          <ChevronLeft className="portfolio-swiper-button-prev" fill="#fff" />
        </div>
        <div className={styles.arrow}>
          <ChevronRight className="portfolio-swiper-button-next" fill="#fff" />
        </div>
      </div>
    </div>
  );
};
