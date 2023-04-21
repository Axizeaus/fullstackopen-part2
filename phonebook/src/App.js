import { useState } from "react";

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [display, setDisplay] = useState(persons)

  const addPerson = (event) => {
    event.preventDefault()
    if (personCheck(newName)){
      if(newName === '' || newNumber === ''){
        alert("fill the form properly");
      } else {
        setPersons(persons.concat({ name: newName, number: newNumber }));
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
    <div>
      <h2>Phonebook</h2>
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
      <ul>
        {
          display.map((person) => 
          <Person name={person.name} key={person.name} number={person.number}/>)
        }
      </ul>
    </div>
  );
};

const PersonForm = ({onSubmit, name, number, onNameChange, onNumberChange}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          name:
          <input value={name} onChange={onNameChange} />
        </div>
        <div>
          number:
          <input value={number} onChange={onNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

const Person = ({name, number}) => {
  return (
    <>
        <li>{name}</li>
        <li>{number}</li>
    </>
  );
}

export default App;