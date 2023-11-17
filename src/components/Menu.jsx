import React from 'react';

const Menu = () => {
    return (
        <nav className="flex w-full justify-center">
            <ul className="flex">
                <li className="mr-6">
                    <a href="../LandingPage.jsx" className="text-gray-600 hover:text-gray-950 hover:underline">Home</a>
                </li>
                <li className="mr-6">
                    <a href="../catalogPage.jsx" className="text-gray-600 hover:text-gray-950 hover:underline">Catalog</a>
                </li>
                <li className="mr-6">
                    <a href="../cartPage.jsx" className="text-gray-600 hover:text-gray-950 hover:underline">Cart</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;