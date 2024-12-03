import React, { useState } from "react";
import FileUploadOrPatternSelector from "./FileUploadOrPatternSelector";

export default function DataInputPage({ onNext, onPrevious }) {
    const [fieldsA, setFieldsA] = useState([]);
    const [fieldsB, setFieldsB] = useState([]);

    const handleFileUploadA = (file) => {
        const mockFields = [
            { name: "ID", type: "number", format: "N/A" },
            { name: "Name", type: "string", format: "N/A" },
            { name: "Date", type: "date", format: "yyyy-mm-dd" },
        ];
        setFieldsA(mockFields);
    };

    const handleFileUploadB = (file) => {
        const mockFields = [
            { name: "ID", type: "number", format: "N/A" },
            { name: "Amount", type: "currency", format: "USD" },
        ];
        setFieldsB(mockFields);
    };

    const handleConfigChange = (config) => {
        console.log("Configuration change:", config);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Data Input Configuration
            </h2>
            <div className="grid grid-cols-2 gap-12">
                {/* Source A */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">Source A</h3>
                    <FileUploadOrPatternSelector
                        source="Source A"
                        onFileUpload={handleFileUploadA}
                        onConfigChange={handleConfigChange}
                    />
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                            Fields for Source A
                        </h4>
                        {fieldsA.map((field, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 mb-4 bg-gray-100 p-4 rounded-lg"
                            >
                                <div className="w-1/3 text-gray-700 font-medium">{field.name}</div>
                                <div className="w-1/3">
                                    <select
                                        value={field.type}
                                        onChange={(e) =>
                                            setFieldsA((prev) =>
                                                prev.map((f, i) =>
                                                    i === index ? { ...f, type: e.target.value } : f
                                                )
                                            )
                                        }
                                        className="w-full p-2 border rounded-md text-gray-600"
                                    >
                                        <option value="string">String</option>
                                        <option value="number">Number</option>
                                        <option value="date">Date</option>
                                        <option value="datetime">DateTime</option>
                                        <option value="currency">Currency</option>
                                    </select>
                                </div>
                                <div className="w-1/3 text-gray-600">{field.format}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Source B */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">Source B</h3>
                    <FileUploadOrPatternSelector
                        source="Source B"
                        onFileUpload={handleFileUploadB}
                        onConfigChange={handleConfigChange}
                    />
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                            Fields for Source B
                        </h4>
                        {fieldsB.map((field, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 mb-4 bg-gray-100 p-4 rounded-lg"
                            >
                                <div className="w-1/3 text-gray-700 font-medium">{field.name}</div>
                                <div className="w-1/3">
                                    <select
                                        value={field.type}
                                        onChange={(e) =>
                                            setFieldsB((prev) =>
                                                prev.map((f, i) =>
                                                    i === index ? { ...f, type: e.target.value } : f
                                                )
                                            )
                                        }
                                        className="w-full p-2 border rounded-md text-gray-600"
                                    >
                                        <option value="string">String</option>
                                        <option value="number">Number</option>
                                        <option value="date">Date</option>
                                        <option value="datetime">DateTime</option>
                                        <option value="currency">Currency</option>
                                    </select>
                                </div>
                                <div className="w-1/3 text-gray-600">{field.format}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Next Button */}
            <div className="mt-8 flex justify-end">
                <button onClick={onNext} className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700">
                    Next
                </button>
            </div>
        </div>
    );
}
