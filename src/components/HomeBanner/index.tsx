"use client";

import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "463px",
  color: "#fff",
  background: "#364d79",
};

export const HomeBanner = () => {
  return (
    <div className="h-[463px] w-full">
      <Carousel autoplay>
        <div className="bg-white">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2023/04/5075B-Plus-goku-naruto-1400x510.jpg"
            alt="NULL"
            style={contentStyle}
            className="w-full h-[full] object-cover hover:opacity-80 hover:scale-110 ease-in duration-500 cursor-pointer"
          />
        </div>

        <div className="bg-white">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2023/04/M1-Banner-1400x510.jpg"
            alt="NULL"
            style={contentStyle}
            className="w-full h-[full] object-cover hover:opacity-80 hover:scale-110 ease-in duration-500 cursor-pointer"
          />
        </div>

        <div className="bg-white">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2023/04/AKKO-3068B-banner-01-1400x510.jpg"
            alt="NULL"
            style={contentStyle}
            className="w-full h-[full] object-cover hover:opacity-80 hover:scale-110 ease-in duration-500 cursor-pointer"
          />
        </div>

        <div className="bg-white">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2021/10/ban-phim-co-akko-3098-multi-modes-banner-1920x700-02-Akkovn-1400x510.jpg"
            alt="NULL"
            style={contentStyle}
            className="w-full h-[full] object-cover hover:opacity-80 hover:scale-110 ease-in duration-500 cursor-pointer"
          />
        </div>

        <div className="bg-white">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2021/10/ban-phim-co-akko-5108-world-tour-tokyo-r2-sp-banner1920x700-akkovn-1400x510.jpg"
            alt="NULL"
            style={contentStyle}
            className="w-full h-[full] object-cover hover:opacity-80 hover:scale-110 ease-in duration-500 cursor-pointer"
          />
        </div>
      </Carousel>
    </div>
  );
};
