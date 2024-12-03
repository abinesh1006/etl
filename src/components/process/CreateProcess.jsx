import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cardOptions = [
    { id: 1, title: "Two-Sided Reconciliation", description: "Match transactions on both sides." },
    { id: 2, title: "Single-Sided Reconciliation", description: "Match one-sided transactions." },
    { id: 3, title: "Cash Recon", description: "Reconcile cash inflows and outflows." },
    { id: 4, title: "Data Preparation", description: "Prepare and validate data for processing." },
];

export default function CreateProcess() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [formValues, setFormValues] = useState({
        processName: "",
        team: "",
        location: "",
        phrase: "",
        owner: "",
        frequency: "Daily",
        type: "Financial",
        exceptionWorkflow: "",
    });
    const [maskSensitiveFields, setMaskSensitiveFields] = useState(false);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const processData = {
            selectedCard,
            ...formValues,
            maskSensitiveFields,
        };
        console.log("Process Data:", processData);
        // Add logic to submit the form
        const newProcessId = "12345"; // Replace this with actual API logic

        navigate(`/onboarding/${newProcessId}`);

    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800">Create Process</h1>
            <p className="text-gray-600 text-center mb-8">
                Select a reconciliation process type to get started.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {cardOptions.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => handleCardClick(card)}
                        className={`p-6 border rounded-lg cursor-pointer shadow-md hover:shadow-lg transition ${selectedCard?.id === card.id ? "border-blue-500 bg-blue-50" : "border-gray-300"
                            }`}
                    >
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-500">{card.description}</p>
                    </div>
                ))}
            </div>
            {selectedCard && (
                <div className="bg-white p-4 shadow-sm rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-blue-600">Create {selectedCard.title}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Process Name</label>
                                <input
                                    type="text"
                                    name="processName"
                                    value={formValues.processName}
                                    onChange={handleChange}
                                    placeholder="Process name"
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Team</label>
                                <input
                                    type="text"
                                    name="team"
                                    value={formValues.team}
                                    onChange={handleChange}
                                    placeholder="Team name"
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formValues.location}
                                    onChange={handleChange}
                                    placeholder="Location"
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Phrase</label>
                                <input
                                    type="text"
                                    name="phrase"
                                    value={formValues.phrase}
                                    onChange={handleChange}
                                    placeholder="Phrase"
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Owner</label>
                                <input
                                    type="text"
                                    name="owner"
                                    value={formValues.owner}
                                    onChange={handleChange}
                                    placeholder="Owner"
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Frequency</label>
                                <select
                                    name="frequency"
                                    value={formValues.frequency}
                                    onChange={handleChange}
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                >
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Type</label>
                                <select
                                    name="type"
                                    value={formValues.type}
                                    onChange={handleChange}
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                >
                                    <option value="Financial">Financial</option>
                                    <option value="Operational">Operational</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-700 font-medium mb-1">Exception Workflow</label>
                                <textarea
                                    name="exceptionWorkflow"
                                    value={formValues.exceptionWorkflow}
                                    onChange={handleChange}
                                    placeholder="Exception workflow"
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="col-span-2 flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={maskSensitiveFields}
                                    onChange={(e) => setMaskSensitiveFields(e.target.checked)}
                                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                />
                                <span className="text-gray-700 text-sm">Mask sensitive fields</span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
