import React, { useState } from 'react';

const transformationTypes = [
    'Field', 'Number', 'Text', 'Add', 'Subtract', 'Multiply', 'Divide', 'Concat'
];

export default function TransformationModal({ fieldName, onClose, onAddTransformation }) {
    const [selectedTransformation, setSelectedTransformation] = useState('');
    const [nestedTransformations, setNestedTransformations] = useState([]);

    const handleAddNestedTransformation = () => {
        setNestedTransformations([...nestedTransformations, '']);
    };

    const handleSaveTransformation = () => {
        const newTransformation = {
            type: selectedTransformation,
            nested: nestedTransformations,
        };
        onAddTransformation(fieldName, newTransformation);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-semibold mb-4">Transform Data for {fieldName}</h3>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Select Transformation Type</label>
                    <select
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={selectedTransformation}
                        onChange={(e) => setSelectedTransformation(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        {transformationTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Nested Transformations</label>
                    {nestedTransformations.map((nested, index) => (
                        <div key={index} className="mb-2">
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Enter nested transformation"
                                value={nested}
                                onChange={(e) => {
                                    const updatedNested = [...nestedTransformations];
                                    updatedNested[index] = e.target.value;
                                    setNestedTransformations(updatedNested);
                                }}
                            />
                        </div>
                    ))}
                    <button
                        onClick={handleAddNestedTransformation}
                        className="text-blue-600 hover:text-blue-500"
                    >
                        Add Nested Transformation
                    </button>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSaveTransformation}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500"
                    >
                        Save Transformation
                    </button>
                </div>
            </div>
        </div>
    );
}
