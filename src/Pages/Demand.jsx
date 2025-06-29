import React from 'react'

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
        <div className="bg-white rounded-lg shadow-lg p-4 w-72 h-90">
          <img src="https://via.placeholder.com/150" alt="product" className="w-full rounded" />
          <div className="p-2">
            <h2 className="text-xl font-bold">Product Name</h2>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-700 font-semibold">Price: $100</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-72">
          <img src="https://via.placeholder.com/150" alt="product" className="w-full rounded" />
          <div className="p-2">
            <h2 className="text-xl font-bold">Product Name</h2>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-700 font-semibold">Price: $100</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-72">
          <img src="https://via.placeholder.com/150" alt="product" className="w-full rounded" />
          <div className="p-2">
            <h2 className="text-xl font-bold">Product Name</h2>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-700 font-semibold">Price: $100</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demand;
