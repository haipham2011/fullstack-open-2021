import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const createPerson = person => {
  return axios.post(baseUrl, person)
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = person => {
  return axios.put(`${baseUrl}/${person.id}`, person)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getAll: getAll, 
  createPerson: createPerson, 
  deletePerson: deletePerson,
  updatePerson: updatePerson
}