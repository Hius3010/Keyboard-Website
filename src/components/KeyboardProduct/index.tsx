"use client";
import { KeyboardProductItem } from "@/model";

interface KeyboardProductProps {
  item: KeyboardProductItem;
}

export const KeyboardProduct = (props: KeyboardProductProps) => {
  const { item } = props;
  return (
    <div className="shadow-md rounded-lg pb-4">
      <img src={item.image} alt="NULL" className="rounded-lg hover:scale-105 ease-in duration-200 cursor-pointer"/>
      <p className="font-bold text-sm pt-2 pl-2 hover:text-yellow-500 cursor-pointer">{item.name}</p>
      <p className="font-bold text-sm pt-5 pl-2 text-red-500">{item.price}</p>
    </div>
  );
};
