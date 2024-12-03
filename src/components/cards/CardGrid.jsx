import React, { useState } from 'react';
import Card from './Card';
const mockCards = [
    // Level 1 Cards
    { id: 1, theme: 'bg-red-200', stats: '50', level: 1, value: 100, maxLevel: 5 },
    { id: 2, theme: 'bg-blue-200', stats: '75', level: 1, value: 200, maxLevel: 5 },
    { id: 3, theme: 'bg-green-200', stats: '100', level: 1, value: 300, maxLevel: 5 },
    { id: 4, theme: 'bg-yellow-200', stats: '125', level: 1, value: 400, maxLevel: 5 },
    { id: 5, theme: 'bg-purple-200', stats: '150', level: 1, value: 500, maxLevel: 5 },
    { id: 6, theme: 'bg-pink-200', stats: '175', level: 1, value: 600, maxLevel: 5 },
    { id: 7, theme: 'bg-orange-200', stats: '200', level: 1, value: 700, maxLevel: 5 },
    { id: 8, theme: 'bg-teal-200', stats: '225', level: 1, value: 800, maxLevel: 5 },
    { id: 9, theme: 'bg-indigo-200', stats: '250', level: 1, value: 900, maxLevel: 5 },
    { id: 10, theme: 'bg-gray-200', stats: '275', level: 1, value: 1000, maxLevel: 5 },

    // Level 2 Cards
    { id: 11, theme: 'bg-red-300', stats: '50', level: 2, value: 110, maxLevel: 5 },
    { id: 12, theme: 'bg-blue-300', stats: '75', level: 2, value: 220, maxLevel: 5 },
    { id: 13, theme: 'bg-green-300', stats: '100', level: 2, value: 330, maxLevel: 5 },
    { id: 14, theme: 'bg-yellow-300', stats: '125', level: 2, value: 440, maxLevel: 5 },
    { id: 15, theme: 'bg-purple-300', stats: '150', level: 2, value: 550, maxLevel: 5 },
    { id: 16, theme: 'bg-pink-300', stats: '175', level: 2, value: 660, maxLevel: 5 },
    { id: 17, theme: 'bg-orange-300', stats: '200', level: 2, value: 770, maxLevel: 5 },
    { id: 18, theme: 'bg-teal-300', stats: '225', level: 2, value: 880, maxLevel: 5 },
    { id: 19, theme: 'bg-indigo-300', stats: '250', level: 2, value: 990, maxLevel: 5 },
    { id: 20, theme: 'bg-gray-300', stats: '275', level: 2, value: 1100, maxLevel: 5 },

    // Level 3 Cards
    { id: 21, theme: 'bg-red-400', stats: '50', level: 3, value: 120, maxLevel: 5 },
    { id: 22, theme: 'bg-blue-400', stats: '75', level: 3, value: 240, maxLevel: 5 },
    { id: 23, theme: 'bg-green-400', stats: '100', level: 3, value: 360, maxLevel: 5 },
    { id: 24, theme: 'bg-yellow-400', stats: '125', level: 3, value: 480, maxLevel: 5 },
    { id: 25, theme: 'bg-purple-400', stats: '150', level: 3, value: 600, maxLevel: 5 },
    { id: 26, theme: 'bg-pink-400', stats: '175', level: 3, value: 720, maxLevel: 5 },
    { id: 27, theme: 'bg-orange-400', stats: '200', level: 3, value: 840, maxLevel: 5 },
    { id: 28, theme: 'bg-teal-400', stats: '225', level: 3, value: 960, maxLevel: 5 },
    { id: 29, theme: 'bg-indigo-400', stats: '250', level: 3, value: 1080, maxLevel: 5 },
    { id: 30, theme: 'bg-gray-400', stats: '275', level: 3, value: 1200, maxLevel: 5 },

    // Level 4 Cards
    { id: 31, theme: 'bg-red-500', stats: '50', level: 4, value: 130, maxLevel: 5 },
    { id: 32, theme: 'bg-blue-500', stats: '75', level: 4, value: 260, maxLevel: 5 },
    { id: 33, theme: 'bg-green-500', stats: '100', level: 4, value: 390, maxLevel: 5 },
    { id: 34, theme: 'bg-yellow-500', stats: '125', level: 4, value: 520, maxLevel: 5 },
    { id: 35, theme: 'bg-purple-500', stats: '150', level: 4, value: 650, maxLevel: 5 },
    { id: 36, theme: 'bg-pink-500', stats: '175', level: 4, value: 780, maxLevel: 5 },
    { id: 37, theme: 'bg-orange-500', stats: '200', level: 4, value: 910, maxLevel: 5 },
    { id: 38, theme: 'bg-teal-500', stats: '225', level: 4, value: 1040, maxLevel: 5 },
    { id: 39, theme: 'bg-indigo-500', stats: '250', level: 4, value: 1170, maxLevel: 5 },
    { id: 40, theme: 'bg-gray-500', stats: '275', level: 4, value: 1300, maxLevel: 5 },

    // Level 5 Cards
    { id: 41, theme: 'bg-red-600', stats: '50', level: 5, value: 140, maxLevel: 5 },
    { id: 42, theme: 'bg-blue-600', stats: '75', level: 5, value: 280, maxLevel: 5 },
    { id: 43, theme: 'bg-green-600', stats: '100', level: 5, value: 420, maxLevel: 5 },
    { id: 44, theme: 'bg-yellow-600', stats: '125', level: 5, value: 560, maxLevel: 5 },
    { id: 45, theme: 'bg-purple-600', stats: '150', level: 5, value: 700, maxLevel: 5 },
    { id: 46, theme: 'bg-pink-600', stats: '175', level: 5, value: 840, maxLevel: 5 },
    { id: 47, theme: 'bg-orange-600', stats: '200', level: 5, value: 980, maxLevel: 5 },
    { id: 48, theme: 'bg-teal-600', stats: '225', level: 5, value: 1120, maxLevel: 5 },
    { id: 49, theme: 'bg-indigo-600', stats: '250', level: 5, value: 1260, maxLevel: 5 },
    { id: 50, theme: 'bg-gray-600', stats: '275', level: 5, value: 1400, maxLevel: 5 },
];
const CardGrid = () => {
    const [selectedTheme, setSelectedTheme] = useState('all');

    const handleThemeSelection = (theme) => {
        setSelectedTheme(theme);
    };

    const filteredCards = selectedTheme === 'all' ? mockCards : mockCards.filter(card => card.theme === selectedTheme);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg">
            <div className="w-full max-w-4xl p-6 md:p-8 bg-white rounded-lg shadow-lg relative max-h-[80vh] overflow-hidden">
        <div className="p-4 h-screen flex flex-col">
            <div className="flex justify-center mb-4">
                <button className="px-4 py-2 bg-gray-300 mr-2 rounded" onClick={() => handleThemeSelection('all')}>All</button>
                <button className="px-4 py-2 bg-red-300 mr-2 rounded" onClick={() => handleThemeSelection('bg-red-200')}>Red</button>
                <button className="px-4 py-2 bg-blue-300 mr-2 rounded" onClick={() => handleThemeSelection('bg-blue-200')}>Blue</button>
                <button className="px-4 py-2 bg-green-300 mr-2 rounded" onClick={() => handleThemeSelection('bg-green-200')}>Green</button>
                <button className="px-4 py-2 bg-yellow-300 rounded" onClick={() => handleThemeSelection('bg-yellow-200')}>Yellow</button>
            </div>
            <div className="scrollbar-hidden  max-h-[70vh] flex-grow overflow-auto pb-16"> {/* Add padding to the bottom */}
                <div className="scrollbar-hidden overflow-hidden grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Adjust gap for spacing */}
                    {filteredCards.map(card => (
                        <div key={card.id} className="flex justify-center items-center"> {/* Centering cards */}
                            <Card
                                id={card.id}
                                theme={card.theme}
                                stats={card.stats}
                                level={card.level}
                                value={card.value}
                                maxLevel={card.maxLevel}
                            />
                        </div>
                    ))}
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default CardGrid;