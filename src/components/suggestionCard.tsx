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
  return (
    <div onClick={handleClick}>
      <div
        title={props.title}
        className="relative flex transform transform-gpu flex-col justify-between rounded-xl bg-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-200"
      >
        <div className="flex h-72 flex-row px-6 py-4 max-sm:flex-wrap sm:h-40 md:h-48">
          <div className="my-auto h-32 w-full overflow-hidden md:h-full md:w-1/2">
            <img
              className="rounded object-cover pb-2 drop-shadow-lg"
              src={props.image}
              alt="Best food in San Antonio"
            />
          </div>
          <div className="my-auto ml-4 w-full md:w-1/2">
            <div className="mb-2 flex flex-col text-xl font-bold">
              {props.title}
            </div>
            <p className="max-h-24 overflow-hidden text-ellipsis text-gray-700">
              {props.type} cuisine
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
          <span className="mr-2 mb-2 inline-block cursor-pointer px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-green-400 hover:text-green-900">
            Rating: {props.rating}
          </span>
          <span className="mr-2 mb-2 inline-block cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-green-400 hover:text-green-900">
            #{props.type}
          </span>
          <span className="mr-2 mb-2 inline-block cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-green-400 hover:text-green-900">
            #{props.city}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
