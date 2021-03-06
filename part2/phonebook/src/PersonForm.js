import React from 'react'

const PersonForm = ({ newName, newNumber, setNewName, setNewNumber, handleSubmit, setMessage, setNotification }) =>
  <form>
    <div>
      name: <input onChange={event => setNewName(event.target.value)} value={newName} onFocus={() => {
        setNotification('')
        setMessage('')
      }}/>
    </div>
    <div>
      number: <input onChange={event => setNewNumber(event.target.value)} value={newNumber} />
    </div>
    <div>
      <button type="submit" onClick={handleSubmit}>add</button>
    </div>
  </form>

export default PersonForm;