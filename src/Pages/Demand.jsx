import React from "react";
import Soup1 from "../assets/soup1.jpg";
import Chicken from "../assets/chicken.jpg";
import Pork from "../assets/pork.jpg";

const Demand = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      {/* Top Title */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-4xl font-bold text-center">Top Demand</h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-72 ">
          <img src={Pork} alt="product" className="w-full rounded" />
          <div className="p-2">
            <h2 className="text-xl font-bold">Chicken Soup</h2>
            <p className="text-gray-500">
              t’s a hearty Italian classic that eats like a full meal. It’s
              goodness a bowl, perfect for chilly nights.
            </p>
            <p className="text-gray-700 font-semibold">Price: Rs. 100</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-72">
          <img src={Chicken} alt="product" className="w-full rounded" />
          <div className="p-2">
            <h2 className="text-xl font-bold">Chicken</h2>
            <p className="text-gray-500">
              Baked, fried, grilled, stewed or in soups or pasta – however you
              like your chicken lunches and dinners, you know they're going to
              be easy...{" "}
            </p>
            <p className="text-gray-700 font-semibold">Price: Rs. 500</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-72">
          <img src={Pork} alt="product" className="w-full rounded" />
          <div className="p-2">
            <h2 className="text-xl font-bold">Pork</h2>
            <p className="text-gray-500">
              {" "}
              This timeless stuffed pork loin recipe offers ingredient
              flexibility with seasonal suggestions for herbs, meat, and
              vegetables.
            </p>
            <p className="text-gray-700 font-semibold">Price: Rs. 300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demand;
