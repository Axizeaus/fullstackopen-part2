import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Display from "./components/Display";
import personService from './services/personService';
import Message from "./components/Message";

const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [display, setDisplay] = useState([]);
  const [message, setMessage] = useState('is this even working');
  
  const hook = () => {
    personService.getAll().then((response) => {
      setPersons(response);
      setDisplay(response);
      setMessage(null);
    });
  }
  
  useEffect(hook, []);
  console.log('display => ', display)

  function messageShowAndDelete(message) {
    setMessage(message)
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }
  const addPerson = (event) => {
    event.preventDefault()
    if (personCheck(newName)){
      if(newName === '' || newNumber === ''){
        messageShowAndDelete("fill the form properly");
        
      } else {
        const personObject = {
          name : newName,
          number : newNumber
        }
        console.log("add person runs");
        personService.create(personObject)
          .then((response) => {
            setPersons(persons.concat(response))
            setDisplay(display.concat(response))
            messageShowAndDelete(`Added ${personObject.name} successfully`);
          });
      }
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
    setDisplay(found);
    messageShowAndDelete('filtered list')
  }

  const handleUpdateChange = (id) => {
    const target = persons.find(person => person.id === id);
    const updatedPerson = {
      name: window.prompt('Enter name or click ok', target.name),
      number: window.prompt('enter new number or click ok', target.number)
    }
    personService.update(target.id, updatedPerson)
      .then(() => {
        messageShowAndDelete("Updated successfully");
         hook()
        })
      .catch(error => {
        messageShowAndDelete('Updating failed');
      })
  }

  const handleDelete = (id) => {
    const target = persons.find(person => person.id === id);
    if (target && window.confirm('do you really wanna delete this contact?')){
      personService.del(id).then(() => messageShowAndDelete('Deletion successful.'));
    }
    setDisplay(display.filter(person => person.id !== id))
  }

  return (
    <>
      <h1>Phonebook</h1>
      <Message message={message}/>
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
      <Display display={display} onDelete={handleDelete} onUpdate={handleUpdateChange}/>
    </>
  );
};

export default App;
