import React, { useState } from "react";

const DynamicDropdown = ({ placeholder = "Select an action", isNested = false }) => {
    const [selectedOption, setSelectedOption] = useState(null); // Tracks the selected option
    const [currentComponent, setCurrentComponent] = useState(null); // Tracks the current component to display

    const options = [
        "something is equal to something",
        "something is not equal to something",
        "something + something",
        "set to something",
        "field",
        "number",
        "text"
    ];

    const componentsMap = {
        "something is equal to something": (
           <span> if <DynamicDropdown /> is equal to <DynamicDropdown />, Then <DynamicDropdown /></span>
        ),
        "something is not equal to something": (
            <span> if <DynamicDropdown /> is not equal to <DynamicDropdown />, Then <DynamicDropdown /></span>
        ),
        "something + something": (
            <span> if <DynamicDropdown /> +  <DynamicDropdown /> </span>
        ),
        "set to something": (
             <span>Set to <DynamicDropdown /> </span>
        ),
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setCurrentComponent(componentsMap[option]); // Replace dropdown with the corresponding component
    };

    return (
        <div className={`flex items-center gap-2 ${isNested ? "ml-4" : ""}`}>
            {!currentComponent ? (
                <Dropdown options={options} onSelect={handleOptionSelect} placeholder={placeholder} />
            ) : (
                currentComponent
            )}
        </div>
    );
};

const Dropdown = ({ options, onSelect, placeholder }) => (
    <select
        className="p-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSelect(e.target.value)}
    >
        <option value="">{placeholder || "Select an option"}</option>
        {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ))}
    </select>
);

export default DynamicDropdown;
