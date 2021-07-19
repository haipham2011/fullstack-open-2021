import React from 'react'

const Filter = ({ searchText, setSearchText }) => <div>
  filter shows with <input onChange={event => setSearchText(event.target.value)} value={searchText}></input>
</div>

export default Filter;