import React from 'react';

const InputFieldsSection = ({ fields, onFieldChange }) => {
    return (
        <div className="input-fields-section">
            <h2>Inferred Fields</h2>
            {fields.map((field, index) => (
                <div key={index}>
                    <label>{field.name}</label>
                    <input
                        type="text"
                        defaultValue={field.type}
                        onChange={(e) => onFieldChange(index, 'type', e.target.value)}
                    />
                    {field.type === 'date' && (
                        <input
                            type="text"
                            placeholder="Date format"
                            defaultValue={field.format || ''}
                            onChange={(e) => onFieldChange(index, 'format', e.target.value)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default InputFieldsSection;
