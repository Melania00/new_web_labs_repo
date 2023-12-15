import React, { useState } from "react";
import Item from "../components/Item";
import { fridges } from "../constants";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CatalogItemPage = () => {
  const { id } = useParams();
  const [fridge] = useState(fridges.find(fridge => fridge.id === +id));

  return (
    <div>
      <Item />
      <div className="product-price-and-actions flex justify-between items-center">
        <span className="product-price text-gray-700 font-bold">Price: {fridge.price}$</span>
        <div className="flex">
          <Link
            className="inline-block text-gray font-bold rounded-md px-4 py-2 mt-4 border mr-10 mb-6"
            to={`/catalog`}>
            Go Back
          </Link>
          <Link
            className="inline-block bg-gray-800 text-white font-bold rounded-md px-4 py-2 mt-4 border mr-10 mb-6"
            to={`/cart`}>
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogItemPage;
