import React from 'react';
import StatsWidget from './StatsWidget';
import FilesWidget from './FilesWidget';

const RightSidebar = ({ stats, files }) => {
    return (
        <div className="bg-gray-100 p-4 w-1/4 space-y-8">
            {/* Statistics */}
            <StatsWidget stats={stats} />

            {/* Files */}
            <FilesWidget files={files} />
        </div>
    );
};

export default RightSidebar;
