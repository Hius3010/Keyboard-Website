"use client";
import { Carousel } from "antd";
import { data } from "autoprefixer";

const contentStyle: React.CSSProperties = {
  height: "463px",
  color: "#fff",
  background: "#364d79",
};

const BannerImg = [
  {
    id: 1,
    img: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2023/04/5075B-Plus-goku-naruto-1400x510.jpg",
  },
  {
    id: 2,
    img: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2023/04/M1-Banner-1400x510.jpg",
  },
  {
    id: 3,
    img: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2023/04/AKKO-3068B-banner-01-1400x510.jpg",
  },
  {
    id: 4,
    img: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2021/10/ban-phim-co-akko-3098-multi-modes-banner-1920x700-02-Akkovn-1400x510.jpg",
  },
  {
    id: 5,
    img: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1400/https://akko.vn/wp-content/uploads/2021/10/ban-phim-co-akko-5108-world-tour-tokyo-r2-sp-banner1920x700-akkovn-1400x510.jpg",
  },
];

export const HomeBanner = () => {
  return (
    <div className="h-full w-full">
      <Carousel
        autoplay
        autoplaySpeed={2000}
        arrows={true}
        className="overflow-hidden"
        draggable
      >
        {BannerImg.map((data, index) => {
          return (
            <div key={data.id ?? index.toString()}>
              <img
                src={data.img}
                className="w-full hover:scale-110 hover:opacity-80 ease-in duration-500"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
