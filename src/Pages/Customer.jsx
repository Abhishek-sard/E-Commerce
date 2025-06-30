import React from 'react'
import Customer1 from '../assets/Customer1.jpg';
import Customer2 from '../assets/Customer2.jpg';
import Customer3 from '../assets/Customer3.jpg';
import Customer4 from '../assets/Customer4.jpg';
import Customer5 from '../assets/Customer5.jpg';

const Customer = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Our Customers</h2>
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
        We value our customers and strive to provide the best service possible.
      </p>
        <div className="flex flex-wrap justify-center">
          <img src={Customer1} alt="Customer 1" className="w-1/3 p-2" />
          <img src={Customer2} alt="Customer 2" className="w-1/3 p-2" />
          <img src={Customer3} alt="Customer 3" className="w-1/3 p-2" />
          <img src={Customer4} alt="Customer 4" className="w-1/3 p-2" />
          <img src={Customer5} alt="Customer 5" className="w-1/3 p-2" />
        </div>
        <p className="text-center mt-4">
          We are committed to ensuring that our customers have a positive experience with our products and services.
        </p>
    </div>
  )
}

export default Customer
