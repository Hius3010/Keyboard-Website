"use client";
import React, { useState } from "react";
import { LaptopOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const router = useRouter();

  const Links = [
    { name: "KEYBOARD", link: "/shop" },
    { name: "KEYCAP", link: "/shop" },
    { name: "SWITCHES", link: "/shop" },
    { name: "ACCESSORIES", link: "/shop" },
  ];

  const onLogoPress = () => {
    router.push("/");
  };

  const onLoginPress = () => {
    router.push("/account/login");
  };

  const [search, setSearch] = useState("");
  const onSearchPress = () => {
    console.log({ search });
  };

  return (
    <div className="bg-gray-900 h-[100px] w-full md:flex items-center justify-between py-4 md:px-10 px-7">
      <div
        className="font-bold text-4xl cursor-pointer flex items-center text-white"
        onClick={onLogoPress}
      >
        <FontAwesomeIcon icon={faKeyboard as IconProp} className="pr-4" />
        <p>Logo</p>
      </div>

      <div className="flex rounded-full w-[260px] h-[35px] bg-gray-600">
        <input
          type="text"
          placeholder="Searching Product"
          className=" text-white placeholder:text-gray-300 bg-gray-600 rounded-l-full outline-none pl-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="items-center rounded-r-full">
          <FontAwesomeIcon
            icon={faMagnifyingGlass as IconProp}
            className="text-white"
            title="Search"
            onClick={onSearchPress}
          />
        </button>
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
        <button
          className="bg-white rounded-3xl w-[130px] h-[50px] text-xl font-bold hover:bg-gray-400 duration-500"
          onClick={onLoginPress}
        >
          Login
        </button>
      </div>
    </div>
  );
};
