import React from "react";

const Persons = ({ persons, searchText, deletePerson }) =>
  persons
    .filter((person) =>
      person.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((person) => (
      <p key={person.name}>
        {person.name} {person.number}{" "}
        <button onClick={() => deletePerson(person)}>delete</button>
      </p>
    ));

export default Persons;
