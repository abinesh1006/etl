import React, { useState } from "react";
import DataInputStage from "./DataInputStage";
import OutputStage from "./OutputStage";
import DataTransformationStage from "./DataTransformationStage";
const ingestorStages = [
    { id: 1, name: "Data Input" },
    { id: 2, name: "Data Transformation" },
    { id: 3, name: "Output" },
];

export default function IngestorComponent() {
    const [currentStage, setCurrentStage] = useState(1);
    const [data, setData] = useState(null);

    const goToNextStage = (updatedData) => {
        setData(updatedData);
        setCurrentStage((prev) => (prev < ingestorStages.length ? prev + 1 : prev));
    };

    const goToPreviousStage = () => {
        setCurrentStage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const renderCurrentStage = () => {
        switch (currentStage) {
            case 1:
                return <DataInputStage onNext={goToNextStage} />;
            case 2:
                return <DataTransformationStage data={data} onNext={goToNextStage} onPrevious={goToPreviousStage} />;
            case 3:
                return <OutputStage data={data} onPrevious={goToPreviousStage} />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Ingestor Process</h1>
            <div className="flex items-center justify-between mb-6">
                {ingestorStages.map((stage) => (
                    <div
                        key={stage.id}
                        className={`flex-1 text-center text-sm ${currentStage >= stage.id
                            ? "text-green-600 font-bold"
                            : "text-gray-400 font-medium"
                            }`}
                    >
                        <div className={`h-2 rounded-full mb-2 ${currentStage >= stage.id ? "bg-green-500" : "bg-gray-300"}`} />
                        {stage.name}
                    </div>
                ))}
            </div>
            <div className="bg-white p-4 shadow rounded">{renderCurrentStage()}</div>
        </div>
    );
}

