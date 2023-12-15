import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="flex w-full justify-center">
            <ul className="flex">
                <li className="mr-6">
                    <Link to="/">Home</Link>
                </li>
                <li className="mr-6">
                    <Link to="/catalog">Catalog</Link>
                </li>
                <li className="mr-6">
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;