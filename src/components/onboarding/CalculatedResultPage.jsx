import React from "react";

export default function CalculatedResultPage({ onPrevious }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Calculated Result</h2>
            <p>Review and analyze the calculated results of the reconciliation process.</p>
            <div className="flex space-x-2 mt-4">
                <button
                    onClick={onPrevious}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Back
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Finish
                </button>
            </div>
        </div>
    );
}
