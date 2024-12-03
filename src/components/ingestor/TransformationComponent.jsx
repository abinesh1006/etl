import React, { useState } from "react";

const TransformationComponent = ({ onAdd }) => {
    const [operation, setOperation] = useState("");
    const [operand1, setOperand1] = useState("");
    const [operand2, setOperand2] = useState("");

    const handleAdd = () => {
        if (operation && operand1) {
            const transformation = {
                description: `${operand1} ${operation} ${operand2 || ""}`.trim(),
                operation,
                operands: [operand1, operand2].filter(Boolean),
            };
            onAdd(transformation);
            setOperation("");
            setOperand1("");
            setOperand2("");
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h4 className="text-md font-semibold text-gray-600">Add Transformation</h4>
            <div className="space-y-2">
                <input
                    type="text"
                    placeholder="Operand 1"
                    value={operand1}
                    onChange={(e) => setOperand1(e.target.value)}
                    className="w-full border p-2 rounded-lg"
                />
                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    className="w-full border p-2 rounded-lg"
                >
                    <option value="">Select Operation</option>
                    <option value="+">Addition (+)</option>
                    <option value="-">Subtraction (-)</option>
                    <option value="*">Multiplication (*)</option>
                    <option value="/">Division (/)</option>
                    <option value="if">Conditional (if)</option>
                </select>
                <input
                    type="text"
                    placeholder="Operand 2 (optional)"
                    value={operand2}
                    onChange={(e) => setOperand2(e.target.value)}
                    className="w-full border p-2 rounded-lg"
                />
                <button
                    onClick={handleAdd}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2"
                >
                    Add Transformation
                </button>
            </div>
        </div>
    );
};

export default TransformationComponent;
