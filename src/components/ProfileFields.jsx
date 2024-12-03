import React from 'react';

const ProfileFields = ({
    userId,
    walletAddress,
    email,
    phoneNumber,
    country,
    currentPoints,
    userFriendlyAddress,
}) => {
    // Assuming fields to display
    const fields = [
        { label: 'User ID', value: userId },
        { label: 'Wallet Address', value: userFriendlyAddress || walletAddress },
        { label: 'Email', value: email },
        { label: 'Phone Number', value: phoneNumber },
        { label: 'Country', value: country },
        { label: 'Current Points', value: currentPoints.toString() },
    ];

    // Function to truncate long content with ellipsis and provide tooltip
    const truncateText = (text, maxLength = 20) => {
        if (text.length <= maxLength) {
            return text;
        }
        return `${text.slice(0, maxLength)}...`;
    };

    return (
        <>
            {fields.map((field, index) => (
                <div key={index} className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-blue-800 font-semibold">{field.label}</label>
                        <span className="text-gray-600" title={field.value}>
                            {truncateText(field.value)}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProfileFields;
