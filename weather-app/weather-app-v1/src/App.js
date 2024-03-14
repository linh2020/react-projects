import "./App.css";
import Search from "./components/search/Search.js";
import CurrentWeather from "./currentWeather/CurrentWeather.js";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log("App - searchData");
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
