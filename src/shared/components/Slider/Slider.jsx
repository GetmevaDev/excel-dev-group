import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import styles from "./Slider.module.scss";
import { ChevronLeft } from "@/shared/svg/chevron-left";
import { ChevronRight } from "@/shared/svg/chevron-right";
import classNames from "classnames";

export const Slider = ({ images }) => {
  return (
    <section className="layout">
      <div className={styles.slider}>
        <Swiper
          effect="coverflow"
          centeredSlides
          watchOverflow
          initialSlide={1}
          spaceBetween={-120}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, EffectCoverflow]}
          navigation={{
            nextEl: ".portfolio-swiper-button-next",
            prevEl: ".portfolio-swiper-button-prev",
          }}
          className="portfolio-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {images?.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                className={styles.image}
                width={1075}
                height={620}
                src={item?.image?.data?.attributes?.url}
                alt="img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.arrows}>
          <div className="portfolio-swiper-button-prev">
            <Image
              src="/images/chevron-left.svg"
              width={24}
              height={24}
              alt="left-arrow"
            />
          </div>
          <div className="portfolio-swiper-button-next">
            <Image
              src="/images/chevron-right.svg"
              width={24}
              height={24}
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
