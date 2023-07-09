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

  return (
    <>
    <SearchBar onChange={handleUserInput}/>
    <Results />
    </>
  );
}

export default App;
