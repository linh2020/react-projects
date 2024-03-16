import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const fData = await fetch("https://jsonplaceholder.typicode.com/users");
    const resData = await fData.json();

    const results = resData.filter((user) => {
      // 'value' to prevent fetching data with empty space
      return value && user.name.toLowerCase().includes(value);
    });

    setResults(results);
    // console.log(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
