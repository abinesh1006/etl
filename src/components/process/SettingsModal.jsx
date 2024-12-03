import React from 'react';

const SettingsModal = ({ onClose }) => {
    const settingsOptions = [
        'Data Input Field',
        'Match Field',
        'Filter Rules',
        'Rule and Rule Sets',
        'Calculated Result',
        'Workflow Rules',
        'General Configuration',
        'Notifications',
        'Carryover',
    ];

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Settings</h2>
                <ul className="space-y-2">
                    {settingsOptions.map((option, index) => (
                        <li
                            key={index}
                            className="bg-gray-100 p-2 rounded hover:bg-gray-200 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SettingsModal;
