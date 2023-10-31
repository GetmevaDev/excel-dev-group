import { CardSlider } from "@/shared/widgets";
import { list } from "..";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export const Slider = ({}) => {
  const swiperRef = useRef(null);

  const [swiper, setSwiper] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0, // added (Rotate of the prev and next slides)
          depth: 200, // added (Depth of the prev and next slides)
          stretch: 30, // added (Space between the slides)
          modifier: 1, // added (Multiply the values of rotate, depth, and stretch)
          scale: 1, // added (Size ratio of the prev and next slides)
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container--slider"
      >
        {list?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Image width={1075} height={620} src="/images/slider-1.jpg" />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
};
