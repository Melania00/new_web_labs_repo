import React, { useState } from "react";
import Description from "../components/Description";
import Cart from "../components/Cart";

const LandingPage = () => {
  const [numberOfCarts, setNumberOfCarts] = useState(3);

  return (
    <main className="p-5">
      <Description />
      <Cart numberOfCarts={numberOfCarts} />

      <section>
        <div className="flex justify-center mt-12">
          {numberOfCarts === 3 ? (
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded"
              onClick={() => setNumberOfCarts(4)}
            >
              View more
            </button>
          ) : (
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded"
              onClick={() => setNumberOfCarts(3)}
            >
              View less
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
