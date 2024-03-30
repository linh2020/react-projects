import React from "react";
import "./table.css";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <span className="columnFilter">
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
