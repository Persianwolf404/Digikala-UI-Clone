"use client";
import { FaBars } from "react-icons/fa";
import { TbDiscount } from "react-icons/tb";
import { MdOutlineDiscount } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { BsFeather } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MainContainer } from "@/libs/utils";
import gsap from "gsap";

import React, { useEffect, useRef } from "react";

function Navlist() {
  const lastScrollTop = useRef<number>(0);
  const lastDirection = useRef<boolean | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingUp = currentScrollTop < lastScrollTop.current;

      // Log to console only if the direction has changed
      if (isScrollingUp !== lastDirection.current) {
        const element = document.getElementById("navbar_items") as HTMLElement;

        if (!isScrollingUp) {
          gsap.to(element, {
            height: "auto",
            duration: 0.2
          });
        } else {
           gsap.to(element, {
             height: "175px",
             duration: 0.2,
           });
        }
        lastDirection.current = isScrollingUp;
      }

      // Update the last scroll position
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // navbar_items;
  return (
    <MainContainer
      className="p-3
     absolute w-full flex mt-4 py-1"
    >
      <ul className="flex flex-grow gap-6 text-md">
        <li className="mr-3 flex border-l-2 pl-4 items-center text-gray-900">
          <FaBars className="mb-1 ml-2" />
          دسته بندی کالاها
        </li>
        <li className="flex items-center gap-1 text-gray-500">
          <HiOutlineHome className="mb-1" />
          صفحه اصلی
        </li>
        <li className="flex items-center gap-1 text-gray-500">
          <TbDiscount />
          فروش ویژه
        </li>
        <li className="flex items-center gap-1 text-gray-500">
          <MdOutlineDiscount />
          پیشنهادات
        </li>
        <li className="flex items-center gap-1 text-gray-500">
          <AiOutlineFire />
          پرفروش ترین ها
        </li>
        <li className="flex items-center gap-1 text-gray-500">
          <FaRegStar className="mb-1" />
          محبوب ترین ها
        </li>
        <li className="flex items-center gap-1 text-gray-500">
          <BsFeather className="mb-1" />
          درباره ما
        </li>
      </ul>
      <div className="flex items-center text-gray-500 text-sm gap-1">
        <FaLocationDot className="mb-1 " />
        لطفا شهر خود را انتخاب کنید
      </div>
    </MainContainer>
  );
}

export default Navlist;
