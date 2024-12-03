import React, { useState } from "react";
import DynamicDropdown from "./DynamicDropDown";

const LogicBuilder = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [nestedOption, setNestedOption] = useState("");

    //const componentsMap = {
    //    option1: <div style={styles.component}>This is the content for Option 1.</div>,
    //    option2: (
    //        <div style={styles.component}>
    //            <Dropdown
    //                label="Nested Dropdown"
    //                options={[
    //                    { label: "Nested Option 1", value: "nested1" },
    //                    { label: "Nested Option 2", value: "nested2" },
    //                ]}
    //                value={nestedOption}
    //                onChange={setNestedOption}
    //            />
    //            {nestedOption && (
    //                <div style={styles.nestedComponent}>
    //                    You selected: {nestedOption === "nested1" ? "Nested Option 1" : "Nested Option 2"}
    //                </div>
    //            )}
    //        </div>
    //    ),
    //    option3: <div style={styles.component}>This is the content for Option 3.</div>,
    //};

    return (
        <div style={styles.container}>
            <DynamicDropdown />
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        margin: "20px",
    },
    resultContainer: {
        marginTop: "20px",
    },
    component: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
    },
    nestedComponent: {
        marginTop: "10px",
        color: "#555",
    },
    placeholder: {
        color: "#888",
    },
};

export default LogicBuilder;
