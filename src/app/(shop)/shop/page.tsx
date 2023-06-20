"use client";
import Bcrumb from "@/components/BCrumb";
import { KeyboardProduct } from "@/components/KeyboardProduct";
import { KeyboardProductItem } from "@/model";

const data = [
  {
    id: 1,
    name: "hello",
    image: "link",
    price: 123123,
  },
  {
    id: 2,
    name: "hai",
  },
  {
    id: 2,
    name: "hai",
  },
  {
    id: 2,
    name: "hai",
  },
  {
    id: 2,
    name: "hai",
  },
  {
    id: 2,
    name: "hai",
  },
];

const productData: KeyboardProductItem[] = [
  {
    id: 2,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 3,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 4,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 5,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 6,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 7,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 8,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 9,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 10,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 11,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
  {
    id: 12,
    name: "Gopolar GG75 Kit",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/438/322/products/gg75-1680264879167.jpg?v=1680264887923",
    price: "1.530.000₫",
  },
];

const Shop = () => {
  return (
    <main>
      <div className="w-full h-full items-center">
        <div className="w-full h-[55px] grid place-items-center pl-36 bg-gray-200">
          <Bcrumb />
        </div>

        <div className="grid grid-cols-4 pb-10 pt-4">
          <div className="h-full w-full self-start md:col-span-1 hidden md:flex">
            <ul className="font-bold w-full px-4 py-2">
              <p className="mb-4">Product List</p>
              {data.map((item, key) => {
                return (
                  <li
                    className="bg-white hover:bg-yellow-400 font-medium cursor-pointer"
                    key={item.id ?? key.toString()}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full h-full  md:col-span-3 col-span-4">
            <div className="flex flex-row pl-8">
              <img
                className="w-[80px] h-[80px] object-cover"
                src="https://bizweb.dktcdn.net/thumb/compact/100/438/322/collections/zoom65v2-exploded2-vuong.jpg?v=1679055931887"
                alt="NULL"
              />
              <p className="pl-20 font-bold w-full h-[80px] items-center flex">
                KEYBOARD
              </p>
            </div>
            <div className="w-full pt-4 pl-4">
              <ul className="flex flex-row">
                <li className="bg-gray-600 text-white px-3 text-sm font-semibold hover:bg-yellow-600 py-1 cursor-pointer">
                  A-Z
                </li>
                <li className="bg-gray-600 text-white px-3 text-sm font-semibold hover:bg-yellow-600 py-1 cursor-pointer">
                  Z-A
                </li>
                <li className="bg-gray-600 text-white px-3 text-sm font-semibold hover:bg-yellow-600 py-1 cursor-pointer">
                  Low to High
                </li>
                <li className="bg-gray-600 text-white px-3 text-sm font-semibold hover:bg-yellow-600 py-1 cursor-pointer">
                  High to Low
                </li>
                <li className="bg-gray-600 text-white px-3 text-sm font-semibold hover:bg-yellow-600 py-1 cursor-pointer">
                  Newest
                </li>
                <li className="bg-gray-600 text-white px-3 text-sm font-semibold hover:bg-yellow-600 py-1 cursor-pointer">
                  Oldest
                </li>
                <li className="bg-gray-600 text-white px-3 text-sm font-semibold hover:bg-yellow-600 py-1 cursor-pointer">
                  Discount
                </li>
              </ul>
            </div>

            <div className="w-full grid grid-cols-4 gap-x-4 gap-y-4 pt-10">
              {productData.map((item, index) => {
                return (
                  <KeyboardProduct
                    item={item}
                    key={item.id ?? index.toString()}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Shop;
