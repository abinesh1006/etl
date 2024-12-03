import React, { useState } from "react";
import DataInputPage from "./DataInputPage";
import DataPrepPage from "./DataPrepPage";
import MatchingFieldPage from "./MatchingFieldPage";
import FilterRulesPage from "./FilterRulesPage";
import RuleSetPage from "./RuleSetPage";
import CalculatedResultPage from "./CalculatedResultPage";

const stages = [
    { id: 1, name: "Data Input" },
    { id: 2, name: "Data Transformation" },
    { id: 3, name: "Matching Field" },
    { id: 4, name: "Filter Rules" },
    { id: 5, name: "RuleSet" },
    { id: 6, name: "Calculated Result" },
];

export default function OnboardingComponent() {
    const [currentStage, setCurrentStage] = useState(1);

    const goToNextStage = () => {
        setCurrentStage((prev) => (prev < stages.length ? prev + 1 : prev));
    };

    const goToPreviousStage = () => {
        setCurrentStage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const renderCurrentStage = () => {
        switch (currentStage) {
            case 1:
                return <DataInputPage onNext={goToNextStage} />;
            case 2:
                return <DataPrepPage onNext={goToNextStage} onPrevious={goToPreviousStage} />;
            case 3:
                return <MatchingFieldPage onNext={goToNextStage} onPrevious={goToPreviousStage} />;
            case 4:
                return <FilterRulesPage onNext={goToNextStage} onPrevious={goToPreviousStage} />;
            case 5:
                return <RuleSetPage onNext={goToNextStage} onPrevious={goToPreviousStage} />;
            case 6:
                return <CalculatedResultPage onPrevious={goToPreviousStage} />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Onboarding Process</h1>
            <div className="flex items-center justify-between mb-6">
                {stages.map((stage, index) => (
                    <div
                        key={stage.id}
                        className={`flex-1 text-center text-sm ${currentStage >= stage.id
                                ? "text-blue-600 font-bold"
                                : "text-gray-400 font-medium"
                            }`}
                    >
                        <div className={`h-2 rounded-full mb-2 ${currentStage >= stage.id ? "bg-blue-500" : "bg-gray-300"}`} />
                        {stage.name}
                    </div>
                ))}
            </div>
            <div className="bg-white p-4 shadow rounded">{renderCurrentStage()}</div>
        </div>
    );
}
