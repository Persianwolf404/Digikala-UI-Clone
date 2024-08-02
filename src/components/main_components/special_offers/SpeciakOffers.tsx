import ItemsCarousel from "./ItemsCarousel";
import Image from "next/image";
import { ContentContainer } from "@/lib/utils";

export default function SpecialOffers() {
  return (
    <ContentContainer className="mb-5">
      <ItemsCarousel />
      <section className="w-full">
        <div className="w-full h-[140px] relative">
          <Image
            className="my-3 object-center rounded-2xl w-full h-full"
            src={"/cover.png"}
            fill
            alt="banner"
          />
        </div>
        <div className="w-full gap-3 mt-3 h-[241px] flex">
          <div className=" flex gap-3 flex-grow">
            <div className="flex-grow rounded-xl relative h-full">
              <Image
                className="my-3 rounded-xl object-center w-full h-full"
                src={
                  "https://dkstatics-public.digikala.com/digikala-adservice-banners/79afc4fed1f5185d940a55bafcc4575178438d0e_1722069910.jpg?x-oss-process=image/quality,q_95"
                }
                fill
                alt="banner"
              />
            </div>
            <div className="flex-grow rounded-xl relative h-full">
              <Image
                className="my-3 rounded-xl object-center w-full h-full"
                src={
                  "https://dkstatics-public.digikala.com/digikala-adservice-banners/79afc4fed1f5185d940a55bafcc4575178438d0e_1722069910.jpg?x-oss-process=image/quality,q_95"
                }
                fill
                alt="banner"
              />
            </div>
          </div>
          <div className="flex gap-3 flex-grow">
            <div className="flex-grow rounded-xl relative h-full">
              <Image
                className="my-3 rounded-xl object-center w-full h-full"
                src={
                  "https://dkstatics-public.digikala.com/digikala-adservice-banners/79afc4fed1f5185d940a55bafcc4575178438d0e_1722069910.jpg?x-oss-process=image/quality,q_95"
                }
                fill
                alt="banner"
              />
            </div>
            <div className="flex-grow rounded-xl relative h-full">
              <Image
                className="my-3 rounded-xl object-center w-full h-full"
                src={
                  "https://dkstatics-public.digikala.com/digikala-adservice-banners/79afc4fed1f5185d940a55bafcc4575178438d0e_1722069910.jpg?x-oss-process=image/quality,q_95"
                }
                fill
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
    </ContentContainer>
  );
}
