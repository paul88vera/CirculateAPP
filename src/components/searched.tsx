/*eslint-disable @typescript-eslint/no-unsafe-member-access*/
/*eslint-disable @typescript-eslint/no-explicit-any*/
/*eslint-disable @typescript-eslint/no-unsafe-assignment*/
/*eslint-disable @next/next/no-img-element*/
import React from "react";

export default function Searched(props: any) {
  return (
    <div className="justify-content-center rounded bg-white py-4 text-center">
      <img src={props.image} alt={props.imgAlt} />
      <div className="rounded bg-zinc-200">{props.title}</div>
      <div className="rounded bg-zinc-200">{props.type}</div>
      <div className="rounded bg-zinc-200">{props.address}</div>
      <div className="rounded bg-zinc-200">{props.city}</div>
    </div>
  );
}
