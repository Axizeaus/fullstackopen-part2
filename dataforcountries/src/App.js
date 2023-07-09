import { useState, useEffect } from 'react';

import './App.css';
import SearchBar from './components/searchbar';
import Results from './components/results';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState(null);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value)
  }

  const hook = () => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  useEffect(hook, [])

  return (
    <>
    <SearchBar onChange={handleUserInput}/>
    <Results />
    </>
  );
}

export default App;
