// ProcessWidget.js
import React from 'react';

// Utility function to calculate progress percentage
const calculateProgress = (submittedTime, averageTime) => {
    const currentTime = new Date();
    const submittedDate = new Date(submittedTime);
    const elapsedTime = (currentTime - submittedDate) / (1000 * 60); // Convert to minutes
    const progress = Math.min((elapsedTime / averageTime) * 100, 100); // Ensure progress doesn't exceed 100%
    return progress;
};

const ProcessWidget = ({ status, data }) => {
    const { totalCount, data: processes } = data;

    // Render the progress bar for each process
    const renderProgressBar = (process) => {
        const { processCode, runNumber, submittedTime, averageTime, completedTime } = process;
        const progress = calculateProgress(submittedTime, averageTime);

        // Calculate the estimated completion time
        const estimatedCompletionTime = new Date(new Date(submittedTime).getTime() + averageTime * 60000);

        return (
            <div key={runNumber} className="p-4 mb-4 border rounded-md shadow-md bg-gray-100">
                <p><strong>Process Code:</strong> {processCode}</p>
                <p><strong>Run Number:</strong> {runNumber}</p>
                <p><strong>Submitted Time:</strong> {new Date(submittedTime).toLocaleString()}</p>
                <p><strong>Average Time:</strong> {averageTime} mins</p>
                <div className="progress-bar-container">
                    <div className="w-full bg-gray-300 h-4 rounded-full">
                        <div
                            className="progress h-4 rounded-full"
                            style={{ width: `${progress}%`, backgroundColor: progress === 100 ? 'green' : 'blue' }}
                        />
                    </div>
                    <p className="text-sm mt-1">Progress: {Math.round(progress)}%</p>
                </div>
                {!completedTime && (
                    <p><strong>Estimated Completion:</strong> {estimatedCompletionTime.toLocaleString()}</p>
                )}
            </div>
        );
    };

    return (
        <div className="widget p-4 border rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-center">{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
            <p className="text-center mt-2">Total {status.charAt(0).toUpperCase() + status.slice(1)}: {totalCount}</p>
            <div className="mt-4">
                {processes.map((process) => renderProgressBar(process))}
            </div>
        </div>
    );
};

export default ProcessWidget;
