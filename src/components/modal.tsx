/*eslint-disable*/

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Modal({ website, tel, map, imgAlt, description }) {
  return (
    <div className="px-10">
      {description}
      <div className="flex-3 flex justify-center gap-20 justify-self-auto rounded bg-transparent py-10 text-center md:flex-row md:gap-20">
        <Link
          href={`tel:${tel}`}
          target="_blank"
          className="hover:text-green-400"
        >
          <Image
            src="/images/assets/actions-device-mobile.svg"
            alt={imgAlt}
            width="50"
            height="50"
          />
          mobile
        </Link>
        <Link href={map} target="_blank" className="hover:text-green-400">
          <Image
            src="/images/assets/actions-map.svg"
            alt={imgAlt}
            width="50"
            height="50"
            className="hover:animate-pulse"
          />
          map
        </Link>
        <Link href={website} target="_blank" className="hover:text-green-400">
          <Image
            src="/images/assets/actions-device-desktop.svg"
            alt={imgAlt}
            width="50"
            height="50"
          />
          website
        </Link>
      </div>
    </div>
  );
}
