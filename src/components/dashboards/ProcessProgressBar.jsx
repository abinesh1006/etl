import React from 'react';

const getStatusColor = (status) => {
    switch (status) {
        case 'Queued':
            return 'bg-yellow-500'; // Custom color for Queued
        case 'InProgress':
            return 'bg-blue-500'; // Custom color for InProgress
        case 'Validation':
            return 'bg-green-500'; // Custom color for Validation
        case 'Completed':
            return 'bg-green-600'; // Custom color for Completed
        case 'Failure':
            return 'bg-red-600'; // Custom color for Failure
        default:
            return 'bg-gray-300';
    }
};

// Calculate the progress based on submitted time and average time
const calculateProgress = (submittedTime, averageTime) => {
    const currentTime = new Date();
    const submittedTimeDate = new Date(submittedTime);
    const timeElapsed = (currentTime - submittedTimeDate) / 1000; // Time in seconds
    const totalTime = averageTime * 60; // Convert average time to seconds
    const progress = Math.min((timeElapsed / totalTime) * 100, 100); // Ensure the progress does not exceed 100%

    return progress;
};

// Calculate estimated completion time
const calculateEstimatedCompletion = (submittedTime, averageTime) => {
    const submittedTimeDate = new Date(submittedTime);
    const completionTime = new Date(submittedTimeDate.getTime() + averageTime * 60 * 1000); // Adding average time in minutes
    return completionTime.toLocaleString();
};

const ProcessProgressBar = ({ process }) => {
    const { processCode, runNumber, status, submittedTime, average_time } = process;

    const progress = status === 'Completed' ? 100 : calculateProgress(submittedTime, average_time); // Dynamically calculated progress

    return (
        <div className="mb-4">
            <h4 className="text-sm font-semibold">{`Process: ${processCode} | Run: ${runNumber}`}</h4>
            <div className="relative w-full bg-gray-200 rounded-full h-4">
                <div
                    className={`h-4 rounded-full ${getStatusColor(status)}`}
                    style={{ width: `${progress}%` }}
                ></div>
                {status === 'InProgress' && (
                    <div
                        className="absolute top-0 right-0 bg-black text-white text-xs rounded py-1 px-2"
                        style={{ zIndex: 10 }}
                        title={`Estimated completion time: ${calculateEstimatedCompletion(submittedTime, average_time)}`}
                    >
                        Est. Completion: {calculateEstimatedCompletion(submittedTime, average_time)}
                    </div>
                )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
                Status: {status} | Submitted: {new Date(submittedTime).toLocaleString()}
                | {status === 'InProgress' ? `Estimated Completion: ${calculateEstimatedCompletion(submittedTime, average_time)}` : ''}
            </p>
        </div>
    );
};

export default ProcessProgressBar;
