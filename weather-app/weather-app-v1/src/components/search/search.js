import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    console.log("Handle OnChange");
    setSearch(searchData);
    onSearchChange(searchData);
    console.log("search - searchData");
    console.log(searchData);
  };

  const loadOptions = async (inputValue) => {
    const fetchData = await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    console.log(fetchData);

    const res = await fetchData.json();
    console.log(res);

    const data = {
      options: res.data.map((city) => {
        return {
          value: `${city.latitude} - ${city.longitude}`, // value : "24.451111111 - 54.396944444"
          label: `${city.name} - ${city.countryCode}`, // label : "Abu Dhabi - AE"
        };
      }),
    };

    console.log("fetching data");
    console.log(data); // {options: Array(5)}

    return data;
  };

  // const loadOptions = (inputValue) => {
  //   return fetch(
  //     `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
  //     geoApiOptions
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((response) => {
  //       console.log(response);

  //       return {
  //         options: response.data.map((city) => {
  //           return {
  //             value: `${city.latitude} ${city.longitude}`,
  //             label: `${city.name} ${city.countryCode}`,
  //           };
  //         }),
  //       };
  //     })
  //     .catch((err) => {
  //       console.error(err); // Log the error
  //       throw err; // Propagate the error further
  //     });
  // };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        // isMulti // allow multiple options
        // isSearchable
      />
    </>
  );
};

export default Search;
