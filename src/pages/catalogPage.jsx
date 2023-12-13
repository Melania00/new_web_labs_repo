import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fridges } from "../constants";

const CatalogPage = () => {
  const [filteredFridges, setFilteredFridges] = useState(fridges);
  const [brandFilter, setBrandFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const applyFilters = () => {
    let updatedFridges = [...fridges];

    if (brandFilter) {
      updatedFridges = updatedFridges.filter((fridge) =>
        fridge.brand.toLowerCase().startsWith(brandFilter.toLowerCase())
      );
    }

    if (priceFilter) {
      updatedFridges = updatedFridges.filter(
        (fridge) => fridge.price <= parseInt(priceFilter)
      );
    }

    setFilteredFridges(updatedFridges);
  };

  return (
    <div>
      <header>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Brand"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />

          <button
            class="inline-block text-gray font-bold rounded-md px-4 py-2 mt-4 border"
            onClick={applyFilters}
          >Apply
          </button>
        </div>
      </header>

      <main class="grid grid-cols-4 gap-4">
        {filteredFridges.map((fridge) => (
          <div class="bg-gray-100 rounded-md shadow-sm p-4">
            <img
              src={fridge.imageUrl}
              alt="Card image"
              class="rounded-t-md h-48 w-full object-contain"
            />
            <h3 class="text-lg font-bold mt-4">{fridge.name}</h3>
            <p class="text-gray-600">{fridge.description}</p>
            <p>
              <span class="text-gray-700 font-bold text-right">
                Price: ${fridge.price}
              </span>
            </p>
            <p>
              <span class="text-gray-700 font-bold text-right">
                Brand: {fridge.brand}
              </span>
            </p>
            <div className="flex items-center justify-center">
              <Link class="inline-block bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2 mt-4" to={`/catalog/${fridge.id}`}>
                View More
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CatalogPage;

// <div key={fridge.id}>
//   <img src={fridge.imageUrl} alt={fridge.name} />
//   <h3>{fridge.name}</h3>
//   <p>{fridge.description}</p>
//   <p>Brand: {fridge.brand}</p>
//   <p>Price: ${fridge.price}</p>
//   <button>View More</button>
// </div>
