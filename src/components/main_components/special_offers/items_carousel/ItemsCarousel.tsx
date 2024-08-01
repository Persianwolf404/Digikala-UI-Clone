"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { ContentContainer } from "@/lib/utils";
import { GrLinkNext } from "react-icons/gr";
import ProductShortcut from "@/components/ui/ProductShortcut";

export default function ItemsCarousel() {
  return (
    <ContentContainer
      className={"bg-[#d63253] mx-auto rounded-2xl mt-10 h-[300px] flex p-5"}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={5}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "160px", height: "auto" }}>
          <div className="flex items-center justify-center w-full h-full ">
            <p className="text-right text-4xl leading-10 text-white">
              پیشنهاد <br />
              شگفت <br />
              انگیز <br />
            </p>
          </div>
        </SwiperSlide>
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index} style={{ width: "160px", height: "auto" }}>
            <div className="flex items-center justify-center w-full h-full bg-white">
              <ProductShortcut/>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide style={{ width: "160px", height: "auto" }}>
          <div className="flex text-gray-600 flex-col items-center justify-center w-full h-full bg-white">
            <div className="p-5 border-2 mb-5 border-blue-400 rounded-full rotate-180">
              <GrLinkNext className="text-blue-400" />
            </div>
            مشاهده همه
          </div>
        </SwiperSlide>
      </Swiper>
    </ContentContainer>
  );
}
