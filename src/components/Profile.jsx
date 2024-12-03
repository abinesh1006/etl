import React from 'react';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

const Profile = ({ profileDetails, currentPoints }) => {
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    // Function to truncate long content with ellipsis and provide tooltip
  

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg">
            <div className="w-full max-w-4xl p-6 md:p-8 bg-white rounded-lg shadow-lg relative max-h-[80vh] overflow-hidden">
                {/* Profile Details Section */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-blue-800">Profile Details</h1>
                    <TonConnectButton />
                </div>

                {/* Vertical Line */}
                <div className="border-b border-blue-400 mb-4"></div>

                {/* Displaying fields */}
                <ProfileFields currentPoints={currentPoints} profileDetails={profileDetails} userFriendlyAddress={userFriendlyAddress} rawAddress={rawAddress} />
            </div>
            </div>
       
    );
};

const ProfileFields = ({ currentPoints, profileDetails, userFriendlyAddress, rawAddress }) => {
    // Assuming fields to display
      const truncateText = (text, maxLength = 20) => {
        if (text.length <= maxLength) {
            return text;
        }
        return `${text.slice(0, maxLength)}...`;
    };
    const fields = [
        { label: 'User ID', key: 'userId' },
        { label: 'Wallet Address', key: 'walletAddress' },
        { label: 'Email', key: 'email' },
        { label: 'Phone Number', key: 'phoneNumber' },
        { label: 'Country', key: 'country' },
        { label: 'Score', key: 'score' }
    ];

    // Function to get the correct value based on availability
    const getValue = (key) => {
        if (key === 'score') {
            return currentPoints;
        } else if (key === 'walletAddress' && userFriendlyAddress) {
            return truncateText(userFriendlyAddress);
        }
        return profileDetails ? profileDetails[key] || 'Unknown' : 'Unknown';
    };
    return (
        <>
            {fields.map((field) => (
                <div key={field.key} className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-blue-800 font-semibold">{field.label}</label>
                        <span className="text-gray-600" title={getValue(field.key)}>
                            {getValue(field.key)}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Profile;
