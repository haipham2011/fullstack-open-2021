import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import services from './services'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    services.getAll()
        .then(response => {
          setPersons(response.data)
        }).catch((error) => {
          console.log(error)
        })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const existedPerson = persons.find(person => person.name === newName);
    if (existedPerson) {
      if(newNumber){
        if(window.confirm(`${existedPerson.name} is already added to phonebook, replace the old number with a new one?`)){
          existedPerson.number = newNumber;
          services.updatePerson(existedPerson);
        }
      } else {
        alert(`${newName} is already added to phonebook`);
      }
    } else {
      services.createPerson({
        name: newName,
        number: newNumber
      }).then(response => {
        setPersons([...persons, response.data])
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = person => {
    if(window.confirm(`Delete ${person.name} ?`)){
      services.deletePerson(person.id).then(() => {
        const newPersons = persons.filter(p => p.id !== person.id);
        setPersons(newPersons);
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} setSearchText={setSearchText} />
      <h3>add a new</h3>
      <PersonForm newNumber={newNumber} newName={newName} setNewName={setNewName} setNewNumber={setNewNumber} handleSubmit={handleSubmit} />
      <h3>Numbers</h3>
      <Persons persons={persons} searchText={searchText} deletePerson={handleDelete}/>
    </div>
  )
}

export default App