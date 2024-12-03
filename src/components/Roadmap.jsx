import React from 'react';
import './App.css'; // Ensure to import your custom styles if needed

// Add a "completed" property to indicate completed quarters
const roadmapData = [
    {
        month: 'March 2024',
        items: ['Basic game', 'Mining updates', 'Earn tasks'],
        completed: true, // Mark as completed
    },
    {
        month: 'April 2024',
        items: ['Referral system', 'LVL ratings', 'Daily rewards'],
        completed: true, // Mark as completed
    },
    {
        month: 'May 2024',
        items: ['Special cards', 'Daily Combo', '«Partner» blockchain announcement'],
        completed: false,
    },
    {
        month: 'June 2024',
        items: [
            'On-chain infrastructure development',
            'Wallet in-game implementation',
            'Web 3 pre-listing Quest',
        ],
        completed: false,
    },
    {
        month: 'July 2024',
        items: ['TGE', 'Token in-game utility launch'],
        completed: false,
    },
    {
        month: 'Q3 2024',
        items: ['Squad Kombat', 'Characters and skins', 'Time limited events', 'Live events'],
        completed: false,
    },
];

const Roadmap = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg">
            <div className="w-full max-w-4xl p-6 md:p-8 bg-white rounded-lg shadow-lg relative max-h-[80vh] overflow-hidden">
                <div className="flex flex-col gap-6 max-h-[80vh] overflow-y-auto scrollbar-hidden pb-12 rounded-lg">
                    {roadmapData.map((entry, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center p-4 ${entry.completed ? 'border-l-8 border-green-500' : 'border-l-16'
                                } ${entry.completed ? 'bg-blue-700' : 'bg-blue-600'
                                } rounded-lg`}
                        >
                            <div
                                className={`flex items-center justify-center text-2xl  ${entry.completed ? 'bg-blue-800' : 'bg-blue-600' } font-bold text-white p-4 rounded-lg shadow-md flex-shrink-0`}
                                style={{ width: '170px', height: '130px', minHeight:'130px' }} // Fixed size for the month block
                            >
                                {entry.month}
                            </div>
                            <div
                                className={`flex-1 md:ml-4 mt-4 md:mt-0 p-4 ${entry.completed ? 'bg-blue-300' : 'bg-cyan-100'
                                    } rounded-lg shadow-md flex items-center justify-center`}
                                style={{ height: '130px', width: '100%', minHeight: '130px',maxWidth: 'calc(100% - 40px)' }} // Ensure consistent size for item blocks
                            >
                                <ul className="list-none space-y-2 text-center">
                                    {entry.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-lg">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
       </div>
    );
};

export default Roadmap;
