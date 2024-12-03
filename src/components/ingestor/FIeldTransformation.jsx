import React, { useState } from "react";

const FieldTransformations = ({ fields }) => {
    const [fieldStates, setFieldStates] = useState(fields);

    const transformationOptions = [
        "is equal to",
        "is not equal to",
        "contains",
        "does not contain",
        "starts with",
        "ends with",
        "+ (Add)",
        "- (Subtract)",
        "* (Multiply)",
        "/ (Divide)",
        "Custom Expression",
    ];

    const handleTransformationChange = (fieldId, expressionKey, value) => {
        setFieldStates((prevFields) =>
            prevFields.map((field) =>
                field.id === fieldId
                    ? {
                        ...field,
                        expression: {
                            ...field.expression,
                            [expressionKey]: value,
                        },
                    }
                    : field
            )
        );
    };

    return (
        <div className="p-4 space-y-6 bg-gray-50">
            <h1 className="text-xl font-semibold text-gray-800">Field Transformations</h1>

            {fieldStates.map((field) => (
                <div key={field.id} className="p-4 bg-white rounded-md shadow-md">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-600">{field.name}</h2>
                        <p className="text-sm text-gray-500">Data Type: {field.datatype}</p>
                    </div>

                    {/* Transformation Dropdown */}
                    <div className="mb-4">
                        <label className="block mb-1 text-sm text-gray-700">Transformation</label>
                        <select
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            value={field.expression.transformation || ""}
                            onChange={(e) =>
                                handleTransformationChange(field.id, "transformation", e.target.value)
                            }
                        >
                            <option value="">Select Transformation</option>
                            {transformationOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Operand Dropdown */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-gray-700">Operand 1</label>
                            <select
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={field.expression.datatype || ""}
                                onChange={(e) =>
                                    handleTransformationChange(field.id, "datatype", e.target.value)
                                }
                            >
                                <option value="">Select Operand</option>
                                {fields.map((f) => (
                                    <option key={f.id} value={f.name}>
                                        {f.name}
                                    </option>
                                ))}
                                <option value="custom">Custom Value</option>
                            </select>
                        </div>

                        {/* If Custom Value, Render Input */}
                        {field.expression.datatype === "custom" && (
                            <div>
                                <label className="block mb-1 text-sm text-gray-700">Custom Value</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Value"
                                    onChange={(e) =>
                                        handleTransformationChange(field.id, "customValue", e.target.value)
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Debug Output */}
            <div className="p-4 mt-6 bg-gray-100 border rounded-md">
                <h2 className="mb-2 text-sm font-semibold text-gray-600">Current Transformations</h2>
                <pre className="text-xs text-gray-700">{JSON.stringify(fieldStates, null, 2)}</pre>
            </div>
        </div>
    );
};

export default FieldTransformations;
