import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const SelectAsyncPaginate = (props) => {
  const [regionName, setRegionName] = useState(null);

  useEffect(() => {
    setRegionName(props.regionName);
    console.log("regionName: " + regionName);
  }, [props.regionName]);

  const loadOptions = async (searchQuery, loadedOptions, { page }) => {
    const response = await fetch(
      `https://www.anapioficeandfire.com/api/houses?region=${regionName}&page=${page}&pageSize=2`
    );

    console.log("response");
    console.log(response);

    const responseJSON = await response.json();

    console.log("responseJSON");
    console.log(responseJSON);
    console.log("\n++++");

    console.log("searchQuery");
    console.log(searchQuery);
    console.log("\nxxxxxxxx");

    console.log("page");
    console.log(page);
    console.log("\nzzzzzzzzzzzzzzzzzz");

    return {
      options: responseJSON,
      hasMore: responseJSON.length >= 1,
      additional: {
        page: searchQuery ? 2 : page + 1,
      },
    };
  };

  const onChange = (option) => {
    console.log("option");
    console.log(option);
    console.log("\n");

    if (typeof props.onChange === "function") {
      props.onChange(option);
    }
  };

  return (
    <AsyncPaginate
      value={props.value || ""}
      loadOptions={loadOptions}
      getOptionValue={(option) => option.name}
      getOptionLabel={(option) => option.name}
      onChange={onChange}
      isSearchable={false}
      placeholder="Select House"
      additional={{ page: 1 }}
    />
  );
};

export default SelectAsyncPaginate;
