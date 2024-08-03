import DiscountHighlights from "./DiscountHighlights";
import Suggestions from "./Suggestions";
import TopProducts from "./TopProducts";
import Image from "next/image";
import { ContentContainer } from "@/lib/utils";

export default function MainPageProducts() {
  return (
    <ContentContainer className="">
      <Suggestions />
      <div className=" h-[140px] relative">
        <Image
          className="my-3 object-center rounded-2xl w-full h-full"
          src={"/cover.png"}
          fill
          alt="banner"
        />
      </div>
      <TopProducts />
      <Suggestions />
      <DiscountHighlights />
      <TopProducts />
    </ContentContainer>
  );
}
