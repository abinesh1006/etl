import React from 'react';
import TransformationInput from './TransformationInput';

export default function TransformationChain({ fieldName, transformations, setTransformations }) {
    const handleTransformationChange = (index, newTransformation) => {
        const updatedTransformations = [...transformations];
        updatedTransformations[index] = newTransformation;
        setTransformations((prev) => ({
            ...prev,
            [fieldName]: updatedTransformations,
        }));
    };

    const handleAddNestedTransformation = (index) => {
        const updatedTransformations = [...transformations];
        updatedTransformations[index].nested = updatedTransformations[index].nested || [];
        updatedTransformations[index].nested.push({});
        setTransformations((prev) => ({
            ...prev,
            [fieldName]: updatedTransformations,
        }));
    };

    return (
        <div className="space-y-6">
            {transformations.map((transformation, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg">
                    <TransformationInput
                        fieldName={fieldName}
                        transformation={transformation}
                        onChange={(newTransformation) => handleTransformationChange(index, newTransformation)}
                    />
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => handleAddNestedTransformation(index)}
                            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                        >
                            Add Nested Transformation
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
