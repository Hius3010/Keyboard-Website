"use client";

export const HomeSellingProduct = () => {
  return (
    <div className="w-full h-[382px text-center pt-10 pb-10">
      <h1 className="pb-10 text-3xl font-bold"> Selling Product </h1>
      <div className="flex flex-row gap-x-4 justify-center">
        <div className="">
          <img
            src="https://cdn-amz.woka.io/images/I/71rE0usMIAL.jpg"
            alt="NULL"
            className="object-cover w-[287px] h-[287px] rounded-lg"
            />
          <p className="mt-4 font-bold text-lg"> KEYBOARD </p>
        </div>

        <div className="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRwgIxVZxuDTLoZi3zffq8Qu39vOm5i6QVHY3x3WvNfg7oI_1B4NOxYL94HylbZDii6k&usqp=CAU"
            alt="NULL"
            className="object-cover w-[287px] h-[287px] rounded-lg"
          />
          <p className="mt-4 font-bold text-lg"> KEYCAP </p>
        </div>

        <div className="">
          <img
            src="https://bizweb.dktcdn.net/thumb/large/100/438/322/products/o1cn01vrgrqy1taoaq5grth-2212162815861-0-cib.jpg?v=1684298170000"
            alt="NULL"
            className="object-cover w-[287px] h-[287px] rounded-lg"
          />
          <p className="mt-4 font-bold text-lg"> ACCESSORIES </p>
        </div>

        <div className="">
          <img
            src="https://bizweb.dktcdn.net/thumb/large/100/438/322/products/3-1683975477800.jpg?v=1685356222000"
            alt="NULL"
            className="object-cover w-[287px] h-[287px] rounded-lg"
          />
          <p className="mt-4 font-bold text-lg"> SWITCH </p>
        </div>
      </div>
    </div>
  );
};
