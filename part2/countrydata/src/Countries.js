import React from 'react'

const Countries = ({ countries, setCountries }) => {

    if(countries.length !== 0){
        if(countries.length >= 10){
          return  <div>Too many matches, specify another filter</div>
        } else {
          if (countries.length === 1) {
            return (
              <div>
                <h1>{countries[0].name}</h1>
                <p>Capital {countries[0].capital}</p>
                <p>population {countries[0].population}</p>
                <h2>Spoken languages</h2>
                <ul>
                  {countries[0].languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
                </ul>
                <img src={countries[0].flag} alt="flag"/>
              </div>
            )
          } else {
            return countries.map(country => 
            <div key={country.name}>
                {country.name} <button onClick={() => setCountries([country])}>show</button>
            </div>)
          }
        }
      } else {
        return null;
      }
}

export default Countries;
