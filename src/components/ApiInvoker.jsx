import React, { useState, useEffect } from "react";

export const fetchTableData = async (searchQuery = "") => {
  // Dummy API simulation
  const data = [
    { process_code: "P001", last_run_date: "2024-11-19", last_run_status: "Success", time_taken: "12s", triggered_by: "User1" },
    { process_code: "P002", last_run_date: "2024-11-18", last_run_status: "Failed", time_taken: "15s", triggered_by: "System" },
    { process_code: "P003", last_run_date: "2024-11-17", last_run_status: "Success", time_taken: "8s", triggered_by: "User2" },
    { process_code: "P004", last_run_date: "2024-11-16", last_run_status: "Running", time_taken: "56s", triggered_by: "Admin" },
  ];

  // Simulate search filter
  if (searchQuery) {
    return data.filter(item =>
      Object.values(item).some(value =>
        value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }

  return data;
};


export default function ApiInvoker({ searchQuery, setData }) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTableData(searchQuery);
      setData(data);
    };
    fetchData();
  }, [searchQuery, setData]);

  return null; // This component doesn't render anything visible.
}
