// src/components/process/LatestProcessWidget.js
import React from 'react';

const LatestProcessWidget = ({ latestProcess }) => {
    return (
        <div className="widget bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">Latest Process</h2>
            <div><strong>Process Code:</strong> {latestProcess.id}</div>
            <div><strong>Status:</strong> {latestProcess.status}</div>
            <div><strong>Started By:</strong> {latestProcess.started_by}</div>
        </div>
    );
};

export default LatestProcessWidget;
