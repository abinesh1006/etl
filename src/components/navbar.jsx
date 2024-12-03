import React from 'react';

const NavBar = () => {
    return (
        <header className="fixed w-full bg-white shadow-md flex items-center justify-between p-4 z-20">
            <div className="flex items-center space-x-4">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8 text-white p-1 bg-indigo-500 rounded-full">
                    <circle cx="50" cy="50" r="50" fill="indigo" />
                    <text x="50" y="50" fill="white" fontSize="35"
                    fontWeight="bold" fontFamily="Arial" textAnchor="middle" dominantBaseline="middle">RP</text>
                </svg>
                <a className="text-black italic font-black no-underline hover:underline decoration-indigo-300 hidden lg:inline" href="/">
                        <span className="text-1xl pl-2"><i className="em em-grinning"></i>Refine Point</span>
                    </a>
               
            </div>
            <div className="flex items-center space-x-6">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-md p-2 text-sm"
                />
                <i className="fa-solid fa-user-circle text-xl"></i>
            </div>
        </header>
    );
};

export default NavBar;
