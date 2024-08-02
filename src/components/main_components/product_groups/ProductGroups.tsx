import { ContentContainer } from "@/lib/utils";
import Image from "next/image";

export default function ProductGroups() {
  const data = {
    title: "لوازم خانه برقی",
    image_url:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/c16b7dff700a9d99880174c32ec233d20ddb531c_1703057953.png",
  };

  return (
    <ContentContainer className="flex flex-col justify-center">
      <h2 className="text-center my-8 text-2xl">خرید بر اساس دسته بندی</h2>
      <div className="w-full mx-auto flex-wrap flex max-w-[1180px] ">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            className="flex px-5 justify-center w-[140px] h-40 flex-col"
            key={index}
          >
            <div className="relative  w-[100px] h-[100px]">
              <Image
                className="my-3 rounded-xl object-center w-full h-full"
                src={data.image_url}
                fill
                alt="banner"
              />
            </div>
            <div className="text-sm mt-4 text-center">لوازم خانگی برقی</div>
          </div>
        ))}
      </div>

    </ContentContainer>
  );
}
