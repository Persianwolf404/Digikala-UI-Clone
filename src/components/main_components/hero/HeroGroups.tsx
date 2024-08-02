import { ContentContainer } from "@/lib/utils";
import Image from "next/image";
export default function HeroGroups() {
  const data: { title: string; url: string }[] = [
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
    {
      title: "لورم ایپسوم متن است",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    },
  ];
  return (
    <ContentContainer className="my-10 flex justify-between">
      {data.map((item, index) => (
        <div className="flex flex-col w-[54px] " key={index}>
          <div className="w-[54px] relative h-[54px]">
            <Image
              className="object-cover object-center"
              src={item.url}
              fill
              alt="banner"
            />
          </div>
          <p className="text-neutral-700 text-center mt-1 text-[13px]">تخفیف های تابستونی</p>
        </div>
      ))}
    </ContentContainer>
  );
}
