import React from "react";

const Cart = ({ numberOfCarts }) => {
  const carts = [];

  for (let i = 0; i < numberOfCarts; i++) {
    // Render cart items based on numberOfCarts
    carts.push(
      <div key={i} className="w-1/3 px-2">
        <img src={`/fridge-${i + 1}.png`} alt={`Tile ${i + 1}`} className="h-44 mb-4" />
        <h2 className="font-bold mb-2">Tile {i + 1} heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo
          sagittis.
        </p>
      </div>
    );
  }

  return <div className="flex flex-wrap">{carts}</div>;
};

export default Cart;
