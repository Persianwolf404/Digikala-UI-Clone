"use client";
import { FaFire } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function TopProducts() {
  return (
    <div className="mt-6 border rounded-xl p-5">
      <div className="w-full items-center flex">
        <h2 className="mx-auto flex gap-2 text-2xl items-center">
          <FaFire className="text-[#ffa808]" /> پرفروش ترین کالاها
        </h2>
        <span className="mt-2 flex  text-blue-500 items-center">
          مشاهده همه
          <IoIosArrowBack className="pr-1 " />
        </span>
      </div>
      <div className={" w-full rounded-2xl flex p-5"}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={5}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "315px", height: "300px" }}
            >
              <div
                className={`flex flex-col items-center justify-center w-full h-full`}
              >
                <div className="w-full flex  flex-grow">
                  <div className="w-[85px] h-[85px] relative">
                    <Image
                      className="object-cover object-center w-full h-full"
                      src={
                        "https://dkstatics-public.digikala.com/digikala-products/ba6bfd30449fc2055f8d6d5ae66edf56d9d0c48d_1661771042.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                      }
                      fill
                      alt="banner"
                    />
                  </div>
                  <span className="text-blue-500 text-4xl flex items-center">
                    ۱
                  </span>
                  <div className="flex items-center">
                    <p className="w-[195px] pr-2 font-light text-sm leading-[25px] line-clamp-2 ">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                  </div>
                </div>{" "}
                <div className="w-full flex  flex-grow">
                  <div className="w-[85px] h-[85px] relative">
                    <Image
                      className="object-cover object-center w-full h-full"
                      src={
                        "https://dkstatics-public.digikala.com/digikala-products/ba6bfd30449fc2055f8d6d5ae66edf56d9d0c48d_1661771042.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                      }
                      fill
                      alt="banner"
                    />
                  </div>
                  <span className="text-blue-500 text-4xl flex items-center">
                    ۲
                  </span>
                  <div className="flex items-center">
                    <p className="w-[195px] pr-2 font-light text-sm leading-[25px] line-clamp-2 ">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                  </div>
                </div>
                <div className="w-full flex  flex-grow">
                  <div className="w-[85px] h-[85px] relative">
                    <Image
                      className="object-cover object-center w-full h-full"
                      src={
                        "https://dkstatics-public.digikala.com/digikala-products/ba6bfd30449fc2055f8d6d5ae66edf56d9d0c48d_1661771042.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                      }
                      fill
                      alt="banner"
                    />
                  </div>
                  <span className="text-blue-500 text-4xl flex items-center">
                    ۳
                  </span>
                  <div className="flex items-center">
                    <p className="w-[195px] pr-2 font-light text-sm leading-[25px] line-clamp-2 ">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
