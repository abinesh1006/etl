import React, { useState, useEffect } from "react";
import axios from "axios";

// Accordion Field Component
const AccordionField = ({ field, onUpdateTransformations }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newTransformation, setNewTransformation] = useState("");

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleAddTransformation = () => {
        if (newTransformation.trim()) {
            const updatedTransformations = [
                ...field.transformation,
                { description: newTransformation },
            ];
            onUpdateTransformations(field.id, updatedTransformations);
            setNewTransformation(""); // Reset input
        }
    };

    return (
        <div
            className={`bg-white shadow-md rounded-lg overflow-hidden mb-4 ${
                field.transformation.length > 0 ? "border-l-4 border-blue-500" : ""
            }`}
        >
            <div
                className={`p-4 cursor-pointer ${
                    field.transformation.length > 0 ? "bg-blue-100 hover:bg-blue-200" : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={toggleAccordion}
            >
                <h3 className="font-semibold text-lg text-gray-800">{field.name}</h3>
                <span className="text-sm text-gray-600">{field.datatype}</span>
                {field.transformation.length > 0 && (
                    <span className="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded-full">
                        Transformed
                    </span>
                )}
            </div>
            {isOpen && (
                <div className="p-4 bg-gray-50 border-t">
                    {field.transformation && field.transformation.length > 0 ? (
                        <div>
                            <h4 className="font-medium text-gray-800">Transformations:</h4>
                            <ul className="list-disc ml-5 space-y-2">
                                {field.transformation.map((trans, idx) => (
                                    <li key={idx} className="text-gray-700 text-sm">
                                        {trans.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-sm text-gray-500">No transformations applied yet.</p>
                    )}
                    <div className="mt-4">
                        <h4 className="font-medium text-gray-800">Details:</h4>
                        <div className="text-sm text-gray-600">
                            <p><strong>Receiver:</strong> {field.receiver}</p>
                            <p><strong>Payer:</strong> {field.payer}</p>
                            <p><strong>Payment Date:</strong> {field.paymentDate}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="font-medium text-gray-800">Add Transformation:</h4>
                        <div className="flex items-center mt-2 space-x-2">
                            <input
                                type="text"
                                value={newTransformation}
                                onChange={(e) => setNewTransformation(e.target.value)}
                                placeholder="Enter transformation description"
                                className="flex-1 border border-gray-300 rounded-md p-2 text-sm"
                            />
                            <button
                                onClick={handleAddTransformation}
                                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Main Data Transformation Component
const DataTransformationStage = ({onNext }) => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/c/a015-4a7c-4ad1-9c8d");
                setFields(response.data.fields || []);
            } catch (error) {
                console.error("Error fetching fields:", error);
            }
        };
        fetchData();
    }, []);

    const handleUpdateTransformations = (fieldId, updatedTransformations) => {
        setFields((prevFields) =>
            prevFields.map((field) =>
                field.id === fieldId
                    ? { ...field, transformation: updatedTransformations }
                    : field
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Data Transformation Management</h1>
            <div className="space-y-6">
                {fields.length === 0 ? (
                    <p className="text-center text-gray-500">Loading fields...</p>
                ) : (
                    fields.map((field) => (
                        <AccordionField
                            key={field.id}
                            field={field}
                            onUpdateTransformations={handleUpdateTransformations}
                        />
                    ))
                )}
                  <div className="flex justify-end mt-8">
                <button
                    onClick={onNext}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
            </div>
          
        </div>
    );
};

export default DataTransformationStage;
