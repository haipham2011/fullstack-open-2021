import React from 'react'

const Persons = ({ persons, searchText }) => persons.filter(person => person.name.toLowerCase().includes(searchText.toLowerCase()))
.map(person => <p key={person.name}>{person.name} {person.number}</p>)

export default Persons