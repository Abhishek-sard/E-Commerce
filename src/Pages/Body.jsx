import React from "react";
import Cover from "../assets/cover.jpg";

const Body = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover opacity-70" src={Cover} />
        <div className="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
      </div>
      <div className="relative max-w-7*1 mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4*1 font-extrabold tracking-tight text-white sm:text-5*1 lg:text-6*1">
            HANDMADE HEAVENLY COOKIE BOXES
          </h1>
          <P>SAN FRANCISCO SINCE 2035</P>
          <div className="mt-10">
            <a href="/shop">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                SHOP NOW
              </button>
            </a>
          </div>
        </div>
        <a href="/shop"></a>
      </div>
    </div>
  );
};

export default Body;
