import React, { useState } from "react";
import ApiInvoker from "./components/ApiInvoker";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

export default function Process() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Process Table</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <ApiInvoker searchQuery={searchQuery} setData={setData} />
      <Table data={data} />
    </div>
  );
}
