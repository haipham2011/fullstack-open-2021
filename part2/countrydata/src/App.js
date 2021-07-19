import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Countries from './Countries'
import Weather from './Weather'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (searchText) {
      axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then(response => {
          if (response.data) {
            setCountries(response.data.filter(country => country.name.includes(searchText)))
          }
        }).catch((error) => {
          console.log(error)
        })
    }
  }, [searchText])

  useEffect(() => {
    if (countries.length === 1) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${countries[0].capital}`)
        .then(response => {
          if(response.data.current){
            setWeather(response.data.current)
          }
        }).catch((error) => {
          console.log(error)
        })
    }
  }, [countries])

  return (
    <div>
      <Filter searchText={searchText} setSearchText={setSearchText} />
      <Countries countries={countries} setCountries={setCountries} />
      <Weather weather={weather} countries={countries} />
    </div>
  )
}

export default App