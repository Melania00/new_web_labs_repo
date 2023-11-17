import React from 'react';

const Description = () => {
    return (
        <section className="flex my-9">
            <div className="w-1/3 px-2">
                <img src="/fridge-heading.png" alt="Header" className="h-72 w-auto" />
            </div>
            <div className="w-2/3 px-2">
                <h1 className="text-3xl font-bold mb-2">Welcome to "Cool Haven" – Your Ultimate Fridge Destination!</h1>
                <p className="pt-8">Step into a world of refrigeration excellence at Cool Haven, where innovation meets chilling perfection. Our fridge store is not just a place to shop; it's an experience that transforms the way you think about keeping things cool. Explore a curated selection of top-of-the-line refrigerators that marry cutting-edge technology with sleek design, creating the perfect harmony for your kitchen.</p>
            </div>
        </section>
    );
};

export default Description;