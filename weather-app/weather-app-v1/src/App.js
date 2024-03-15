import "./App.css";
import Search from "./components/search/Search.js";
import CurrentWeather from "./currentWeather/CurrentWeather.js";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api.js";
import { useState } from "react";
import Forecast from "./components/search/forecast/forecast.js";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log("App - searchData");
    console.log(searchData);
    // label: "Abu Dhabi - AE" value: "24.451111111 - 54.396944444"
    // latitude: 24.451111111 longitude: 54.396944444

    const [lat, lon] = searchData.value.split(" ");
    // latitude: 24.451111111 longitude: 54.396944444

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log("currentWeather");
  console.log(currentWeather);
  console.log("forecast");
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
