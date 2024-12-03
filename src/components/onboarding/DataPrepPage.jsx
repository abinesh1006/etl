import React, { useEffect, useState } from "react";

export default function DataPrepPage({ onNext, onPrevious }) {
    const [sourceAFields, setSourceAFields] = useState([]);
    const [sourceBFields, setSourceBFields] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                // Dummy data
                const sourceAData = [
                    { name: "Field A1", rules: [] },
                    { name: "Field A2", rules: [] },
                ];
                const sourceBData = [
                    { name: "Field B1", rules: [] },
                    { name: "Field B2", rules: [] },
                ];
                await new Promise((resolve) => setTimeout(resolve, 500));
                setSourceAFields(sourceAData);
                setSourceBFields(sourceBData);
            } catch (error) {
                console.error("Error fetching data input fields:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const ruleTypes = [
        { value: "setTo", label: "Set to Value" },
        { value: "setToNumber", label: "Set to Number" },
        { value: "setToBoolean", label: "Set to Boolean" },
        { value: "convertCase", label: "Convert to Upper/Lower Case" },
        { value: "formatDate", label: "Format Date" },
        { value: "calculate", label: "Perform Calculation (Add/Subtract)" },
        { value: "compare", label: "Compare with Another Field" },
    ];

    const addRule = (setFields, fields, index) => {
        const updatedFields = [...fields];
        updatedFields[index].rules.push({
            type: "",
            value: "",
            conditionField: "",
            logicalOperator: "",
        });
        setFields(updatedFields);
    };

    const updateRule = (setFields, fields, fieldIndex, ruleIndex, key, value) => {
        const updatedFields = [...fields];
        updatedFields[fieldIndex].rules[ruleIndex][key] = value;
        setFields(updatedFields);
    };

    const saveRules = (field) => {
        console.log(`Saving rules for ${field.name}:`, field.rules);
        alert(`Rules for ${field.name} saved!`);
    };

    const renderFields = (fields, setFields) =>
        fields.map((field, fieldIndex) => (
            <div key={fieldIndex} className="mb-6 bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">{field.name}</h3>
                <div className="mt-4 space-y-4">
                    {field.rules.map((rule, ruleIndex) => (
                        <div key={ruleIndex} className="bg-gray-50 p-4 rounded-md shadow-inner">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <select
                                    value={rule.type}
                                    onChange={(e) =>
                                        updateRule(setFields, fields, fieldIndex, ruleIndex, "type", e.target.value)
                                    }
                                    className="border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select Rule Type</option>
                                    {ruleTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>

                                {rule.type === "compare" ? (
                                    <select
                                        value={rule.conditionField}
                                        onChange={(e) =>
                                            updateRule(setFields, fields, fieldIndex, ruleIndex, "conditionField", e.target.value)
                                        }
                                        className="border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Field to Compare</option>
                                        <option value="Field A1">Field A1</option>
                                        <option value="Field B1">Field B1</option>
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        value={rule.value}
                                        onChange={(e) =>
                                            updateRule(setFields, fields, fieldIndex, ruleIndex, "value", e.target.value)
                                        }
                                        placeholder="Enter value"
                                        className="border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                )}

                                {ruleIndex > 0 && (
                                    <select
                                        value={rule.logicalOperator}
                                        onChange={(e) =>
                                            updateRule(setFields, fields, fieldIndex, ruleIndex, "logicalOperator", e.target.value)
                                        }
                                        className="border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Logical Operator</option>
                                        <option value="AND">AND</option>
                                        <option value="OR">OR</option>
                                    </select>
                                )}
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={() => addRule(setFields, fields, fieldIndex)}
                        className="text-sm text-blue-500 hover:underline"
                    >
                        + Add Rule
                    </button>
                </div>
                <button
                    onClick={() => saveRules(field)}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Save Rules
                </button>
            </div>
        ));

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Data Prep or Transformation</h2>
            <p className="text-gray-600">Set up data transformations and create rules for matching.</p>

            {loading ? (
                <p className="text-gray-500 mt-6">Loading fields...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gray-200 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Source A</h3>
                        {renderFields(sourceAFields, setSourceAFields)}
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Source B</h3>
                        {renderFields(sourceBFields, setSourceBFields)}
                    </div>
                </div>
            )}

            <div className="flex space-x-4 mt-8">
                <button
                    onClick={onPrevious}
                    className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
