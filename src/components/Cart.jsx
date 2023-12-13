import React, { useState } from "react";

const Cart = () => {
    const { numberOfCarts } = useState();

    if (numberOfCarts === 3) {
      return (
        <div className="w-1/3 px-2">
          <img src="/fridge-1.png" alt="Tile 1" className="h-44 mb-4" />
          <h2 className="font-bold mb-2">Tile 1 heading</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis.</p>
        </div>
      );
    } else {
      return (
        <div className="w-1/3 px-2">
          <img src="/fridge-1.png" alt="Tile 1" className="h-44 mb-4" />
          <h2 className="font-bold mb-2">Tile 1 heading</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis.</p>
        </div>
      );
    }
};

export default Cart;