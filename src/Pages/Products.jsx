import React from "react";
import Chicken1 from '../assets/chicken1.jpg';
import Combos from '../assets/combos.jpg';
import Egg from '../assets/Eggs.jpg'
import FishandSeaFood from '../assets/Fishandseafood.jpg';
import HeatandEat from '../assets/heatandEat.jpg';
import Kidsfavourites from '../assets/kidsfavourites.jpg';
import Licious from '../assets/LiciousSpecials.jpg';
import Liver from '../assets/LiverandMOre.jpg';
import Mutton from '../assets/mutton.jpg';
import Pork from '../assets/pork.jpg';
import PrawansCrab from '../assets/prawansCrab.jpg';
import Ready from '../assets/Readytoeat.jpg';
import Soup from '../assets/soup.jpg';
import Chicken from '../assets/chicken.jpg'
import Soup1 from '../assets/soup1.jpg';

const Products = () => {
  
  const images = [
    { id: 1, src: Chicken1, alt: "Fresh Chicken", text: "Fresh Chicken" },
    { id: 2, src: Combos, alt: "Meal Combos", text: "Meal Combos" },
    { id: 3, src: Egg, alt: "Egg Products", text: "Egg Products" },
    { id: 4, src: FishandSeaFood, alt: "Fish & Seafood", text: "Fish & Seafood" },
    { id: 6, src: HeatandEat, alt: "Heat & Eat", text: "Heat & Eat" },
    { id: 7, src: Kidsfavourites, alt: "Kids Favorites", text: "Kids Favorites" },
    { id: 8, src: Licious, alt: "Licious Specials", text: "Licious Specials" },
    { id: 9, src: Liver, alt: "Liver & More", text: "Liver & More" },
    { id: 10, src: Mutton, alt: "Mutton", text: "Mutton" },
    { id: 11, src: Pork, alt: "Pork", text: "Pork" },
    { id: 12, src: PrawansCrab, alt: "Prawns & Crab", text: "Prawns & Crab" },
    { id: 13, src: Ready, alt: "Ready to Eat", text: "Ready to Eat" },
    { id: 14, src: Soup, alt: "Soup", text: "Soup" },
    { id: 15, src: Chicken, alt: "Chicken Varieties", text: "Chicken Varieties" },
    { id: 16, src: Soup1, alt: "Soup Varieties", text: "Soup Varieties" },
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