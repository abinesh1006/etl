import React, { useState } from 'react';
import ProcessProgressBar from './ProcessProgressBar';

const ProcessListWidget = ({ data, title, onChangeSize }) => {
    const [size, setSize] = useState(5); // Default number of items to display

    const handleSizeChange = (event) => {
        setSize(event.target.value);
        onChangeSize(event.target.value); // Notify parent about size change
    };

    const filteredData = title === 'Queued Processes'
        ? data.filter(process => process.status === 'Queued') // Only show 'Queued' processes
        : data;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col h-full">
            <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div>
                    <label htmlFor="size" className="text-sm mr-2">Show</label>
                    <input
                        type="number"
                        value={size}
                        onChange={handleSizeChange}
                        min="1"
                        id="size"
                        className="w-16 p-1 border border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm">items</span>
                </div>
            </div>
            <div className="flex-grow overflow-auto">
                {filteredData.slice(0, size).map((process) => (
                    <ProcessProgressBar key={process.runNumber} process={process} />
                ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
                Total: {filteredData.length} {title}
            </div>
        </div>
    );
};

export default ProcessListWidget;
