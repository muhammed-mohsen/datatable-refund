import { IconType } from "react-icons";
import React from "react";
import Link from "next/link";
import type {  UrlObject } from "url";
interface Props extends React.PropsWithChildren{
    href: string | UrlObject;
    selected: boolean;
    Icon: IconType;
    title: string;
  
}
export const Route = ({
  selected,
  Icon,
  title,
  href
}:Props) => {
  return (
    <Link
      className={`flex items-center justify-start gap-2 w-full cursor-pointer rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
      href={href}

    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </Link>
  );
};