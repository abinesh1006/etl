// src/components/process/SummaryWidget.js
import React from 'react';

const SummaryWidget = ({ summary }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-4">Summary</h3>
            <ul className="space-y-2">
                {Object.entries(summary).map(([cause, value], index) => (
                    <li key={index}>
                        <strong>{cause}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SummaryWidget;
