import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ContentContainer } from "@/lib/utils";
import StoriesContent from "./StoriesContent";

export default async function Stories() {
  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await wait(5000);
  const data = {
    url: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/879b2f7e6543e601d50ae4952b4ad9c1bdff7697_1720459239.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    title: "جوووون پدرتو خوردم داگ خیلی خوب بوپ",
  };
  return (
    <ContentContainer className="ltr flex-col flex my-2">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[7.1%]">
              <StoriesContent data={data} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </ContentContainer>
  );
}
