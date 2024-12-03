import React from "react";

export default function RuleSetPage({ onNext, onPrevious }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">RuleSet</h2>
            <p>Create and manage rules for data matching and reconciliation.</p>
            <div className="flex space-x-2 mt-4">
                <button
                    onClick={onPrevious}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
