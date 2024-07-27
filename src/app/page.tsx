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
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/7ecf7655c1b4022ddc4abaabbacc05e44b6f7310_1721577305.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/71f867b90d6dca65405a4252159f7b9c5b7cd8b6_1721819972.jpg?x-oss-process=image/quality,q_95",
  ];
  return (
    <div className="">
      <ImageSlider images={url}/>
    </div>
  );
}
