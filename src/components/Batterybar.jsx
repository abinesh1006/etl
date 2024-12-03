import React from 'react';

const BatteryBar = ({ currentPoints }) => {
    const levels = [
        { maxPoints: 1000, name: 'L1', color: 'bg-red-600' },          // Level 1: 0 - 1000 points (Red)
        { maxPoints: 10000, name: 'L2', color: 'bg-yellow-400' },      // Level 2: 1001 - 10000 points (Yellow)
        { maxPoints: 100000, name: 'L3', color: 'bg-green-600' },      // Level 3: 10001 - 100000 points (Green)
        { maxPoints: Infinity, name: 'L4', color: 'bg-gray-400' },     // Level 4: 100001+ points (Gray)
    ];

    let currentLevel = 0;
    for (let i = 0; i < levels.length; i++) {
        if (currentPoints <= levels[i].maxPoints) {
            currentLevel = i + 1;
            break;
        }
    }

    const levelName = levels[currentLevel - 1].name;
    const maxPoints = levels[currentLevel - 1].maxPoints;

    // Calculate percentage of available points
    const percentage = (currentPoints / maxPoints) * 100;

    // Fixed width and padding of the bar in pixels
    const barWidth = 100; // Adjust as needed
    const paddingSize = 4; // Adjust padding size as needed

    return (
        <div className="flex items-center">
            <div className="relative w-20 h-3 mr-2 border border-black rounded-lg overflow-hidden"> {/* Fixed width and padding */}
                <div className="absolute top-0 left-0 h-full w-full" style={{ padding: `0 ${paddingSize}px` }}>
                    <div className={`absolute top-0 left-0 h-full ${levels[currentLevel - 1].color}`} style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-xs font-semibold">{`L${currentLevel}`}</span> {/* Use L1, L2, L3, etc. based on current level */}
                <span className="text-xs">{`Points: ${currentPoints}`}</span>
            </div>
        </div>
    );
};

export default BatteryBar;
