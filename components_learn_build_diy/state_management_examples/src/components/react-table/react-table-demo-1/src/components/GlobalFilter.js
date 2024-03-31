import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./table.css";

export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);

  const handleDebounce = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 1000);

  return (
    <span className="globalFilter">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          handleDebounce(e.target.value);
        }}
        placeholder="Search..."
      />
    </span>
  );
};
