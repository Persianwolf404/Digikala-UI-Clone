import Image from "next/image";
export default function ProductShortcut() {
  return (
    <div className="w-full h-full p-2">
      <div className="relative w-[132px] h-[132px] mx-auto">
        <Image
          className="object-cover object-center w-full h-full"
          src={
            "https://dkstatics-public.digikala.com/digikala-products/f15f588d736a9e04342ef023b94dcbb1ec505ed8_1626959720.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          }
          fill
          alt="banner"
        />
      </div>
    </div>
  );
}
