import { MainContainer } from "@/lib/utils";
import { IoIosArrowUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mb-20 mt-5 border-t-2 border-gray-200">
      <MainContainer className="my-10">
        <div className="w-full flex justify-between">
          <Image src={"/digi.svg"} width={113} height={30} alt="logo"></Image>
          <a
            href="#"
            className="text-xs text-gray-500 flex items-center border rounded-lg py-2 pt-3 px-4"
          >
            بازگشت به بالا
            <IoIosArrowUp className="mb-1 mr-1" />
          </a>
        </div>
        <h2 className="mt-5 text-gray-600 text-sm">
          تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ <span className="mx-3">|</span> ۰۲۱-۹۱۰۰۰۱۰۰ ۷ روز هفته، ۲۴ ساعته
          پاسخگوی شما هستیم
        </h2>
        <div className="my-10 justify-evenly flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex flex-col items-center gap-2">
              <Image
                src={"/footer.svg"}
                width={55}
                height={55}
                alt="logo"
              ></Image>
              <p className="text-xs">هفت روز ضمانت بازگشت کالا</p>
            </div>
          ))}
        </div>
        <div className="w-full text-gray-900 flex ">
          <div className="w-full flex">
            <ul>
              <li className="text-lg font-medium text-gray-900 mb-2">
                با دیجیکالا
              </li>
              <li className="text-gray-500 my-4">اتاق خبر دیجیکالا</li>
              <li className="text-gray-500 my-4">فروش در دیجیکالا</li>
              <li className="text-gray-500 my-4">فرصت های شغلی</li>
              <li className="text-gray-500 my-4">گزارش تخلف</li>
              <li className="text-gray-500 my-4">تماس با دیجیکالا</li>
              <li className="text-gray-500 my-4">درباره دیجیکالا</li>
            </ul>
            <div className="w-full flex justify-evenly">
              <ul>
                <li className="text-lg font-medium text-gray-900 mb-2">
                  با دیجیکالا
                </li>
                <li className="text-gray-500 my-4">خدمات مشتریان</li>
                <li className="text-gray-500 my-4">پاسخ به پرسش های متداول</li>
                <li className="text-gray-500 my-4">رویه های بازگشت کالا</li>
                <li className="text-gray-500 my-4">شرایط استفاده</li>
                <li className="text-gray-500 my-4">حریم خصوصی</li>
                <li className="text-gray-500 my-4">گزارش باگ</li>
              </ul>
              <ul>
                <li className="text-lg font-medium text-gray-900 mb-2">
                  راهنمای خرید از دیجی‌کالا
                </li>
                <li className="text-gray-500 my-4">نحوه ثبت سفارش</li>
                <li className="text-gray-500 my-4">رویه ارسال سفارش</li>
                <li className="text-gray-500 my-4">شیوه های پرداخت</li>
              </ul>
            </div>
          </div>
          <div className="w-[320px]">
            <h2>همراه ما باشید!</h2>
            <div className="flex w-full mt-5 gap-10">
              <FaInstagram className="text-4xl text-gray-400 gap-10" />
              <FaTwitter className="text-4xl text-gray-400 gap-10" />
              <FaLinkedin className="text-4xl text-gray-400 gap-10" />
              <SiAparat className="text-4xl text-gray-400 gap-10" />
            </div>
            <div className="mt-10">
              <h3>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h3>
              <div className="w-full flex mt-2 ">
                <input
                  placeholder="ایمیل شما"
                  type="text"
                  className="focus:outline-none pr-2 rounded-md flex-grow gap-1 bg-gray-100"
                />
                <a
                  href="#"
                  className="p-3 rounded-lg bg-[#ff4f72] mr-2 text-white"
                >
                  ثبت
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[73px] relative">
          <Image
            className="object-cover rounded-lg object-center w-full h-full"
            src={"/app.png"}
            fill
            alt="banner"
          />
        </div>
      </MainContainer>
    </footer>
  );
}
