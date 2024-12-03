import React from 'react';

const ProgressBar = ({ currentPoints }) => {
    // Calculate percentage of points remaining
    const percentage = (currentPoints / 1000) * 100;

    // Determine color based on percentage
    let colorClass;
    if (percentage <= 20) {
        colorClass = 'bg-red-600';
    } else if (percentage >= 80) {
        colorClass = 'bg-green-600';
    } else if (percentage < 50) {
        colorClass = 'bg-orange-400';
    } else {
        colorClass = 'bg-orange-600';
    }

    return (
        <div className="mt-4 relative w-full h-6 rounded-full overflow-hidden">
            <div
                className={`absolute top-0 left-0 h-full transition-all duration-300 ${colorClass}`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
