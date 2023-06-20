"use client";
import { HomeProductItem } from "@/model";

interface HomeProductProps {
  item: HomeProductItem;
}

const KeyboardData: HomeProductItem[] = [
  {
    id: 1,
    name: "Title 1",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/438/322/products/1685444133136.jpg?v=1685444138000",
    price: "Price",
  },
  {
    id: 2,
    name: "Title 1",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/438/322/products/img-0346-1685441058685.jpg?v=1685441065000",
    price: "Price",
  },
  {
    id: 3,
    name: "Title 1",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/438/322/products/20230507113317-1685440165672.jpg?v=1685442479000",
    price: "Price",
  },
  {
    id: 4,
    name: "Title 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyxLPYWUDCR3XG3z4bc-mGbqVgQM0T5mMsw&usqp=CAU",
    price: "Price",
  },
  {
    id: 5,
    name: "Title 1",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/438/322/products/1-1685417920255.jpg?v=1685417927153",
    price: "Price",
  },
  {
    id: 6,
    name: "Title 1",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/438/322/products/20230408.jpg?v=1685345204313",
    price: "Price",
  },
  {
    id: 7,
    name: "Title 1",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/438/322/products/z4383219027493-3ce6409fe84aa968bf4bddf00e9fcfbf-1685260388017.jpg?v=1685327073167",
    price: "Price",
  },
  {
    id: 8,
    name: "Title 1",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/438/322/products/img-1283-min-1684384673918.jpg?v=1684385392000",
    price: "Price",
  },
];

export const HomeKeyboardProduct = (props: HomeProductProps) => {
  const { item } = props;
  return (
    <div className="shadow-md rounded-lg pb-4">
      <img
        src={item.image}
        alt="NULL"
        className="rounded-lg hover:scale-105 ease-in duration-200 cursor-pointer object-cover h-[220px] w-[220px]"
      />
      <p className="font-bold h-[70px] w-[220px] text-sm pt-2 pl-2 hover:text-yellow-500 cursor-pointer overflow-hidden text-ellipsis hover:underline underline-offset-2">
        {item.name}
      </p>
      <p className="font-bold text-sm pt-5 pl-2 text-red-500">{item.price}</p>
    </div>
  );
};

export const HomeKeyboard = () => {
  return (
    <div className="w-full items-center text-center flex flex-col pb-20">
      <h1 className="font-bold text-3xl">KEYBOARD</h1>

      <a
        href="https://www.youtube.com/"
        target="_blank"
        className="flex w-full justify-center"
      >
        <p className="border-b-white border-b text-base">See More</p>{" "}
      </a>

      <div className="grid grid-cols-4 gap-7 pt-10">
        {KeyboardData.map((item, index) => {
          return (
            <HomeKeyboardProduct
              item={item}
              key={item.id ?? index.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};
