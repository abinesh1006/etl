// src/components/process/ProcessWidget.js
import React from 'react';

const ProcessWidget = ({ processes }) => {
    return (
        <div className="widget bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">All Processes</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Process Code</th>
                        <th className="text-left">Duration</th>
                        <th className="text-left">Status</th>
                        <th className="text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {processes.map((process) => (
                        <tr key={process.id}>
                            <td>{process.id}</td>
                            <td>{process.duration}</td>
                            <td>{process.status}</td>
                            <td>
                                <button className="text-blue-600">Settings</button>
                                <button className="text-red-600 ml-4">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProcessWidget;
