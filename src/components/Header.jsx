import React from 'react';
import Menu from './Menu';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-2 bg-white border-b border-slate-600">
            <div className="flex items-center pl-5">
                <img src="/fridge-logo.png" alt="Logo" className="h-10 mr-4 p-1" />
            </div>
            <Menu />
        </header>
    );
};

export default Header;