import React from "react";
import styles from "./Table.module.css";

export default function Table({ data }) {
  const headers = [
    "Process Code",
    "Last Run Date",
    "Last Run Status",
    "Time Taken",
    "Triggered By",
  ];

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className={styles.noData}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
