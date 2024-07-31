"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

export default function ItemsCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center w-full h-[400px] items-center bg-gray-200 overflow-hidden">
            <div className="relative w- h-">
             
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
