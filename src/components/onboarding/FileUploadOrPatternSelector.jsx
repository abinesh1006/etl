// FileUploadOrPatternSelector.jsx
import React, { useState } from 'react';

export default function FileUploadOrPatternSelector({ source, onFileUpload, onPatternSelect, onConfigChange }) {
    const [toggleOption, setToggleOption] = useState("fileUpload"); // Toggle between File Upload and Pattern Selector
    const [fileType, setFileType] = useState(""); // File type dropdown
    const [uploadedFile, setUploadedFile] = useState(null); // Uploaded file
    const [filePattern, setFilePattern] = useState(""); // User input for file pattern
    const [delimiter, setDelimiter] = useState(","); // Default delimiter for CSV
    const [quoteCharacter, setQuoteCharacter] = useState('"'); // Default quote character
    const [isHeaderPresent, setIsHeaderPresent] = useState(true); // Option for header row
    const [dataStartsFrom, setDataStartsFrom] = useState(1); // Row number where data starts
    const [sheetName, setSheetName] = useState(""); // Excel sheet name
    const [sheetNumber, setSheetNumber] = useState(1); // Excel sheet number

    // Handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setUploadedFile(file);
        onFileUpload(file);
    };

    // Handle file pattern selector input change
    const handleFilePatternChange = (e) => {
        setFilePattern(e.target.value);
        if (e.target.value.length >= 3) {
            onPatternSelect(e.target.value); // Call parent function when pattern changes
        }
    };

    // Handle configuration changes (delimiter, quote character, etc.)
    const handleConfigChange = () => {
        onConfigChange({
            delimiter,
            quoteCharacter,
            isHeaderPresent,
            dataStartsFrom,
            sheetName,
            sheetNumber
        });
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{source} - File Input</h3>
            {/* Toggle buttons */}
            <div className="flex mb-4">
                <button
                    onClick={() => setToggleOption("fileUpload")}
                    className={`px-4 py-2 rounded-l ${toggleOption === "fileUpload" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    File Upload
                </button>
                <button
                    onClick={() => setToggleOption("filePattern")}
                    className={`px-4 py-2 rounded-r ${toggleOption === "filePattern" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    File Pattern Selector
                </button>
            </div>

            {/* File Upload Section */}
            {toggleOption === "fileUpload" ? (
                <>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select File Type:</label>
                        <select
                            value={fileType}
                            onChange={(e) => setFileType(e.target.value)}
                            className="block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">-- Select File Type --</option>
                            <option value="csv">CSV</option>
                            <option value="excel">Excel</option>
                            <option value="json">JSON</option>
                        </select>
                    </div>

                    {/* File Upload Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload File:</label>
                        <input
                            type="file"
                            accept=".csv,.xlsx,.json"
                            onChange={handleFileUpload}
                            className="block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </>
            ) : (
                <>
                    {/* File Pattern Selector */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">File Pattern:</label>
                        <input
                            type="text"
                            value={filePattern}
                            onChange={handleFilePatternChange}
                            placeholder="Enter file pattern"
                            className="block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </>
            )}

            {/* Configuration Options */}
            {fileType === "csv" && (
                <>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Delimiter:</label>
                        <input
                            type="text"
                            value={delimiter}
                            onChange={(e) => setDelimiter(e.target.value)}
                            className="block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Quote Character:</label>
                        <input
                            type="text"
                            value={quoteCharacter}
                            onChange={(e) => setQuoteCharacter(e.target.value)}
                            className="block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Is Header Present:</label>
                        <input
                            type="checkbox"
                            checked={isHeaderPresent}
                            onChange={(e) => setIsHeaderPresent(e.target.checked)}
                            className="mr-2"
                        />
                        Yes
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Data Starts From Row:</label>
                        <input
                            type="number"
                            value={dataStartsFrom}
                            onChange={(e) => setDataStartsFrom(e.target.value)}
                            className="block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </>
            )}

            {fileType === "excel" && (
                <>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sheet Name:</label>
                        <input
                            type="text"
                            value={sheetName}
                            onChange={(e) => setSheetName(e.target.value)}
                            className="block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sheet Number:</label>
                        <input
                            type="number"
                            value={sheetNumber}
                            onChange={(e) => setSheetNumber(e.target.value)}
                            className="block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </>
            )}

            {/* Apply Configurations Button */}
            <button
                onClick={handleConfigChange}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
                Apply Configuration
            </button>
        </div>
    );
}
