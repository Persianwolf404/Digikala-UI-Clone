import { ContentContainer } from "@/lib/utils";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import BrandCarousel from "./BrandCarousel";
export default function Brands() {
  return (
    <ContentContainer className="">
      <section className="w-full gap-3 h-[264px] flex mt-10">
        <div className="flex-grow h-auto relative">
          <Image
            className="my-3 rounded-xl object-center w-full h-full"
            src={
              "https://dkstatics-public.digikala.com/digikala-adservice-banners/1c49de4315a527876cbd14e9cdf29ce991ebac02_1721826998.jpg?x-oss-process=image/quality,q_95"
            }
            fill
            alt="banner"
          />
        </div>
        <div className="flex-grow h-auto relative">
          <Image
            className="my-3 rounded-xl object-center w-full h-full"
            src={
              "https://dkstatics-public.digikala.com/digikala-adservice-banners/1c49de4315a527876cbd14e9cdf29ce991ebac02_1721826998.jpg?x-oss-process=image/quality,q_95"
            }
            fill
            alt="banner"
          />
        </div>
      </section>
      <section className="mt-7 text-xl justify-center rounded-2xl border flex flex-col">
        <h2 className="flex my-5 justify-center">
          <FaRegStar className="text-sm mt-[6px] scale-[1.2] mx-2 text-[#ffa01a]" />{" "}
          محبوب ترین برند ها
        </h2>
        <BrandCarousel />
      </section>
      <section className="w-full gap-3 h-[264px] flex mt-2">
        <div className="flex-grow h-auto relative">
          <Image
            className="my-3 rounded-xl object-center w-full h-full"
            src={
              "https://dkstatics-public.digikala.com/digikala-adservice-banners/1c49de4315a527876cbd14e9cdf29ce991ebac02_1721826998.jpg?x-oss-process=image/quality,q_95"
            }
            fill
            alt="banner"
          />
        </div>
        <div className="flex-grow h-auto relative">
          <Image
            className="my-3 rounded-xl object-center w-full h-full"
            src={
              "https://dkstatics-public.digikala.com/digikala-adservice-banners/1c49de4315a527876cbd14e9cdf29ce991ebac02_1721826998.jpg?x-oss-process=image/quality,q_95"
            }
            fill
            alt="banner"
          />
        </div>
      </section>
    </ContentContainer>
  );
}
