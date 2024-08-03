import Hero from "@/components/main_components/hero/Hero";
import SpeciakOffers from "@/components/main_components/special_offers/SpeciakOffers";
import ProductGroups from "@/components/main_components/product_groups/ProductGroups";
import Brands from "@/components/main_components/brands/Brands";
import MainPageProducts from "@/components/main_components/main_page_products/MainPageProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <SpeciakOffers />
      <ProductGroups />
      <Brands />
      <MainPageProducts/>
    </main>
  );
}
