import React from 'react'

const Weather = ({ weather, countries }) => weather && countries.length === 1 && <div>
    <h2>Weather in {countries[0].capital}</h2>
    <p><b>temperature:</b> {weather.temperature} Celcius</p>
    {weather['weather_icons'] && weather['weather_icons'].length !== 0 && <img src={weather['weather_icons'][0]} alt="weather icon" />}
    <p><b>wind:</b> {weather['wind_speed']} mph direction {weather['wind_dir']}</p>
</div>

export default Weather;