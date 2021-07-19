import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
        .get(`http://localhost:3001/persons`)
        .then(response => {
          setPersons(response.data)
        }).catch((error) => {
          console.log(error)
        })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameExist = persons.find(person => person.name === newName);
    if (nameExist) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, {
        name: newName,
        number: newNumber
      }])
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} setSearchText={setSearchText} />
      <h3>add a new</h3>
      <PersonForm newNumber={newNumber} newName={newName} setNewName={setNewName} setNewNumber={setNewNumber} handleSubmit={handleSubmit} />
      <h3>Numbers</h3>
      <Persons persons={persons} searchText={searchText}/>
    </div>
  )
}

export default App