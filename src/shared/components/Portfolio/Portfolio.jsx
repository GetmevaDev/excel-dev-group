import { CardSlider, Typography } from "@/shared/widgets";
import { useState } from "react";
import {
  Controller,
  EffectCoverflow,
  EffectFade,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import styles from "./Portfolio.module.scss";
import { useRef } from "react";

const list = [
  {
    id: 1,
    title: "Interior Design Presentation",
    description: `Cabinets to extend all the way to the ceiling. Top upper cabinets tocontinue to be counter depth and
different color, to align with fridgeand full height cabinet (oven microwave).Bottom of upper cabinets to be at normall 12’’ depth. Under cabinet lighting.`,
  },

  {
    id: 2,
    title: "Interior Design Presentation",
    description: `Cabinets to extend all the way to the ceiling. Top upper cabinets tocontinue to be counter depth and
different color, to align with fridgeand full height cabinet (oven microwave).Bottom of upper cabinets to be at normall 12’’ depth. Under cabinet lighting.`,
  },

  {
    id: 3,
    title: "Interior Design Presentation",
    description: `Cabinets to extend all the way to the ceiling. Top upper cabinets tocontinue to be counter depth and
different color, to align with fridgeand full height cabinet (oven microwave).Bottom of upper cabinets to be at normall 12’’ depth. Under cabinet lighting.`,
  },

  {
    id: 4,
    title: "Interior Design Presentation",
    description: `Cabinets to extend all the way to the ceiling. Top upper cabinets tocontinue to be counter depth and
different color, to align with fridgeand full height cabinet (oven microwave).Bottom of upper cabinets to be at normall 12’’ depth. Under cabinet lighting.`,
  },
];

export const Portfolio = () => {
  const swiperRef = useRef(null);

  const [swiper, setSwiper] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);

  return (
    <div className={styles.portfolio}>
      <Typography tag="h2" color="white" className={styles.title}>
        Portfolio
      </Typography>

      <Swiper
        centeredSlides
        slidesPerView={1.5}
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
        className="portfolio"
        spaceBetween={100}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setPrevIndex(swiper.realIndex);
        }}
        breakpoints={{}}
      >
        {list?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <CardSlider {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
