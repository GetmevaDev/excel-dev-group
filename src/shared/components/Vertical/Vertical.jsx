import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Button, Typography } from "@/shared/widgets";

import styles from "./Vertical.module.scss";
import Image from "next/image";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft } from "@/shared/svg/arrow-left";
import { useMediaQuery } from "@/shared/hooks";
import { ChevronLeft } from "@/shared/svg/chevron-left";
import { ChevronRight } from "@/shared/svg/chevron-right";
export const Vertical = ({ title, description, slides }) => {
  const isLarge = useMediaQuery("(min-width: 200px)");

  return (
    <section className={classNames("layout", styles.vertical)}>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={1}
        modules={[Navigation, EffectCoverflow]}
        navigation={{
          nextEl: ".vertical-slider-swiper-button-next",
          prevEl: ".vertical-slider-swiper-button-prev",
        }}
        className="vertical-slider"
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

        <div className={styles.arrows}>
          <div className="vertical-slider-swiper-button-next">
            <ChevronRight fill="#fff" />
          </div>
          <div className="vertical-slider-swiper-button-prev">
            <ChevronLeft fill="#fff" />
          </div>
        </div>
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
