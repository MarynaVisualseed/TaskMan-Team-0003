import React from "react";
import clsx from "clsx";

export default function Title({ title, className }) {
  return (
    <h2 className={clsx("text-2xl font-semibold capitalize", className)}>
      {title}
    </h2>
  );
}
