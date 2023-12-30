/*eslint-disable*/
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Modal({ website, tel, map, imgAlt, description }) {
  return (
    <div className="px-10">
      {description}
      <div className="flex-3 flex justify-around gap-20 justify-self-auto rounded bg-transparent py-10 text-center md:flex-row md:gap-20">
        <Link
          href={`tel:${tel}`}
          target="_blank"
          className="text-black transition-all ease-in-out hover:scale-110"
        >
          <Image
            src="/images/assets/phone-green.png"
            alt={imgAlt}
            width="50"
            height="50"
            className="hover:animate-pulse" 
          />
          Phone
        </Link>
        <Link
          href={website}
          target="_blank"
          className="text-black transition-all ease-in-out hover:scale-110"
        >
          <Image
            src="/images/assets/imac-green.png"
            alt={imgAlt}
            width="50"
            height="50"
            className="hover:animate-pulse"
          />
          Website
        </Link>
        <Link
          href={map}
          target="_blank"
          className="text-black transition-all ease-in-out hover:scale-110"
        >
          <Image
            src="/images/assets/maps-and-flags-green.png"
            alt={imgAlt}
            width="50"
            height="50"
            className="hover:animate-pulse"
          />
          Map
        </Link>
      </div>
    </div>
  );
}
