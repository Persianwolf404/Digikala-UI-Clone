"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function BrandCarousel() {
  return (
    <div className={" w-full rounded-2xl flex p-5"}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={5}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <SwiperSlide key={index} style={{ width: "120px", height: "110px" }}>
            <div
              className={`flex border-l items-center justify-center w-full h-full`}
            >
              <div className="w-[110px]  h-full relative">
                <Image
                  className="object-center w-full h-full"
                  src={
                    "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                  }
                  fill
                  alt="banner"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
