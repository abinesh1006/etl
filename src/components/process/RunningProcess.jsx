import React, { useState, useEffect } from 'react';

const RunningProcess = () => {
  const [runningProcesses, setRunningProcesses] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch running processes from the API when the component mounts
  useEffect(() => {
    fetchRunningProcesses();
  }, []);

  // Function to fetch running processes (using dummy data for now)
  const fetchRunningProcesses = async () => {
    try {
      // Simulate an API call with a delay
      const response = new Promise((resolve) => {
        setTimeout(() => {
          // Dummy data to simulate API response
          resolve({
            ok: true,
            json: () => Promise.resolve([
              {
                process_code: "P001",
                submitted_at: "2024-11-21T10:00:00Z",
                current_status: "Running"
              },
              {
                process_code: "P002",
                submitted_at: "2024-11-21T10:30:00Z",
                current_status: "Completed"
              },
              {
                process_code: "P003",
                submitted_at: "2024-11-21T11:00:00Z",
                current_status: "Pending"
              }
            ])
          });
        }, 1000); // Delay for 1 second to simulate a real API request
      });

    
      
      const data = await response.json();
      setRunningProcesses(data); // Update state with the fetched data
    } catch (error) {
      setError(error.message); // Handle any errors
    } finally {
      setLoading(false); // Set loading to false once the request is completed
    }
  };

  return (
    <div>
      <h2>Current Running Processes</h2>
      
      {loading && <p>Loading running processes...</p>} {/* Loading state */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}
      
      {!loading && !error && runningProcesses.length === 0 && <p>No running processes found.</p>} {/* No data available */}
      
      {!loading && !error && runningProcesses.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Process Code</th>
              <th>Submitted At</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {runningProcesses.map((process) => (
              <tr key={process.process_code}>
                <td>{process.process_code}</td>
                <td>{new Date(process.submitted_at).toLocaleString()}</td>
                <td>{process.current_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RunningProcess;
