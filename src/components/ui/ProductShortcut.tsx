import Image from "next/image";
import { FaPercent } from "react-icons/fa6";

export default function ProductShortcut({
  data = {
    image: "",
    special_offer: false,
    limited: "fasle",
    discounted_price: "fasle",
    title: "",
    colors: "fasle",
    price: 0,
    score: 0,
  },
}) {
  return (
    <div className="w-full h-full p-2">
      <div className="relative w-[132px] h-[132px] mx-auto">
        <Image
          className="object-cover object-center w-full h-full"
          src={
            "https://dkstatics-public.digikala.com/digikala-products/7e17645f1618bf8d4236a2e41c10e015f7aa82fc_1663149379.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          }
          fill
          alt="banner"
        />
      </div>
      <div className="flex flex-col">
        
        <h3 className="text-gray-500 text-xs mt-2 line-clamp-2">
          دفتر نقاشی 40 برگ تیما مدل ستیا مجموعه 10 عددی
        </h3>
        <div className="font-semibold flex items-center mt-2 text-sm justify-between">
          <span className="flex items-center px-1 rounded-lg font-medium text-[15px] text-white bg-red-500">
            <FaPercent className="inline text-[12px] " />
            12
          </span>
          <div>
            <span className="">233,000 </span>
            <span className="text-[12px] pt-1">تومان</span>
          </div>
        </div>
        <div className="text-gray-400 text-left overflow-hidden text-[15px]">
          <div className="inline-block">
            <span className="mr-auto items-center flex relative  ">
              233,000
              <span className="w-full h-[1px] bg-gray-400 absolute "></span>
            </span>
          </div>
          <span className="text-[12px] invisible">تومان</span>
        </div>
      </div>
    </div>
  );
}
