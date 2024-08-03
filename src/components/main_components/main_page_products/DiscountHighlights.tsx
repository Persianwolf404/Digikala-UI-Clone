import { MdOutlineDiscount } from "react-icons/md";
import { FaPercent } from "react-icons/fa6";
import Image from "next/image";
import { divideArrayIntoChunks } from "@/lib/utils";

export default function DiscountHighlights() {
  let product = {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/735c6ab54bc3186ea2b039b430730e480443716d_1714473659.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "490000",
    discounted_price: "300000",
  };

  let array = [];
  for (let index = 0; index < 18; index++) {
    array.push(product);
  }
  let fixed_array = divideArrayIntoChunks(array, 6);

  return (
    <div className="border mt-4 p-5 pb-0 rounded-xl">
      <div className="flex justify-center items-center gap-3 text-2xl">
        <MdOutlineDiscount className="text-red-500" />
        منتخب محصولات تخفیف و حراج
      </div>
      <div className="mt-5 w-full">
        {fixed_array.map((arr, index) => (
          <div
            key={index}
            className={`w-full flex min-h-[216px] ${
              fixed_array.length != index + 1 ? "border-b" : ""
            }`}
          >
            {arr.map((item, index) => (
              <div
                key={index}
                className="w-[16.6%] last:border-none border-l p-2 h-auto"
              >
                <div className="h-full w-full">
                  <div className="w-[150px] mx-auto mt-2 h-[150px] relative">
                    <Image
                      className="object-cover object-center w-full h-full"
                      src={
                        "https://dkstatics-public.digikala.com/digikala-products/19f32dc5db336fefe519d25770740c95fc1c358d_1709119546.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                      }
                      fill
                      alt="banner"
                    />
                  </div>
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
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
