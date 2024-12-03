import React from 'react';

const RunHistoryWidget = ({ runHistory, onRunSelect }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Run History</h3>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="p-2 border border-gray-300">Run ID</th>
                        <th className="p-2 border border-gray-300">Run Date</th>
                        <th className="p-2 border border-gray-300">Status</th>
                        <th className="p-2 border border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {runHistory.map((run, index) => (
                        <tr
                            key={run.id}
                            className={`text-gray-700 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                }`}
                        >
                            <td className="p-2 border border-gray-300">{run.id}</td>
                            <td className="p-2 border border-gray-300">{run.date}</td>
                            <td className={`p-2 border border-gray-300 font-semibold ${run.status === 'Completed'
                                    ? 'text-green-500'
                                    : run.status === 'Failed'
                                        ? 'text-red-500'
                                        : 'text-yellow-500'
                                }`}>
                                {run.status}
                            </td>
                            <td className="p-2 border border-gray-300">
                                <button
                                    onClick={() => onRunSelect(run.id)}
                                    className="text-blue-500 underline hover:text-blue-700"
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RunHistoryWidget;
