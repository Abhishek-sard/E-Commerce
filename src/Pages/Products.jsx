import React from "react";
import Chicken1 from  '../assets/chicken1.jpg';

const Products = () => {
  
  const images = [
    { id: 1, src:  Chicken1 , alt: "Image 1", text: "Chicken" },
    { id: 2, src: {  }, alt: "Image 2", text: "Product 2" },
    { id: 3, src: { }, alt: "Image 3", text: "Product 3" },
    { id: 4, src: { }, alt: "Image 4", text: "Product 4" },
    { id: 5, src: { }, alt: "Image 5", text: "Product 5" },
    { id: 6, src: { }, alt: "Image 6", text: "Product 6" },
    { id: 7, src: { }, alt: "Image 7", text: "Product 7" },
    { id: 8, src: { }, alt: "Image 8", text: "Product 8" },
    { id: 9, src: { }, alt: "Image 9", text: "Product 9" },
    { id: 10, src:{ }, alt: "Image 10", text: "Product 10" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      
      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center gap-2">
            {/* Circular Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-full w-24 h-24 object-cover border-2 border-gray-300 shadow-md hover:scale-105 transition-transform"
            />
            {/* Text Below Image */}
            <p className="text-center font-medium text-gray-800">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;