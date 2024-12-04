import React from "react";

export default function OutputStage() {
    return (
        <div className="max-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6 py-12">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-indigo-700">
                        Export Processed Data
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Your data has been processed successfully! Choose a format to download.
                    </p>
                </div>

                {/* File Summary */}
                <div className="bg-gray-50 border rounded-lg p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800">
                        File Summary
                    </h2>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        <li><strong>File Name:</strong> transformed_data.csv</li>
                        <li><strong>Records Processed:</strong> 15,230</li>
                        <li><strong>Last Updated:</strong> Dec 3, 2024</li>
                    </ul>
                </div>

                {/* Export Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-400">
                        Export as CSV
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:ring-2 focus:ring-green-400">
                        Export as Excel
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:ring-2 focus:ring-blue-400">
                        Export as JSON
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:ring-2 focus:ring-yellow-400">
                        Export as XML
                    </button>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:ring-2 focus:ring-purple-400">
                        Export as PDF
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:ring-2 focus:ring-red-400">
                        Export as TXT
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Need help? <a href="#" className="text-indigo-600 hover:underline">Contact Support</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
