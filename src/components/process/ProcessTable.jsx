import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProcesses, getProcessStatus } from "./apiService"; // API invoker
import { FaEye, FaTrashAlt } from "react-icons/fa"; // Icons for View and Delete
import styles from "./ProcessTable.module.css";

export default function ProcessTable() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null); // To store status data
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async (query = "") => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchProcesses(query);
      setData(response || []);
    } catch (err) {
      //setError("Failed to fetch data");
      setData([ {
        process_code: "PROC001",
        last_run_date: "2024-11-19",
        last_run_status: "Success",
        time_taken: "5 minutes",
        triggered_by: "System",
      },
      {
        process_code: "PROC002",
        last_run_date: "2024-11-18",
        last_run_status: "Failure",
        time_taken: "10 minutes",
        triggered_by: "User",
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    loadData(e.target.value); // Invoke API on search
  };

  const handleView = async (processCode) => {
    setStatus(null); // Reset status when viewing a new process
    try {
      const response = await getProcessStatus(processCode);
      setStatus(response);
      navigate(`/process/${processCode}`); // Navigate to process-specific page
    } catch (err) {
      setError("Failed to fetch process status");
    }
  };

  const handleDelete = async (processCode) => {
    // Implement delete functionality (e.g., call an API to delete the process)
    console.log("Delete process:", processCode);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
      <div className="w-full max-w-4xl p-6 md:p-8 bg-white rounded-lg shadow-lg max-h-[80vh] overflow-hidden relative">
        <div className={styles.toolbar}>
          <input
            type="text"
            placeholder="Search processes..."
            value={searchQuery}
            onChange={handleSearch}
            className={styles.searchBar}
          />
          <button
            className={styles.createButton}
            onClick={() => navigate("/createprocess")}
          >
            + Create Process
          </button>
        </div>
        <div className={styles.tableContainer}>
          {loading ? (
            <p className={styles.loading}>Loading...</p>
          ) : error ? (
            <p className={styles.error}>{error}</p>
          ) : data.length === 0 ? (
            <p className={styles.noData}>No results found</p>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Process Code</th>
                  <th>Last Run Date</th>
                  <th>Last Run Status</th>
                  <th>Time Taken</th>
                  <th>Triggered By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.process_code}</td>
                    <td>{row.last_run_date}</td>
                    <td
                      className={
                        row.last_run_status === "Success"
                          ? styles.success
                          : styles.failure
                      }
                    >
                      {row.last_run_status}
                    </td>
                    <td>{row.time_taken}</td>
                    <td>{row.triggered_by}</td>
                    <td>
                      <FaEye
                        onClick={() => handleView(row.process_code)}
                        className={styles.viewIcon}
                      />
                      <FaTrashAlt
                        onClick={() => handleDelete(row.process_code)}
                        className={styles.deleteIcon}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
