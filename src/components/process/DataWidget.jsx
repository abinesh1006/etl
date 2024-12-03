// src/components/process/DataWidget.js
import React from 'react';

const DataWidget = ({ data }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-4">Data</h3>
            <table className="w-full text-sm text-gray-700">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2">Run ID</th>
                        <th className="px-4 py-2">Record ID</th>
                        <th className="px-4 py-2">Match ID</th>
                        <th className="px-4 py-2">Match Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-4 py-2">{row.runId}</td>
                            <td className="px-4 py-2">{row.recordId}</td>
                            <td className="px-4 py-2">{row.matchId}</td>
                            <td className="px-4 py-2">{row.matchStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataWidget;
