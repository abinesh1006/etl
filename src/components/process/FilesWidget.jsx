import React from 'react';

const FilesWidget = ({ files }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Files</h3>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="p-2 border border-gray-300">File Name</th>
                        <th className="p-2 border border-gray-300">File Type</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file, index) => (
                        <tr
                            key={file.fileName}
                            className={`text-gray-700 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                }`}
                        >
                            <td className="p-2 border border-gray-300">{file.fileName}</td>
                            <td className="p-2 border border-gray-300">{file.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FilesWidget;
