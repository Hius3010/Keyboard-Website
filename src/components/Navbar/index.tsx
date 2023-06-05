"use client";
import React from "react";
import { LaptopOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  const Links = [
    { name: "KEYBOARD", link: "/shop" },
    { name: "KEYCAP", link: "/shop" },
    { name: "SWITCH", link: "/shop" },
    { name: "ACCESSORIES", link: "/shop" },
  ];

  const onLogoPress = () => {
    router.push("/");
  };

  return (
    <div className="bg-gray-900 w-full md:flex items-center justify-between py-4 md:px-10 px-7">
      <div
        className="font-bold text-4xl cursor-pointer flex items-center text-white"
        onClick={onLogoPress}
      >
        <span>
          <LaptopOutlined className="text-5xl text-white mr-2" />
        </span>
        Logo
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Searching Product"
          className="pl-2 rounded-xl w-[300px] h-[30px] bg-gray-600 text-white"
        />
        <span className="">
          <SearchOutlined className="ml-[-20px] pb-1" />
        </span>
      </div>

      <ul className="md:flex md:items-center">
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 text-xl">
            <a
              href={link.link}
              className="text-white hover:text-gray-400 duration-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="">
        <button className="bg-white rounded-3xl w-[80px] h-[40px] text-xl hover:bg-gray-400 duration-500">
          Login
        </button>
      </div>
    </div>
  );
};
