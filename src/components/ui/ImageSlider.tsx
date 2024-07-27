"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";


type CarouselProps = {
  images: string[];
};

const ImageSlider: React.FC<CarouselProps> = ({ images }) => {
  return (
    <section className="my-4 flex w-full relative">
      <div className=" w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true, type: "bullets" }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="mySwiper rounded-lg"
        >
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center w-full h-[400px] items-center bg-gray-200 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    className="object-cover object-center"
                    src={url}
                    layout="fill"
                    alt="banner"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;
