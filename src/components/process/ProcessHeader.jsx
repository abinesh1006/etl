import React from "react";

const ProcessHeader = ({ processName, onSettingsClick }) => {
    return (
        <div className="bg-white shadow-md p-4">
            {/* Process Name */}
            <h1 className="text-2xl font-semibold text-gray-900 flex items-center space-x-2">
                <i className="fas fa-cogs text-blue-600"></i>
                <span>{processName}</span>
            </h1>

            {/* Navigation and Settings */}
            <div className="flex justify-between items-center mt-4 relative">
                {/* Navigation Buttons */}
                <div className="flex space-x-4 items-center">
                    <button className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm">
                        <i className="fas fa-eye mr-1"></i> Overview
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm">
                        <i className="fas fa-history mr-1"></i> History
                    </button>

                    {/* Submit New Data Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm">
                            <i className="fas fa-upload mr-1"></i> Submit New Data
                        </button>
                        <div className="absolute hidden group-hover:flex flex-col bg-white border rounded shadow-lg mt-1 z-10 w-48">
                            <button className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-100">
                                <i className="fas fa-file-upload mr-2"></i> Upload File
                            </button>
                            <button className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-100">
                                <i className="fas fa-redo-alt mr-2"></i> Reuse Previous Data
                            </button>
                        </div>
                    </div>

                    {/* Downloads Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm">
                            <i className="fas fa-download mr-1"></i> Downloads
                        </button>
                        <div className="absolute hidden group-hover:flex flex-col bg-white border rounded shadow-lg mt-1 z-10 w-48">
                            <button className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-100">
                                <i className="fas fa-file-alt mr-2"></i> All Trades
                            </button>
                            <button className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-100">
                                <i className="fas fa-chart-bar mr-2"></i> Breaks Only
                            </button>
                            <button className="text-sm text-gray-700 px-3 py-1 hover:bg-gray-100">
                                <i className="fas fa-table mr-2"></i> Current View
                            </button>
                        </div>
                    </div>
                </div>

                {/* Settings Button */}
                <button
                    onClick={onSettingsClick}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200"
                >
                    <i className="fas fa-cog text-xl"></i>
                </button>
            </div>

            {/* Horizontal Rule */}
            <hr className="mt-4 border-gray-200" />
        </div>
    );
};

export default ProcessHeader;
