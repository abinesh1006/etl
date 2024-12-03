import React from "react";

export default function SearchBar({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        style={{
          width: "300px",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
