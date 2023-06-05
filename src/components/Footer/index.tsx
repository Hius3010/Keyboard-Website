"use client";

export const Footer = () => {
  return (
    <div className=" w-full h-[250px]">
      <div className="w-full h-full bg-gray-900 text-white gap-x-10 grid grid-cols-3 px-36 py-10">
        <div className="flex flex-col gap-y-10">
          <h4 className="font-bold">LOGO</h4>

          <ul className="flex flex-col gap-y-3">
            <li className="text-sm text-gray-400">Address: Số 1 Đại Cồ Việt</li>
            <li className="text-sm text-gray-400">Phone Number: 0910100</li>
            <li className="text-sm text-gray-400">Email: hust.edu.vn</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-10 text-start">
          <h4 className="font-bold">FOLLOW US</h4>

          <ul className="flex flex-col gap-y-3">
            <li className="text-sm text-gray-400 hover:text-yellow-500 cursor-pointer duration-500">
              Home page
            </li>
            <li className="text-sm text-gray-400 hover:text-yellow-500 cursor-pointer duration-500">
              About us
            </li>
            <li className="text-sm text-gray-400 hover:text-yellow-500 cursor-pointer duration-500">
              Product
            </li>
            <li className="text-sm text-gray-400 hover:text-yellow-500 cursor-pointer duration-500">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-8">
          <h4 className="font-bold">DISCOUNT INFORMATION</h4>

          <div className="flex r">
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-5 text-black placeholder:text-gray-900 h-[30px]"
            />
            <button className="bg-gray-500 w-[80px] h-[30px] px-2">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
