import React, { useEffect, useState } from "react";

const TwelveWeatherApi = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=11919206ab1cd022a735df3eb09e5468`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      });
    }
  });

  return (
    <>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature:{weather.main.temp}</p>
          <p>Conditions:{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default TwelveWeatherApi;
