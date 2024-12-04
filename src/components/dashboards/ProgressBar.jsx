import React from "react";

const ProgressBar = ({ label, percentage, color }) => {
    return (
        <div className="mb-4">
            <div className="text-sm font-semibold mb-1">{label}</div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`absolute h-full ${color} rounded-full`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
