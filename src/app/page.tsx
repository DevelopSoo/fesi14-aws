"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative border  w-full md:w-1/2 lg:w-1/3 aspect-video">
      <Image
        src="https://images.unsplash.com/photo-1726066012801-14d892021339"
        alt="Responsive image"
        fill
      />
    </div>
  );
}
