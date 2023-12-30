/*eslint-disable @next/next/no-img-element*/
import React, { useState } from "react";
import Modal from "./modal";

type SuggestionProps = {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  city?: string;
  website?: string;
  rating?: string;
  tel?: string;
  map?: string;
  imgAlt?: string;
};

const SuggestionCard = (props: SuggestionProps) => {
  const [openModal, setOpenModal] = useState(false);

  function handleClick() {
    setOpenModal((current) => !current);
  }

  // const modalOpenedAppearance = "absolute flex flex-col justify-center z-40";

  return (
    <div onClick={handleClick}>
      <div
        title={props.title}
        className="relative flex transform flex-col justify-between rounded-xl bg-white shadow-lg transition duration-300 ease-in-out hover:bg-zinc-100"
      >
        <div className="flex flex-col p-2 max-sm:flex-wrap">
          <div className="my-auto h-72 w-full overflow-hidden md:h-full">
            <img
              className="rounded pb-4 drop-shadow-lg"
              src={props.image}
              alt="Best food in San Antonio"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="my-2 ml-4 flex w-full flex-row justify-between">
            <div className="mb-2 text-xl font-bold">{props.title}</div>
            <p className="mr-8 font-thin capitalize text-gray-500">
              {props.type} Cuisine
            </p>
          </div>
        </div>
        {openModal ? (
          <Modal
            website={props.website}
            tel={props.tel}
            map={props.map}
            imgAlt={props.imgAlt}
            description={props.description}
          />
        ) : null}
        <div className="rounded-b-xl bg-white px-6 pt-4 pb-2">
          <span className="mr-2 mb-2 inline-block px-3 py-1 text-sm font-semibold text-gray-700">
            Rating: {props.rating}
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #{props.type}
          </span>
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #{props.city}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
