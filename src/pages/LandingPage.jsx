import React from 'react';
import Description from '../components/Description';
import Cart from '../components/Cart';

const LandingPage = () => {
    return (
        <main className="p-5">
            <Description />
            <section className="flex mb-8 mt-10">
                <Cart />
                <Cart />
                <Cart />
            </section>

            <section>
                <div className="flex justify-center mt-12">
                    <button className="bg-gray-800 text-white py-2 px-4 rounded">View more</button>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;