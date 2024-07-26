"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const Home: React.FC = () => {
  return (
    <section className="py-12 pt-[250px]">
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]} // Use Autoplay and Pagination modules
          pagination={{ clickable: true, type: "bullets" }} // Use bullets for pagination
          loop={true}
          autoplay={{
            delay: 2500, // Delay in ms between slides
            disableOnInteraction: false, // Autoplay continues even when user interacts
            pauseOnMouseEnter: true, // Pause autoplay on mouse enter
          }}
          className="mySwiper rounded-lg"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center h-[600px] bg-gray-200">
              <p>Slide 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[600px] bg-gray-400">
              <p>Slide 2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[600px] bg-gray-200">
              <p>Slide 3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[600px] bg-gray-400">
              <p>Slide 4</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[600px] bg-gray-200">
              <p>Slide 5</p>
            </div>
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
