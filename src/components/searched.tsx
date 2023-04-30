/*eslint-disable @typescript-eslint/no-unsafe-member-access*/
/*eslint-disable @typescript-eslint/no-explicit-any*/
import React from "react";

export default function Searched(props: any) {
  return (
    <div className="justify-content-center rounded bg-white py-4 text-center">
      <div className="rounded bg-zinc-200">{props.type}</div>
      <div className="rounded bg-zinc-200">{props.image}</div>
    </div>
  );
}
