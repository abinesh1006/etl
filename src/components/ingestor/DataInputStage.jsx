import React, { useState } from "react";

export default function ETLToolPage({  onNext }) {
    const [inputMode, setInputMode] = useState("file"); // Modes: file, api, google-drive
    const [schema, setSchema] = useState(null); // Schema data inferred from the API
    const [dragActive, setDragActive] = useState(false); // For drag-and-drop
    const [file, setFile] = useState(null); // Selected file

    // Simulated API response for schema inference
    const handleInferSchema = () => {
        const mockSchema = [
            { name: "Field1", type: "string", format: "" },
            { name: "Field2", type: "number", format: "" },
            { name: "Field3", type: "date", format: "YYYY-MM-DD" },
        ];
        setSchema(mockSchema);
    };

    // Handle drag-and-drop events
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(e.type === "dragover");
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileUpload = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
    };

    // Handle schema field changes
    const handleFieldChange = (index, key, value) => {
        setSchema((prev) =>
            prev.map((field, i) => (i === index ? { ...field, [key]: value } : field))
        );
    };

    return (
        <div className="min-h-full bg-gradient-to-br from-gray-100 via-white to-gray-50 p-2">
            
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Section: Input Configuration */}
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Input Configuration</h2>
                    {/* Input Mode Toggle */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Input Mode</label>
                        <div className="flex gap-4">
                            {["file", "api", "google-drive"].map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => setInputMode(mode)}
                                    className={`px-4 py-2 rounded-lg shadow-sm font-semibold ${inputMode === mode
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {mode === "file" ? "Upload File" : mode === "api" ? "API" : "Google Drive"}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Drag-and-Drop or File Input */}
                    {inputMode === "file" && (
                        <div
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            className={`border-2 ${dragActive ? "border-blue-500" : "border-gray-300"
                                } border-dashed rounded-lg p-8 text-center relative bg-gray-50`}
                        >
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleFileUpload}
                            />
                            {file ? (
                                <p className="text-lg font-semibold text-gray-700">
                                    Selected File: {file.name}
                                </p>
                            ) : (
                                <p className="text-gray-500">
                                    Drag and drop a file here, or click to select a file
                                </p>
                            )}
                        </div>
                    )}

                    {/* API Input */}
                    {inputMode === "api" && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">API Endpoint</label>
                            <input
                                type="text"
                                placeholder="Enter API Endpoint"
                                className="block w-full border border-gray-300 rounded-lg p-3 mb-4"
                            />
                            <label className="block text-sm font-medium text-gray-700 mb-2">Auth Token</label>
                            <input
                                type="text"
                                placeholder="Enter Auth Token"
                                className="block w-full border border-gray-300 rounded-lg p-3 mb-4"
                            />
                        </div>
                    )}

                    {/* Google Drive Input */}
                    {inputMode === "google-drive" && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Google Drive Link</label>
                            <input
                                type="text"
                                placeholder="Paste Google Drive Link"
                                className="block w-full border border-gray-300 rounded-lg p-3 mb-4"
                            />
                        </div>
                    )}

                    {/* File Configuration */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">File Configuration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">File Type</label>
                            <select className="block w-full border border-gray-300 rounded-lg p-3">
                                <option value="csv">CSV</option>
                                <option value="excel">Excel</option>
                                <option value="json">JSON</option>
                                <option value="xml">XML</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Delimiter</label>
                            <input
                                type="text"
                                placeholder="e.g., ,"
                                className="block w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Quote Character</label>
                            <input
                                type="text"
                                placeholder='e.g., "'
                                className="block w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Header Row</label>
                            <input
                                type="number"
                                placeholder="e.g., 1"
                                className="block w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleInferSchema}
                        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
                    >
                        Infer Schema
                    </button>
                </div>

                {/* Right Section: Schema Preview */}
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Schema Details</h2>
                    {schema && schema.length > 0 ? (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-gray-700">Fields</h3>
                                <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg">
                                    Save Configuration
                                </button>
                            </div>
                            {schema.map((field, index) => (
                                <div key={index} className="grid grid-cols-3 gap-4 items-center mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Field Name</label>
                                        <input
                                            type="text"
                                            value={field.name}
                                            onChange={(e) => handleFieldChange(index, "name", e.target.value)}
                                            className="block w-full border border-gray-300 rounded-lg p-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Data Type</label>
                                        <select
                                            value={field.type}
                                            onChange={(e) => handleFieldChange(index, "type", e.target.value)}
                                            className="block w-full border border-gray-300 rounded-lg p-3"
                                        >
                                            <option value="string">String</option>
                                            <option value="number">Number</option>
                                            <option value="date">Date</option>
                                            <option value="datetime">Datetime</option>
                                        </select>
                                    </div>
                                    {field.type === "date" || field.type === "datetime" ? (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Date Format</label>
                                            <input
                                                type="text"
                                                value={field.format}
                                                onChange={(e) => handleFieldChange(index, "format", e.target.value)}
                                                placeholder="e.g., YYYY-MM-DD"
                                                className="block w-full border border-gray-300 rounded-lg p-3"
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                            <button onClick={onNext} 
                                className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
                            >
                                Next
                            </button>
                        </div>
                    ) : (
                        <p className="text-gray-500">Schema details will appear here after inference.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
