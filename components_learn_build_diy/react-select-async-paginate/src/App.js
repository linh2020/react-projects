import { useEffect, useState } from "react";
import Select from "react-select";
import SelectAsyncPaginate from "./SelectAsyncPaginate";

const App = () => {
  const options = [
    { value: "The Crownlands" },
    { value: "Iron Islands" },
    { value: "The North" },
    { value: "The Reach" },
    { value: "The Riverlands" },
    { value: "The Vale" },
    { value: "The Westerlands" },
    { value: "The Stormlands" },
  ];

  const [region, setRegion] = useState(options[0]);
  const [currentCountry, setCurrentCountry] = useState(null);

  const onchangeSelect = (item) => {
    setCurrentCountry(null);
    setRegion(item);

    console.log("Hello");
    console.log("item: ");
    console.log(item);
    console.log("region: ");
    console.log(region);
    console.log("currentCountry: ");
    console.log(currentCountry);
    console.log("\n------------------------------------------");
  };

  useEffect(() => {
    console.log(region);
    console.log(currentCountry);
  }, [region, currentCountry]);

  // const handleText = (e) => {
  //   console.log("Hello");
  //   console.log(e);
  // };

  return (
    <div className="App">
      <Select
        value={region} // default value => useState(options[0]); => The Crownlands
        onChange={onchangeSelect} // enable selecting options
        options={options} // assign options[] array to select/options
        getOptionValue={(option) => option}
        // display on UI
        getOptionLabel={(option) => {
          // console.log(option);
          return option.value;
        }}
      />
      <SelectAsyncPaginate
        regionName={region.value} // The Crownlands
        value={currentCountry}
        onChange={(country) => setCurrentCountry(country)}
      />
      {/* <input type="text" onChange={handleText} /> */}
    </div>
  );
};

export default App;
