import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaStar, FaHeart, FaCog, FaGem } from 'react-icons/fa'; // Import different icons as needed

const Card = ({ id, theme, stats, level, value, maxLevel }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [cardValue, setCardValue] = useState(value);
    const [currentLevel, setCurrentLevel] = useState(level);

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleUpgrade = (event) => {
        event.stopPropagation(); // Prevents the click event from bubbling up
        if (currentLevel < maxLevel) {
            const upgradeCost = Math.round(cardValue * 1.3);
            setCardValue(upgradeCost);
            setCurrentLevel(currentLevel + 1);
            handleDialogClose(); // Close the dialog after upgrade
        }
    };

    const handleOverlayClick = (event) => {
        event.stopPropagation(); // Prevents the overlay click event from closing the dialog
    };

    // Icon selection logic
    const icons = [<FaStar />, <FaHeart />, <FaCog />, <FaGem />];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    return (
        <div
            className={`flex flex-col ${theme} rounded-lg shadow-lg cursor-pointer`}
            style={{ width: '300px', height: '250px', overflow: 'hidden' }} // Adjust width and height
            onClick={handleDialogOpen}
        >
            {/* Icon Section */}
            <div className="flex-none w-full bg-gray-100 flex items-center justify-center p-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-4xl">{randomIcon}</span> {/* Display the icon */}
                </div>
            </div>

            {/* Details Section */}
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div className="flex flex-col text-center">
                    <h3 className="text-lg font-bold mb-2">Card {id}</h3>
                    <p className="text-sm mb-1">Stats: {stats}</p>
                    <p className="text-sm mb-4">Level: {currentLevel}</p>
                </div>

                {/* Progress Bar */}
                <div className="mt-auto flex flex-col items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div
                            className="bg-blue-200 h-full rounded-full"
                            style={{ width: `${(currentLevel / maxLevel) * 100}%` }}
                        ></div>
                    </div>
                    <p className="text-sm">Level {currentLevel} / {maxLevel}</p>
                    <p className="text-sm text-blue-600">Upgrade Cost: {Math.round(cardValue * 1.3)}</p>
                </div>
            </div>

            <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                <div
                    className="fixed inset-0 bg-black/30 flex items-center justify-center"
                    onClick={handleOverlayClick} // Handle overlay click
                >
                    <div className="bg-white p-4 rounded shadow-lg">
                        <Dialog.Title className="text-lg font-bold">Upgrade Card {id}</Dialog.Title>
                        <Dialog.Description className="mt-2">
                            Upgrade cost: <strong>{Math.round(cardValue * 1.3)}</strong>
                        </Dialog.Description>
                        <button
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={handleUpgrade} // Handle upgrade click
                            disabled={currentLevel >= maxLevel} // Disable if max level is reached
                        >
                            Upgrade
                        </button>
                        <button
                            className="mt-4 bg-gray-600 text-white px-4 py-2 rounded ml-2"
                            onClick={handleDialogClose} // Close button click
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Card;
