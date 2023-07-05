import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Display from "./components/Display";
import personService from './services/personService';
import axios from "axios";

const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [display, setDisplay] = useState([]);

  const initialHook = () => {
    console.log('initialHook runs');
    personService.getAll().then((response) => {
      console.log(response);
      setPersons(response);
      setDisplay(response);
    });
  }
  
  useEffect(initialHook, []);
  console.log(persons);
  
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
        console.log("add person runs");
        personService.create(personObject)
          .then((response) => {
            setPersons(persons.concat(response.data))
            setDisplay(display.concat(response.data))});
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

  const handleUpdateChange = (id) => {
    console.log('this is update');
    console.log('button id => ', id)
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
      <Display display={display} onUpdate={handleUpdateChange} />
    </>
  );
};

export default App;
