import React, { useState, useEffect } from 'react';

const transformationTypes = [
    'Add', 'Subtract', 'Multiply', 'Divide', 'Abs', 'Square', 'SquareRoot', 'Power', 'Concat', 'FormatDate', 'NestedExpression'
];

export default function TransformationInput({ fieldName, transformation, onChange }) {
    const [operation, setOperation] = useState(transformation.operation || '');
    const [value1, setValue1] = useState(transformation.value1 || '');
    const [value2, setValue2] = useState(transformation.value2 || '');
    const [nested, setNested] = useState(transformation.nested || '');

    useEffect(() => {
        onChange({ operation, value1, value2, nested });
    }, [operation, value1, value2, nested]);

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-6 mb-6">
                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Transformation</option>
                    {transformationTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Field or Value"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    className="p-4 w-1/3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="font-bold text-gray-700">{operation}</span>
                <input
                    type="text"
                    placeholder="Field or Value"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    className="p-4 w-1/3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {operation === 'NestedExpression' && (
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Nested Expression (e.g. abs(field) - (field * -1))"
                        value={nested}
                        onChange={(e) => setNested(e.target.value)}
                        className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}
        </div>
    );
}
