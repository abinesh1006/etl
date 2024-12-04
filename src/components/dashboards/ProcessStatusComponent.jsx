import React, { useState, useEffect } from 'react';

const ProcessStatusComponent = () => {
  // State to hold process data for each status
  const [queuedData, setQueuedData] = useState({ totalCount: 0, data: [] });
  const [inProgressData, setInProgressData] = useState({ totalCount: 0, data: [] });
  const [validationData, setValidationData] = useState({ totalCount: 0, data: [] });
  const [completedData, setCompletedData] = useState({ totalCount: 0, data: [] });
  const [failureData, setFailureData] = useState({ totalCount: 0, data: [] });

  // Function to fetch data for each status
  const fetchStatusData = async (status) => {
    try {
      const response = await fetch(`${status}`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(`Error fetching ${status} data:`, error);
      return { totalCount: 0, data: [] };
    }
  };

  // Load data for each status
  const loadProcessData = async () => {
    // Fetch data for each status separately
      const queuedData = await fetchStatusData('https://dummyjson.com/c/5c58-134a-4051-b652');
    setQueuedData(queuedData);

      const inProgressData = await fetchStatusData('https://dummyjson.com/c/dd13-b84d-44f9-87e9');
    setInProgressData(inProgressData);

      const validationData = await fetchStatusData('https://dummyjson.com/c/184c-92aa-48ee-b46f');
    setValidationData(validationData);

      const completedData = await fetchStatusData('https://dummyjson.com/c/184c-92aa-48ee-b46f');
    setCompletedData(completedData);

      const failureData = await fetchStatusData('https://dummyjson.com/c/184c-92aa-48ee-b46f');
    setFailureData(failureData);
  };

  // useEffect hook to fetch the data when the component mounts
  useEffect(() => {
    loadProcessData();
  }, []);

  // Function to render process details for each status
  const renderProcessWidget = (status, data) => {
    const { totalCount, data: processes } = data;

    return (
      <div className="widget p-4 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold text-center">{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
        <p className="text-center mt-2">Total {status.charAt(0).toUpperCase() + status.slice(1)}: {totalCount}</p>
        <div className="mt-4">
          {processes.map((process, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md shadow-md bg-gray-100">
              <p><strong>Process Code:</strong> {process.processCode}</p>
              <p><strong>Run Number:</strong> {process.runNumber}</p>
              <p><strong>Submitted Time:</strong> {new Date(process.submittedTime).toLocaleString()}</p>
              <p><strong>Average Time:</strong> {process.averageTime} mins</p>
              {process.completedTime && <p><strong>Completed Time:</strong> {new Date(process.completedTime).toLocaleString()}</p>}
              {!process.completedTime && (
                <p><strong>Estimated Completion:</strong> {new Date(new Date(process.submittedTime).getTime() + process.averageTime * 60000).toLocaleString()}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {renderProcessWidget('queued', queuedData)}
      {renderProcessWidget('inprogress', inProgressData)}
      {renderProcessWidget('validation', validationData)}
      {renderProcessWidget('completed', completedData)}
      {renderProcessWidget('failure', failureData)}
    </div>
  );
};

export default ProcessStatusComponent;
