import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProcessStatus } from "./apiService"; // API invoker

export default function ProcessDetail() {
  const { processCode } = useParams();
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStatus();
  }, [processCode]);

  const loadStatus = async () => {
    try {
      const response = await getProcessStatus(processCode);
      setStatus(response);
    } catch (err) {
     //setError("Failed to fetch process status");
    }
  };

  const renderStatus = () => {
    if (!status) return null;

    if (status.config_status === "valid") {
      return status.runs.length === 0 ? (
        <p>No runs found for this process</p>
      ) : (
        <div>
          <h3>Last Runs</h3>
          <ul>
            {status.runs.map((run, index) => (
              <li key={index}>
                Run {index + 1}: {run.date} - Status: {run.status}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (status.config_status === "incomplete") {
      return (
        <div>
          <p>Config is invalid</p>
          <button onClick={() => alert("Configure pipeline reconciliation")}>
            Configure Pipeline Reconciliation
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Process: {processCode}</h1>
      {error && <p>{error}</p>}
      {renderStatus()}
    </div>
  );
}
