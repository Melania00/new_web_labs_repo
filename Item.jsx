import React, { useState } from "react";
import { fridges } from "../constants";
import { useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [fridge] = useState(fridges.find((fridge) => fridge.id === +id));
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    const selectedQuantity = parseInt(event.target.value);
    setQuantity(selectedQuantity >= 1 ? selectedQuantity : 1); // Ensure minimum quantity is 1
  };

  // Calculate the total price based on quantity
  const totalPrice = (fridge.price * quantity).toFixed(2);

  return (
    <section className="flex my-9">
      <div className="w-1/3 px-2">
        <img src={fridge.imageUrl} alt={fridge.name} />
      </div>
      <div className="w-2/3 px-2">
        <h1 className="product-title mt-5 text-gray-700 font-bold">{fridge.name}</h1>
        <div className="product-details">
          <p className="product-description mt-7">{fridge.description}</p>
          <div className="flex items-center mt-10">
            <babel htmlFor="quantity" className="text-gray-700 font-bold mr-2">
              Quantity:
            </babel>
            <select
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="border px-2 py-1 mr-3"
            >

              {[...Array(10).keys()].map((value) => (
                <option key={value + 1} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
            <p className="ml-3 text-gray-700 font-bold">Total Price: {totalPrice}$</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
