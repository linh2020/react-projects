import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    console.log("Handle OnChange");
    setSearch(searchData);
    onSearchChange(searchData);
    console.log("search - searchData");
    console.log(searchData); // {value: '24.451111111 - 54.396944444', label: 'Abu Dhabi - AE'}
  };

  const loadOptions = async (inputValue) => {
    try {
      const fetchData = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      console.log(fetchData);

      const resData = await fetchData.json();
      console.log(resData);

      const desiredData = {
        options: resData.data.map((city) => {
          return {
            value: `${city.latitude} - ${city.longitude}`, // value : "24.451111111 - 54.396944444"
            label: `${city.name} - ${city.countryCode}`, // label : "Abu Dhabi - AE"
          };
        }),
      };

      console.log("fetching data");
      console.log(desiredData); // {options: Array(5)}

      return desiredData;
    } catch (error) {
      console.log(error);
      // return { options: [] };
    }
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
        debounceTimeout={1500} // prevent to response's errors
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
