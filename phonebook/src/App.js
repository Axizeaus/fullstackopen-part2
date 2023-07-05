import { useState, useEffect } from "react";
import axios from 'axios';
import PersonForm from "./components/PersonForm";
import Display from "./components/Display";

const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [display, setDisplay] = useState(persons)

  const hook = () => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data);
        setDisplay(persons)
      })
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (personCheck(newName)){
      if(newName === '' || newNumber === ''){
        alert("fill the form properly");
      } else {
        const personObject = {
          name : newName,
          number : newNumber
        }
        setPersons(persons.concat({ name: newName, number: newNumber }));
        setDisplay(persons);
        axios
          .post('http://localhost:3001/persons', personObject)
          .then(response => console.log(response))
      }
      
    } else {
      alert(`${newName} is already on the list`)
    }
    
  }

  const personCheck = (newPerson) => {
    for (let person of persons){
      if (person.name.toLowerCase() === newPerson.toLowerCase()){
        return false
      }
    }
    return true
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const filterData = event.target.value
    setFilter(filterData)
    const re = new RegExp(filterData.toLowerCase());
    let found = []
    persons.forEach((person)=>{
      if (re.test(person.name.toLowerCase())) {
        found.push(person)
      };
    })
    setDisplay(found)
  }

  return (
    <>
      <h1>Phonebook</h1>
      <PersonForm 
        onSubmit={addPerson}
        name = {newName}
        number = {newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />
      <h2>Filter</h2>
      <input value={filter} onChange={handleFilterChange}/>
      <h2>Numbers</h2>
      <Display display={display} />
    </>
  );
};

export default App;
