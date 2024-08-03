import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ContentContainer } from "@/lib/utils";
import StoriesContent from "./StoriesContent";
import StoryModal from "./StoryModal";

export default function Stories() {
  let obj = {
    url: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/879b2f7e6543e601d50ae4952b4ad9c1bdff7697_1720459239.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    title: "لورم ایپسوم یک متن ساختگی است",
  };
  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push(obj);
  }

  return (
    <ContentContainer className="ltr relative my-2">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {data.map((item) => (
            <div key={item.title} className="relative">
              <CarouselItem
                id={item.title}
                className="cursor-pointer md:basis-1/2 lg:basis-[7.1%]"
              >
                <StoriesContent data={item} />
              </CarouselItem>
              <div className="absolute">
                <StoryModal title={item.title} />
              </div>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </ContentContainer>
  );
}
