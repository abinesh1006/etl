import React, { useEffect, useState } from "react";

export default function MatchingFieldPage({ onNext, onPrevious }) {
    const [sourceAFields, setSourceAFields] = useState([]);
    const [sourceBFields, setSourceBFields] = useState([]);
    const [matchFields, setMatchFields] = useState([]);
    const [selectedSourceA, setSelectedSourceA] = useState(null);
    const [selectedSourceB, setSelectedSourceB] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // Dummy data for fields
            const sourceAData = [
                { name: "Field A1", datatype: "String" },
                { name: "Field A2", datatype: "Number" },
            ];
            const sourceBData = [
                { name: "Field B1", datatype: "String" },
                { name: "Field B2", datatype: "Number" },
            ];
            await new Promise((resolve) => setTimeout(resolve, 500));
            setSourceAFields(sourceAData);
            setSourceBFields(sourceBData);
        }
        fetchData();
    }, []);

    const createMatchField = () => {
        if (selectedSourceA && selectedSourceB) {
            const combinedName =
                selectedSourceA === selectedSourceB
                    ? `mf_${selectedSourceA}`
                    : `mf_${selectedSourceA}_${selectedSourceB}`;

            // Check if the match field already exists
            if (!matchFields.some((match) => match.name === combinedName)) {
                const newMatch = {
                    name: combinedName,
                    sourceA: selectedSourceA,
                    sourceB: selectedSourceB,
                    expressionA: "", // Expression for Source A
                    expressionB: "", // Expression for Source B
                };
                setMatchFields([...matchFields, newMatch]);
            }

            // Reset selections
            setSelectedSourceA(null);
            setSelectedSourceB(null);
        } else {
            alert("Please select fields from both Source A and Source B.");
        }
    };

    const deleteMatchField = (name) => {
        setMatchFields(matchFields.filter((field) => field.name !== name));
    };

    const updateExpression = (name, side, value) => {
        setMatchFields((prevFields) =>
            prevFields.map((field) =>
                field.name === name
                    ? {
                        ...field,
                        [side === "A" ? "expressionA" : "expressionB"]: value,
                    }
                    : field
            )
        );
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Matching Fields</h2>
            <p className="text-gray-600">Specify which fields to use for matching data.</p>

            <div className="grid grid-cols-3 gap-6 mt-6">
                {/* Source A Fields */}
                <div className="bg-gray-200 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Source A Fields</h3>
                    <ul className="space-y-2">
                        {sourceAFields.map((field, index) => (
                            <li
                                key={index}
                                className={`p-2 rounded cursor-pointer text-gray-700 border ${selectedSourceA === field.name
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-gray-300"
                                    }`}
                                onClick={() => setSelectedSourceA(field.name)}
                            >
                                <span className="font-semibold">{field.name}</span>{" "}
                                <span className="text-sm text-gray-500">({field.datatype})</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Arrow Section */}
                <div className="flex flex-col items-center justify-center">
                    <button
                        onClick={createMatchField}
                        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 mb-4"
                    >
                        ➡️
                    </button>
                </div>

                {/* Source B Fields */}
                <div className="bg-gray-200 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Source B Fields</h3>
                    <ul className="space-y-2">
                        {sourceBFields.map((field, index) => (
                            <li
                                key={index}
                                className={`p-2 rounded cursor-pointer text-gray-700 border ${selectedSourceB === field.name
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-gray-300"
                                    }`}
                                onClick={() => setSelectedSourceB(field.name)}
                            >
                                <span className="font-semibold">{field.name}</span>{" "}
                                <span className="text-sm text-gray-500">({field.datatype})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Matched Fields */}
            {matchFields.length > 0 && (
                <div className="mt-8 bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Matched Fields</h3>
                    <ul className="space-y-4">
                        {matchFields.map((match, index) => (
                            <li
                                key={index}
                                className="p-4 border rounded flex flex-col space-y-2"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-gray-700 font-semibold">
                                            {match.sourceA}
                                        </span>{" "}
                                        ➡️{" "}
                                        <span className="text-gray-700 font-semibold">
                                            {match.sourceB}
                                        </span>{" "}
                                        <span className="text-gray-500">({match.name})</span>
                                    </div>
                                    <button
                                        onClick={() => deleteMatchField(match.name)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        ✖
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">
                                            Expression for Source A
                                        </label>
                                        <input
                                            type="text"
                                            value={match.expressionA}
                                            onChange={(e) =>
                                                updateExpression(match.name, "A", e.target.value)
                                            }
                                            className="w-full p-2 border rounded text-gray-700"
                                            placeholder="Define expression"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">
                                            Expression for Source B
                                        </label>
                                        <input
                                            type="text"
                                            value={match.expressionB}
                                            onChange={(e) =>
                                                updateExpression(match.name, "B", e.target.value)
                                            }
                                            className="w-full p-2 border rounded text-gray-700"
                                            placeholder="Define expression"
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Navigation Buttons */}
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
