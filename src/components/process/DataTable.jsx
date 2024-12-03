import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const DataTable = () => {
    const { processCode, runId } = useParams();
    const location = useLocation();
    const matchStatus = new URLSearchParams(location.search).get("matchStatus") || "all";

    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [filters, setFilters] = useState({});
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [visibleColumns, setVisibleColumns] = useState(new Set());
    const [isColumnSelectorOpen, setIsColumnSelectorOpen] = useState(false);
    const rowsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://dummyjson.com/c/54f8-6a72-4814-bb9a?processCode=${processCode}&runId=${runId}&matchStatus=${matchStatus}`;
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.data || []);
                const columnKeys = Object.keys(result.data[0] || {});
                setColumns(columnKeys);
                setVisibleColumns(new Set(columnKeys)); // Show all columns initially
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [processCode, runId, matchStatus]);

    // Handle column visibility toggle
    const toggleColumnVisibility = (column) => {
        const newVisibleColumns = new Set(visibleColumns);
        if (newVisibleColumns.has(column)) {
            newVisibleColumns.delete(column);
        } else {
            newVisibleColumns.add(column);
        }
        setVisibleColumns(newVisibleColumns);
    };

    // Handle checkbox selection
    const handleRowSelection = (rowIndex) => {
        const updatedSelection = new Set(selectedRows);
        if (updatedSelection.has(rowIndex)) {
            updatedSelection.delete(rowIndex);
        } else {
            updatedSelection.add(rowIndex);
        }
        setSelectedRows(updatedSelection);
    };

    const currentPageData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-[990px] max-w-6xl">
            {/* Actions for selected rows */}
            {selectedRows.size > 0 && (
                <div className="flex items-center gap-4 mb-4 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
                    <button className="btn-primary" onClick={() => alert("Delete selected rows")}>
                        Delete
                    </button>
                    <button className="btn-secondary" onClick={() => alert("Add comments")}>
                        Add Comments
                    </button>
                    <button className="btn-secondary" onClick={() => alert("Assign cause")}>
                        Assign Cause
                    </button>
                    <button className="btn-secondary" onClick={() => alert("Add label")}>
                        Add Label
                    </button>
                </div>
            )}

            {/* Column Selector */}
            <div className="flex justify-between items-center mb-4">
                <div className="relative">
                    <button
                        className="btn-secondary"
                        onClick={() => setIsColumnSelectorOpen((prev) => !prev)}
                    >
                        Select Columns
                    </button>
                    {isColumnSelectorOpen && (
                        <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4 w-56 z-10">
                            {columns.map((column) => (
                                <label
                                    key={column}
                                    className="flex items-center mb-2 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={visibleColumns.has(column)}
                                        onChange={() => toggleColumnVisibility(column)}
                                        className="mr-2 accent-gray-600"
                                    />
                                    <span>{column}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="btn-primary"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, Math.ceil(data.length / rowsPerPage))
                            )
                        }
                        disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
                        className="btn-primary ml-2"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100 text-gray-700 text-left">
                        <tr>
                            <th className="p-3 border border-gray-300">
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        const allRows = new Set(
                                            e.target.checked
                                                ? currentPageData.map((_, idx) => idx)
                                                : []
                                        );
                                        setSelectedRows(allRows);
                                    }}
                                />
                            </th>
                            {columns.map(
                                (col) =>
                                    visibleColumns.has(col) && (
                                        <th key={col} className="p-3 border border-gray-300">
                                            {col}
                                        </th>
                                    )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className={`${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-gray-100`}
                            >
                                <td className="p-3 border border-gray-300">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.has(rowIndex)}
                                        onChange={() => handleRowSelection(rowIndex)}
                                    />
                                </td>
                                {columns.map(
                                    (col) =>
                                        visibleColumns.has(col) && (
                                            <td key={col} className="p-3 border border-gray-300">
                                                {row[col]}
                                            </td>
                                        )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
