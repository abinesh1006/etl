import React from "react";

const LeftSidebar = ({ breaksData, matchingData }) => {
    // Define a map for the colors based on keys for Break Management
    const breakColors = {
        AllBreaks: "text-gray-600 bg-gray-200",
        Unreviewed: "text-orange-600 bg-orange-100",
        Pending: "text-yellow-600 bg-yellow-50",
        Closed: "text-green-600 bg-green-50",
        Error: "text-red-600 bg-red-50",
    };

    // Define a map for the colors based on keys for Matching
    const statusColors = {
        AutoMatched: "text-green-600 bg-green-50",
        PartialMatched: "text-yellow-600 bg-yellow-50",
        UnMatched: "text-red-600 bg-red-50",
        Filtered: "text-gray-600 bg-gray-100",
        Error: "text-red-600 bg-red-50",
    };

    return (
        <div className="bg-gray-100 p-4 w-1/6 flex flex-col space-y-8 shadow-lg rounded-lg h-full">
            {/* Break Management */}
            <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                    Break Management
                </h2>
                <ul className="space-y-2">
                    {Object.entries(breaksData).map(([key, value]) => (
                        <li
                            key={key}
                            className={`flex justify-between items-center shadow rounded-lg p-2 hover:shadow-md ${breakColors[key] || "bg-white text-gray-700"
                                }`}
                        >
                            <span className="font-medium text-sm capitalize">
                                {key.replace(/([A-Z])/g, " $1")}
                            </span>
                            <span className="font-semibold">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Matching */}
            <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                    Matching
                </h2>
                <ul className="space-y-2">
                    {Object.entries(matchingData).map(([key, value]) => (
                        <li
                            key={key}
                            className={`flex justify-between items-center shadow rounded-lg p-2 hover:shadow-md ${statusColors[key] || "bg-white text-gray-700"
                                }`}
                        >
                            <span className="font-medium text-sm capitalize">
                                {key.replace(/([A-Z])/g, " $1")}
                            </span>
                            <span className="font-semibold">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;
