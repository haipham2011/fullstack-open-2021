import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createPerson = person => {
  const request = axios.post(baseUrl, person)
  return request.then(response => response.data)
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = person => {
  const request = axios.put(`${baseUrl}/${person.id}`, person)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getAll, 
  createPerson, 
  deletePerson,
  updatePerson
}