// src/components/process/AnotherWidget.js
import React from 'react';

const AnotherWidget = ({ processInfo }) => {
    return (
        <div className="widget bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">Process Information</h2>
            <div><strong>Code:</strong> {processInfo.id}</div>
            <div><strong>Status:</strong> {processInfo.status}</div>
            <div><strong>Duration:</strong> {processInfo.duration}</div>
            <div><strong>Started By:</strong> {processInfo.started_by}</div>
        </div>
    );
};

export default AnotherWidget;
