import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function StoriesContent({
  data,
}: {
  data: { url: string; title: string };
}) {
  return (
    <div className="flex user-select-none flex-col w-[84px] h-[140px]   ">
      <div className="border-2 border-purple-600 w-[84px] h-[84px] rounded-full p-1">
        <div className="w-full h-full bg-red-200 rounded-full overflow-hidden">
          <Image className="" src={data.url} alt="banner" width={74} height={74} />
        </div>
      </div>
      <div className="mt-2 font-light text-xs text-center text-neutral-800">
        {data.title}
      </div>
    </div>
  );
}
