import { useState, useEffect } from 'react';

import './App.css';
import SearchBar from './components/searchbar';
import FilteredData from './components/filteredData'
import axios from 'axios';

function App() {

  const [userInput, setUserInput] = useState('');
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState(new Set);

  const handleUserInput = (event) => {
    const filter = event.target.value;
    setUserInput(filter);
    const re = new RegExp(filter.toLowerCase());
    let found = [];
    countries.forEach((country) => {
      if (re.test(country.name.common.toLowerCase())){
        found.push(country)
      }
    })
    setFilter(extractCountryName(found))
  }

  function extractCountryName(ls){
    return ls.map(country => country.name.common);
  }

  const hook = () => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(result => {
        setCountries(countries.concat(result.data));
      })
      .catch(error => console.log(error))
    return () => setCountries([])
  }

  
  useEffect(hook, []);

  return (
    <>
    <SearchBar onChange={handleUserInput}/>
    <FilteredData filteredData={filter} userInput={userInput} countries={countries}/>
    </>
  );
}

export default App;
