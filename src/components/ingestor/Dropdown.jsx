import React from "react";

const Dropdown = ({ options, onChange, value, label }) => {
    return (
        <div style={styles.dropdownContainer}>
            {label && <label style={styles.label}>{label}</label>}
            <select
                style={styles.dropdown}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

const styles = {
    dropdownContainer: {
        marginBottom: "20px",
    },
    label: {
        display: "block",
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "bold",
    },
    dropdown: {
        padding: "10px",
        fontSize: "16px",
        width: "100%",
        maxWidth: "300px",
    },
};

export default Dropdown;
