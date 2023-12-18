import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addToCart, calculateTotalAmount } from "../redux/fridgesCarts";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.itemsInCart); // Get items from Redux
  const [fridges, setFridges] = useState([]); // Keep a local state for modified cart

  useEffect(() => {
    if (items && items.length) {
      setFridges(
        items.map((item) => {
          return { ...item, quantity: 1 };
        })
      );
    }
  }, [items]);

  const setFridgeQuantity = (index, newQuantity) => {
    const updatedFridges = [...fridges];
    updatedFridges[index].quantity = newQuantity;
    setFridges(updatedFridges);
    dispatch(calculateTotalAmount());
  };


  return (
    <div className="container mx-auto mr-10 ">
      <h1 className="text-3xl font-bold mb-2 text-center">Shoping Cart</h1>
      {fridges.length ? (
        fridges.map((fridge, index) => (
          <div key={fridge.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center">
              <p className="text-gray-700 mr-4">{fridge.name}</p>
              <p className="text-gray-500">Price: ${fridge.price}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() =>
                  setFridgeQuantity(
                    index,
                    Math.max(fridge.quantity - 1, 1) // Ensure quantity doesn't go below 1
                  )
                }
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2"
              >
                -
              </button>
              <span className="mr-2">{fridge.quantity}</span>
              <button
                onClick={() => setFridgeQuantity(index, fridge.quantity + 1)}
                className="bg-green-500 text-white px-3 py-1 rounded-full"
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-4">No items in your cart.</p>
      )}

      {fridges.length > 0 && (
        <div className="flex justify-end">
          <h4 className="mt-4">
            Total amount: $
            {fridges.reduce(
              (total, fridge) => total + fridge.price * fridge.quantity,
              0
            )}
          </h4>
        </div>
      )}


      <div className="buttons2 flex">
        <NavLink className="inline-block bg-gray-800 text-white font-bold rounded-md px-4 py-2 mt-4 border mr-10 mb-6" to="/catalog">
          Back To Catalog
        </NavLink>
        <NavLink className="inline-block bg-gray-800 text-white font-bold rounded-md px-4 py-2 mt-4 border mr-10 mb-6" to="/checkout">
          Continue
        </NavLink>
      </div>
    </div>
  );
};

export default CartPage;
