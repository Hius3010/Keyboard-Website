"use client";
import { Breadcrumb } from "antd";

export const Bcrumb = () => {
  return (
    <div className="w-full">
      <Breadcrumb
        items={[
          {
            title: <a href="/">Home</a>,
          },
          {
            title: "Shop",
          },
        ]}
      />
    </div>
  );
};

export default Bcrumb;
