import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [myData, setMyData] = useState(null);

  const handleOnChange = (searchData) => {
    console.log("Handle OnChange");
    setSearch(searchData);
    onSearchChange(searchData);
    console.log(searchData.target.value);
  };

  const fetchData = () => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMyData(JSON.stringify(response));
      })
      .catch((err) => console.log(err));
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return { options: [] };
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange1 = (e) => {
    onSearchChange(e);
    console.log(e);
    console.log("Hello");
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        // loadOptions={loadOptions}
      />

      <AsyncPaginate
        placeholder="Testing "
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange1}
        // loadOptions={loadOptions}
      />
      <input
        type="text"
        // value={myData}
        onChange={(e) => {
          console.log(e);
          setMyData(e.target.value);
        }}
      />

      <br />
      <br />
      <div>
        <button onClick={fetchData}>Fetch Data</button>
      </div>
      <div>Search: {myData}</div>
      
    </>
  );
};

export default Search;
