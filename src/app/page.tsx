"use client"
import ImageSlider from "@/components/ui/ImageSlider";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Home() {
  const url = [
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/7ecf7655c1b4022ddc4abaabbacc05e44b6f7310_1721577305.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/71f867b90d6dca65405a4252159f7b9c5b7cd8b6_1721819972.jpg?x-oss-process=image/quality,q_95",
  ];
  return (
    <div className="px-20">
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{ 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{ 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{ 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{ + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{ + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>{" "}
          <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{ + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
