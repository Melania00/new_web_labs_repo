import React from 'react';

const fridges = [
    {
      id: 1,
      name: 'Fridge 1',
      brand: 'Brand A',
      price: 25,
      imageUrl: '/catalog-fridge.jpg',
      description: 'Description for Product 1...',
    },
    
    {
      id: 2,
      name: 'Fridge 2',
      brand: 'Brand B',
      price: 20,
      imageUrl: '/catalog-fridge.jpg',
      description: 'Description for Fridge 2...',
    },
  ];

const Catalog = () => {
    return (
        <main>
        {filteredFridges.map((fridge) => (
          <div key={fridge.id}>
            <img src={fridge.imageUrl} alt={fridge.name} />
            <h3>{fridge.name}</h3>
            <p>{fridge.description}</p>
            <p>Brand: {fridge.brand}</p>
            <p>Price: ${fridge.price}</p>
            <button>View More</button>
          </div>
        ))}
      </main>
    );
};

export default Catalog;